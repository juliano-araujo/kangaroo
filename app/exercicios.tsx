// app/exercicios.tsx
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, Link } from 'expo-router';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; // Exemplo usando Expo Vector Icons

// Importe seu Container se ele for útil aqui
// import { Container } from '~/components/Container';

// Mock data para a lista de exercícios
const exerciciosData = [
  { id: '1', name: 'Exercício x', icon: 'dumbbell' as const}, // 'as const' para tipagem correta com o nome do ícone
  { id: '2', name: 'Exercício y', icon: 'dumbbell' as const},
  { id: '3', name: 'Exercício z', icon: 'dumbbell' as const},
  { id: '4', name: 'Exercício', icon: 'dumbbell' as const},
  { id: '5', name: 'Exercício', icon: 'dumbbell' as const},
];

export default function ExerciciosScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Exercícios', headerShown: false }} /> 
      {/* headerShown: false para remover o header padrão se o design não o tem */}

      <ScrollView className="bg-white flex-1">
        {/* Header Customizado */}
        <View className="flex-row justify-between items-center p-6 pt-12 bg-gray-50">
          <View>
            <Text className="text-3xl font-bold text-gray-800">Lorem</Text>
            <Text className="text-sm text-gray-500">ipsum dolor sit amet</Text>
          </View>
          <Image
            source={require('../assets/images/kangaroo_logo.png')} // Coloque sua imagem do canguru aqui
            className="w-16 h-16 rounded-full" // Ajuste o tamanho conforme necessário
          />
        </View>

        {/* Lista de Exercícios */}
        <View className="p-4">
          {exerciciosData.map((item) => (
            <Link key={item.id} href={`/exercicioDetalhe/${item.id}`} asChild> 
              {/* Ajuste o href para onde o clique deve levar */}
              <TouchableOpacity className="bg-white p-4 rounded-xl shadow-md mb-4 flex-row items-center border border-gray-200">
                <FontAwesome5 name={item.icon} size={24} color="#4A5568" className="mr-4" /> 
                {/* Ou <Image source={require('../assets/icons/dumbbell.png')} className="w-6 h-6 mr-4" /> */}
                <Text className="text-lg text-gray-700 font-semibold">{item.name}</Text>
              </TouchableOpacity>
            </Link>
          ))}
        </View>
      </ScrollView>
    </>
  );
}