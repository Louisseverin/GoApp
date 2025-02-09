import React from "react";
import { View, TextInput, Text, TextInputProps } from "react-native";
import tw from "twrnc";
import { COLORS } from "../theme";

interface CustomInputProps extends TextInputProps {
  label?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = "default",
  label,
  ...props
}) => {
  return (
    <View style={tw`w-full mb-4`}>
      {label && (
        <Text style={[tw`mb-1`, { color: COLORS.textSecondary }]}>{label}</Text>
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[
          tw`w-full px-4 py-3 rounded-lg`,
          {
            backgroundColor: COLORS.card,
            color: COLORS.text,
            borderWidth: 1,
            borderColor: COLORS.card,
          },
        ]}
        {...props}
      />
    </View>
  );
};
