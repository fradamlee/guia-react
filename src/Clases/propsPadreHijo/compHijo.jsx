import React from 'react';

class CompHijo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    render() { 

        const {callBack} = this.props;

        return ( <div><h3>Este es el hijo</h3>
        <button
            onClick={callBack}
        >Boton</button>
        </div> );
    }
}
 
export default CompHijo;