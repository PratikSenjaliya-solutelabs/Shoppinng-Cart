import React, { Component } from 'react';
import './App.css';
import Items from './Items/Items.js';
class App extends Component{
  state={
    items:[
      {id:'1',name:'Iphone',price:'60000'},
      {id:'2',name:'Asus Vivobook',price:'56000'},
      {id:'3',name:'MacBook',price:'250000'},
      {id:'4',name:'One Plus',price:'35000'}
    ],
    emptystate:"Your cart is empty"
  }

  deleteItemHandler=(item_index)=>{
    const Item_arr1=[...this.state.items];
    Item_arr1.splice(item_index,1);
    this.setState({items:Item_arr1});
  }

  

  render(){

    let items_arr=null;
    if(this.state.items){
      items_arr=(
        <div>
          {
            this.state.items.map((item,index)=>{
              return <Items name={item.name} price={item.price} click={()=>this.deleteItemHandler(index)}/> 
            })
          }
        </div>
      )
    }

    return (
    <div className="App">
      <h1>SHOPING CART</h1>
      <div className="Category">Mobile Phones</div>
      {items_arr}
    </div>
  );
  } 
}

export default App;
