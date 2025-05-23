import { TextInput as TextInputBase, TextInputProps } from 'react-native';
import { cn } from '~/utils/tailwind';

type Props = TextInputProps;

export function TextInput({ className, ...props }: Props) {
  return (
    //
    <TextInputBase
      className={cn(
        'border-input text-foreground flex rounded-lg border bg-background p-4 text-xl ring-offset-background',
        className
      )}
      {...props}
    />
  );
}
