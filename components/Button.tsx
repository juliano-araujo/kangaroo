import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { cn } from '~/utils/tailwind';

const buttonVariants = cva(
  'inline-flex items-left justify-center p-4 gap-2 whitespace-nowrap rounded-lg transition-all',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        outline: 'border border-input bg-background',
        secondary: 'bg-secondary text-secondary-foreground',
        ghost: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const textVariants = cva('text-lg font-medium text-center', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      outline: '',
      ghost: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type ButtonProps = {
  title?: string;
  icon?: React.ReactNode;
} & TouchableOpacityProps &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<View, ButtonProps>(
  ({ title, icon, variant, className, children, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className={cn(buttonVariants({ variant, className }))}>
        <Text className={cn(textVariants({ variant, className }))}>
          {icon && <>{icon}</>}
          {title && <>{title}</>}
        </Text>
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';

// const styles = {
//   button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
//   buttonText: 'text-white text-lg font-semibold text-center',
// };
