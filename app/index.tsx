import { View } from 'react-native';
import CustomButton from '../components/CustomButton'; // caminho relativo

export default function Home() {
  const buttons = [
    { id: 1, href: '/exercicios', icon: 'dumbbell', name: 'Exercicios' },
    { id: 2, href: '/dias', icon: 'calendar', name: 'Dias' },
    { id: 3, href: '/usuarios', icon: 'users', name: 'Usuários' },
  ];


  return (
    <View className="p-4">
      {buttons.map((item) => (
        <CustomButton
          key={item.id}
          id={item.id}
          href={item.href}
          icon={item.icon}
          name={item.name}
        />
      ))}
    </View>
  );
}
