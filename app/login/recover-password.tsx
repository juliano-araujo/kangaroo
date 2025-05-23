import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Button } from '~/components/Button';
import { LoginContainer } from '~/components/login-container';
import { TextInput } from '~/components/TextInput';

export default function RecoverPassword() {
  return (
    <LoginContainer>
      <View className="flex-1 justify-end">
        <Text className="mb-2 text-lg">Recuperar senha:</Text>
        <View className="flex-row gap-4">
          <TextInput placeholder="Digite o email" className="flex-1" />
          <Button className="rounded-xl" icon={<Ionicons size={24} name="arrow-forward" />} />
        </View>
      </View>
    </LoginContainer>
  );
}
