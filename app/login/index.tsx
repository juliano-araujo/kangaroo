import { Link, router, Stack } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { LoginContainer } from '~/components/login-container';
import { TextInput } from '~/components/TextInput';
import { auth } from '~/utils/firebase';

export default function EmailScreen() {
  const [userMail, setUserMail] = useState<string>('');
  const [userPass, setUserPass] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleUserLogin() {
    if (!userMail.trim() || !userPass.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, userMail, userPass);
    } catch (error) {
      let errorMessage = 'Ocorreu um erro ao fazer login';

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/invalid-email':
            errorMessage = 'E-mail inválido. Por favor, verifique o formato.';
            break;
          case 'auth/user-disabled':
            errorMessage = 'Esta conta foi desativada. Entre em contato com o suporte.';
            break;
          case 'auth/user-not-found':
            errorMessage = 'Usuário não encontrado. Verifique seu e-mail.';
            break;
          case 'auth/wrong-password':
            errorMessage = 'Senha incorreta. Tente novamente ou redefina sua senha.';
            break;
          case 'auth/too-many-requests':
            errorMessage =
              'Muitas tentativas falhas. Tente novamente mais tarde ou redefina sua senha.';
            break;
          case 'auth/network-request-failed':
            errorMessage = 'Erro de conexão. Verifique sua internet e tente novamente.';
            break;
          default:
            errorMessage = `Erro: ${error.message}`;
        }
      }

      Alert.alert('Erro no login', errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

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
            <TextInput
              placeholder="E-mail"
              value={userMail}
              onChangeText={setUserMail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              placeholder="Senha"
              value={userPass}
              onChangeText={setUserPass}
              secureTextEntry
              autoComplete="password"
            />
          </View>
          <Link href="/login/register" asChild>
            <Button className="" variant="ghost" title="Cadastre-se" disabled={isLoading} />
          </Link>
        </View>
        <View className="flex-row justify-between gap-4">
          <Link href="/login/recover-password" asChild>
            <Button className="" variant="ghost" title="Esqueceu a senha" disabled={isLoading} />
          </Link>
          <Button
            className="flex-1"
            title={isLoading ? 'Entrando...' : 'Entrar'}
            onPress={handleUserLogin}
            disabled={isLoading}
          />
        </View>
      </LoginContainer>
    </>
  );
}
