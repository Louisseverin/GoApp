// import React, { useState } from "react";
// import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import { useNavigation } from "@react-navigation/native";
// import { RootStackParamList } from "../types/navigation"; // Import the type for navigation
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import HomeScreen from "./HomeScreen";
// import SearchScreen from "./SearchScreen";
// import HistoryScreen from "./HistoryScreen";
// import ProfileScreen from "./ProfileScreen";

// // Type for navigation prop
// type AppLayoutNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "Home"
// >;

// const AppLayout: React.FC = () => {
//   const [selectedTab, setSelectedTab] = useState("Home");
//   const navigation = useNavigation<AppLayoutNavigationProp>();

//   // Handle tab navigation
//   const handleTabPress = (tab: string) => {
//     setSelectedTab(tab);
//     switch (tab) {
//       case "Home":
//         navigation.navigate("Home");
//         break;
//       case "Search":
//         navigation.navigate("Search");
//         break;
//       case "History":
//         navigation.navigate("History");
//         break;
//       case "Profile":
//         navigation.navigate("Profile");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* Main Content */}
//       <View style={{ flex: 1 }}>
//         {selectedTab === "Home" && (
//           <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//           >
//             <HomeScreen />
//           </View>
//         )}
//         {selectedTab === "Search" && (
//           <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//           >
//             <SearchScreen />
//           </View>
//         )}
//         {selectedTab === "History" && (
//           <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//           >
//             <HistoryScreen />
//           </View>
//         )}
//         {selectedTab === "Profile" && (
//           <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//           >
//             <ProfileScreen />
//           </View>
//         )}
//       </View>

//       {/* Bottom Navigation Bar */}
//       <View
//         style={{
//           flexDirection: "row",
//           height: 60,
//           backgroundColor: "#fff",
//           borderTopWidth: 1,
//           borderColor: "#ddd",
//           justifyContent: "space-around",
//           alignItems: "center",
//         }}
//       >
//         {["Home", "Search", "History", "Profile"].map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={{
//               alignItems: "center",
//               flex: 1,
//               paddingVertical: 10,
//             }}
//             onPress={() => handleTabPress(tab)}
//           >
//             <Icon
//               name={`${tab.toLowerCase()}-outline`}
//               size={24}
//               color={selectedTab === tab ? "#0066CC" : "#8e8e8e"}
//             />
//             <Text
//               style={{
//                 fontSize: 12,
//                 color: selectedTab === tab ? "#0066CC" : "#8e8e8e",
//               }}
//             >
//               {tab}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default AppLayout;

// AppLayout.tsx
import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomNavigationBar from "./BottomNavigationBar";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import HistoryScreen from "./HistoryScreen";
import ProfileScreen from "./ProfileScreen";
import AnalyticsScreen from "./AnalyticsScreen";

// AppLayout component to wrap all screens with the bottom navigation
const AppLayout: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Main Content */}
      <View style={{ flex: 1 }}>
        {selectedTab === "Home" && <HomeScreen />}
        {selectedTab === "Search" && <SearchScreen />}
        {selectedTab === "Analytics" && <AnalyticsScreen />}
        {selectedTab === "History" && <HistoryScreen />}
        {selectedTab === "Profile" && <ProfileScreen />}
        <BottomNavigationBar
          selectedTab={selectedTab}
          onTabPress={handleTabPress}
        />
      </View>

      {/* Bottom Navigation Bar */}
    </SafeAreaView>
  );
};

export default AppLayout;
