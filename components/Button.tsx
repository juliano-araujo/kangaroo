import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
  variant?: 'default' | 'outline';
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, variant = 'default', ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${variant === 'outline' ? styles.outlineButton : styles.button} ${touchableProps.className}`}>
      <Text className={variant === 'outline' ? styles.outlineButtonText : styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});

Button.displayName = 'Button';

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  outlineButton: 'items-center border-2 border-indigo-500 rounded-[28px] p-4',
  outlineButtonText: 'text-indigo-500 text-lg font-semibold text-center',
};
