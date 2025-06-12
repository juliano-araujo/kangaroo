import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { LoginContainer } from '~/components/login-container';

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen />
      <LoginContainer className="gap-2">
        <Button variant="outline" title="Entrar com Google" />
        <Link href="/login/email" asChild>
          <Button variant="outline" title="Entrar com E-mail" />
        </Link>
        <View className="flex-row items-center gap-4">
          <View className="h-px flex-1 border border-input" />
          <Text>ou</Text>
          <View className="h-px flex-1 border border-input" />
        </View>
        <Link href="/login/register" asChild>
          <Button variant="outline" title="Cadastre-se" />
        </Link>
      </LoginContainer>
    </>
  );
}
