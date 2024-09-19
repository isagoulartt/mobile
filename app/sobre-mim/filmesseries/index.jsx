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
    
      { id: 2, titulo: 'The vampire Diaries (2009)',  Image: require ('../img/tvd.png')},
      { id: 3, titulo: 'Gossip girl (2007)', Image: require ('../img/gg.png')},
      { id: 4, titulo: 'Berlim (2023)', Image: require ('../img/berlim.png')},
    ];


    return (
      <View style={style.container}>
         
        <FlatList
          data={filmes}
          renderItem={({ item }) => (
              <View style={style.mov}>
               <Text style={style.titulo}>{item.titulo}</Text>
               <Link
               href={{
                pathname:`sobre-mim/detalhe/${item.id}`,
                params:{'filme':JSON.stringify(item)},
               }}>
               <Image source={item.Image} style={style.imagem}/>
               </Link>
              </View>
        
          )}
        />
      </View>
    );
  };