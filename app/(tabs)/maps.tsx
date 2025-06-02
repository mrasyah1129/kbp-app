
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

// Only import MapView on native platforms
let MapView: any = null;
let Marker: any = null;

if (Platform.OS !== 'web') {
  try {
    const Maps = require('react-native-maps');
    MapView = Maps.default || Maps;
    Marker = Maps.Marker;
  } catch (error) {
    console.warn('react-native-maps not available:', error);
  }
}

const { width, height } = Dimensions.get('window');

export default function MapsScreen() {
  const markers = [
    { id: 1, coordinate: { latitude: -6.2, longitude: 106.816666 }, title: 'Attraction 1', color: '#F18F01' },
    { id: 2, coordinate: { latitude: -6.21, longitude: 106.826666 }, title: 'Restaurant 1', color: '#FF6B6B' },
    { id: 3, coordinate: { latitude: -6.19, longitude: 106.806666 }, title: 'Hotel 1', color: '#4ECDC4' },
    { id: 4, coordinate: { latitude: -6.22, longitude: 106.836666 }, title: 'Shop 1', color: '#45B7D1' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#2E86AB', '#A23B72']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <View style={styles.logoColors}>
              <Text style={[styles.logoChar, { color: '#FF6B6B' }]}>K</Text>
              <Text style={[styles.logoChar, { color: '#4ECDC4' }]}>B</Text>
              <Text style={[styles.logoChar, { color: '#FFE66D' }]}>P</Text>
              <Text style={[styles.logoChar, { color: '#FF6B6B' }]}>a</Text>
            </View>
            <Text style={styles.logoSubText}>yuk</Text>
            <Text style={styles.mapsText}>Maps</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.categoryButton}>
              <Ionicons name="chevron-down" size={16} color="#2E86AB" />
            </TouchableOpacity>
            <Text style={styles.categoryText}>Caffe</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.mapContainer}>
        {Platform.OS === 'web' ? (
          <View style={styles.webMapPlaceholder}>
            <Ionicons name="map" size={64} color="#ccc" />
            <Text style={styles.webMapText}>Maps are not available on web</Text>
            <Text style={styles.webMapSubText}>Use the mobile app to view maps</Text>
            
            <View style={styles.markersPreview}>
              <Text style={styles.markersTitle}>Locations:</Text>
              {markers.map((marker) => (
                <View key={marker.id} style={styles.markerItem}>
                  <View style={[styles.markerDot, { backgroundColor: marker.color }]} />
                  <Text style={styles.markerText}>{marker.title}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          MapView && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: -6.2,
                longitude: 106.816666,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
            >
              {markers.map((marker) => (
                <Marker
                  key={marker.id}
                  coordinate={marker.coordinate}
                  title={marker.title}
                >
                  <View style={[styles.customMarker, { backgroundColor: marker.color }]}>
                    <Ionicons name="location" size={20} color="white" />
                  </View>
                </Marker>
              ))}
            </MapView>
          )
        )}
      </View>
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
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoColors: {
    flexDirection: 'row',
  },
  logoChar: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoSubText: {
    fontSize: 12,
    color: 'white',
    marginLeft: 2,
    marginRight: 15,
  },
  mapsText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 8,
    marginRight: 10,
  },
  categoryText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '500',
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  customMarker: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  webMapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  webMapText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
    textAlign: 'center',
  },
  webMapSubText: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    textAlign: 'center',
  },
  markersPreview: {
    marginTop: 32,
    width: '100%',
    maxWidth: 300,
  },
  markersTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  markerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  markerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  markerText: {
    fontSize: 14,
    color: '#333',
  },
});
