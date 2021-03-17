import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, Ziv!</Text>
      <Text>Your next place to visit is:</Text>
      <Text></Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://avatars.mds.yandex.net/get-zen_doc/3414416/pub_600417b4fd62ee06898cf283_600573e9f8011c4a01b2d267/scale_1200',
        }}
      />
      <Text></Text>
      <Button
        //onPress={onPressLearnMore}
        title="Book a trip"
        color="#841584"
        accessibilityLabel="Book a trip"
      />
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
  tinyLogo: {
    width: 300,
    height: 300,
  },
});
