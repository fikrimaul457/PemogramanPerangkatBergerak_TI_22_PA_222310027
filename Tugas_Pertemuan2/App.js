import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import No1_2 from './components/No1_2';
import No3 from './components/No3';
import No4rcc from './components/No4rcc';
import No4rfc from './components/No4rfc';


export default function App() {
  return (
    <View style={styles.container}>
      <No1_2 />
      {/* <No3/> */}
      {/* <No4rcc /> */}
      {/* <No4rfc/> */}
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
