// const user = {
//     username :"raj",
//     logincount: 8,
//     singedin: true,
//     getuserdetails: function() {
//         console.log(`username:${this.username}`);

//     } 
// }
// console.log(user.getuserdetails());


// class User {
//     constructor( name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayjsk () {
//         alert(`hello ${this.name} your age is just ${this.age}?`);
//     }
// }

// let user = new User("raj",2);
// user.sayjsk();


// function user(username,loginCount,isLoggedIn) {
//   this.username = username;
//   this.loginCount = loginCount;
//   this.isLoggedIn = isLoggedIn;
// }

// let userone= new user ("jay", 12, true)
// let usertwo = new user ("raj",2,false)
// console.log(userone);
// console.log(usertwo);


// class car {
//   constructor(brand, model, color, year) {
//     this.brand = brand;
//     this.model = model
//     this.color = color
//     this.year = year
//     // console.log(`this car brand is ${this.brand} and this car model is ${this.model} and color is ${this.color}`);
//   }
// }

// class Toyota extends car {
//   constructor(brand, model, color, year) {
//     super(brand, model, color, year);

//     //  console.log(`and that car are lonce in ${this.year}`);
//   }
// }

// class ford extends car {
//   constructor(brand, model, color, year, engine) {
//     super(brand, model, color, year);
//     this.engine = engine
//     console.log(`this car brand is ${this.brand} and this car model is ${this.model} and color is ${this.color} and we use engine ${this.year}and  ${this.engine}`);

//   }
// }
// let carinfo = new car("fortuner", "topmodel ", "black");
// let carinfotwo = new Toyota("fortuner", "topmodel ", "black", 2020);
// let cars = new ford("fortuner", "topmodel ", "black", 2020, "1000cc")


//abstruction

// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }

//   #startEngine() {  // Private method (hidden from the user)
//     console.log("Engine started");
//   }

//   #stopEngine() {  // Private method
//     console.log("Engine stopped");
//   }

//   moveCar() {
//     this.#startEngine(); // Internally calling the private method
//     console.log(`${this.brand} is moving`);
//   }
// }

// const myCar = new Car("Toyota");
// //myCar.#startEngine(); // ❌ Error: Private method cannot be accessed outside the class
// myCar.moveCar(); // ✅ Works fine


//second

// class bankacc {
//   constructor(owner,balance) {
//     this.owner = owner
//     this.balance = balance
//   }

//   deposit( amount) {
//     this.balance += amount;
//       console.log(`Deposited$${amount}. new balance:$${this.balance}`);
//   }


//   withdraw (amount) {
//       if (amount > this.balance) {
//          console.log("Insufficient balance!");

//       }else {
//         this.balance -= amount;
//         console.log(`withdrow$${amount}. new balance:$${this.balance}`);

//       }
//   }
// }

// let account = new bankacc("raj",2000)
// account.deposit(1000);
// account.withdraw(200);

// account.balance = 999999
// console.log(account.balance); // is this not okay see below the new code


class bankacc {
  #balance

  constructor(owner, balance) {
    this.owner = owner
    this.#balance = balance
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`diposited $${amount}. new balance $${this.#balance}`);
    } else
      console.log("Deposit amount must be greater than zero.");
  } 


  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance!");

    } else {
      this.balance -= amount;
      console.log(`withdrow$${amount}. new balance:$${this.#balance}`);

    }
  }
  getbalance() {
    return this.#balance
  }
}

const account = new bankacc("raj", 1000)

account.deposit(1200);
account.withdraw(200);

// account.balance = 999999
console.log(account.getbalance());

