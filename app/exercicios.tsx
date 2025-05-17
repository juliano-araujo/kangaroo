//Tela de exercicios que a Anna Linda ta fazendo

import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, Link } from 'expo-router';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 


// Lista de exercícios
const exerciciosData = [
  { id: '1', name: 'Exercício 1', icon: 'dumbbell' as const}, 
  { id: '2', name: 'Exercício 2', icon: 'dumbbell' as const},
  { id: '3', name: 'Exercício 3', icon: 'dumbbell' as const},
  { id: '4', name: 'Exercício 4', icon: 'dumbbell' as const},
  { id: '5', name: 'Exercício 5', icon: 'dumbbell' as const},
];

export default function ExerciciosScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Exercícios', headerShown: false }} /> 
      

      <ScrollView className="bg-white flex-1">
        
        <View className="flex-row justify-between items-center p-6 pt-12 bg-gray-50">
          <View>
            <Text className="text-3xl font-bold text-gray-800">Kangoroo</Text>
            <Text className="text-sm text-gray-500">Sua evolução começa com um salto!</Text>
          </View>
          <Image
            source={require('../assets/kangaroo_logo.png')} // Aqui é a logo 
            className="w-16 h-16 rounded-full" // Ver o tamanhp até ficar bom
          />
        </View>

       
        <View className="p-4"> 
  {exerciciosData.map((item) => (     //aqui é p ir p tela la de carga
    <Link key={item.id} href="/cargas" asChild>
      <TouchableOpacity className="bg-white p-4 rounded-xl shadow-md mb-4 flex-row items-center border border-gray-200">
        <FontAwesome5 name={item.icon} size={24} color="#4A5568" className="mr-4" />
        <Text className="text-lg text-gray-700 font-semibold">{item.name}</Text>
      </TouchableOpacity>
    </Link>
  ))}
</View>

      </ScrollView>
    </>
  );
}