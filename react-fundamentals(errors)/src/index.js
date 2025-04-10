import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import First from './components/basic/First';
import WithParams from './components/basic/WithParams';

const el = document.getElementById('root');
const tag = <p>Isso é um exemplo de paragrafo</p>

ReactDOM.render(<div>
                
                    <h1>Olá, Mundo!</h1> 
                    {tag}
                    <First></First>
                    <WithParams></WithParams> 
                
                </div>, el);
