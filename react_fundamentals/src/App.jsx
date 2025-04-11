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
import TableProducts from "./components/repeat/TableProducts";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import UserInfo from "./components/conditional/UserInfo";
import DirectParent from "./components/comunication/DirectParent";
import IndirectParent from "./components/comunication/IndirectParent";
import Input from "./components/form/Input";
import Counter from "./components/counter/Counter";
import Mega from "./components/mega/Mega";


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

                <Card  title="Component with children" >
                    <Family surname="Crivoi">
                        <FamilyMember name="Ana" />
                        <FamilyMember name="João" />
                        <FamilyMember name="Ruiva"/>
                    </Family>
                </Card>

                <Card  title="Repeat" >
                    <ListStudents></ListStudents>
                </Card>

                
                <Card  title="Table Products" >
                    <TableProducts></TableProducts>
                </Card>

                <Card  title="Conditional Rendering" >
                    <EvenOrOdd number={20}></EvenOrOdd>
                </Card>

                <Card  title="Conditional Rendering" >
                    <UserInfo user={{name:"João"}}></UserInfo>
                    <UserInfo user={{email:"joao@gmail.com"}}></UserInfo>
                    <UserInfo user={{}}></UserInfo>
                    <UserInfo></UserInfo>
                </Card>

                <Card  title="Direct Comunication" >
                  <DirectParent></DirectParent>
                </Card>

                <Card  title="Indirect Comunication and State" >
                  <IndirectParent></IndirectParent>
                </Card>

                <Card  title="Input - Controlled Component" color="#050">
                  <Input></Input>
                </Card>

                <Card  title="Counter" color="#050">
                  <Counter initialNumber={0}></Counter>
                </Card>

                <Card  title="Mega" color="#050">
                  <Mega></Mega>
                </Card>

            </div>
        </div>
    );
}