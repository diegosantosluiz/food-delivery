import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export function Search() {
  return (
    <View className="w-full h-14 flex flex-row border border-slate-500 rounded-full items-center gap-2 px-4">
      <Feather name="search" size={24} color="#64748b" />
      <TextInput
        placeholder="Procure sua comida..."
        placeholderTextColor={"#64748b"}
        className="w-full h-full flex-1 bg-transparent"
      />
    </View>
  );
}
