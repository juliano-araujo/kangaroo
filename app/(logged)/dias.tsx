import { FontAwesome5 } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

import { Button } from '~/components/Button';
import { QuantitySelector } from '~/components/QuantitySelector';

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
