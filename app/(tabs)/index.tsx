
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#2E86AB', '#A23B72', '#F18F01']}
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
        
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor="#666"
          />
        </View>
      </LinearGradient>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop' }}
            style={styles.heroImage}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.7)']}
            style={styles.heroOverlay}
          >
            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>get fit &</Text>
              <Text style={styles.heroTitle}>go further</Text>
              <Text style={styles.heroSubtitle}>only at</Text>
              <View style={styles.brandContainer}>
                <Ionicons name="water" size={24} color="white" />
                <Text style={styles.brandText}>Bumi</Text>
                <Text style={styles.brandText}>PANCASONA</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.ctaSection}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaText}>Explore KBPa with us!</Text>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>Start Here</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.whySection}>
          <View style={styles.whyCard}>
            <View style={styles.orangeDot} />
            <Text style={styles.whyTitle}>Why? KPBa</Text>
          </View>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop' }}
            style={styles.whyImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginBottom: 20,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
  },
  heroSection: {
    height: height * 0.4,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  heroContent: {
    alignItems: 'flex-start',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 38,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
  },
  ctaSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  ctaCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  ctaButton: {
    backgroundColor: '#F18F01',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  whySection: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  whyCard: {
    backgroundColor: '#2E86AB',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  orangeDot: {
    width: 20,
    height: 20,
    backgroundColor: '#F18F01',
    borderRadius: 10,
    marginRight: 15,
  },
  whyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  whyImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
  },
});
