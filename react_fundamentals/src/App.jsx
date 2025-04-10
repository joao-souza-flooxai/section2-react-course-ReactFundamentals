import React from "react";

import First from "./components/basic/First";
import WithProps from  "./components/basic/WithProps";
import Fragment from "./components/basic/Fragment";
import Random from "./components/basic/Random";
import Card from "./components/layout/Card";

export default function App (props) {
    
    return(
    
        <div id="app">

            <h1>Fundamentos React</h1>
            
            <Card  title="First Component">
                <First/>
            </Card>

            <Card  title="Fragment">
                <Fragment />
            </Card>

            <Card  title="Component with Props">
                <WithProps
                    title="Situação do Aluno"
                    student="Pedro Silva"
                    grade={9.3}
                />
            </Card>

            <Card  title="Random"> 
                <Random min="10" max="20"/>
            </Card>

            
        </div>
    );
}