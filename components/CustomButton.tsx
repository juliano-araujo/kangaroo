import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { cn } from '~/utils/tailwind';

type IoniconName = ComponentProps<typeof Ionicons>['name'];

type CustomButtonProps = TouchableOpacityProps & {
  icon: IoniconName;
  name: string;
  className?: string;
};

function CustomButton({ icon, name, className, ...props }: CustomButtonProps) {
  return (
    <TouchableOpacity
      className={cn(
        'mb-4 flex-row items-center rounded-xl border border-border bg-card p-4 shadow-md',
        className
      )}
      {...props}>
      <Ionicons name={icon} size={28} color="#4A5568" className="mr-4" />
      <Text className="text-lg font-semibold text-foreground">{name}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
