import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

type NavigateButtonProps = {
  label?: string;
  to: any; // Rota para navegar
};

export const NavigateButton: React.FC<NavigateButtonProps> = ({
  label = 'Ir para próxima tela',
  to,
}) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(to);
  };

  return (
    <TouchableOpacity onPress={handlePress} className="rounded-lg bg-orange-400 p-4 shadow-md">
      <Text className="text-center text-lg font-semibold text-white">{label}</Text>
    </TouchableOpacity>
  );
};
