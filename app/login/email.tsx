import { Link, Stack } from 'expo-router';
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

  async function handleUserLogin() {
    try {
      await signInWithEmailAndPassword(auth, userMail, userPass);
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error);
        const errorMessage = error.message;

        Alert.alert('Erro', errorMessage);
      }
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
            <TextInput placeholder="Usuário" value={userMail} onChangeText={setUserMail} />
            <TextInput placeholder="Senha" autoComplete="password" onChangeText={setUserPass} />
          </View>
        </View>
        <View className="flex-row justify-between gap-4">
          <Link href="/login/recover-password" asChild>
            <Button className="" variant="secondary" title="Esqueceu a senha" />
          </Link>
          <Button className="flex-1" title="Entrar" onPress={handleUserLogin} />
        </View>
      </LoginContainer>
    </>
  );
}
