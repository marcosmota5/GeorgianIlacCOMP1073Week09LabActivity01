/* Q1

- Create a constructor to create a `Player` object with a name
- Player should have a `name` as well as a `lvl` set to **1** by default and `points` set to **0** by default
- Create a method on the prototype called `gainXp` that takes in a number from 1-10 and adds it to the players `points`. 
  If the current `points` are >= 10 then add 1 to the `lvl` and decrement the points by 10.
- Create another prototype method called `describe` that displays the players stats (name, lvl, points)

*/

class Player {
  constructor(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
  }

  gainXp(xp) {
    if (xp >= 1 && xp <= 10) { 
      this.points += xp;
  
      // Level up if points reach or exceed 10
      while (this.points >= 10) {
        this.lvl += 1;
        this.points -= 10;
      }
    } else {
      console.log('The xp value must be between 1 and 10');
    }
  }

  describe() {
    console.log('Name: ' + this.name + '\nLevel: ' + this.lvl + '\nPoints: ' + this.points);
  }
}

/*

Q2.

- You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method 
  called viewData( ) that allows user to view website data.

*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`Hello ${this.name} <${this.email}>! Here is the college website data.`);
  }
}

/*

Q3. 

- Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows
  it to edit website data.

*/

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  editData() {
    console.log(`The admin ${this.name} <${this.email}> is editing the website data.`);
  }
}

// Example Usage
// Q1
const player1 = new Player("Marcos");
player1.gainXp(5);
player1.describe(); 

player1.gainXp(6);
player1.describe(); 

// Q2
const user1 = new User("John Doe", "john.doe@college.com");
user1.viewData();

// Q3
const admin1 = new Admin("Alex Jones", "alex.jones@college.edu");
admin1.viewData();
admin1.editData();