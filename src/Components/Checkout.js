import React from 'react'
import { useStateValue } from '../Context/StateProvider'

function Checkout() {

    const [{ basket }] = useStateValue();
    console.log('checkout>>>', basket);

  return (
    <div>
      <h1>checkout</h1>
    </div>
  )
}

export default Checkout
