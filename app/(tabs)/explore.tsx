
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@/components/layout/Header';

const { width } = Dimensions.get('window');

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Berita & Event</Text>
        </View>

        <View style={styles.eventCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=400&fit=crop' }}
            style={styles.eventImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.eventOverlay}
          >
            <View style={styles.eventBadge}>
              <Text style={styles.eventBadgeText}>EVENT</Text>
            </View>
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>Bumi Hejo : Nite Owl Market Hadir Kembali!</Text>
              <Text style={styles.eventDescription}>
                Nite Owl Market kembali hadir dengan konsep yang lebih menarik!
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.eventCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&h=400&fit=crop' }}
            style={styles.eventImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.eventOverlay}
          >
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>City of Happiness</Text>
              <Text style={styles.eventDescription}>
                Scenic sights, waterfront restaurants and more
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.eventCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop' }}
            style={styles.eventImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.eventOverlay}
          >
            <View style={styles.eventContent}>
              <Text style={styles.eventTitle}>Waterfront Experience</Text>
              <Text style={styles.eventDescription}>
                Discover amazing waterfront activities and dining
              </Text>
            </View>
          </LinearGradient>
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
  eventCard: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    height: 250,
    position: 'relative',
  },
  eventImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  eventOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '70%',
    justifyContent: 'space-between',
    padding: 20,
  },
  eventBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  eventBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2E86AB',
  },
  eventContent: {
    justifyContent: 'flex-end',
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  eventDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 20,
  },
});
