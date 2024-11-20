//import logo from './logo.svg';
import './App.css';
import {InfoCard} from './components/InfoCard';
import HobbyLista from './components/HobbyList';
//import React, { useState } from 'react';
import Contador from './components/Contador';
import TextoControlado from './components/TextoControlado';

function App() {
  return (
    <div className="App">
      

      <InfoCard title={"Aula de Exercicios"} description={"Componentes e useState"}> </InfoCard>

      <HobbyLista hobbies={["Nadar","Danzar","Caminhar"] }></HobbyLista>
      <TextoControlado></TextoControlado>
      <Contador> </Contador>


      
       
        

      
    </div>
  );
}

export default App;
