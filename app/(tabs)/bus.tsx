
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components/layout/Header';

export default function BusScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <Header title="Bus & Shuttle" />

      <ScrollView style={styles.content}>
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Bus & Shuttle</Text>
        </View>

        <View style={styles.comingSoonContainer}>
          <Ionicons name="bus-outline" size={80} color="#2E86AB" />
          <Text style={styles.comingSoonTitle}>Coming Soon</Text>
          <Text style={styles.comingSoonText}>
            Bus and shuttle information will be available here
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  logoSubText: {
    fontSize: 14,
    color: 'white',
    marginLeft: 2,
  },
  menuButton: {
    padding: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleSection: {
    paddingVertical: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E3A59',
  },
  comingSoonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
  },
  comingSoonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E86AB',
    marginTop: 20,
    marginBottom: 10,
  },
  comingSoonText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
