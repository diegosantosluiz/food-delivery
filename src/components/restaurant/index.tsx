import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { RestaurantHorizontalItem } from "./horizontal";
import { RestaurantVerticalItem } from "./vertical";

export interface Restaurant {
  id: string;
  name: string;
  image: string;
}

type RestaurantProps = {
  layout: "horizontal" | "vertical";
};

export function Restaurants({ layout }: RestaurantProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch("http://192.168.0.104:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    }

    getRestaurants();
  }, []);

  return layout === "horizontal" ? (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <RestaurantHorizontalItem restaurant={item} />}
      horizontal={true}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  ) : (
    <View className="w-full px-4 mb-11 gap-4">
      {restaurants.map((restaurant) => (
        <RestaurantVerticalItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </View>
  );
}
