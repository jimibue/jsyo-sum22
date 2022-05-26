# ABOUT


# Add Jest

yarn add --dev jest

notice we 3K+ things add

```
$ touch .gitignore
$ echo "/node_modules" >> .gitignore
```

Add the following section to your package.json:
```javascript
{
  "scripts": {
    "test": "jest"
  }
}
```

to export (ES5 way so we can use console.log)

```javascript
const x = 1;
const y = ()=>{
  console.log('yo')
};
module.exports = { x, y }
```

to Import  (ES5 way so we can use console.log)

```javascript 
const {x} = require('../lectures/promises');
const x = 1;
const y = ()=>{
  console.log('yo')
};
module.exports = { x, y }
```

# Links
## Promises
[Promises in Depth](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)