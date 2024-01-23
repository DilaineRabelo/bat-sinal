import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { BatLogo } from '../bat_sinal/components/BatLogo';
import { useState } from 'react';

export default function App() {
  const [mostrarLogo, setMostrarLogo] = useState(true);

  function esconder(){
    setMostrarLogo(!mostrarLogo)
}


  return (
    <View>
      <View style={{...styles.container, display:mostrarLogo?'flex':'none'}}>
        <BatLogo></BatLogo>
        <Pressable style={{...styles.button}}
          onPress={esconder}>
          <Text style={styles.text}>Ativar Bat Sinal</Text>
        </Pressable>
      </View>
      

      <StatusBar style="auto" />

      <View style={{...styles.form, display:mostrarLogo?'none':'flex'}}>
        <BatLogo></BatLogo>
        <TextInput style={{...styles.textInput}}
          placeholder='Nome'      
        ></TextInput>
        <TextInput style={{...styles.textInput}}
          placeholder='Telefone'      
        ></TextInput>
        <TextInput style={{...styles.textInput}}
          placeholder='Localização'      
        ></TextInput>
        <TextInput style={{...styles.textInput}}
          placeholder='Observação'      
        ></TextInput>

        <Pressable style={{...styles.button}} onPress={esconder}>
          <Text style={styles.text}>Enviar</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    marginTop:200,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  button: {
    width:'80%',
    backgroundColor:'black',
    borderRadius:20,
    borderWidth:5,
    padding:7,
    shadowColor:'black',
    elevation:5,
    shadowOpacity:0.25,
    shadowOffset:{width: 0,height: 2},
    shadowRadius:3.84,
    margin:10
  },
  text: {
    color:'white',
    textAlign:'center',
    fontSize:19
  },
  textInput: {
    width:'80%',
    paddingHorizontal:15,
    paddingVertical:8,
    marginBottom:10,
    borderWidth:1,
    borderRadius:20,
    borderColor:'black',
    justifyContent:'center'
  },
  form:{
    marginTop:100,
    width:'100%',
    alignItems:'center',
  }
});
