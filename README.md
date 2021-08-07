# What is this?

This is a change return algorithm for a vending machine. It is universal in terms of coin
values and it has infinite amount of coins of all types. However for the user it is crucial that the machine returns
smallest amount of coin possible.

# Installation

`npm i coin-master --save`



```
import { coin } from 'coin-master';

coin({
  coins: '[1, 2, 5]',
  total: 12
})
```

## **Parameters**

We have 2 required parameters: 

- _coins_ - _[1, 2, 5]_ (array of available coins, element 1 is required)
- _total_ - _integer_ (amount of rest)
