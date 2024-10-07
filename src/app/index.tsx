import { ScrollView, View } from "react-native";
import { Header } from "../components/header";

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
      </View>
    </ScrollView>
  );
}
