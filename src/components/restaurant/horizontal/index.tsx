import { Image, Pressable, Text } from "react-native";
import { Restaurant } from "..";

export function RestaurantHorizontalItem({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  return (
    <Pressable className="flex flex-col items-center justify-center">
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      ></Image>
      <Text
        className="text-sm mt-2 w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>
    </Pressable>
  );
}
