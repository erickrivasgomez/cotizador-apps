import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

    render(){
        return(
            <div>
                <h1>How much does my app cost</h1>
                
              <button><Link to='/questions'>Start</Link></button>  
            </div>
        );
    }
}

export default Home;