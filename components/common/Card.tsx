
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  gradient?: string[];
}

export const Card: React.FC<CardProps> = ({ children, style, onPress, gradient }) => {
  const CardWrapper = gradient ? LinearGradient : View;
  const cardProps = gradient ? { colors: gradient } : {};

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
        <CardWrapper {...cardProps} style={styles.cardContent}>
          {children}
        </CardWrapper>
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.card, style]}>
      <CardWrapper {...cardProps} style={styles.cardContent}>
        {children}
      </CardWrapper>
    </View>
  );
};

interface ImageCardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  onPress?: () => void;
  badge?: string;
  style?: ViewStyle;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  subtitle,
  imageUrl,
  onPress,
  badge,
  style
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.imageCard, style]}>
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.imageOverlay}
      >
        {badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge}</Text>
          </View>
        )}
        <View style={styles.imageCardContent}>
          <Text style={styles.imageCardTitle}>{title}</Text>
          {subtitle && <Text style={styles.imageCardSubtitle}>{subtitle}</Text>}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    padding: 15,
  },
  imageCard: {
    borderRadius: 15,
    overflow: 'hidden',
    height: 200,
    position: 'relative',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 15,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2E86AB',
  },
  imageCardContent: {
    justifyContent: 'flex-end',
  },
  imageCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  imageCardSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
});
