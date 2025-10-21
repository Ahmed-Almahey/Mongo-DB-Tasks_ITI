
//Q1
use ITI_Mongo

//Q2
db.createCollection("Staff")

//Q3
db.Staff.insertOne({
   "name":"Ahmed",
   "age":25,
   "gender":"Male",
   "department":"IT"
})

//Q4

db.Staff.insertMany([
  {
    _id: 1,
    name: "Ali",
    age: 20,
    gender: "male",
    department: "HR"
  },
  {
    _id: 2,
    name: "Sara",
    age: 25,
    gender: "female",
    managerName: "Mohamed",
    department: "Finance"
  },
  {
    _id: 3,
    name: "Omar",
    age: 15,
    gender: "male",
    DOB: "2010-05-01"
  }
])

//Q5

//1
db.Staff.find()

//2
db.Staff.find({ gender: "male" })

//3
db.Staff.find({ age: { $gte: 20, $lte: 25 } })

//4
db.Staff.find({ age: 25, gender: "female" })

//5
db.Staff.find({ $or: [ { age: 20 }, { gender: "female" } ] })

//6
db.Staff.updateOne(
  { age: 15 },                    
  { $set: { name: "new student" } }  
)

//7
db.Staff.updateMany(
  {},                              
  { $set: { department: "AI" } }   
)

//8
db.test.insertMany([
  {
    _id: 1,
    name: "Ali",
    age: 20,
    gender: "male",
    department: "HR"
  },
  {
    _id: 2,
    name: "Sara",
    age: 25,
    gender: "female",
    managerName: "Mohamed",
    department: "Finance"
  },
  {
    _id: 3,
    name: "Omar",
    age: 15,
    gender: "male",
    DOB: "2010-05-01"
  }
])

//9
db.test.deleteOne({ age: 15 })

//10
db.test.deleteMany({ gender: "male" })

//11
db.test.deleteMany({})

