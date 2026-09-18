const fs = require('fs');

// Read students.json
const data = fs.readFileSync('students.json', 'utf8');
const students = JSON.parse(data);

// Function to compute average
function getAverage(grades) {
    const sum = grades.reduce((a, b) => a + b, 0);
    return (sum / grades.length).toFixed(2);
}

// Function to get status
function getStatus(avg) {
    return avg >= 75 ? "Passed" : "Failed";
}

console.log("===== STUDENT RECORDS REPORT =====");
console.log("");

students.forEach(student => {
    const avg = getAverage(student.grades);
    const status = getStatus(avg);
    
    console.log(`Name: ${student.name}`);
    console.log(`Grades: ${student.grades.join(', ')}`);
    console.log(`Average: ${avg}`);
    console.log(`Status: ${status}`);
    console.log("------------------------");
});

console.log("===== END OF REPORT =====");
