import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const GetToKnowUsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={styles.containerGetCircle}>
            <View style={styles.orangeCircle}/>
            <Text style={styles.boldText}>Get</Text>
        </View>
        <Text style={styles.normalText}> to Know Us</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
}
  const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 40,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  orangeCircle: {
    backgroundColor: '#F57C00',
    borderRadius: 20,
    position: 'absolute',
    width: 40,
    height: 40,
    left: -17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerGetCircle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Poppins_700Bold'
  },
  normalText: {
    fontSize: 35,
    color: '#000',
    marginLeft: 3,
    fontFamily: 'PlayfairDisplay_700Bold',
  },
  button: {
    borderWidth: 2,
    borderColor: '#F57C00',
    borderRadius: 400,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 20,
  },
});
