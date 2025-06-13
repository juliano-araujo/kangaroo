import { FontAwesome5 } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const exerciciosData = [
  { id: '1', name: 'Supino', icon: 'dumbbell' as const },
  { id: '2', name: 'Agachamento', icon: 'weight' as const },
  { id: '3', name: 'Remada', icon: 'grip-horizontal' as const },
  { id: '4', name: 'Desenvolvimento', icon: 'hand-rock' as const },
  { id: '5', name: 'Levantamento Terra', icon: 'arrow-up' as const },
];

export default function ExerciciosScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView className="flex-1 bg-white">
        <View className="p-4">
          {exerciciosData.map((item) => (
            <Link key={item.id} href={`/strength/${item.name}`} asChild>
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
