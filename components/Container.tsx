import { SafeAreaView } from 'react-native';
import { cn } from '~/utils/tailwind';

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <SafeAreaView className={cn('m-6 flex flex-1', className)}>{children}</SafeAreaView>;
};
