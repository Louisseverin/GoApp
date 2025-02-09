import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import tw from "twrnc";
import { COLORS } from "../theme";
import { CustomInput } from "../components/CustomInput";
import { SocialButton } from "../components/SocialButton";
import { RootStackParamList } from "../types/navigation";
import { FontAwesome } from "@expo/vector-icons";

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={[tw`flex-1 p-6`, { backgroundColor: COLORS.background }]}>
      <StatusBar style="light" />

      <View style={tw`flex-1 justify-center`}>
        <Text style={[tw`text-2xl font-bold mb-8`, { color: COLORS.text }]}>
          Login
        </Text>

        <CustomInput
          placeholder="Enter your mobile number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <CustomInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPassword")}
          style={tw`mb-6`}
        >
          <Text style={{ color: COLORS.primary }}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            tw`py-4 rounded-lg mb-6`,
            { backgroundColor: COLORS.primary },
          ]}
          onPress={() => {
            /* Handle login */
            navigation.navigate("VerifyOTP");
          }}
        >
          <Text
            style={[tw`text-center font-bold`, { color: COLORS.background }]}
          >
            Login
          </Text>
        </TouchableOpacity>

        {/* Social login buttons and other UI elements remain the same */}
        {/* Google Sign-In Button */}
        <SocialButton
          title="Sign in with Google"
          onPress={() => console.log("---------------data")}
          icon={<FontAwesome name="google" size={24} color="gray" />}
        />
      </View>
    </View>
  );
};
