import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import {
  addDoc,
  collection,
  DocumentData,
  DocumentReference,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { useSession } from '~/contexts/session-provider';
import { db } from '~/utils/firebase';

type ExerciseTrackingScreenProps = {
  onBack?: () => void;
};

export default function ExerciseTrackingScreen({ onBack }: ExerciseTrackingScreenProps) {
  const { user } = useSession();

  const [newDistance, setNewDistance] = useState('');
  const [newTime, setNewTime] = useState('');

  const { exercise } = useLocalSearchParams<{
    exercise: string;
  }>();

  const savedExerciseDocRef = useRef<DocumentReference | null>(null);
  const [lastHistory, setLastHistory] = useState<DocumentData | undefined>();

  const exercisesCollection = collection(db, 'users', user!.uid, 'exercises');

  const fetchExerciseByName = useCallback(async () => {
    const q = query(exercisesCollection, where('name', '==', exercise));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return;
    }

    const exerciseDoc = querySnapshot.docs[0];

    savedExerciseDocRef.current = exerciseDoc.ref;

    const historyCollection = collection(exerciseDoc.ref, 'history');
    const historyQuery = query(historyCollection, orderBy('createdAt', 'desc'), limit(1));
    const historySnapshot = await getDocs(historyQuery);

    if (!historySnapshot.empty) {
      setLastHistory(historySnapshot.docs[0].data());
    } else {
      setLastHistory(undefined);
    }
  }, [exercise, exercisesCollection]);

  // Call fetchExerciseByName in a useEffect
  useEffect(() => {
    fetchExerciseByName();
  }, [exercise, fetchExerciseByName]);

  const currentStats = {
    distance: lastHistory?.distance ?? '0 km',
    time: lastHistory?.time ?? '0 min',
  };

  async function handleSave() {
    if (!newDistance || !newTime) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    try {
      const docRef =
        savedExerciseDocRef.current ||
        (await addDoc(exercisesCollection, {
          name: exercise,
          type: 'aerobic',
        }));

      await addDoc(collection(docRef, 'history'), {
        distance: newDistance,
        time: newTime,
        createdAt: new Date(),
      });

      setNewDistance('');
      setNewTime('');
      Alert.alert('Sucesso', 'Novo histórico salvo com sucesso!');
      fetchExerciseByName(); // Refresh history
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o histórico.');
      console.error('Error saving history:', error);
    }
  }

  return (
    <Container className="flex-1 justify-between bg-background">
      <View>
        <View className="flex-row items-center justify-center  p-4">
          <Text className="text-xl font-semibold text-foreground">{exercise}</Text>
        </View>

        <View>
          {lastHistory && (
            <>
              <Text className="mb-4 text-lg font-semibold text-foreground">
                Seu Progresso Atual
              </Text>
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
            </>
          )}
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
              onChangeText={setNewDistance}
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
              onChangeText={setNewTime}
            />
          </View>
        </View>
      </View>

      <View>
        <Button title="Salvar" onPress={handleSave} />
      </View>
    </Container>
  );
}
