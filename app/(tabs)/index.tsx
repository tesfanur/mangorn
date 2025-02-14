import { Image, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Home</Text>
      <Text style={{ fontSize: 16, padding: 10 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem ducimus at neque pariatur, unde ab? Totam tenetur ipsum assumenda repellat quidem quisquam impedit aspernatur quia quasi nisi. Rem, incidunt!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
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
