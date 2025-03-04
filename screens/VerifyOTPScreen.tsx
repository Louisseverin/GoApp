import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import tw from "twrnc";
import { COLORS } from "../theme";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { RootStackParamList } from "../types/navigation";

type VerifyOTPScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "VerifyOTP">;
  route: RouteProp<RootStackParamList, "VerifyOTP">;
};

export const VerifyOTPScreen: React.FC<VerifyOTPScreenProps> = ({
  navigation,
  route,
}) => {
  const [value, setValue] = useState<string>("");
  const [countdown, setCountdown] = useState<number>(30);
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleResendOTP = () => {
    setCountdown(30);
    // Call API or logic to resend OTP
  };

  const handleVerify = () => {
    if (value.length === 4) {
      console.log("OTP Verified:", value);
      navigation.navigate("AppLayout");
    }
  };

  return (
    <View style={tw`flex-1 p-6 bg-[${COLORS.background}]`}>
      <StatusBar style="light" />
      <View style={tw`flex-1 justify-center`}>
        <Text
          style={tw`text-center text-2xl font-bold text-[${COLORS.primary}] my-4`}
        >
          Enter OTP
        </Text>
        <Text
          style={tw`text-center  text-base text-[${COLORS.textSecondary}] mb-6`}
        >
          A 4-digit OTP has been sent to{" "}
          <Text style={tw`font-bold text-[${COLORS.textSecondary}]`}>
            your Phone number
          </Text>
        </Text>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={4}
          rootStyle={tw`mt-5 gap-5 justify-center `}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[
                tw`w-12 h-11 text-xl flex items-center  justify-center  text-white text-center border-2 rounded-lg border-[${COLORS.white}]`,
                isFocused && tw`border-[${COLORS.primary}]`,
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        <TouchableOpacity
          style={tw`mt-8 bg-[${COLORS.primary}] py-3 rounded-xl items-center`}
          onPress={handleVerify}
          disabled={value.length < 4}
        >
          <Text style={tw`text-white text-lg font-bold`}>Verify OTP</Text>
        </TouchableOpacity>

        {countdown > 0 ? (
          <Text style={tw`mt-4 text-center text-[${COLORS.textSecondary}]`}>
            Resend OTP in {countdown}s
          </Text>
        ) : (
          <TouchableOpacity onPress={handleResendOTP}>
            <Text style={tw`mt-4 text-center text-[${COLORS.text}] font-bold`}>
              Resend OTP
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
