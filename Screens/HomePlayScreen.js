import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import imageSrc from '../logo.png'; // le chemin de l'image

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Afficher l'image */}
      <Image source={imageSrc} style={styles.image} />  

      <Text>
        Retrouvez le juste prix entre{" "}
        <Text style={styles.numberText}>0</Text> et{" "}
        <Text style={styles.numberText}>1000</Text>
      </Text>
    
    <View style={styles.card}>
      
      <Text style={styles.cardTitle}>Prix minimum</Text>
      
      <TextInput
        style={styles.input}
        placeholder="0"
      />
      

      
      
      {/* Afficher le texte avec les couleurs personnalisées */}
      
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2c3e50",
    borderRadius: 10,
    padding: 20,
    marginTop: 50, // Ajustez cette valeur pour déplacer la carte vers le haut
    marginLeft: 20, // Ajustez cette valeur pour contrôler l'espacement latéral
    marginRight: 20, // Ajustez cette valeur pour contrôler l'espacement latéral
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
cardTitle: {
fontSize: 15,
fontWeight: "bold",
marginBottom: 10,
color: "white",
},
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