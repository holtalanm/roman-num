Were you born in the wrong century?

Have you ever wondered how the romans coded?

Do you long for the days of watching two gladiators duke it out in the sand floor of the arena?

Well then **RomaNum** is the right library for you!

It does conversions!

```javascript
var romanum = require('romanum')

console.log(romanum.toNumeral(100)) // 'C'

console.log(romanum.toNumber('CLIX')) // 159
```

It does addition!

```javascript
var romanum = require('romanum')

console.log(romanum.plus('X', 'V', 'L')) // 'LXV'

console.log(romanum.plus('X', 'VI', 'III')) // 'XIX'
```

Subtraction!

```javascript
var romanum = require('romanum')

console.log(romanum.subtract('L', 'IX')) // 'XLI'

console.log(romanum.subtract('C', 'XX', 'IV', 'III')) // 'LXXIII'
```

even Multiplication and Division!

```javascript
var romanum = require('romanum')

console.log(romanum.multiply('II', 'V')) // 'X'

console.log(romanum.multiply('IV', 'V', 'V')) // 'C'

console.log(romanum.divide('C', 'XX')) // 'V'

console.log(romanum.divide('L', 'V', 'V')) // 'II'
```

So, if you dream of racing your chariot under the aqueducts of acient Rome, pick up **Romanum** today and fullfill your dreams!

*disclaimer:  **Romanum** makes no claim to allowing you to do any of the abov, besides performing mathematical operations with roman numerals. All other activities are purely fantasy, and should not be attempted, unless you are a skilled swordsman or have experience driving a team of horses*