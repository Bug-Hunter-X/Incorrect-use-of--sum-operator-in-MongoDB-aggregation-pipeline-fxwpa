```javascript
//Incorrect aggregation pipeline
db.collection.aggregate([
  {$match: { /*some filter*/ } },
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //Error: cannot use string in $sum
  {$sort: {sum: -1}}
])
```