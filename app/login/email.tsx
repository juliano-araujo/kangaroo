import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { LoginContainer } from '~/components/login-container';
import { TextInput } from '~/components/TextInput';

export default function EmailScreen() {
  return (
    <>
      <Stack.Screen />
      <LoginContainer className="justify-between">
        <View className="gap-4">
          <View className="gap-1">
            <Text className="text-3xl font-semibold">Digite os seus Dados</Text>
            <Text className="">e melhore sua performance</Text>
          </View>
          <View className="gap-4">
            <TextInput placeholder="Usuário" />
            <TextInput placeholder="Senha" autoComplete="password" />
          </View>
        </View>
        <View className="flex-row justify-between gap-4">
          <Link href="/login/recover-password" asChild>
            <Button className="" variant="secondary" title="Esqueceu a senha" />
          </Link>
          <Button className="flex-1" title="Entrar" />
        </View>
      </LoginContainer>
    </>
  );
}
