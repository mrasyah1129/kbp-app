
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  gradient?: string[];
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style,
  textStyle,
  gradient
}) => {
  const buttonStyles = [
    styles.button,
    styles[`${variant}Button`],
    styles[`${size}Button`],
    disabled && styles.disabledButton,
    style
  ];

  const textStyles = [
    styles.buttonText,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    disabled && styles.disabledText,
    textStyle
  ];

  if (gradient && variant === 'primary') {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.button, style]}>
        <LinearGradient colors={gradient} style={[styles.gradientButton, styles[`${size}Button`]]}>
          <Text style={textStyles}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} disabled={disabled}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientButton: {
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#2E86AB',
  },
  secondaryButton: {
    backgroundColor: '#FF6B35',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2E86AB',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  smallButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  mediumButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  largeButton: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  buttonText: {
    fontWeight: '600',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
  outlineText: {
    color: '#2E86AB',
  },
  disabledText: {
    color: '#999999',
  },
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 16,
  },
});
