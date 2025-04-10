import React from "react";

import First from "./components/basic/First";
import WithParams from  "./components/basic/WithParams";
import Fragment from "./components/basic/Fragment";
import Random from "./components/basic/Random";

export default function App (props) {
    
    return(<div id="app">
        <First/>
        <h1>Fundamentos React</h1>

        <Fragment />

        <WithParams
            title="Situação do Aluno"
            student="Pedro Silva"
            grade={9.3}
        />

        <Random
            min="10"
            max="20"
        />

    </div>);
}