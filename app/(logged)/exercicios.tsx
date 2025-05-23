import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Link, Stack, useRouter } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// Lista de exercícios
const exerciciosData = [
  { id: '1', name: 'Exercício 1', icon: 'dumbbell' as const },
  { id: '2', name: 'Exercício 2', icon: 'dumbbell' as const },
  { id: '3', name: 'Exercício 3', icon: 'dumbbell' as const },
  { id: '4', name: 'Exercício 4', icon: 'dumbbell' as const },
  { id: '5', name: 'Exercício 5', icon: 'dumbbell' as const },
];

export default function ExerciciosScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Exercícios', headerShown: false }} />
      <ScrollView className="flex-1 bg-white">
        <View className="p-4">
          {exerciciosData.map((item) => (
            <Link key={item.id} href="/cargas" asChild>
              <TouchableOpacity className="mb-4 flex-row items-center rounded-xl border border-gray-200 bg-white p-4 shadow-md">
                <FontAwesome5 name={item.icon} size={28} color="#4A5568" className="mr-4" />
                <Text className="text-lg font-semibold text-gray-700">{item.name}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
