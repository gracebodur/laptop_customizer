import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
// import slugify from 'slugify'; //ughhh slugify!

import './App.css';
import Total from './Total/Total';


// pass to Features and Cart Convert numbers=> .format(numbers) into variable
// This object will allow us to
// easily convert numbers into US dollar values
//convert into fotmat method
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });


//App.js Component. Pass state props to Features and Cart
// class App extends Component {
//add constructor and super
//   state = { 
//     selected: {
//       Processor: {
//         name: '17th Generation Intel Core HB (7 Core with donut spare)',
//         cost: 700
//       },
//       'Operating System': {
//         name: 'Ubuntu Linux 16.04',
//         cost: 200
//       },
//       'Video Card': {
//         name: 'Toyota Corolla 1.5v',
//         cost: 1150.98
//       },
//       Display: {
//         name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
//         cost: 1500
//       }
//     }
//   };

    // App.js Component method
  // updateFeature = (feature, newValue) => {
  //   const selected = Object.assign({}, this.state.selected);
  //   selected[feature] = newValue;
  //   this.setState({
  //     selected
  //   });
  // };


  //CART LIST!
  // render() {
  //   const features = Object.keys(this.props.features).map((feature, idx) => {
  //     const featureHash = feature + '-' + idx;
  //     const options = this.props.features[feature].map(item => {
  //       const itemHash = slugify(JSON.stringify(item));
  //       return (
  //         <div key={itemHash} className="feature__item">
  //           <input
  //             type="radio"
  //             id={itemHash}
  //             className="feature__option"
  //             name={slugify(feature)}
  //             checked={item.name === this.state.selected[feature].name}
  //             onChange={e => this.updateFeature(feature, item)}
  //           />
  //           <label htmlFor={itemHash} className="feature__label">
  //             {item.name} ({USCurrencyFormat.format(item.cost)})
  //           </label>
  //         </div>
  //       );
  //     });


      // FeatureList.js Component
    //   return (
    //     <fieldset className="feature" key={featureHash}>
    //       <legend className="feature__name">
    //         <h3>{feature}</h3>
    //       </legend>
    //       {options}
    //     </fieldset>
    //   );
    // });


    // Cart.js Component
    // const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //   const featureHash = feature + '-' + idx;
    
    // const selectedOption = this.state.selected[feature];


    //CartList.js Component
    //   return (
    //     <div className="summary__option" key={featureHash}>
    //       <div className="summary__option__label">{feature} </div>
    //       <div className="summary__option__value">{selectedOption.name}</div>
    //       <div className="summary__option__cost">
    //         {USCurrencyFormat.format(selectedOption.cost)}
    //       </div>
    //     </div>
    //   );
    // });


    //Total.js 
    // const total = Object.keys(this.state.selected).reduce(
    //   (acc, curr) => acc + this.state.selected[curr].cost,
    //   0
    // );


    // App.js Component
    // return (
    //   <div className="App">

    // {/* Header.js Component */}
    //     <header>
    //       <h1>ELF Computing | Laptops</h1>
    //     </header>
    //     <main>
    
    {/* Feature.js Component        */}
    // <form className="main__form">
    //         <h2>Customize your laptop</h2>
    //         {features}
    //       </form>

          //Cart
          // <section className="main__summary">
          //   <h2>Your cart</h2>
          //   {summary}

            //Total.js Component
            {/* <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div> */}
          </section>
        </main>
      </div>
    );
  }
}

export default App;