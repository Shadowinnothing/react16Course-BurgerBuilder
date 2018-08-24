import React, {Component} from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

  // could be a functional component,
  // doesn't need to be a class
  componentWillUpdate(){
    console.log('[OrderSummary] willUpdate()');
  }

  render(){
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span
              style={{textTransform: 'capitalize'}}
            >{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        );
      });

    return(
      <Aux>
        <h3>Your Order</h3>
        <p>Ingredients in Burger:</p>

        <ul>
          {ingredientSummary}
        </ul>

        <p>Total Price: <strong>{this.props.price}</strong></p>
        <p>Continue to checkout?</p>

        <Button
          btnType={"Danger"}
          clicked={this.props.purchaseCancelled}
        >CANCEL
        </Button>

        <Button
          btnType="Success"
          clicked={this.props.purchaseContinue}
        >CONTINUE
        </Button>

      </Aux>
    )
  }
}

export default OrderSummary;
