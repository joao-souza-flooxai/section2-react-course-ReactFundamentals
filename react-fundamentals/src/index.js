import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const el = document.getElementById('root');
const tag = <p>Isso é um exemplo de paragrafo</p>
ReactDOM.render(<div><h1>Olá, Mundo!</h1> {tag} </div>, el);
