import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type UpdateLoadButtonProps = {
  onPress?: () => void;
};

export const UpdateLoadButton: React.FC<UpdateLoadButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="rounded-lg bg-orange-400 p-4 shadow-md">
      <Text className="text-center text-lg font-semibold text-white">Atualizar Carga</Text>
    </TouchableOpacity>
  );
};
