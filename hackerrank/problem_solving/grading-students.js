const grades = [73,67,38,33];

function gradingStudents(grades) {
    let rounded = [];
    //loop through the grades array
     for (let i = 0; i < grades.length; i++) {
         //If grade is less than 38, no rounding
         if (grades[i] < 38) {
             rounded.push(grades[i]);
         //If the difference between the grade and next multiple of 5 is more than 3, round up
         } else if (grades[i]%5 < 3) {
             rounded.push(grades[i]);
         //Otherwise round up to the nearest multiple of 5
         } else {
             rounded.push(grades[i] + 5-grades[i]%5)
         }
     }
     return rounded;
}

console.log(gradingStudents(grades))