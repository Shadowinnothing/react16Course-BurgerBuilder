import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>

    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >ORDER NOW</button>

    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {props.price === 6.90 ? <p>Nice</p> : null}

    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}

    <br />
    <br />

    <button
      className={classes.StartOverButton}
      onClick={props.orderUpBaconator}
    >Baconator</button>

    <br />
    <br />

    <button
      className={classes.StartOverButton}
      onClick={props.defaultIngredients}
    >StartOver</button>

  </div>
);

export default buildControls;
