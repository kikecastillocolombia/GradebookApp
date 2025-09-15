/* Step 1 
A teacher has finished grading their students' 
tests and needs your help to calculate the average score for the class. 
Complete the getAverage function which takes in an array of test scores and returns the average score. 
The average is calculated by adding up all the scores and dividing by the total number of scores. 
Example Code average = sum of all scores / total number of scores A couple of function calls have been provided for you so you can test out your code. 
Tips You can use a loop to iterate over the scores array and add up all the scores. 
You can use the length property to get the total number of scores. 
function getAverage(scores) { } 
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); 
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])); 
*/

function getAverage(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    throw new Error("Debes pasar un array con al menos un número.");
  }

  const sum = scores.reduce((acc, val) => {
    if (typeof val !== "number" || isNaN(val)) {
      throw new Error("Todos los elementos deben ser números válidos.");
    }
    return acc + val;
  }, 0);

  return sum / scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

try {
  console.log(getAverage([])); // error
} catch (e) {
  console.error(e.message);
}

try {
  console.log(getAverage([100, "A", 90])); // error
} catch (e) {
  console.error(e.message);
}

/* Step 2 
Now the teacher needs your help converting the student score to a letter grade. 
Complete the getGrade function that takes a number score as a parameter. 
Your function should return a string representing a letter grade based on the score.
Here are the scores and their corresponding letter grades:

Score Range	Grade
100	"A++"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
Tips

Remember that you learned about conditional statements (if, else if, and else).
Remember that you learned about comparison operators (>, <, >=, <=, ===).
Remember that you learned about the logical AND operator (&&).
*/

function getGrade(score) {
  const rounded = Math.round(score);

  if (rounded >= 100) {
    return "A++";
  } else if (rounded >= 90) {
    return "A";
  } else if (rounded >= 80) {
    return "B";
  } else if (rounded >= 70) {
    return "C";
  } else if (rounded >= 60) {
    return "D";
  } else if (rounded >= 0) {
    return "F";
  } else {
    throw new Error("El puntaje debe ser mayor o igual a 0.");
  }
}


console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

/*
Step 3 
The teacher is really happy with the program you have created so far. 
But now they want to have an easy way to check if a student has a passing grade. 
A passing grade is anything that is not an "F". 
Complete the function hasPassingGrade that takes a student score as a parameter. 
Your function should return true if the student has a passing grade and false if they do not. 
Tips Use the getGrade function to get the student's grade. 
Then check if the grade is passing or not.
*/

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

console.log(hasPassingGrade(100)); // true
console.log(hasPassingGrade(53));  // false
console.log(hasPassingGrade(87));  // true

/*
Step 4
Now that the teacher has all of the information they need, they want to be able to message the student with the results.
Complete the studentMsg function with totalScores and studentScore for parameters. 
The function should return a string representing a message to the student.
If the student passed the course, the string should follow this format:

Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

Example Code
Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.

Replace average-goes-here with the average of the total scores. 
Replace grade-goes-here with the student's grade.

Tips

Use the getAverage function to get the class average.
Use the getGrade function to get the student's grade.
Use string concatenation (+) to build the message.
Be careful with the punctuation and spaces in the message.

*/

function studentMsg(studentScores) {
  const average = getAverage(studentScores);
  const grade = getGrade(average);
  const passed = hasPassingGrade(average);

  if (passed) {
    return `Your average: ${average.toFixed(1)}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Your average: ${average.toFixed(1)}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));