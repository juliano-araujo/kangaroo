import { useState } from 'react';
import { Alert, Text, View, ActivityIndicator } from 'react-native';
import { Button } from '~/components/Button';
import { LoginContainer } from '~/components/login-container';
import { TextInput } from '~/components/TextInput';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '~/utils/firebase';
import { Ionicons } from '@expo/vector-icons';
import { FirebaseError } from 'firebase/app';

export default function RecoverPassword() {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  async function handlePasswordReset() {
    if (!email.trim()) {
      Alert.alert('Erro', 'Por favor, insira seu e-mail');
      return;
    }

    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());
      setEmailSent(true);
      Alert.alert(
        'E-mail enviado',
        'Verifique sua caixa de entrada para as instruções de redefinição de senha'
      );
    } catch (error) {
      let errorMessage = 'Erro ao enviar e-mail de recuperação';

      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
            errorMessage = 'Nenhum usuário encontrado com este e-mail';
            break;
          case 'auth/invalid-email':
            errorMessage = 'E-mail inválido';
            break;
          default:
            errorMessage = error.message || errorMessage;
        }
      }

      Alert.alert('Erro', errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <LoginContainer>
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" />
          <Text className="mt-4 text-lg">Enviando e-mail...</Text>
        </View>
      </LoginContainer>
    );
  }

  return (
    <LoginContainer>
      <View className="flex-1 justify-end">
        {emailSent ? (
          <View className="items-center justify-center p-4">
            <Ionicons name="checkmark-circle" size={48} color="green" />
            <Text className="mt-4 text-center text-lg">
              E-mail de recuperação enviado com sucesso!
            </Text>
            <Text className="text-center text-gray-600">
              Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
            </Text>
          </View>
        ) : (
          <>
            <Text className="mb-2 text-lg">Recuperar senha:</Text>
            <View className="flex-row gap-4">
              <TextInput
                placeholder="Digite o email"
                className="flex-1"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Button
                className="rounded-xl"
                icon={<Ionicons size={24} name="arrow-forward" />}
                onPress={handlePasswordReset}
                disabled={isLoading}
              />
            </View>
          </>
        )}
      </View>
    </LoginContainer>
  );
}
