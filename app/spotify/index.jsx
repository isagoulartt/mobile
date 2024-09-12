import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

const logoSpotify =

'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px- Spotify_logo_without_text.svg.png';

return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 6, y: 9 }}
        end={{ x: 1, y: 1 }}
        colors={['green', 'black', ]}
        style={styles.background}
      />
      <Image
        style={styles.logo}
        source={{
          uri : logoSpotify,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    logo:{
      width: 100,
      height: 100,
    },
  });