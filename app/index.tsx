import { Link } from 'expo-router';
import { View } from 'react-native';
import { Button } from '~/components/Button';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Link href="/exercicios" asChild>
        <Button title="Exercicios"></Button>
      </Link>

      <Link href="/details" asChild>
        <Button title="Detalhes(trocar nome)"></Button>
      </Link>
    </View>
  );
}
