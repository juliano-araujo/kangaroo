import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type QuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
};

export const QuantitySelector = ({ value, onChange }: QuantitySelectorProps) => {
  const decrease = () => onChange(Math.max(value - 1, 0));
  const increase = () => onChange(value + 1);

  return (
    <View className="flex-row items-center justify-center">
      <TouchableOpacity
        onPress={decrease}
        className="mr-6 h-16 w-16 items-center justify-center rounded-full bg-gray-200">
        <Ionicons name="remove" size={32} color="black" />
      </TouchableOpacity>

      <View className="mx-6 h-24 min-w-[100px] items-center justify-center rounded-xl border border-gray-300 bg-white px-10 py-6">
        <Text className="text-4xl font-bold text-black">{value} d</Text>
      </View>

      <TouchableOpacity
        onPress={increase}
        className="ml-6 h-16 w-16 items-center justify-center rounded-full bg-gray-200">
        <Ionicons name="add" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};
