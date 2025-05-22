import { View, Text, FlatList, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface Exercise {
  id: string;
  name: string;
}

const exercises: Exercise[] = [
  { id: '1', name: 'Exercício x' },
  { id: '2', name: 'Exercício y' },
  { id: '3', name: 'Exercício z' },
  { id: '4', name: 'Exercício w' },
];

export default function ExerciseList() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Meus Exercícios</Text>
          <Text style={styles.subtitle}>Selecione um exercício</Text>
        </View>
        <Image
          source={require('../assets/mascote.png') as ImageSourcePropType}
          style={styles.avatar}
        />
      </View>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name="bicycle-outline" size={28} color="#000" />
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 8,
  },
  title: { 
    fontSize: 28, 
    fontWeight: '700',
    color: '#111827',
    fontFamily: 'Inter_700Bold',
  },
  subtitle: { 
    fontSize: 16, 
    color: '#6B7280',
    marginTop: 4,
    fontFamily: 'Inter_400Regular',
  },
  avatar: { 
    width: 56, 
    height: 56, 
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  list: { 
    gap: 12,
    paddingBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 28, // Aumentei o padding vertical
    paddingHorizontal: 24,
    minHeight: 100, // Altura mínima aumentada
    borderRadius: 16, // Bordas mais arredondadas
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: { 
    fontSize: 18,
    marginLeft: 16,
    color: '#1F2937',
    fontWeight: '600',
    lineHeight: 24,
  },
});
