import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export const BackButton = () => {
  const router = useRouter();

  return (
    <View className="absolute bottom-6 left-6">
      <TouchableOpacity
        onPress={() => router.back()}
        className="rounded-full bg-orange-400 p-4 shadow-lg">
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
