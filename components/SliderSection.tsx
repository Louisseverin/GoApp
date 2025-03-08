import React, { useState } from "react";
import { View, ScrollView, Text, Dimensions, Image } from "react-native";
import tw from "twrnc";
import { COLORS } from "../theme";
import { cards } from "../constant/constant";
const screenWidth = Dimensions.get("window").width;
function SliderSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / screenWidth); // Use screen width instead of fixed 320
    setActiveCardIndex(index);
  };
  return (
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
                <Text style={tw`text-[${COLORS.text}] text-2xl font-bold mb-2`}>
                  {card.title}
                </Text>
                <Text style={tw`text-[${COLORS.textSecondary}] text-lg mb-1`}>
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
  );
}

export default SliderSection;
