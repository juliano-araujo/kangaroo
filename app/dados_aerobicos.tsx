import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

type ExerciseTrackingScreenProps = {
  onBack?: () => void;
};

export default function ExerciseTrackingScreen({ onBack }: ExerciseTrackingScreenProps) {
  const { exerciseName = 'Exercício' } = useLocalSearchParams<{
    exerciseName?: string;
  }>();

  const currentStats = {
    distance: '2.5 km',
    time: '15:30 min',
  };

  const newDistance = '';
  const newTime = '';

  return (
    <View className="flex-1 bg-background">
      <View className="border-border flex-row items-center justify-center border-b p-4">
        <Text className="text-foreground text-lg font-semibold">{exerciseName}</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }} className="p-4">
        <View className="bg-card mb-6 rounded-xl p-4 shadow-sm">
          <Text className="text-card-foreground mb-4 text-lg font-semibold">
            Seu Progresso Atual
          </Text>

          <View className="mb-2 flex-row justify-between">
            <View className="flex-1 items-center">
              <View className="mb-2 h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Ionicons name="walk" size={24} color="#3B82F6" />
              </View>
              <Text className="text-card-foreground mb-0.5 text-base font-semibold">
                {currentStats.distance}
              </Text>
              <Text className="text-muted-foreground text-sm">Distância</Text>
            </View>

            <View className="flex-1 items-center">
              <View className="mb-2 h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <Ionicons name="time" size={24} color="#10B981" />
              </View>
              <Text className="text-card-foreground mb-0.5 text-base font-semibold">
                {currentStats.time}
              </Text>
              <Text className="text-muted-foreground text-sm">Tempo</Text>
            </View>
          </View>
        </View>

        <View className="bg-card mb-6 rounded-xl p-4 shadow-sm">
          <Text className="text-card-foreground mb-4 text-lg font-semibold">Novo Recorde</Text>

          <View className="mb-4">
            <Text className="text-muted-foreground mb-2 text-sm font-medium">
              Nova Distância (km)
            </Text>
            <View className="border-input h-14 flex-row items-center rounded-xl border px-4">
              <Ionicons name="walk" size={20} color="#6B7280" className="mr-3" />
              <TextInput
                className="text-foreground h-full flex-1 text-base"
                placeholder="Ex: 3.5"
                keyboardType="numeric"
                value={newDistance}
              />
            </View>
          </View>

          <View className="mb-4">
            <Text className="text-muted-foreground mb-2 text-sm font-medium">
              Novo Tempo (minutos)
            </Text>
            <View className="border-input h-14 flex-row items-center rounded-xl border px-4">
              <Ionicons name="time" size={20} color="#6B7280" className="mr-3" />
              <TextInput
                className="text-foreground h-full flex-1 text-base"
                placeholder="Ex: 30"
                keyboardType="numeric"
                value={newTime}
              />
            </View>
          </View>

          <View className="mt-6">
            <Pressable className="w-full flex-row items-center justify-center rounded-xl bg-primary py-4">
              <Ionicons name="checkmark" size={20} color="#000" className="mr-1" />
              <Text className="text-primary-foreground ml-2 text-base font-semibold">Salvar</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
