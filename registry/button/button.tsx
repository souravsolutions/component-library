import { Pressable, Text } from "react-native"

export function Button({ title }) {
  return (
    <Pressable className="bg-black px-4 py-3 rounded-xl">
      <Text className="text-white">{title}</Text>
    </Pressable>
  )
}
