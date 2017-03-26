import React, { Component } from 'react';
import DyGraph from './components/graph/graphComponent';

import './App.css';

class App extends Component {
    
    render() {
        return ( < div className="App" >
                <div className="App-header" >
                Dygraph Chart 
                </div>  
                <div className="App-intro" >
                    <DyGraph />
                </div> 
            </div >
        ); 
    }
}

export default App;