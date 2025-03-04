import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../theme"; // Import your theme colors

type BottomNavigationBarProps = {
  selectedTab: string;
  onTabPress: (tab: string) => void;
};

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = ({
  selectedTab,
  onTabPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        backgroundColor: COLORS.secondary, // Using secondary color for the background
        borderTopWidth: 1,
        borderColor: COLORS.border, // Using border color from the theme
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {["Home", "Search", "Analytics", "History", "Profile"].map((tab) => (
        <TouchableOpacity
          key={tab}
          style={{
            alignItems: "center",
            flex: 1,
            paddingVertical: 10,
          }}
          onPress={() => onTabPress(tab)}
        >
          <Icon
            name={
              tab === "Home"
                ? "home-outline"
                : tab === "Search"
                ? "search-outline"
                : tab === "History"
                ? "time-outline"
                : tab === "Profile"
                ? "person-outline"
                : "pie-chart-outline" // Analytics icon
            }
            size={24}
            color={
              selectedTab === tab ? COLORS.highlight : COLORS.textSecondary
            } // Highlight color for selected tab
          />
          <Text
            style={{
              fontSize: 12,
              color:
                selectedTab === tab ? COLORS.highlight : COLORS.textSecondary, // Adjusting text color based on selection
            }}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavigationBar;
