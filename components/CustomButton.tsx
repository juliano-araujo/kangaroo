import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router'; // ou de onde você importa o Link
import { Text, TouchableOpacity } from 'react-native';

type CustomButtonProps = {
  id: string | number;
  href: any;
  icon: string;
  name: string;
};

export default function CustomButton({ id, href, icon, name }: CustomButtonProps) {
  return (
    <Link key={id} href={href} asChild>
      <TouchableOpacity className="mb-4 flex-row items-center rounded-xl border border-gray-200 bg-white p-4 shadow-md">
        <FontAwesome5 name={icon} size={28} color="#4A5568" className="mr-4" />
        <Text className="text-lg font-semibold text-gray-700">{name}</Text>
      </TouchableOpacity>
    </Link>
  );
}
