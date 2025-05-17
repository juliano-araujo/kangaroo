import { Link, Stack } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home"></ScreenContent>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button title="Show Details" />
        </Link>
<<<<<<< HEAD
=======
        <Link href="/exercicios" asChild className="mt-4">
          <Button title="Ver Exercícios" />
        </Link>
>>>>>>> 29e8c81 (Initial commit)
      </Container>
    </>
  );
}
