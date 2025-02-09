import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import tw from "twrnc";
import { COLORS } from "../theme";

interface SocialButtonProps {
  icon: any;
  title: string;
  onPress: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        tw`flex-row items-center justify-center py-3 gap-2 px-4 w-full mb-3 rounded-lg`,
        { backgroundColor: COLORS.card },
      ]}
    >
      {/* <Image source={icon} style={tw`w-5 h-5 mr-3`} /> */}
      {icon}
      <Text style={{ color: COLORS.text }}>{title}</Text>
    </TouchableOpacity>
  );
};
