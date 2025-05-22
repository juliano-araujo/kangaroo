import { Stack, useLocalSearchParams } from 'expo-router';
import { BackButton } from '~/components/BackButton';

import { Container } from '~/components/Container';
import { QuantitySelector } from '~/components/QuantitySelector';

export default function Details() {
  return (
    <>
      <Stack.Screen options={{ title: 'Details' }} />
      <Container>
        <QuantitySelector />
      </Container>

      <BackButton />
    </>
  );
}
