//  A

/*
let user = {
    name: "John",
    surname: "Smith",
}

user.name = "Pete";
delete user.name;
*/

//  B

/* function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  let schedule = {};

  console.log();( isEmpty(schedule) );
  
  schedule["8:30"] = "get up";
  
  console.log( isEmpty(schedule) );
*/

//  C

/*
 function calculateSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum;
  }

  let salaries = {
    "John's salary": 100,
    "Ann's salary": 160,
    "Pete's salary": 130,
    "Ali's salary": 220,
  };


  console.log(calculateSalaries(salaries));
*/

//  D

/*
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
*/

//  E

/* et countitems = 0;
let user = {
    name: 'John',
    age: 30
  }

function count(obj,countitems) {
    for (let props in user) {
        countitems++;
      }
    return countitems;  
}
count(user);
console.log(countitems);
*/

//  F

/*
 let john = { name: "John", age: 25 };
 let pete = { name: "Pete", age: 30 };
 let mary = { name: "Mary", age: 28 };

 let users = [ john, pete, mary ];

 let names = users.map(item => item.name);

 console.log(names);
 */
