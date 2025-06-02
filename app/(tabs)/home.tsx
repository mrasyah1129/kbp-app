
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Sidebar from '@/components/Sidebar';
import ContentSlider from '@/components/ContentSlider';
import { Header } from '@/components/layout/Header';
import { Colors } from '@/constants/Colors';
import Pancasona from '@/assets/images/home/Pancasona.svg';
import SearchInput from '@/components/common/SearchInput';
import { Image } from '@gluestack-ui/themed';
import { GetToKnowUsSection } from '@/components/view/home/GetToKnowUsSection';

const { width, height : screenHeight } = Dimensions.get('window');

export default function HomeScreen() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleMenuPress = () => {
    setSidebarVisible(true);
  };

  const handleSidebarClose = () => {
    setSidebarVisible(false);
  };

  const handleLogin = () => {
    setSidebarVisible(false);
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.container}>
          {/* Header */}
        <Header title="Bus & Shuttle" />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Bumi Pancasona Section */}
          <View style={styles.pancasonaSection}>
            <Image
              source={require('@/assets/images/home/mainHome.png')}
              style={styles.pancasonaImage}
            />
            <LinearGradient
              colors={['rgba(0,0,0,0.4)', 'transparent']}
              style={styles.pancasonaOverlay}
            >
              <SearchInput />
              <View style={styles.pancasonaContent}>
                 <View style={styles.overlay}>
                  <View className='flex-row items-center'>
                    <Text style={styles.mainText}>get fit </Text>
                    <Text style={styles.mainText} className='mt-6 ml-2'>&</Text>
                  </View>
                  <Text style={styles.mainText}>go further</Text>
                  <Text style={styles.subText}>only at</Text>
                </View>
                <Pancasona fill="white" style={styles.pancasonaImages} />
              </View>
            </LinearGradient>
          </View>

          <View style={styles.exploreSection}>
            <View style={styles.exploreCard}>
              <Text style={styles.exploreText}>Explore KBPa with us!</Text>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Start Here</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Content Slider */}
          <ContentSlider />

          <GetToKnowUsSection />

        </ScrollView>
      <Sidebar
        visible={sidebarVisible}
        onClose={handleSidebarClose}
        onLogin={handleLogin}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoChar: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoSubText: {
    fontSize: 12,
    color: 'white',
    marginLeft: 2,
  },
  menuButton: {
    padding: 5,
  },
  pancasonaSection: {
    position: 'relative',
  },
  pancasonaImage: {
    width: '100%',
    height: 550,
    resizeMode: 'cover',
  },
  pancasonaOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 40,
    justifyContent: 'flex-start',
  },
  pancasonaContent: {
    height: '100%',
    justifyContent: 'flex-end',
    paddingBottom: 100,
  },
  pancasonaTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
  },
 overlay: {
  },
  mainText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Poppins_700Bold',
  },
  subText: {
    color: 'white',
    fontWeight: 'light',
    fontSize: 20,
    marginTop: 10,
    fontFamily: 'Inter_400Regular',
  },
  pancasonaImages:{
    padding:0,
  },
   exploreSection: {
    paddingHorizontal: 50,
    marginTop: -30,
    zIndex: 1,
  },
  exploreCard: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  exploreText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
   startButton: {
    backgroundColor: '#FF6B35',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  startButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
});
