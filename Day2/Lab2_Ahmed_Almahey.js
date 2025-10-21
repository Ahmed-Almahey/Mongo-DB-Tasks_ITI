use AI

//Q1
db.inventory.find({ tags: { $exists: true } })

//Q2
db.inventory.find({ tags: { $nin: ["ssl", "security"] } })
