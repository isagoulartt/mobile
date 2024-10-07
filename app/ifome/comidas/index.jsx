import React from "react";
import { View, Text, StyleSheet, FlatList,Image } from 'react-native';
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
    
      { id: 2, titulo: 'Pão de queijo',  Image: require ('../img/pao.jpg')},
      { id: 3, titulo: 'Milk shake', Image: require ('../img/mk.jpg')},
      { id: 4, titulo: 'Croassaint', Image: require ('../img/cr.jpg')},
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



                                                    