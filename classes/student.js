const Person = require('./person');

class Student extends Person {
  constructor(firstName, lastName, major, GPA){
    super(firstName, lastName); // calls Person constructor utilizing first and last name properties from parent class Person
    this.major = major; //major property for student class
    this.GPA = GPA; //GPA property for student class
  }

  static compareGPA(student1, student2){
    if (student1.GPA === student2.GPA){
      return "Both students have the same GPA" //Checks if student has same GPA.
    }

    const higherGPA = student1.GPA > student2.GPA ? student1 : student2; //Ternary Operator to compare and select student with Higher GPA
    return `${higherGPA.firstName} ${higherGPA.lastName} has the higher GPA.` //Shows which student has higher gpa.

  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
