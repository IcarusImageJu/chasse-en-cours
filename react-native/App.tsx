import { StatusBar } from 'expo-status-bar';
import { collection, DocumentData, getDocs, getFirestore, QuerySnapshot } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firestore from './providers/firebase/firestore';

export default function App() {
  const [data, setData] = useState<QuerySnapshot<DocumentData> | undefined>(undefined)
  const test = async () => {
    const querySnapshot = await getDocs(collection(firestore, "hunts"))
   setData(querySnapshot)
  }
  useEffect(() => {
    test()
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{data?.docs.map(d => JSON.stringify(d.data()))}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
