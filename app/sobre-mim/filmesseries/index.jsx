import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const style= StyleSheet.create({

})

export default filmes = () => {
    const [filmes, setFilmes] = useState([
      { id: 1, titulo: 'Como perder um homem em 10 dias' },
      { id: 2, titulo: 'The vampire Diaries' },
      { id: 3, titulo: 'Gossip girl'},
      { id: 4, titulo: 'Berlim' },
    ]);
}

return (
    <View style={style.container}>
      <FlatList
        renderItem={({ item }) => (
            <View style={styles.item}>
               
            </View>
          
        )}
      />
    </View>
  );
