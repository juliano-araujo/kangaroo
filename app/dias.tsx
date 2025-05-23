import { FontAwesome5 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

import { BackButton } from '~/components/BackButton';
import { QuantitySelector } from '~/components/QuantitySelector';
import { UpdateLoadButton } from '~/components/UpdateLoadButton';

export default function Dias() {
  const [diasSelecionados, setDiasSelecionados] = useState(0);

  function handleSalvarDias() {
    // Aqui você pode salvar no asyncStorage, API, etc.
    Alert.alert('Dias salvos', `Você selecionou ${diasSelecionados} dias.`);
    console.log('Dias selecionados:', diasSelecionados);
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Dias' }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="bg-white">
        <View className="flex-1 p-6">
          {/* Informação do Exercício */}
          <View className="mb-8 flex-row items-center justify-start">
            <FontAwesome5 name="calendar" size={28} color="#4A5568" className="mr-4" />
            <Text className="text-2xl font-bold text-gray-800">Dias</Text>
          </View>

          {/* Centralizar QuantitySelector e botão */}
          <View className="flex-1 items-center justify-center">
            <QuantitySelector value={diasSelecionados} onChange={setDiasSelecionados} />

            <View className="mt-8">
              <UpdateLoadButton onPress={handleSalvarDias} label="Salvar Dias" />
            </View>
          </View>
        </View>
      </ScrollView>

      <BackButton />
    </>
  );
}
