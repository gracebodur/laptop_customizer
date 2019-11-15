import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Features from './Features/Features';
import Cart from './Cart/Cart'


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
//FeatureOption.js Component



//App.js Component. Pass state props to Features and Cart
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  }

  // pass to Features and Cart Convert numbers=> .format(numbers) into variable
// This object will allow us to
// easily convert numbers into US dollar values
USCurrencyFormat = (number) => {
  let currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
return currency.format(number)
}

    // App.js Component method
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

 // App.js Component
    //add render method
  render () {
    return (
      <div className="App">
      {/* Header.js Component */}
        <Header />
          <main>     
      {/* Feature.js Component        */}
        <Features 
          selected = {this.state.selected}
          features={this.props.features}
          updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
          USCurrencyFormat={number => this.USCurrencyFormat(number)}
        />
        {/* Cart.js Component */}
        <Cart 
          selected = {this.state.selected}
          USCurrencyFormat={number => this.USCurrencyFormat(number)}
        />
          </main>
        </div>
    )
  }
}

export default App