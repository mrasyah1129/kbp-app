import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import KbpaIcon from '../../assets/images/baseIcon/KbpaFullColor.svg';
import Menu from '@/assets/icon/MenuBar.svg'
interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showMenu?: boolean;
  onBackPress?: () => void;
  onMenuPress?: () => void;
  gradient?: string[];
  showLogo?: boolean;
  colors?: readonly [import('react-native').ColorValue, import('react-native').ColorValue, ...(import('react-native').ColorValue)[]];
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  showMenu = true,
  onBackPress,
  onMenuPress,
  colors = [Colors.primary, Colors.primary],
  showLogo = true
}) => {
  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      router.back();
    }
  };

  const handleMenuPress = () => {
    if (onMenuPress) {
      onMenuPress();
    } else {
      console.log('Menu pressed');
    }
  };

  return (
    <LinearGradient colors={colors} style={styles.header}>
        <View style={styles.headerContent}>
          <KbpaIcon width={55} />
          {showBack ? (
            <TouchableOpacity style={styles.button} onPress={handleBackPress}>
              <Ionicons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
          ) : (
            <View style={styles.button} />
          )}

          {showMenu ? (
            <TouchableOpacity style={styles.button} onPress={handleMenuPress}>
              <Menu width={24} height={24} fill="white" />
            </TouchableOpacity>
          ) : (
            <View style={styles.button} />
          )}
        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    margin: 0,
    paddingBottom: 10,
    paddingTop: 10,
  },
  safeAreaView: {
    padding: 0,
    margin: 0,
    justifyContent: 'space-between',
    flex: 0,      
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});