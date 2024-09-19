import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const styles = StyleSheet.create({
    image:{
        height: 100,
        padding: 20,
        alignSelf: 'center'
    },
    titulo:{
        fontSize: 40,
        textAlign: 'center',
        margin: 20,
        fontFamily: 'Open Sans',
        fontWeight: '800',
    },
    card:{
      justifyContent:'center'
    }
})

const detalhe = () =>{
    const {filme} = useLocalSearchParams();
    const filmeObject = JSON.parse(filmes);

    return(
        <View style={StyleSheet.card}>
            <Image source={{uri: filmesObject.Image}} style= {styles.image}></Image>
            <Text style={styles.titulo}>{filmesObject.titulo}</Text>
        </View>
    );
}

export default detalhe