import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '~/components/CustomButton';

export default function Home() {
  const buttons = [
    { id: 1, href: '/exercicios', icon: 'dumbbell', name: 'Exercicios' },
    { id: 2, href: '/dias', icon: 'calendar', name: 'Dias' },
    { id: 3, href: '/login', icon: 'users', name: 'Login' },
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
    </SafeAreaView>
  );
}
