```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {$match: { /*some filter*/ } },
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //Correct: uses field name in $sum
  {$sort: {sum: -1}}
])
```