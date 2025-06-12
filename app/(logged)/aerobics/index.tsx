import { Ionicons } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const exerciciosData = [
  { id: '1', name: 'Corrida', icon: 'walk-outline' as const },
  { id: '2', name: 'Caminhada', icon: 'walk' as const },
  { id: '3', name: 'Pedal', icon: 'bicycle-outline' as const },
];

export default function ExerciciosScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView className="flex-1 bg-white">
        <View className="p-4">
          {exerciciosData.map((item) => (
            <Link key={item.id} href={`/aerobics/${item.name}`} asChild>
              <TouchableOpacity className="mb-4 flex-row items-center rounded-xl border border-gray-200 bg-white p-4 shadow-md">
                <Ionicons name={item.icon} size={28} color="#4A5568" className="mr-4" />
                <Text className="text-lg font-semibold text-gray-700">{item.name}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
