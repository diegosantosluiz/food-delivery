import { Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Restaurant } from "..";

export function RestaurantVerticalItem({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <Pressable className="flex flex-row items-center gap-2">
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      ></Image>

      <View>
        <Text
          className="text-base text-black leading-4 font-bold"
          numberOfLines={2}
        >
          {restaurant.name}
        </Text>

        <View className="flex-row items-center gap-1">
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text className="text-sm">4.5</Text>
        </View>
      </View>
    </Pressable>
  );
}
