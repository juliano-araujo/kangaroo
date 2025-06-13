import { FontAwesome5 } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import {
  addDoc,
  collection,
  DocumentReference,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
import { useState, useEffect, useRef } from 'react';
import { Alert, ScrollView, Text, TextInput, View } from 'react-native';
import { Button } from '~/components/Button';
import { useSession } from '~/contexts/session-provider';
import { db } from '~/utils/firebase';

export default function CargasScreen() {
  const { user } = useSession();
  const { exercise } = useLocalSearchParams<{ exercise: string }>();

  const [newCarga, setNewCarga] = useState('');
  const [lastHistory, setLastHistory] = useState<{ weightLoad: string; createdAt: Date } | null>(
    null
  );

  const exercisesCollection = collection(db, 'users', user!.uid, 'exercises');
  const savedExerciseDocRef = useRef<DocumentReference | null>(null);

  // Fetch last history on mount and after save
  useEffect(() => {
    async function fetchLastHistory() {
      const q = query(exercisesCollection, where('name', '==', exercise));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        savedExerciseDocRef.current = docRef;
        const historyCol = collection(docRef, 'history');
        const lastHistoryQuery = query(historyCol, orderBy('createdAt', 'desc'), limit(1));
        const lastHistorySnap = await getDocs(lastHistoryQuery);
        if (!lastHistorySnap.empty) {
          const data = lastHistorySnap.docs[0].data();
          setLastHistory({
            weightLoad: data.weightLoad,
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt),
          });
        } else {
          setLastHistory(null);
        }
      } else {
        setLastHistory(null);
      }
    }
    fetchLastHistory();
  }, [exercise, exercisesCollection, user]);

  async function handleSave() {
    if (!newCarga) {
      Alert.alert('Erro', 'Digite a nova carga.');
      return;
    }

    try {
      const q = query(exercisesCollection, where('name', '==', exercise));
      const querySnapshot = await getDocs(q);

      const docRef: DocumentReference = !querySnapshot.empty
        ? querySnapshot.docs[0].ref
        : await addDoc(exercisesCollection, {
            name: exercise,
            type: 'strength',
          });

      await addDoc(collection(docRef, 'history'), {
        weightLoad: newCarga,
        createdAt: new Date(),
      });

      setNewCarga('');
      Alert.alert('Sucesso', 'Nova carga salva com sucesso!');
      // Refresh last history
      const historyCol = collection(docRef, 'history');
      const lastHistoryQuery = query(historyCol, orderBy('createdAt', 'desc'), limit(1));
      const lastHistorySnap = await getDocs(lastHistoryQuery);
      if (!lastHistorySnap.empty) {
        const data = lastHistorySnap.docs[0].data();
        setLastHistory({
          weightLoad: data.weightLoad,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : new Date(data.createdAt),
        });
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a carga.');
      console.error('Error saving carga:', error);
    }
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Detalhes da Carga', headerShown: false }} />

      <ScrollView className="flex-1 bg-background">
        <View className="p-6">
          {/* Informação do Exercício */}
          <View className="mb-8 flex-row items-center">
            <FontAwesome5 name="dumbbell" size={28} color="#4A5568" className="mr-4" />
            <Text className="text-2xl font-bold text-gray-800">{exercise}</Text>
          </View>

          {/* Última Carga */}
          {lastHistory && (
            <>
              <Text className="mb-4 text-lg font-semibold text-gray-700">Sua Última Carga</Text>
              <View className="mb-4 flex-row justify-between rounded bg-gray-100 px-4 py-2">
                <View className="flex-1 items-center">
                  <Text className="mb-0.5 text-base font-semibold text-gray-800">
                    {lastHistory.weightLoad} kg
                  </Text>
                  <Text className="text-sm text-gray-500">
                    {lastHistory.createdAt.toLocaleDateString()}{' '}
                    {lastHistory.createdAt.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </Text>
                </View>
              </View>
            </>
          )}

          {/* Digite a Nova Carga */}
          <View className="mb-6">
            <Text className="mb-2 text-lg text-gray-600">Digite a nova carga</Text>
            <TextInput
              className="rounded-lg border border-gray-300 bg-gray-100 p-4 text-center text-xl text-gray-800"
              placeholder="NOVA CARGA"
              keyboardType="numeric"
              value={newCarga}
              onChangeText={setNewCarga}
            />
          </View>

          {/* Botão Atualizar Carga */}
          <Button title="Atualizar Carga" onPress={handleSave} />
        </View>
      </ScrollView>
    </>
  );
}
