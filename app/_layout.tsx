import { SafeAreaView } from 'react-native';
import '../global.css';
import { Stack } from 'expo-router';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Aqui você pode carregar outros recursos se necessário
      } catch (e) {
        console.warn(e);
      } finally {
        // Diz ao aplicativo para mostrar
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="exercises"
        options={{
          title: 'Exercícios',
          headerBackTitle: ' ', // Espaço vazio para remover o texto
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          title: 'Detalhes',
          headerBackTitle: 'Voltar',
        }}
      />
      <Stack.Screen
        name="tracking"
        options={{
          title: 'Acompanhamento',
          headerBackTitle: 'Voltar',
        }}
      />
      </Stack>
    </View>
  );
}
