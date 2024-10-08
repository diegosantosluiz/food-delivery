import { Pressable, Text, View } from "react-native";

interface PropsSection {
  action: () => void;
  label: string;
  name: string;
  size: "text-lg" | "text-xl" | "text-2xl";
}

export function Section({ action, label, name, size }: PropsSection) {
  return (
    <View className="w-full flex flex-row items-center justify-between px-4">
      <Text className={`${size} font-semibold my-4 self-start`}>{name}</Text>

      <Pressable onPress={action}>
        <Text>{label}</Text>
      </Pressable>
    </View>
  );
}
