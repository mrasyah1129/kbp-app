
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

interface HeroSectionProps {
  image: string;
  title?: string;
  onViewMore?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  image,
  title,
  onViewMore,
}) => {
  return (
    <View style={styles.heroContainer}>
      <Image source={{ uri: image }} style={styles.heroImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.gradient}
      />
      <View style={styles.heroContent}>
        <TouchableOpacity style={styles.viewMoreButton} onPress={onViewMore}>
          <Text style={styles.viewMoreText}>View More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    height: height * 0.25,
    position: 'relative',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50%',
  },
  heroContent: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewMoreButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  viewMoreText: {
    color: '#333',
    fontWeight: '500',
    fontSize: 14,
  },
});
