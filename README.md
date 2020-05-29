## Usage

``` js
const setupDatabase = require('db')

setupDabase(config).then(db => {
  const { Agent, Metric } = db

}).catch(err => console.error(err))
```