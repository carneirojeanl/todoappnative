import React, {useState} from 'react'; //UseState é usado para armazenar dados do nosso App//
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Input } from 'react-native-elements';




const styleOfTheButton = {
  color: 'white'
}





const styleOfTheInput = {
  color: 'black',
  marginTop: 25,
  backgroundColor: 'white'
}



export default function App() {

      const [peso, setPeso] = useState('')
      const [altura, setAltura] = useState('')

      function calcularIMC() {
        const alt = altura / 100
        const imc = peso / (alt * alt)
        
        

        if(imc <18.9) {
          alert(`Voce está abaixo do pesp. Seu imc é de ${imc.toFixed(2)}.`)
        } else if (imc >=18.9 && imc <24.9){
          alert(`Você está no peso ideal. Seu IMC é de ${imc.toFixed(2)}.`)
        } else if(imc > 24.9){
          alert(`Você está acima do peso. Seu IMC é de ${imc.toFixed(2)}`)
        }
        
      }
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Calcule seu IMC</Text>



      <Input placeholder="Peso(kg)" inputStyle={styleOfTheInput} 
       keyboardType = 'numeric'
       value = {peso}
        onChangeText = {(peso) => setPeso(peso) } 
        
      
      
      />
      <Input placeholder="Altura(cm)" 
      inputStyle={styleOfTheInput} 
       keyboardType = 'numeric' 
       value = {altura}
       onChangeText = {(altura) => setAltura(altura)}
       />

      <Button title='Calcular' buttonStyle = {styleOfTheButton} 
        onPress = {calcularIMC}
      ></Button> 




    </View>
  );
}

// É Necessário criar uma constante que receba os estilos que queremos passar para os componentes//
// Lembrar de importar o stylesheet. Quando usando os componentes de Native.
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',

  },

  text: {
    marginTop: 25,
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },



});

