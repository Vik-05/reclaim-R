const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require('../utils/db-connect')
const user = require("express")();
const queryInterface = sequelize.getQueryInterface();

const User = sequelize.define('User', {
	// Model attributes are defined here
	firstName: {
	  type: DataTypes.STRING,
	  allowNull: false
	},
	lastName: {
	  type: DataTypes.STRING
	  // allowNull defaults to true
	}
  }, {
	freezeTableName: true
});

User.sync();
console.log("The table for the User model was just (re)created!");
module.exports = User

// var sql = "INSERT INTO User (firstname, lastname) VALUES ?";
// con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//   });
// User.create
// ({
// 	firstName: "Jigyasa",
// 	lastName: "Chopra",
// });

// User.create
// ({
// 	firstName: "Himanshu",
// 	lastName: "Chopra",
// });



// User.create
// ({
// 	firstName: "Dikshant",
// 	lastName: "Luthra",
// });

// User.create
// ({
// 	firstName: "Vishal",
// 	lastName: "Singh",
// });

// User.create
// ({
// 	firstName: "Divya",
// 	lastName: "Sharma",
// });

// User.create
// ({
// 	firstName: "Vikas",
// 	lastName: "Tayal",
// });




const Candy = sequelize.define('Candy', {
	// Model attributes are defined here
	firstName: {
	  type: DataTypes.STRING,
	  allowNull: false
	},
	lastName: {
	  type: DataTypes.STRING
	  // allowNull defaults to true
	},
	midName: {
		type: DataTypes.STRING
		// allowNull defaults to true
	}
  }, {
	freezeTableName: true
});


Candy.sync();
console.log("The table for the Candy model was just (re)created!");

//  Candy.create({
//         firstName: "Nathan",
//         lastName: "Chopra",
//       });

// 	  Candy.create({
//         firstName: "Jigyasa",
//         lastName: "Chopra",
//       });


module.exports = Candy

const Mango = sequelize.define('Mango', {
	// Model attributes are defined here
	fruitName: {
	  type: DataTypes.STRING,
	  allowNull: false
	},
	seasonName: {
	  type: DataTypes.STRING
	  // allowNull defaults to true
	}
  }, {
	freezeTableName: true
});

Mango.sync();
console.log("The table for the Mango model was just (re)created!");
module.exports = Mango

//  Mango.create({
// 	fruitName: "man",
// 	seasonName: "Summer",
//       });

// 	  Mango.create({
// 		fruitName: "women",
// 		seasonName: "winter",
// 		  });


const Student = sequelize.define('Student', {
	// Model attributes are defined here
	SName: {
	  type: DataTypes.STRING,
	  allowNull: false
	},
	SubName: {
	  type: DataTypes.STRING
	  // allowNull defaults to true
	}
  }, {
	freezeTableName: true
});

Student.sync();
console.log("The table for the Student model was just (re)created!");
module.exports = Student

const Teacher = sequelize.define('Teacher', {
	// Model attributes are defined here
	TName: {
	  type: DataTypes.STRING,
	  allowNull: false
	},
	SubName: {
	  type: DataTypes.STRING
	  // allowNull defaults to true
	},

	TClass: {
		type: DataTypes.STRING
	}
  }, {
	freezeTableName: true
});

Teacher.sync();
console.log("The table for the Teacher model was just (re)created!");
module.exports = Teacher

const Person = sequelize.define('Person', {
	// Model attributes are defined here
	name: {
	  type: DataTypes.STRING,
	  allowNull: false,
	  unique: true // make sure the username is unique
	},
	
	email: {
	  type: DataTypes.STRING,
	  unique: true,// make sure the username is unique
	  allowNull: false,

	  // allowNull defaults to true
	},

	message: {
		type: DataTypes.STRING
	}
  }, {
	freezeTableName: true
});

Person.sync();
console.log("The table for the Person model was just created!");
module.exports = Person

// queryInterface.addColumn('Person', 'petName', { type: DataTypes.STRING });

// Person.create({
// 	name:"pooja",
// 	email:"pooja@gmail.com",
// })

Person.findOrCreate({
	where: {
	  name: 'john_doe',
	  email: 'john.doe@example.com',
	  message: "jhdhddhdh",
	},
	defaults: {
	  firstName: 'John',
	  lastName: 'Doe'
	}
  }).then(([Person, created]) => {
	if (created) {
	  console.log('New user created!');
	} else {
	  console.log('User already exists!');
	}
  }).catch(err => {
	console.log('Error:', err);
  });

// user.post('/submit-form', (req, res)=> {
// 	const { name, email, message } = req.body;
// 	Person.create({
// 	  name,
// 	  email,
// 	  message
// 	}).then(() => {
// 	  res.send('Thank you for submitting the form!');
// 	}).catch((err) => {
// 	  console.error(err);
// 	  res.send('An error occurred while submitting the form.');
// 	});
//   });

