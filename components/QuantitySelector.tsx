import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export const QuantitySelector = () => {
  const [value, setValue] = useState(50);

  const decrease = () => setValue((prev) => Math.max(prev - 1, 0));
  const increase = () => setValue((prev) => prev + 1);

  return (
    <View className="flex-row items-center justify-center space-x-8">
      <TouchableOpacity
        onPress={decrease}
        className="h-16 w-16 items-center justify-center rounded-full bg-gray-200">
        <Ionicons name="remove" size={32} color="black" />
      </TouchableOpacity>

      <View className="rounded-xl border border-gray-300 bg-white px-8 py-4">
        <Text className="text-3xl font-bold text-black">{value} d</Text>
      </View>

      <TouchableOpacity
        onPress={increase}
        className="h-16 w-16 items-center justify-center rounded-full bg-gray-200">
        <Ionicons name="add" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};
