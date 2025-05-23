import { Image, Text, View } from 'react-native';

export const Header = () => {
  return (
    <View className="flex-row items-center justify-between bg-background p-6 pt-12">
      <View>
        <Text className="text-4xl font-bold text-primary">Kangoroo</Text>
        <Text className="text-md text-gray-500">Sua evolução começa com um salto!</Text>
      </View>

      <Image
        source={require('~/assets/kangaroo_logo.png')} // ajuste o caminho conforme sua pasta
        className="h-20 w-20 rounded-full"
        resizeMode="cover"
      />
    </View>
  );
};
