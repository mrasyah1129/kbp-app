import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { TabBarIcon } from '@/components/ui/TabBarIcon';

import Home from '@/assets/icon/Home.svg';
import Bus from '@/assets/icon/Bus.svg';
import News from '@/assets/icon/News.svg';
import KbpYuk from '@/assets/icon/KbpYuk.svg';
import Location from '@/assets/icon/Maps.svg';

import HomeOutline from '@/assets/icon/Home-outline.svg';
import BusOutline from '@/assets/icon/Bus-outline.svg';
import NewsOutline from '@/assets/icon/News-outline.svg';
import KbpYukOutline from '@/assets/icon/KbpYuk-outline.svg';
import LocationOutline from '@/assets/icon/Maps-outline.svg';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {
            elevation: 0,
            shadowColor: 'transparent',
          },
        }),
      }}>
    <Tabs.Screen
      name="home"
      options={{
        title: 'Beranda',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon Icon={focused ? Home : HomeOutline} focused={focused} />,
      }}
    />

    <Tabs.Screen
      name="bus"
      options={{
        title: 'Bus & Shuttle',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon Icon={focused ? Bus : BusOutline} focused={focused} />,
      }}
    />

    <Tabs.Screen
      name="explore"
      options={{
        title: 'Berita',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon Icon={focused ? News : NewsOutline} focused={focused} />,
      }}
    />

    <Tabs.Screen
      name="attractions"
      options={{
        title: 'KBP Yuk',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon Icon={focused ? KbpYuk : KbpYukOutline} focused={focused} />,
      }}
    />

    <Tabs.Screen
      name="maps"
      options={{
        title: 'KBP Maps',
        tabBarIcon: ({ focused }) =>
          <TabBarIcon Icon={focused ? Location : LocationOutline} focused={focused} />,
      }}
    />
    </Tabs>
  );
}
