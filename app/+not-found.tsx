import { Link, Stack } from 'expo-router';

import { Text } from 'react-native';

import { Container } from '~/components/Container';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Container>
        <Text className="text-xl font-bold">{"This screen doesn't exist."}</Text>
        <Link href="/" className="mt-4 pt-4">
          <Text className="text-base text-primary">Go to home screen!</Text>
        </Link>
      </Container>
    </>
  );
}
