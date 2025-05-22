import { View, Text, FlatList, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';

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
  const router = useRouter();
  
  const handleTrackExercise = (exercise: Exercise) => {
    // @ts-ignore - Ignorando erro de tipo temporariamente
    router.push({
      pathname: '/tracking',
      params: { 
        exerciseId: exercise.id,
        exerciseName: exercise.name
      }
    });
  };
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
          <TouchableOpacity 
            style={styles.card}
            onPress={() => handleTrackExercise(item)}
          >
            <View style={styles.cardContent}>
              <Ionicons name="bicycle-outline" size={28} color="#000" />
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    height: 80,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: { 
    fontSize: 22,
    marginLeft: 16,
    color: '#1F2937',
    fontWeight: '600',
    lineHeight: 28,
  },
});
