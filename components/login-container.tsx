import React from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { cn } from '~/utils/tailwind';

export function LoginContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <SafeAreaView className="mt-36 flex-1 items-center rounded-3xl bg-background">
      <Image
        source={require('~/assets/kangaroo_logo.png')} // ajuste o caminho conforme sua pasta
        className="absolute -top-24 z-50 size-40 rounded-full"
        resizeMode="contain"
      />
      <View className={cn('h-full w-full flex-1 bg-background p-6 pt-14', className)}>
        {children}
      </View>
    </SafeAreaView>
  );
}
