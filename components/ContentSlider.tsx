import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';

const { width } = Dimensions.get('window');

type SlideData = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
};

const slides: SlideData[] = [
  {
    id: 1,
    title: 'Why? KPBa',
    subtitle: 'Easy Access',
    description:
      'Akses yang mudah membawamu lebih cepat untuk datang ke KBPa! Cukup 30 menit saja dari Jakarta dengan Whoosh atau dapat diakses dengan tel Cipularang.',
    imageUrl:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop',
    backgroundColor: '#4A90E2',
  },
  {
    id: 2,
    title: 'Nature Experience',
    subtitle: 'Green Environment',
    description:
      'Nikmati pengalaman alam yang menyegarkan di tengah udara pegunungan yang sejuk dan pemandangan hijau yang memukau.',
    imageUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
    backgroundColor: '#2E86AB',
  },
  {
    id: 3,
    title: 'Family Time',
    subtitle: 'Quality Moments',
    description:
      'Ciptakan momen berkualitas bersama keluarga dengan berbagai aktivitas menarik dan fasilitas yang ramah keluarga.',
    imageUrl:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=400&fit=crop',
    backgroundColor: '#A23B72',
  },
];

export default function ContentSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <View style={styles.slideWrapper}>
            <View style={styles.headerBadgeWrapper}>
              <View style={[styles.headerBadge, { backgroundColor: item.backgroundColor }]}>
                <View style={styles.circleTop}/>
                <Text style={styles.badgeText} className='rounded-full'>{item.title}</Text>
              </View>
            </View>

            <View style={styles.cardContainer}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <LinearGradient
                colors={['transparent', 'rgb(0, 0, 0)']}
                style={styles.gradientOverlay}
              >
                <Text style={styles.slideTitle}>{item.subtitle}</Text>
                <Text style={styles.slideDesc}>{item.description}</Text>
              </LinearGradient>
            </View>
          </View>
      )}

      />
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => {
          const isFirst = index === 0;
          const isLast = index === slides.length - 1;
          return (
            <View
              key={index}
              style={[
                styles.indicatorDot,
                activeIndex === index && styles.activeDot,
                isFirst && styles.leftRounded,
                isLast && styles.rightRounded,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    padding: 20,
    justifyContent: 'flex-end',
  },
  slideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'Poppins_600SemiBold',
  },
  slideDesc: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Poppins_500Medium',
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Poppins_500Medium',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicatorDot: {
    width: width * 0.18,
    height: 8,
    backgroundColor: '#ccc',
  },
  activeDot: {
    backgroundColor: Colors.primary,
  },
  slideWrapper: {
    width: width * 0.85,
    marginHorizontal: width * 0.075,
    marginBottom: 40,
    marginTop: 50,
    alignItems: 'center',
    position: 'relative',
  },
headerBadgeWrapper: {
  position: 'absolute',
  top: -25,
  zIndex: 10,
},
headerBadge: {
  paddingVertical: 10,
  paddingHorizontal: 25,
  borderRadius: 20,
  elevation: 4,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 4,
  alignItems: 'center',
},
cardContainer: {
  width: '100%',
  height: 450,
  borderRadius: 25,
  overflow: 'hidden',
  position: 'relative',
},
circleTop: {
  position: 'absolute',
  width: 30,
  height: 30,
  top: -15,
  borderRadius: 200,
  backgroundColor: '#F18F01',
},
leftRounded: {
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
},
rightRounded: {
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
},
});
