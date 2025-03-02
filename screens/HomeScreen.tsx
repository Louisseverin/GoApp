import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Dimensions,
} from "react-native";
import tw from "twrnc";
import { COLORS } from "../theme";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const screenWidth = Dimensions.get("window").width;

export const HomeScreen = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cards = [
    {
      title: "Drive with Us",
      subtitle: "Join as driver",
      highlight: "$30/hr",
      extra: "Average earnings",
      image: "https://via.placeholder.com/80/6D9773/FFFFFF?text=🚗",
    },
    {
      title: "Need a Ride?",
      subtitle: "First ride",
      highlight: "50% OFF",
      extra: "Use code: FIRST",
      image: "https://via.placeholder.com/80/6D9773/FFFFFF?text=🎁",
    },
    {
      title: "Daily Commute",
      subtitle: "Save up to",
      highlight: "25%",
      extra: "on weekly passes",
      image: "https://via.placeholder.com/80/6D9773/FFFFFF?text=📅",
    },
    {
      title: "Share & Save",
      subtitle: "Pool rides for",
      highlight: "40% OFF",
      extra: "during peak hours",
      image: "https://via.placeholder.com/80/6D9773/FFFFFF?text=👥",
    },
    {
      title: "Premium Cars",
      subtitle: "Luxury rides at",
      highlight: "Premium",
      extra: "comfort & style",
      image: "https://via.placeholder.com/80/6D9773/FFFFFF?text=✨",
    },
  ];

  const [driverLocations] = useState([
    {
      id: 1,
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      name: "John D.",
      vehicle: "Toyota Camry",
    },
    {
      id: 2,
      coordinate: {
        latitude: 37.78925,
        longitude: -122.4344,
      },
      name: "Sarah M.",
      vehicle: "Honda Civic",
    },
    {
      id: 3,
      coordinate: {
        latitude: 37.78625,
        longitude: -122.4304,
      },
      name: "Mike R.",
      vehicle: "Tesla Model 3",
    },
  ]);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / screenWidth); // Use screen width instead of fixed 320
    setActiveCardIndex(index);
  };

  const darkMapStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d",
        },
      ],
    },
  ];

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
        <View style={tw`mt-4`}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={handleScroll}
            scrollEventThrottle={16}
            decelerationRate="fast"
          >
            {cards.map((card, index) => (
              <View
                key={index}
                style={[
                  tw`bg-[${COLORS.card}] rounded-xl overflow-hidden`,
                  {
                    width: screenWidth - 32,
                    marginHorizontal: 16,
                  },
                ]}
              >
                <View style={tw`p-6 flex-row justify-between items-center`}>
                  <View style={tw`w-3/5`}>
                    <Text
                      style={tw`text-[${COLORS.text}] text-2xl font-bold mb-2`}
                    >
                      {card.title}
                    </Text>
                    <Text
                      style={tw`text-[${COLORS.textSecondary}] text-lg mb-1`}
                    >
                      {card.subtitle}{" "}
                      <Text
                        style={tw`text-[${COLORS.highlight}] font-bold text-xl`}
                      >
                        {card.highlight}
                      </Text>
                    </Text>
                    <Text style={tw`text-[${COLORS.textSecondary}] text-base`}>
                      {card.extra}
                    </Text>
                  </View>
                  <View
                    style={tw`w-2/5 items-center justify-center bg-[${COLORS.background}] rounded-xl p-3`}
                  >
                    <Image
                      source={{ uri: card.image }}
                      style={tw`w-20 h-20 rounded-lg`}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          {/* Pagination Dots */}
          <View style={tw`flex-row justify-center items-center mt-4`}>
            {cards.map((_, index) => (
              <View
                key={index}
                style={[
                  tw`rounded-full mx-1 transition-all duration-200`,
                  index === activeCardIndex
                    ? tw`w-6 h-2 bg-[${COLORS.primary}]` // Active dot is wider
                    : tw`w-2 h-2 bg-[${COLORS.card}]`, // Inactive dot is circular
                ]}
              />
            ))}
          </View>
        </View>

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
        <View style={tw`px-4 mt-6 mb-4`}>
          <Text
            style={tw`text-lg text-[${COLORS.textSecondary}] font-medium mb-3`}
          >
            Nearby Drivers
          </Text>
          <View style={tw`bg-[${COLORS.card}] rounded-xl overflow-hidden h-64`}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={tw`h-full w-full`}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              customMapStyle={darkMapStyle}
            >
              {driverLocations.map((driver) => (
                <Marker
                  key={driver.id}
                  coordinate={driver.coordinate}
                  title={driver.name}
                  description={driver.vehicle}
                >
                  <View style={tw`bg-[${COLORS.primary}] p-2 rounded-full`}>
                    <MaterialCommunityIcons
                      name="car"
                      size={20}
                      color={COLORS.background}
                    />
                  </View>
                </Marker>
              ))}
            </MapView>

            {/* Driver count overlay */}
            <View
              style={tw`absolute top-2 right-2 bg-[${COLORS.background}] px-3 py-1 rounded-full flex-row items-center`}
            >
              <MaterialCommunityIcons
                name="car-multiple"
                size={16}
                color={COLORS.primary}
              />
              <Text style={tw`text-[${COLORS.text}] ml-2`}>
                {driverLocations.length} nearby
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
