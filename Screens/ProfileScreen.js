import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function CardWithInputs() {
  return (
    <View>
      <Text style={styles.numberText}>Paramètres</Text>  
    
    <View style={styles.card}>
      
      <Text style={styles.cardTitle}>Prix minimum</Text>
      
      <TextInput
        style={styles.input}
        placeholder="0"
      />
      
      <Text style={styles.cardTitle}>Prix maximum</Text>
      
      <TextInput
        style={styles.input}
        placeholder="1000"
      />

    </View>

    <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Simple Button pressed')}
      >
        <Text style={styles.buttonText}>Sauvegarder</Text>
      </TouchableOpacity>
      
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white"
  },
  numberText: {
    color: 'purple', // Couleur des nombres personnalisée
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    marginTop: 100,
  },
  button: {
    backgroundColor: 'purple', // Couleur de fond du bouton
    paddingVertical: 10,
    paddingHorizontal: 34,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center', // Centrer horizontalement
    width: '40%', // Limiter la largeur du bouton
    marginTop: 50,

  },
  buttonText: {
    color: 'white', // Couleur du texte du bouton
    fontSize: 16,
  },
});
