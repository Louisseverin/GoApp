import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import tw from "twrnc";
import { COLORS } from "../theme";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import SliderSection from "../components/SliderSection";
import MapComponents from "../components/MapComponents";

export const HomeScreen = () => {
  return (
    <View style={tw`flex-1 bg-[${COLORS.background}]`}>
      {/* Header Section */}
      <View style={tw`bg-[${COLORS.background}] z-10 pt-10`}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={COLORS.background}
        />

        <View style={tw`shadow-lg border-b border-[${COLORS.card}]`}>
          <View style={tw`flex-row items-center justify-between p-4`}>
            <TouchableOpacity>
              <Ionicons
                name="person-circle-outline"
                size={28}
                color={COLORS.primary}
              />
            </TouchableOpacity>

            {/* Where to? Search Bar */}
            <View style={tw`flex-1 mx-2`}>
              <View
                style={tw`flex-row items-center bg-[${COLORS.card}] rounded-full px-3 py-2`}
              >
                <Ionicons
                  name="location"
                  size={20}
                  color={COLORS.textSecondary}
                />
                <TextInput
                  placeholder="Where to?"
                  placeholderTextColor={COLORS.textSecondary}
                  style={tw`text-[${COLORS.text}] ml-2 flex-1`}
                />
              </View>
            </View>

            <TouchableOpacity style={tw`relative`}>
              <Ionicons name="notifications" size={24} color={COLORS.text} />
              <View
                style={tw`absolute -top-1 -right-1 w-4 h-4 bg-[${COLORS.highlight}] rounded-full flex items-center justify-center`}
              >
                <Text style={tw`text-xs font-bold text-[${COLORS.secondary}]`}>
                  2
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Ride Status Section */}
          <View style={tw`px-4 py-2`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-[${COLORS.text}] font-medium`}>
                Current Status
              </Text>
              <Ionicons name="chevron-down" size={16} color={COLORS.text} />
            </View>

            <View style={tw`flex-row items-center justify-between mt-1`}>
              <View>
                <Text style={tw`text-[${COLORS.text}] text-2xl font-bold`}>
                  Available
                </Text>
                <Text style={tw`text-[${COLORS.textSecondary}]`}>
                  Ready to ride
                </Text>
              </View>

              <TouchableOpacity
                style={tw`bg-[${COLORS.primary}] px-5 py-2 rounded-lg`}
              >
                <Text style={tw`text-[${COLORS.secondary}] font-bold`}>
                  Find Ride
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        {/* Promotional Cards with Dots */}
        <SliderSection />

        {/* Quick Actions */}
        <View style={tw`px-4 mt-6`}>
          <Text
            style={tw`text-lg text-[${COLORS.textSecondary}] font-medium mb-3`}
          >
            Quick Actions
          </Text>
          <View style={tw`bg-[${COLORS.card}] rounded-xl p-4`}>
            <View style={tw`flex-row justify-center gap-5 mb-6`}>
              <TouchableOpacity style={tw`items-center`}>
                <View
                  style={tw`w-12 h-12 rounded-full bg-[${COLORS.background}] items-center justify-center mb-1`}
                >
                  <MaterialCommunityIcons
                    name="car"
                    size={24}
                    color={COLORS.primary}
                  />
                </View>
                <Text style={tw`text-[${COLORS.textSecondary}]`}>Book Now</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tw`items-center`}>
                <View
                  style={tw`w-12 h-12 rounded-full bg-[${COLORS.background}] items-center justify-center mb-1`}
                >
                  <MaterialCommunityIcons
                    name="calendar-clock"
                    size={24}
                    color={COLORS.text}
                  />
                </View>
                <Text style={tw`text-[${COLORS.textSecondary}]`}>Schedule</Text>
              </TouchableOpacity>

              <TouchableOpacity style={tw`items-center`}>
                <View
                  style={tw`w-12 h-12 rounded-full bg-[${COLORS.background}] items-center justify-center mb-1`}
                >
                  <Entypo name="location" size={24} color={COLORS.text} />
                </View>
                <Text style={tw`text-[${COLORS.textSecondary}]`}>
                  Saved Places
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={tw`items-center`}>
                <View
                  style={tw`w-12 h-12 rounded-full bg-[${COLORS.background}] items-center justify-center mb-1`}
                >
                  <FontAwesome5 name="history" size={20} color={COLORS.text} />
                </View>
                <Text style={tw`text-[${COLORS.textSecondary}]`}>History</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Live Map Section */}
        <MapComponents />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
