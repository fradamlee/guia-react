
import React from 'react';
import { useSelector } from 'react-redux';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<h2>Main</h2>);
    }
}
 
export default Main;

// const Main = (props) => {
//     const count = useSelector(state => state.count);
// return (<h2>Main {count}</h2>)
// }

// export default Main;