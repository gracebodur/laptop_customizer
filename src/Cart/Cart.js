import React from 'react'
import CartList from '../CartList/CartList'
import Total from '../Total/Total'

class Cart extends React.Component {
    render() {
        return(
            <section className="main__summary">
            <h2>Your cart</h2>
            {/* {summary} build in CartList Component*/}
            <CartList 
            selected = {this.props.selected}
            USCurrencyFormat={this.props.USCurrencyFormat}
            />
          <Total 
          USCurrencyFormat={this.props.USCurrencyFormat}
          selected={this.props.selected} />
          </section>
        )
    }
}

export default Cart