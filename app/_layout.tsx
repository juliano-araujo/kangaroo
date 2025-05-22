import { SafeAreaView } from 'react-native';
import '../global.css';

import { Stack } from 'expo-router';
import { Header } from '~/components/Header';

export default function Layout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />

      <Stack
        screenOptions={{
          headerShown: false, // oculta o header nativo
        }}
      />
    </SafeAreaView>
  );
}
