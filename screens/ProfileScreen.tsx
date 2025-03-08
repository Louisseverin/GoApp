// ProfileScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import tw from "twrnc";
import { COLORS } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={tw`flex-1 bg-[${COLORS.background}]`}>
      {/* Header */}
      <View style={tw`bg-[${COLORS.background}] pt-safe`}>
        <View
          style={tw`flex-row items-center p-4 border-b border-[${COLORS.card}]`}
        >
          <Text style={tw`text-[${COLORS.text}] text-xl font-bold ml-3`}>
            Profile
          </Text>
        </View>
      </View>

      <ScrollView style={tw`flex-1`}>
        <View style={tw`p-4 bg-[${COLORS.card}] mt-4 mx-4 rounded-xl`}>
          <View style={tw`items-center`}>
            <View
              style={tw`w-24 h-24 rounded-full bg-[${COLORS.primary}] mb-4`}
            >
              <Image
                source={{
                  uri: "https://avatars.githubusercontent.com/u/131756888?v=4",
                }}
                style={tw`w-24 h-24 rounded-full`}
              />
            </View>
            <Text style={tw`text-[${COLORS.text}] text-xl font-bold`}>
              John Doe
            </Text>
            <Text style={tw`text-[${COLORS.textSecondary}] mt-1`}>
              <Text>Status: </Text>
              <Text>online</Text>
            </Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={tw`mt-4 mx-4`}>
          {[
            { icon: "person-outline", label: "Edit Profile" },
            { icon: "car-outline", label: "My Rides" },
            { icon: "card-outline", label: "Payment Methods" },
            { icon: "settings-outline", label: "Settings" },
            { icon: "help-circle-outline", label: "Help & Support" },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`flex-row items-center p-4 bg-[${COLORS.card}] mb-2 rounded-xl`}
            >
              <Ionicons
                name={item.icon as any}
                size={24}
                color={COLORS.primary}
              />
              <Text style={tw`text-[${COLORS.text}] ml-3 flex-1`}>
                {item.label}
              </Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={COLORS.textSecondary}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={tw`mx-4 mt-6 mb-8 p-4 bg-[${COLORS.error}] rounded-xl`}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={tw`text-[${COLORS.text}] text-center font-bold`}>
            Logout
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
