
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

const { width } = Dimensions.get('window');

export default function AttractionsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#2E86AB', '#A23B72']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>KBPa</Text>
            <Text style={styles.logoSubText}>yuk</Text>
          </View>
          <TouchableOpacity style={styles.menuButton}>
            <Ionicons name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroCard}>
          <View style={styles.orangeDot} />
          <Text style={styles.heroText}>Things To Do at KPBa</Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Attractions</Text>
        </View>

        <View style={styles.attractionCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop' }}
            style={styles.attractionImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.attractionOverlay}
          >
            <View style={styles.attractionContent}>
              <Text style={styles.attractionTitle}>Wahoo Waterworld</Text>
              <Text style={styles.attractionDescription}>
                Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit me
              </Text>
              <TouchableOpacity style={styles.viewMoreButton}>
                <Text style={styles.viewMoreText}>View More</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Food</Text>
        </View>

        <View style={styles.attractionCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop' }}
            style={styles.attractionImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.attractionOverlay}
          >
            <View style={styles.attractionContent}>
              <Text style={styles.attractionTitle}>Culinary Experience</Text>
              <Text style={styles.attractionDescription}>
                Discover amazing local and international cuisine at KBPa
              </Text>
              <TouchableOpacity style={styles.viewMoreButton}>
                <Text style={styles.viewMoreText}>View More</Text>
              </TouchableOpacity>
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
  heroCard: {
    backgroundColor: '#2E86AB',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  orangeDot: {
    width: 20,
    height: 20,
    backgroundColor: '#F18F01',
    borderRadius: 10,
    marginRight: 15,
  },
  heroText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionHeader: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E3A59',
  },
  attractionCard: {
    marginBottom: 30,
    borderRadius: 15,
    overflow: 'hidden',
    height: 400,
    position: 'relative',
  },
  attractionImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  attractionOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    justifyContent: 'flex-end',
    padding: 20,
  },
  attractionContent: {
    justifyContent: 'flex-end',
  },
  attractionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  attractionDescription: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    lineHeight: 20,
    marginBottom: 15,
  },
  viewMoreButton: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },
  viewMoreText: {
    color: '#2E86AB',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
