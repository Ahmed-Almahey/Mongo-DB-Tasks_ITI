//Q1
db.createCollection("employees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title:"employees object validation",
      required: ["name", "age", "department"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        age: {
          bsonType: "int",
          minimum: 18,
          description: "must be an integer >= 18 and is required"
        },
        department: {
          bsonType: "string",
          enum: ["HR", "Engineering", "Finance"],
          description: "must be one of the allowed values and is required"
        }
      }
    }
  }
});
