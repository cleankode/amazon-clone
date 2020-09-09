import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { Checkbox } from "@material-ui/core";
import {getBasketTotal} from '../reducer';

function Subtotal() {
  const [{ basket}, dispatch] = useStateValue();
  const checkout = () => {
    console.log("checking out... payment processed.");
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalSclae={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={checkout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
