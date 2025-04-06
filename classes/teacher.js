const Person = require('./person');

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience){
    super(firstName, lastName); //Calls the parent class Person's constructor and passes first and last name parameters
    this.subject = subject; //creates a subject property
    this.yearsOfExperience = yearsOfExperience; //creates a years of expereince property
  }

  static combinedYearsOfExperience(teachers){
    //Calculates the total years of combined experience between all teachers
    return teachers.reduce((accumulator, currentTeacher) => accumulator + currentTeacher.yearsOfExperience , 0)
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
