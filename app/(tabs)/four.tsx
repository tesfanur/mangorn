import { Image, StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';

export default function TabTwoScreen() {
  return (
    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.title}>Tab Four</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1724384108758-dcc4f20518d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
            width: 300,
            height: 300
          }} />
        <EditScreenInfo path="app/(tabs)/two.tsx" />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
