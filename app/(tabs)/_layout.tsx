import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Alert, Button, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '@/constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}
const handlePress = () => {
  Alert.alert('Button pressed!');
};


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // headerRight: () => (
          header: () => (
            <ImageBackground
              source={require('../../assets/images/edr-header.png')} // Path to your background image
              style={styles.background}
            >
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Pressable>
                  {({ pressed }) => (
                    <Link href="/modal" asChild >
                      <FontAwesome
                        name="magnet"
                        size={25}
                        color={Colors[colorScheme ?? 'light'].text}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    </Link>)}
                </Pressable>
              </View>
              <View>
                <View style={styles.container}>
                  <TouchableOpacity style={[styles.button, styles.buttonOneWayBg]} onPress={handlePress}>
                    {/* <Icon name="arrow-right" size={20} color="#FFF" style={styles.icon} /> */}
                    <FontAwesome
                      name="arrow-right"
                      size={10}
                      color={'white'}
                      style={{ marginRight: 15, }}
                    />
                    <Text style={styles.buttonText}>One Way</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.button, styles.buttonTwoWayBg]} onPress={handlePress}>
                    {/* <Icon name="rocket" size={20} color="#FFF" style={styles.icon} /> */}
                    <FontAwesome
                      name="arrows-h"
                      size={10}
                      color={"white"}
                      style={{ marginRight: 15, }}
                    />
                    <Text style={styles.buttonText}>Round Trip</Text>
                  </TouchableOpacity>
                  {/* <Button title="Round Trip" onPress={handlePress} /> */}
                </View>
              </View>
            </ImageBackground>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="train" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="ticket" color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1, // Make sure the background image covers the whole screen
    resizeMode: 'contain', // Scale the image appropriately
    // width: 1000
  },
  inner: {
    flex: 1, // Ensure content is rendered within the background image
  }, container: {
    color: "gray",
    flex: 1,
    flexDirection: "row",
    gap: 6,
    marginTop: 40,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row', // Align items horizontally
    padding: 10,
    borderRadius: 5,
    alignItems: 'center', // Center align icon and text vertically
  },
  buttonOneWayBg: {
    backgroundColor: '#ffcd00',
  },
  buttonTwoWayBg: {
    backgroundColor: '#b8cdbf',
  },
  icon: {
    marginRight: 10, // Space between icon and text
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
