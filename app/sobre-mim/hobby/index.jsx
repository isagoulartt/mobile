import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Link } from "expo-router";

const style= StyleSheet.create({

        container:{
         margin:12,
          padding:10
        },
        
        imagem:{
         height:160,
         width:100,
         padding:60,
         alignSelf:'center'
        },
        
        titulo:{
          fontFamily:"courrier new",
          fontSize:20,
          textAlign:'center'
        }
        })
        


export default filmes = () => {
    const filmes = [
      { id: 1, titulo: 'Fazer a unha ', Image: require ('../img/unha.png') },
      { id: 2, titulo: 'Ir para a academia',  Image: require ('../img/acad.png')},
      { id: 3, titulo: 'Estudando tarot e baralho cigano', Image: require ('../img/tarot.png')},
      { id: 4, titulo: 'Leitura ', Image: require ('../img/livro.png')},
    ];


    return (
      <View style={style.container}>
        <FlatList
          data={filmes}
          renderItem={({ item }) => (
              <View style={style.mov}>
               <Text style={style.titulo}>{item.titulo}</Text>
               <Image source={item.Image} style={style.imagem}/>
              </View>
        
          )}
        />
      </View>
    );
  };