import { FontAwesome5 } from '@expo/vector-icons'; // Ícones para halter e voltar
import { Stack, useRouter } from 'expo-router'; // useRouter para o lindo botão de voltar
import { ScrollView, Text, TextInput, View } from 'react-native';
import { BackButton } from '~/components/BackButton';
import { UpdateLoadButton } from '~/components/UpdateLoadButton';

export default function CargasScreen() {
  const router = useRouter();

  // P passar o nome do exercício como parâmetro
  const nomeExercicio = 'Exercício';
  const cargaAtual = '20 kg'; //

  return (
    <>
      <Stack.Screen options={{ title: 'Detalhes da Carga', headerShown: false }} />

      <ScrollView className="flex-1 bg-white">
        {/*  Tela de Cargas */}
        <View className="p-6">
          {/* Informação do Exercício */}
          <View className="mb-8 flex-row items-center">
            <FontAwesome5 name="dumbbell" size={28} color="#4A5568" className="mr-4" />
            <Text className="text-2xl font-bold text-gray-800">{nomeExercicio}</Text>
          </View>

          {/* Carga Atual */}
          <View className="mb-8">
            <Text className="mb-2 text-lg text-gray-600">Carga atual</Text>
            <View className="rounded-lg border border-gray-300 bg-gray-100 p-4">
              <Text className="text-center text-xl font-semibold text-gray-800">{cargaAtual}</Text>
            </View>
          </View>

          {/* Digite a Nova Carga */}
          <View className="mb-6">
            <Text className="mb-2 text-lg text-gray-600">Digite a nova carga</Text>
            <TextInput
              className="rounded-lg border border-gray-300 bg-gray-100 p-4 text-center text-xl text-gray-800"
              placeholder="NOVA CARGA"
              keyboardType="numeric" // Para números
            />
          </View>

          {/* Botão Atualizar Carga */}
          <UpdateLoadButton onPress={() => console.log('Botão Atualizar Carga pressionado!')} />
        </View>
      </ScrollView>

      <BackButton />
    </>
  );
}
