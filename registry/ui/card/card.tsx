import { Text, View } from "react-native";

export function Card({ children }) {
  return (
    <View className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
      {children}
    </View>
  );
}

export function CardTitle({ children }) {
  return (
    <Text className="text-lg font-semibold text-zinc-900">{children}</Text>
  );
}

export function CardDescription({ children }) {
  return <Text className="mt-1 text-sm text-zinc-600">{children}</Text>;
}
