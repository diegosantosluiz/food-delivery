import { ScrollView, View } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";

import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight + 10;

export default function Index() {
  return (
    <ScrollView
      className="flex bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section
        action={() => console.log("CLICOU SECTION COMIDAR EM ALTA")}
        label="Ver mais"
        name="Comidas em alta"
        size="text-lg"
      ></Section>

      <TrendingFoods />
    </ScrollView>
  );
}
