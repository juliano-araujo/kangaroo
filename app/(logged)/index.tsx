import { signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/Button';
import CustomButton from '~/components/CustomButton';
import { auth } from '~/utils/firebase';
import { Link } from 'expo-router';

export default function Home() {
  async function logOut() {
    await signOut(auth);
  }

  return (
    <SafeAreaView className="p-4">
      <Link href="/exercicios" asChild>
        <CustomButton icon="barbell" name="Exercicios" />
      </Link>
      <Link href="/aerobics" asChild>
        <CustomButton icon="bicycle" name="Aeróbicos" />
      </Link>
      <Link href="/dias" asChild>
        <CustomButton icon="calendar" name="Dias" />
      </Link>
      <Button variant="secondary" title="Sair" onPress={logOut} />
    </SafeAreaView>
  );
}
