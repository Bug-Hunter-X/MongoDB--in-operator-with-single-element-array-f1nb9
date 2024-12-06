```javascript
// Correct approach using direct comparison
db.collection.find({ field: "value" });
//Alternative using $eq operator
db.collection.find({ field: { $eq: "value" } });
```