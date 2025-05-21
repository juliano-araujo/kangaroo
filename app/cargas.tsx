import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Stack, useRouter } from 'expo-router'; // useRouter para o lindo botão de voltar
import React from 'react';
import { FontAwesome5, Ionicons } from '@expo/vector-icons'; // Ícones para halter e voltar

export default function CargasScreen() {
  const router = useRouter(); 

  // P passar o nome do exercício como parâmetro 
  const nomeExercicio = "Exercício";
  const cargaAtual = "20 kg"; // 

  return (
    <>
      <Stack.Screen options={{ title: 'Detalhes da Carga', headerShown: false }} />

      <ScrollView className="bg-white flex-1">
        {/* Bgl igual do exercicios.tsx) */}
        <View className="flex-row justify-between items-center p-6 pt-12 bg-gray-50">
          <View>
            <Text className="text-3xl font-bold text-gray-800">Kangoroo</Text>
            <Text className="text-sm text-gray-500">Sua evolução começa com um salto!</Text>
          </View>
          <Image
            source={require('../assets/kangaroo_logo.png')} 
            className="w-16 h-16 rounded-full"
          />
        </View>

        {/*  Tela de Cargas */}
        <View className="p-6">
          {/* Informação do Exercício */}
          <View className="flex-row items-center mb-8">
            <FontAwesome5 name="dumbbell" size={28} color="#4A5568" className="mr-4" />
            <Text className="text-2xl text-gray-800 font-bold">{nomeExercicio}</Text>
          </View>

          {/* Carga Atual */}
          <View className="mb-8">
            <Text className="text-lg text-gray-600 mb-2">Carga atual</Text>
            <View className="bg-gray-100 p-4 rounded-lg border border-gray-300">
              <Text className="text-xl text-gray-800 text-center font-semibold">{cargaAtual}</Text>
            </View>
          </View>

          {/* Digite a Nova Carga */}
          <View className="mb-6"> 
            <Text className="text-lg text-gray-600 mb-2">Digite a nova carga</Text>
            <TextInput
              className="bg-gray-100 border border-gray-300 p-4 rounded-lg text-xl text-center text-gray-800"
              placeholder="NOVA CARGA"
              keyboardType="numeric" // Para números
            />
          </View>

          {/* Botão Atualizar Carga */}
          <TouchableOpacity
            onPress={() => {
              // Lógica para atualizar a carga virá aqui
              console.log("Botão Atualizar Carga pressionado!");
            }}
            className="bg-orange-400 p-4 rounded-lg shadow-md" 
          >
            <Text className="text-white text-lg font-semibold text-center">
              Atualizar Carga
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Botão Voltar Fixo */}
      <View className="absolute bottom-6 left-6">
        <TouchableOpacity
          onPress={() => router.back()} // Função para voltar para a tela anterior
          className="bg-orange-400 p-4 rounded-full shadow-lg"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </>
  );
}