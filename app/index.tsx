import { Link, Stack } from 'expo-router';
import { View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Bem-vindo ao Kangaroo"></ScreenContent>
        <View style={{ gap: 12, width: '100%' }}>
          <Link href="/exercicios_aerobicos" asChild>
            <Button title="Ver Exercícios" />
          </Link>
          <Link href={{ pathname: '/details', params: { name: 'Usuário' } }} asChild>
            <Button title="Ver Detalhes" variant="outline" />
          </Link>
        </View>
      </Container>
    </>
  );
}
