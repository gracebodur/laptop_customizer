import React from 'react'
import CartList from '../CartList/CartList'

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
          </section>
        )
    }
}

export default Cart