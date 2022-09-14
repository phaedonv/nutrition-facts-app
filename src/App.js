import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foodstats: []
    };
  }

  getFoodStats() {
    var newIngredient = document.getElementById('ing').value;
    //console.log(newIngredient);

     //Use your app's API Key here:
    var api_key = 'DEMO_KEY'; 
    var base_url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${newIngredient}&pageSize=2&api_key=`;
    base_url+=api_key;
    base_url+='&q=';
    base_url+=newIngredient;

    fetch(base_url)
     .then((response) => {
       return response.json();
     })
     .then((data) => {
       this.setState({
         foodstats: data.foodstats
     });
     console.log(data);
     })
  }  

  render() {
    return (
      <div className="App">
        <h4> Enter an ingredient </h4>
        <div>
          <input type="text" name="ingredient" id="ing"/>
        </div>
        <div>
          <button onClick={() => this.getFoodStats()}>Add Ingredient</button>
        </div>

        <div>
          {this.state.foodstats.protein}
        </div>
      </div>
    );
}
}

export default App;
