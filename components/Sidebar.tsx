
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

interface SidebarProps {
  visible: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export default function Sidebar({ visible, onClose, onLogin }: SidebarProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.overlayTouch} onPress={onClose} />
        
        <LinearGradient
          colors={['#2E86AB', '#4A90E2']}
          style={styles.sidebar}
        >
          <SafeAreaView style={styles.sidebarContent}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.logoContainer}>
                <Text style={[styles.logoChar, { color: '#FF6B6B' }]}>K</Text>
                <Text style={[styles.logoChar, { color: '#4ECDC4' }]}>B</Text>
                <Text style={[styles.logoChar, { color: '#FFE66D' }]}>P</Text>
                <Text style={[styles.logoChar, { color: '#FF6B6B' }]}>a</Text>
                <Text style={styles.logoSubText}>yuk</Text>
              </View>
              <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* Bumi Pancasona Section */}
            <View style={styles.pancasonaSection}>
              <View style={styles.pancasonaContent}>
                <Ionicons name="leaf-outline" size={20} color="white" />
                <Text style={styles.pancasonaTitle}>Bumi</Text>
                <Text style={styles.pancasonaSubtitle}>PANCASONA</Text>
              </View>
            </View>

            {/* Menu Items */}
            <View style={styles.menuSection}>
              <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="leaf-outline" size={20} color="white" />
                <Text style={styles.menuText}>Hayu hejo</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="people-outline" size={20} color="white" />
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuText}>Info Warga</Text>
                  <Ionicons name="chevron-down" size={16} color="white" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.subMenuItem}>
                <Text style={styles.subMenuText}>Layanan</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.subMenuItem}>
                <Text style={styles.subMenuText}>Tagihan</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.subMenuItem}>
                <Text style={styles.subMenuText}>Woro-woro</Text>
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity style={styles.menuItem}>
                <Ionicons name="shield-outline" size={20} color="white" />
                <Text style={styles.menuText}>Emergency</Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <View style={styles.loginSection}>
              <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
                <Ionicons name="log-in-outline" size={20} color="white" />
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  overlayTouch: {
    flex: 1,
  },
  sidebar: {
    width: width * 0.75,
    height: '100%',
  },
  sidebarContent: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
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
  closeButton: {
    padding: 5,
  },
  pancasonaSection: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  pancasonaContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pancasonaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  pancasonaSubtitle: {
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
    letterSpacing: 1,
  },
  menuSection: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  menuText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 15,
  },
  subMenuItem: {
    paddingVertical: 10,
    paddingLeft: 35,
  },
  subMenuText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: 20,
  },
  loginSection: {
    paddingTop: 20,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.3)',
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
});
