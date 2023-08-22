import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";


export default function AddScreen(){

    return(
        <View style={styles.container}>
      
      {/* Afficher le texte avec les couleurs personnalisées */}
        <Text style={styles.numberText}>Historique</Text>
        <Text style={styles.centeredText}>Commencez par jouer votre première partie pour consulter votre historique</Text>
      
        </View>
    )
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
      color: 'purple', // Couleur des nombres personnalisée
      fontWeight: 'bold',
      fontSize: 35,
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
    centeredText: {
        textAlign: 'center', // Centrer le texte horizontalement
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold',
      },
  });