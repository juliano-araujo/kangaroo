import { Stack } from 'expo-router';
import '../global.css';

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: '#ffffff' },
          headerShown: false,
        }}
      />
    </>
  );
}
