import { Slot } from 'expo-router';
import { Image, View } from 'react-native';

export default function Layout() {
  return (
    <>
      <View className="flex-1 bg-primary">
        <Slot />
      </View>
    </>
  );
}
