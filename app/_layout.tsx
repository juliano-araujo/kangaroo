import { SplashScreen, Stack } from 'expo-router';
import { SplashScreenController } from '~/components/splash';
import { SessionProvider, useSession } from '~/contexts/session-provider';

import '../global.css';

SplashScreen.preventAutoHideAsync();

export default function Root() {
  return (
    <SessionProvider>
      <SplashScreenController />
      <RootNavigator />
    </SessionProvider>
  );
}

function RootNavigator() {
  const { user, isLoading } = useSession();

  if (isLoading) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: '#ffffff' },
        headerShown: false,
      }}>
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="(logged)" />
      </Stack.Protected>

      <Stack.Protected guard={!user}>
        <Stack.Screen name="login" />
      </Stack.Protected>
    </Stack>
  );
}
