const fs = require('fs');

const data = JSON.parse(fs.readFileSync('students.json', 'utf8'));

console.log("STUDENT RECORDS REPORT\n");

data.forEach(student => {
    const average = student.grades.reduce((a, b) => a + b) / student.grades.length;
    console.log(`Name: ${student.name}`);
    console.log(`Grades: ${student.grades.join(', ')}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log('-------------------');
});
