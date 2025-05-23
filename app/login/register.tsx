import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { LoginContainer } from '~/components/login-container';
import { TextInput } from '~/components/TextInput';

export default function RegisterScreen() {
  return (
    <>
      <Stack.Screen />
      <LoginContainer className="justify-betweepx-5 py-10 ">
        <View className="gap-1">
          <Text className="text-3xl font-semibold">Digite os seus Dados</Text>
          <Text className="">e melhore sua performance</Text>
        </View>
        <View className="mt-8 gap-2">
          <TextInput placeholder="E-mail" />
          <TextInput placeholder="Nome do usuário" />
          <TextInput placeholder="Senha" autoComplete="password-new" />
          <TextInput placeholder="Confirmar Senha" autoComplete="password" />
          <Button title="Cadastrar" />
        </View>
      </LoginContainer>
    </>
  );
}
