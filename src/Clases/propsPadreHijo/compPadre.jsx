import React from 'react';
import CompHijo from './compHijo';

var hijo = CompHijo;

class PropsPadreHijo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: 0,
         }
    }

    incrementarElValor = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() { 
        return ( <div>
            <h1>{this.state.counter}</h1>

        <CompHijo callBack={this.incrementarElValor}/>
        {console.log(hijo)}
        </div> );
    }
}
 
export default PropsPadreHijo;