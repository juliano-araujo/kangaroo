/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesome5 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import { useSession } from '~/contexts/session-provider';

import { Button } from '~/components/Button';
import { QuantitySelector } from '~/components/QuantitySelector';

export default function Dias() {
  const [diasSelecionados, setDiasSelecionados] = useState(0);
  const { user } = useSession();

  async function handleSalvarDias() {
    if (!user) {
      Alert.alert('Erro', 'Usuário não autenticado.');
      return;
    }
    if (diasSelecionados < 1) {
      Alert.alert('Atenção', 'Selecione pelo menos 1 dia.');
      return;
    }
    try {
      await updateDoc(doc(db, 'users', user.uid), {
        days: diasSelecionados,
      });
      Alert.alert('Dias salvos', `Você selecionou ${diasSelecionados} dias.`);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dias.');
    }
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Dias' }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-background">
        <View className="flex-1 p-6">
          {/* Informação do Exercício */}
          <View className="mb-8 flex-row items-center justify-start">
            <FontAwesome5 name="calendar" size={28} color="#14121a" className="mr-4" />
            <Text className="text-2xl font-bold text-foreground">Dias</Text>
          </View>

          {/* Centralizar QuantitySelector e botão */}
          <View className="flex-1 items-center justify-between">
            <QuantitySelector value={diasSelecionados} onChange={setDiasSelecionados} />

            <View className="mt-8 w-full">
              <Button onPress={handleSalvarDias} title="Salvar Dias" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
