import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Switch,
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class BMI extends React.Component {
  constructor() {
    super();
    this.state = {
      cekiranoFemale: false,
      cekiranoMale: false,
      bmi:'',
      idealWeight:'',
      visina:0,
      tezina:0,
      stanjeBMI:'',
      bojaStanjeBMI:'white'

    };
  }


  handleSwitchF=(val)=>{
  //alert(val);
  //alert(this.state.cekiranoFemale);
  //alert (this.state.cekiranoMale);
   if(this.state.cekiranoFemale===this.state.cekiranoMale&&this.state.cekiranoFemale===false || this.state.cekiranoFemale==true&&this.state.cekiranoMale==false)
     {
//alert('usao');
        this.setState({cekiranoFemale:!this.state.cekiranoFemale});
      
     }
     else if(this.state.cekiranoFemale==false && this.state.cekiranoMale==true){
       this.setState({cekiranoFemale:true});
       this.setState({cekiranoMale:false});
     }
       
      
  

  }

handleOK=()=>{
if(this.state.tezina==0 || this.state.visina==0)
alert('Neispravni podaci!');
else{
var temp=Math.round((this.state.tezina/(this.state.visina*this.state.visina)*10000*10))/10;
  //   BMI = weight / height²
  this.setState({bmi:temp});
if(temp>=18.50 && temp<=25){
this.setState({stanjeBMI:'Normal '});
this.setState({bojaStanjeBMI:'green'});
}
else if(temp<18.5 && temp>0){
this.setState({stanjeBMI:'Underweight '});
this.setState({bojaStanjeBMI:'yellow'});
}
else if(temp>25){
this.setState({stanjeBMI:'Overweight '});
this.setState({bojaStanjeBMI:'red'});
}

//idealna tezina
var pocetno=0;
if(this.state.cekiranoFemale==false && this.state.cekiranoMale==false){
  alert('Morate odabrati spol!');
  return;
}
else if(this.state.cekiranoFemale){
   pocetno=45.5;

}
else if(this.state.cekiranoMale){
  pocetno=50;
}
var ukupno=0;
ukupno=pocetno;
ukupno+=((this.state.visina-152.4)/2.54)*2.3;
ukupno=Math.round(ukupno);
this.setState({idealWeight:ukupno});






}


}

   handleSwitchM=({val })=>{
  
  if(this.state.cekiranoFemale===this.state.cekiranoMale&&this.state.cekiranoFemale===false || this.state.cekiranoFemale==false&&this.state.cekiranoMale==true)
     
         this.setState({cekiranoMale:!this.state.cekiranoMale});
      
   // }
     else if(this.state.cekiranoFemale==true && this.state.cekiranoMale==false){
       this.setState({cekiranoFemale:false});
       this.setState({cekiranoMale:true});
     }

  }
  render() {
    var bojaBmi=String(this.state.bojaStanjeBMI);
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            marginTop: 20,
          }}>
          {'BMI & IDEAL WEIGHT CALCULATOR '}
        </Text>

        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            fontFamily: 'Georgia',
            textAlign: 'center',
            color: 'white',
          }}>
          {'Height: (cm)'}
        </Text>
        <TextInput
          style={{
            borderColor: 'white',
            borderWidth: 1,
            color: 'white',
            textAlign: 'center',
            marginHorizontal: 100,
            fontSize: 18,
          }}
          placeholder="175"
          underlineColorAndroid="transparent"
          keyboardType={'numeric'}
          onChangeText={(visina) => {
            this.setState({visina})}}
        />

        <Text
          style={{
            marginTop: 15,
            fontSize: 20,
            fontFamily: 'Georgia',
            textAlign: 'center',
            color: 'white',
          }}>
          {'Weight: (kg)'}
        </Text>
        <TextInput
          style={{
            borderColor: 'white',
            borderWidth: 1,
            color: 'white',
            textAlign: 'center',
            marginHorizontal: 100,
            fontSize: 18,
          }}
          placeholder="70"
          underlineColorAndroid="transparent"
          keyboardType={'numeric'}
             onChangeText={(tezina) => {
            this.setState({tezina})}}
        />

        <Text
          style={{
            marginTop: 15,
            fontSize: 20,
            fontFamily: 'Georgia',
            textAlign: 'center',
            color: 'white',
          }}>
          {'Gender: '}
        </Text>
      
        <View style={{flexDirection:'row'}}> 
         <Text style={{color:'white', marginLeft:40,marginRight:10}}>Female</Text>
        <Switch
        style={{marginRight:30}}
          onValueChange = {(val) => this.handleSwitchF(val)}
          value={this.state.cekiranoFemale}
          activeText={'Female'}
inActiveText={'Off'}
        > </Switch>
         <Text style={{color:'white', marginRight:10}}>Male</Text>
        <Switch
          onValueChange = {(val) => this.handleSwitchM(val)}
          value={this.state.cekiranoMale}
        />
</View>
        <View style={{ marginTop: 15, marginHorizontal: 120 }}>
          <Button title="OK" color="green" onPress={this.handleOK} />
        </View>
        <Text
          style={{
            marginTop: 15,
            fontSize: 20,
            fontFamily: 'Georgia',
            textAlign: 'center',
            color: 'white',
          }}>
          {'BMI: '}
        </Text>
         <TextInput
          style={{
            borderColor: 'white',
            borderWidth: 1,
            color: bojaBmi,
            textAlign: 'center',
            marginHorizontal: 50,
            fontSize: 18,
            
          }}
          editable={false} selectTextOnFocus={false}
          value={this.state.stanjeBMI+this.state.bmi}
          underlineColorAndroid="transparent"
         
        />
        <Text
          style={{
            marginTop: 15,
            fontSize: 20,
            fontFamily: 'Georgia',
            textAlign: 'center',
            color: 'white',
          }}>
          {'IDEAL WEIGHT: '}
        </Text>
         <TextInput
          style={{
            borderColor: 'white',
            borderWidth: 1,
            color: 'green',
            textAlign: 'center',
            marginHorizontal: 100,
            fontSize: 18,
            fontWeight:'bold'
            
          }}
          value={this.state.idealWeight}
          editable={false} selectTextOnFocus={false}
          
          underlineColorAndroid="white"
          
        />
      </View>
    );
  }
}
