import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import HomePlayScreen from './HomePlayScreen'; // Importez le fichier HomePlayScreen.js

// Importer l'image
import imageSrc from '../logo.png'; // le chemin de l'image

export default function HomeScreen() {
  const [showHomePlay, setShowHomePlay] = useState(false); // État pour afficher HomePlayScreen

  const handleStartPress = () => {
    setShowHomePlay(true); // Afficher HomePlayScreen lorsque le bouton est pressé
  };

  if (showHomePlay) {
    return <HomePlayScreen />; // Afficher HomePlayScreen si showHomePlay est vrai
  }

  return (
    <View style={styles.container}>
      {/* Afficher l'image */}
      <Image source={imageSrc} style={styles.image} />
      {/* Afficher le texte avec les couleurs personnalisées */}
      <Text>
        Retrouvez le juste prix entre{" "}
        <Text style={styles.numberText}>0</Text> et{" "}
        <Text style={styles.numberText}>1000</Text>
      </Text>
      {/* Ajouter un bouton personnalisé */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleStartPress}
      >
        <Text style={styles.buttonText}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  numberText: {
    color: 'orange', // Couleur des nombres personnalisée
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'purple', // Couleur de fond du bouton
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white', // Couleur du texte du bouton
    fontSize: 18,
  },
});
