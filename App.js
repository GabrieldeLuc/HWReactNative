import { StatusBar } from 'expo-status-bar';
import {  Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
     
  <Image 
  
  style={styles.xbox}
  source={require('./src/assets/images/xboxlogo.png')}
  
  />
      <Text style= {[styles.green , styles.text]}>Hello World</Text>


<TextInput
style = {styles.input}
defaultValue='Exemplo de Input'

/>

<TouchableOpacity style={styles.btn}>
  <Text style={styles.textButton}>exemplo de botão</Text>
</TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },

 input: {
width:'90%',
height: 40, 
borderWidth: 1,
padding: 10, 
marginTop:10
  },

text: {
fontSize: 24,
},

xbox: {
width: 200,
height:200
},

btn: {
  width:'90%',
  height:40,
  borderRadius: '5%',
  borderWidth: 1,
  borderColor: 'black',
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor:'green'
},

textButton: {
  color:'white',
  textTransform: 'capitalize',
  fontWeight:"500",
  fontSize: 18
},

green: {
color: 'green',
  },
});
