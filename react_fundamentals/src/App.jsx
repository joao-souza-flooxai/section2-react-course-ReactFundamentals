import React from "react";
import "./App.css"
import First from "./components/basic/First";
import WithProps from  "./components/basic/WithProps";
import Fragment from "./components/basic/Fragment";
import Random from "./components/basic/Random";
import Card from "./components/layout/Card";
import Family from "./components/basic/Family";
import FamilyMember from "./components/basic/FamilyMember";
import ListStudents from "./components/repeat/ListStudents";

export default function App (props) {
    
    return(
    
        <div className="App">

            <h1>Fundamentos React</h1>
            
            <div className="Cards">

                <Card  title="First Component" color="#080">
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

                <Card  title="Component with children" color="#080">
                    <Family surname="Crivoi">
                        <FamilyMember name="Ana" />
                        <FamilyMember name="João" />
                        <FamilyMember name="Ruiva"/>
                    </Family>
                </Card>

                <Card  title="Repeat" color="#080">
                    <ListStudents></ListStudents>
                </Card>

            </div>
        </div>
    );
}