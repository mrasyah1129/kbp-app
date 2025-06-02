
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Navigate to main app
    router.replace('/(tabs)/attractions');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#2E86AB', '#4A90E2', '#6A9BD1']}
        style={styles.gradient}
      >
        <KeyboardAvoidingView 
          style={styles.keyboardContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <View style={styles.logoSection}>
            <View style={styles.logoContainer}>
              <Text style={[styles.logoChar, { color: '#FF6B6B' }]}>K</Text>
              <Text style={[styles.logoChar, { color: '#4ECDC4' }]}>B</Text>
              <Text style={[styles.logoChar, { color: '#FFE66D' }]}>P</Text>
              <Text style={[styles.logoChar, { color: '#FF6B6B' }]}>a</Text>
              <Text style={styles.logoSubText}>yuk</Text>
            </View>
          </View>

          <View style={styles.titleSection}>
            <Text style={styles.title}>Login to</Text>
            <Text style={styles.title}>Your Account</Text>
            <Text style={styles.subtitle}>Enter your login information</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#7A7A7A" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Your Email"
                placeholderTextColor="#7A7A7A"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#7A7A7A" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#7A7A7A"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <View style={styles.optionsContainer}>
              <TouchableOpacity 
                style={styles.rememberContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                  {rememberMe && <Ionicons name="checkmark" size={12} color="white" />}
                </View>
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.forgotText}>forgot password</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>login</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signupSection}>
            <Text style={styles.signupText}>Don't have account? </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoChar: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  logoSubText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 4,
  },
  titleSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 10,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 30,
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: '#E8F4F8',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    backgroundColor: '#E8F4F8',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#2E86AB',
  },
  rememberText: {
    fontSize: 14,
    color: '#7A7A7A',
  },
  forgotText: {
    fontSize: 14,
    color: '#7A7A7A',
  },
  loginButton: {
    backgroundColor: '#F18F01',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  signupSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  signupLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
