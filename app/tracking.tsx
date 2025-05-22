import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';

type ExerciseTrackingScreenProps = {
  onBack?: () => void;
};

export default function ExerciseTrackingScreen({ onBack }: ExerciseTrackingScreenProps) {
  const { exerciseName = 'Exercício' } = useLocalSearchParams<{
    exerciseName?: string;
  }>();
  
  // Dados atuais (somente leitura)
  const currentStats = {
    distance: '2.5 km',
    time: '15:30 min',
  };

  // Estado para os novos valores (será implementado posteriormente)
  const newDistance = '';
  const newTime = '';

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{exerciseName}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Seção de Estatísticas Atuais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Seu Progresso Atual</Text>
          
          <View style={styles.statsContainer}>
            <View style={[styles.statItem, { flex: 1 }]}>
              <View style={[styles.statIcon, { backgroundColor: '#EFF6FF' }]}>
                <Ionicons name="walk" size={24} color="#3B82F6" />
              </View>
              <Text style={styles.statValue}>{currentStats.distance}</Text>
              <Text style={styles.statLabel}>Distância</Text>
            </View>
            
            <View style={[styles.statItem, { flex: 1 }]}>
              <View style={[styles.statIcon, { backgroundColor: '#F0FDF4' }]}>
                <Ionicons name="time" size={24} color="#10B981" />
              </View>
              <Text style={styles.statValue}>{currentStats.time}</Text>
              <Text style={styles.statLabel}>Tempo</Text>
            </View>
          </View>
        </View>

        {/* Seção de Nova Meta */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Novo Recorde</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nova Distância (km)</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="walk" size={20} color="#6B7280" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Ex: 3.5"
                keyboardType="numeric"
                value={newDistance}
                // onChangeText será implementado posteriormente
              />
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Novo Tempo (minutos)</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="time" size={20} color="#6B7280" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Ex: 30"
                keyboardType="numeric"
                value={newTime}
                // onChangeText será implementado posteriormente
              />
            </View>
          </View>
          
          <View style={styles.buttonContainer}>
            <View style={[styles.button, { backgroundColor: '#E2DD72' }]}>
              <Ionicons name="checkmark" size={20} color="#000" style={styles.buttonIcon} />
              <Text style={[styles.buttonText, { color: '#000' }]}>Salvar</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  backButton: {
    padding: 8,
  },
  headerRight: {
    width: 40,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 24,
  },
  section: {
    marginBottom: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 56,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    height: '100%',
  },
  buttonContainer: {
    marginTop: 24,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 16,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#4F46E5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  buttonIcon: {
    marginRight: 4,
  },
});
