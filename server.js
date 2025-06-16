const express = require('express');
const app = express();
app.use(express.json());
class Student {
    constructor(name ,grade){
        this.name = name;
        this.grade = grade;
    }
    getDetails(){
        return `Name: ${this.name}, Grade : ${this.grade}`;
    }
}
app.post('/students', (req, res) => {
  const { name, grade } = req.body;

  if (!name || grade === undefined) {
    return res.status(400).json({ error: 'Name and grade are required.' });
  }

  const student = new Student(name, grade);
  students.push(student);

  res.status(201).json({ message: 'Student added successfully.' });
});
app.get('/students', (req, res) => {
  const allDetails = students.map(student => student.getDetails());
  res.json(allDetails);
});


app.listen (3000,()=>{
    console.log('Server Running on Port 3000')
})
