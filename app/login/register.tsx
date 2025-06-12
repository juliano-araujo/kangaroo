import { Link, Stack } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { LoginContainer } from '~/components/login-container';
import { TextInput } from '~/components/TextInput';
import { auth } from '~/utils/firebase';

export default function RegisterScreen() {
  const [email, setEmail] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleUserRegister() {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    if (!displayName.trim()) {
      alert('Por favor, insira um nome de usuário');
      return;
    }

    setIsLoading(true);

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      
      // Atualizar o perfil do usuário com o nome
      await updateProfile(userCredentials.user, {
        displayName: displayName.trim()
      });

      alert('Cadastro realizado com sucesso!');
      console.log('Usuário registrado:', userCredentials.user);
    } catch (error) {
      if (error instanceof FirebaseError) {
        let errorMessage = 'Erro ao cadastrar';
        
        // Tratamento de erros comuns
        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = 'Este e-mail já está em uso';
            break;
          case 'auth/invalid-email':
            errorMessage = 'E-mail inválido';
            break;
          case 'auth/weak-password':
            errorMessage = 'Senha muito fraca (mínimo 6 caracteres)';
            break;
          default:
            errorMessage = error.message;
        }
        
        alert(errorMessage);
      }
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
            <Text className="text-3xl font-semibold">Crie sua conta</Text>
            <Text className="">e melhore sua performance</Text>
          </View>
          <View className="gap-4">
            <TextInput 
              placeholder="E-mail" 
              value={email} 
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput 
              placeholder="Nome do usuário" 
              value={displayName} 
              onChangeText={setDisplayName}
            />
            <TextInput 
              placeholder="Senha" 
              value={password} 
              onChangeText={setPassword}
              secureTextEntry
              autoComplete="password-new"
            />
            <TextInput 
              placeholder="Confirmar Senha" 
              value={confirmPassword} 
              onChangeText={setConfirmPassword}
              secureTextEntry
              autoComplete="password"
            />
          </View>
        </View>
        <View className="flex-row justify-between gap-4">
          <Link href="/login" asChild>
            <Button className="" variant="secondary" title="Voltar" />
          </Link>
          <Button 
            className="flex-1" 
            title={isLoading ? "Cadastrando..." : "Cadastrar"} 
            onPress={handleUserRegister}
            disabled={isLoading}
          />
        </View>
      </LoginContainer>
    </>
  );
}