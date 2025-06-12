import { signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/Button';
import CustomButton from '~/components/CustomButton';
import { auth } from '~/utils/firebase';

export default function Home() {
  async function logOut() {
    await signOut(auth);
  }

  const buttons = [
    { id: 1, href: '/exercicios', icon: 'dumbbell', name: 'Exercicios' },
    { id: 2, href: '/dias', icon: 'calendar', name: 'Dias' },
    { id: 4, href: '/dados-aerobicos', icon: 'dumbbell', name: 'Dados Aeróbicos' },
  ];

  return (
    <SafeAreaView className="p-4">
      {buttons.map((item) => (
        <CustomButton
          key={item.id}
          id={item.id}
          href={item.href}
          icon={item.icon}
          name={item.name}
        />
      ))}
      <Button variant="secondary" title="Sair" onPress={logOut} />
    </SafeAreaView>
  );
}
