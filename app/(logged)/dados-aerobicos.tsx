import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

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
    <Container className="flex-1 justify-between bg-background">
      <View>
        <View className="flex-row items-center justify-center  p-4">
          <Text className="text-xl font-semibold text-foreground">{exerciseName}</Text>
        </View>

        <View>
          <Text className="mb-4 text-lg font-semibold text-foreground">Seu Progresso Atual</Text>

          <View className="mb-2 flex-row justify-between">
            <View className="flex-1 items-center">
              <View className="mb-2 h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <Ionicons name="walk" size={24} color="#3B82F6" />
              </View>
              <Text className="mb-0.5 text-base font-semibold text-foreground">
                {currentStats.distance}
              </Text>
              <Text className="text-sm text-muted-foreground">Distância</Text>
            </View>

            <View className="flex-1 items-center">
              <View className="mb-2 h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <Ionicons name="time" size={24} color="#10B981" />
              </View>
              <Text className="mb-0.5 text-base font-semibold text-foreground">
                {currentStats.time}
              </Text>
              <Text className="text-sm text-muted-foreground">Tempo</Text>
            </View>
          </View>
        </View>

        <Text className="mb-4 text-lg font-semibold text-foreground">Novo Recorde</Text>

        <View className="mb-4">
          <Text className="mb-2 text-sm font-medium text-muted-foreground">
            Nova Distância (km)
          </Text>
          <View className="h-14 flex-row items-center rounded-xl border border-input px-4">
            <Ionicons name="walk" size={20} color="#6B7280" className="mr-3" />
            <TextInput
              className="h-full flex-1 text-base text-foreground"
              placeholder="Ex: 3.5"
              keyboardType="numeric"
              value={newDistance}
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="mb-2 text-sm font-medium text-muted-foreground">
            Novo Tempo (minutos)
          </Text>
          <View className="h-14 flex-row items-center rounded-xl border border-input px-4">
            <Ionicons name="time" size={20} color="#6B7280" className="mr-3" />
            <TextInput
              className="h-full flex-1 text-base text-foreground"
              placeholder="Ex: 30"
              keyboardType="numeric"
              value={newTime}
            />
          </View>
        </View>
      </View>

      <View>
        <Button title="Salvar" />
      </View>
    </Container>
  );
}
