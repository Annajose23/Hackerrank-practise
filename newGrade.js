function gradingStudents(grades) {
    // Write your code here
  var val = 0;
  var newGrades = [];

 grades.forEach((item,index) => {
    if((item % 5 >= 3 )&& (item > 37)){
      item = item - (item % 5) + 5;
    }
   newGrades.push(item);
  })
console.log(newGrades)
}

gradingStudents([73,67,38,33]);