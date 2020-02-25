import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home'

class Questions extends Component{

    constructor(props){
        super(props);
        this.state={
            nextPage:1,
            value:0,
            previusVal:0,
            valores:[0,0,0,0,0,0,0,0,0,0,0]
        };
    }

    sum=(value)=>{
        this.state.valores[this.state.nextPage]=value
        this.cambiarContador(this.state.value+value)
        this.cambiarPagina(this.state.nextPage+1)
     }
 
     rest=()=>{
        
        this.cambiarContador(this.state.value-this.state.valores[this.state.nextPage-1])
        this.cambiarPagina(this.state.nextPage-1)
     }

     cambiarContador=(n)=>{
         this.setState({value:n})
     }

     cambiarPagina=(n)=>{
        this.setState({nextPage:n})
    }


    render(){
        if(this.state.nextPage===1){
            return(
                <div>
                    <div  >
                    <header>Page {this.state.nextPage} of 10</header>
                    <h1>1.What kind of app are you looking for?</h1> <Link to="/" >Back</Link>
                    <button onClick={(Event)=>(this.sum(32000))}>Web App</button>
                    <button onClick={(Event)=>(this.sum(24000))}>iOS</button>
                    <button onClick={(Event)=>(this.sum(24000))}>Android</button>
                    <button onClick={(Event)=>(this.sum(40000))}>Android/iOS</button>
                    <br></br> 
                    {this.state.value}
                    </div>
                </div>
            );
        }else if(this.state.nextPage===2){
            return(
                <div >
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>2.Does your app needs a login?</h1> <Link onClick={(Event)=>(this.rest())} >Back</Link>
                        <button>Email</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Social networks</button>
                        <button >No</button>
                        <button >I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===3){
            return(
                <div >
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>Does the user has his or profile?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Yes</button>
                        <button onClick={(Event)=>(this.sum(5000))}>No</button>
                        <button >I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===4){
            return(
                <div >
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>What kind of design do you want to your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>User-friendly interface</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Customized interface</button>
                        <button >Replicated web interface</button>
                        <button >I don't need design</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===5){
            return(
                <div >
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===6){
            return(
                <div >
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===7){
            return(
                <div >
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===8){
            return(
                <div >
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===9){
            return(
                <div >
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===10){
            return(
                <div >
                        <header>Page {this.state.nextPage} of 10</header>
                        <h1>How do you want to take benefit from your app?</h1> <Link onClick={(Event)=>(this.rest())}>Back</Link>
                        <button>Free application with advertising</button>
                        <button onClick={(Event)=>(this.sum(10000))}>Advertising-free payment application</button>
                        <button >Shopping within the app</button>
                        <button>I don't know</button>
                        <br></br> 
                        {this.state.value}
                    </div>
            )
        }else if(this.state.nextPage===11){
            ///Poner formulario de correo
            //Precio final en el div
            return(
                <div>
                   <span>${this.state.value/18} total cost </span> 
                </div>
                
            )
            
        }
        
    }
}

export default Questions;