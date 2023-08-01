import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';


function MyCustomButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
      <Text style={styles.buttontext}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  if(count<=0){
    alert("Sayaç negatif olamaz");
  }
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={{ uri: "https://picsum.photos/id/28/320/200" }} style={styles.image} />
        <Text style={styles.ts}>Counter : {count}</Text>
        <Text style={styles.subtitle}>Click buttons to change counter</Text>
        <View style={styles.buttonContainer}>
          <MyCustomButton title="Increment + " onPress={handleIncrement} />
          <MyCustomButton title="Decrement - " onPress={handleDecrement} style={{ marginStart: 16, backgroundColor: "pink" }} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    justifyContent: "center",
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 12,
    marginHorizontal: 10,
  },
  ts: {
    marginTop: 10,
    fontSize: 20,
  },
  subtitle: {
    color: "gray",
    fontSize: 20,
    marginTop: 4,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "lightblue",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    flex: 1,
  },
  buttontext: {
    fontSize: 20,
    color: "black",
  },
});
