import React, { Component } from 'react';

class Counter extends Component {


    state ={
        numberState: this.props.initialNumber || 0,
        paceState: this.props.initialPace || 1
    }

    inc = () =>{
        this.setState({
            numberState: this.state.numberState + (this.state.paceState ? this.state.paceState : 1 )
        });
    }
    
    dec = () =>{
        this.setState({
            numberState: this.state.numberState - (this.state.paceState ? this.state.paceState : 1 )
        });
    }


    setPace = (e) =>{
        this.setState({
            paceState: +e.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <label htmlFor="passoInput">Passo: </label>
                <input
                    id="passoInput"
                    type="number"
                    value={this.state.paceState}
                    onChange={this.setPace}
                />
                <p>Initial number with props: {this.props.initialNumber}</p>
                <p>Initial number with state: {this.state.numberState}</p>
                <button onClick={this.inc}>Increment number</button>
                <button onClick={this.dec}>Decrement number</button>
            
            </div>
        );
    }
}

export default Counter;