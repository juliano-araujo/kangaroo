import { SplashScreen } from 'expo-router';
import { useSession } from '~/contexts/session-provider';

export function SplashScreenController() {
  const { isLoading } = useSession();

  if (!isLoading) {
    SplashScreen.hideAsync();
  }

  return null;
}
