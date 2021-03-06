import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 10,
  },
  button: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#A0A0A0',
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 16,
  },
});

const ItemButton = (props) => (
  <TouchableOpacity onPress={() => props.nav.navigate(props.target)} style={styles.buttonContainer}>
    <View style={styles.button} backgroundColor="#DEDEDE">
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

export default (props) => (
  <ScrollView contentContainerStyle={styles.container}>
    <ItemButton color="#C62828" icon="smartphone" text="Onboarding Transitions" nav={props.navigation} target="onboardingC" />
    <ItemButton color="#C62828" icon="smartphone" text="Onboarding Transitions" nav={props.navigation} target="onboarding" />

    <ItemButton color="#D32F2F" icon="shopping-cart" text="Shoe Shopping" nav={props.navigation} target="shoes" />
    <ItemButton color="#E53935" icon="list" text="FlatList" nav={props.navigation} target="flatlist" />
    <ItemButton color="#F44336" icon="film" text="Animated Property" nav={props.navigation} target="animatedProperty" />
  </ScrollView>
);
