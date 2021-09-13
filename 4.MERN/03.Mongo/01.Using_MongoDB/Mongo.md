## Create a database called 'my_first_db'.

use my_first_db

## Create students collection.

db.createCollection("students")

## Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})

db.COLLECTION_NAME.insert({YOUR_JSON_DOCUMENT})

## Create 5 students with the appropriate info.

db.students.insert({name: "Chenxi", home_state:"Beijing", lucky_number:7, birthday:{month:2,day:2,year:1990}})
db.students.insert({name: "Richard", home_state:"Beijing", lucky_number:6, birthday:{month:12,day:24,year:1989}})
db.students.insert({name: "Kara", home_state:"Macau", lucky_number:5, birthday:{month:10,day:14,year:1990}})
db.students.insert({name: "Jeff", home_state:"Guizhou", lucky_number:3, birthday:{month:6,day:3,year:1989}})

## Get all students.

db.students.find().pretty()

## Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).

db.students.find({home_state:"Beijing"}).pretty()

## Get all students whose lucky number is greater than 3

db.students.find({lucky_number:{$gt:3}}).pretty()

## Get all students whose lucky number is less than or equal to 10

db.students.find({lucky_number:{$lte:10}}).pretty()

## Get all students whose lucky number is between 1 and 9 (inclusive)

db.students.find({lucky_number:{$lt:7}}&&{lucky_number:{$gt:3}}).pretty()

## Add a field to each student collection called 'interests' that is an ARRAY. It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.

db.students.update({},{$push:{interests:'coding','brunch','MongoDB'}})

## Add some unique interests for each particular student into each of their interest arrays.

db.students.update({name:"Chenxi"},{$push:{interests:'dance'}})

## Add the interest 'taxes' into someone's interest array.

db.students.update({name:"Richard"},{$push:{interests:'dance'}})

## Remove the 'taxes' interest you just added.

## Remove all students who are from California.

## Remove a student by name.

## Remove a student whose lucky number is greater than 5 (JUST ONE)

## Add a field to each student collection called 'number_of_belts' and set it to 0.

## Increment this field by 1 for all students in Washington (Seattle Dojo).

## Rename the 'number_of_belts' field to 'belts_earned'

## Remove the 'lucky_number' field.

## Add a 'updated_on' field, and set the value as the current date.
