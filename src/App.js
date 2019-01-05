import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Product from "./Product"
import coffee from "./coffee"

class App extends Component {
    
    render(){
        const coffeeItems = coffee.map(item => <Product key={item.id} product={item}/>)
        return(
            <div>
                <div className="container">{coffeeItems}</div>
                <div className="container"><button>Add new item</button></div>                       
            </div>
        );
    }
}

export default hot(module)(App);