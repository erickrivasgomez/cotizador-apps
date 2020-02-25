import React, {Component} from 'react';
import './App.css';
import sendEmail from './services/email';
import FormEmail from './components/form-email'

/*
class Price extends Component{
  state = {
    name:String,
    total:Number,
  }

  render(){
    return (
      
    )
  }
}*/

function App() {

  return ( //Mostrar contenido de la api
    <div className="App">
      <FormEmail></FormEmail>
    </div>
  );
}

export default App;
