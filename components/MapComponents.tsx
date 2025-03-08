import React, { useState } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";
import { COLORS } from "../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { driverLocationsData } from "../constant/constant";

function MapComponents() {
  const [driverLocations] = useState(driverLocationsData);

  return (
    <View style={tw`px-4 mt-6 mb-4`}>
      <Text style={tw`text-lg text-[${COLORS.textSecondary}] font-medium mb-3`}>
        Nearby Drivers
      </Text>
      <View style={tw`bg-[${COLORS.card}] rounded-xl overflow-hidden h-64`}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={tw`h-full w-full`}
          initialRegion={{
            latitude: -1.9501,
            longitude: 30.0588,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          {driverLocations.map((driver) => (
            <Marker
              key={driver.id}
              coordinate={driver.coordinate}
              title={driver.name}
              description={driver.vehicle}
              aria-live="polite"
            >
              <View style={tw`bg-[${COLORS.primary}] p-2 rounded-full`}>
                <MaterialCommunityIcons
                  name="car"
                  size={20}
                  color={COLORS.highlight}
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
  );
}

export default MapComponents;
