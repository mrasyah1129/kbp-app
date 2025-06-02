
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { WellnessCard } from './WellnessCard';
import { WellnessItem } from '@/lib/types/wellness';

interface CategorySectionProps {
  title: string;
  data: WellnessItem[];
  onItemPress: (item: WellnessItem) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  data,
  onItemPress,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <WellnessCard
            title={item.name}
            subtitle={item.description}
            image={item.image}
            category={item.category}
            onPress={() => onItemPress(item)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  listContainer: {
    paddingHorizontal: 8,
  },
});
