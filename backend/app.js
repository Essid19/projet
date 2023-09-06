// IMPORT EXPRESS MODULE
const express = require("express");

//IMPORT BODY PARSER MODULE
const bodyParser = require("body-parser");

// CREATE EXPRESS APPLICATION ,
const app = express();

const bcrypt = require("bcrypt");

// /SEND JSON RESPONSES
app.use(bodyParser.json());
// GET OBJ FROM REQUEST
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
let notesTab = [
  {
    id: 1,
    courseId: "1",
    teacherId: "1",
    studentId: "23",
    note: "16",
    evaluation: "good",
  },
  {
    id: 2,
    courseId: "2",
    teacherId: "3",
    studentId: "1",
    note: "16",
    evaluation: "EXCELLENT",
  },
  {
    id: 3,
    courseId: "3",
    teacherId: "1",
    studentId: "7",
    note: "16",
    evaluation: "FAILED",
  },
  {
    id: 4,
    courseId: "4",
    teacherId: "3",
    studentId: "43",
    note: "16",
    evaluation: "PASS",
  },
];
let coursesTab = [
  {
    id: 1,
    name: "math",
    teacherID: "1",
    description: "hello in sescription1",
    duration: " 1 month",
    studentList: ["23", "6", "7", "9"],
  },
  {
    id: 2,
    name: "arabic",
    teacherID: "3",
    description: "hello in sescription2",
    duration: " 2 months",
    studentList: ["1", "2", "23", "6", "7"],
  },
  {
    id: 3,
    name: "science",
    teacherID: "1",
    description: "hello in sescription3",
    duration: " 3 months",
    studentList: ["23", "6", "7", "9", "43", "34"],
  },
  {
    id: 4,
    name: "english",
    teacherID: "3",
    description: "hello in sescription4",
    duration: " 4 months",
    studentList: ["1", "2", "9", "43", "34"],
  },
];
let usersTab = [
  {
    id: 1,
    name: "ammar",
    cv: "gfgffjfj",
    status: "nok",
    speciality: "sport",
    role: "teacher",
    courseList: ["1", "2"],
  },
  {
    id: 3,
    name: "mounir",
    cv: "asazszas",
    status: "nok",
    speciality: "informatique",
    role: "teacher",
    courseList: ["3", "4"],
  },
  {
    id: 2,
    name: "salah",
    course: "physique",
    note: 41,
    evaluation: "excellent",
    role: "student",
    img: "assets/img/carousel-2.jpg",
    courseList: ["3", "4"],
  },
  {
    id: 5,
    name: "Ahmed",
    course: "reseau",
    note: 41,
    evaluation: "excellent",
    role: "student",
    img: "assets/img/carousel-1.jpg",
    courseList: ["1", "2"],
  },
  { id: 4, name: "bechir", role: "admin" },
];
function newId(T) {
  let max;
  if (T.length == 0) {
    max = 1;
  } else {
    max = T[0].id;

    for (let i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max + 1;
}

function findAllById(arr, id) {
  return arr.filter(
    (item) => item.studentList && item.studentList.includes(id)
  );
}
// courses
app.get("/courses", (req, res) => {
  //traitement de la request
  console.log("here into BL : get all courses");

  res.json({ courses: coursesTab });
});
app.get("/courses/:id", (req, res) => {
  //traitement de la request
  console.log("here into BL : get course by id ");
  let id = req.params.id;
  let findedcourse = coursesTab.find((elt) => {
    return elt.id == id;
  });
  console.log("here finded course ", findedcourse);
  findedcourse
    ? res.json({ course: findedcourse })
    : res.json({ msg: "not found" });
  // course.findOne({ _id: id }).then((data) => {
  //   res.json({ course: data });
  // });
});
app.get("/courses/student/:id", (req, res) => {
  //traitement de la request
  console.log("here into BL : get course by id ");
  let id = req.params.id;
  let studentCourses = findAllById(coursesTab, id);
  let studentNotes = notesTab.filter((note) => note.studentId == id);
  let studentResponse = [];
  console.log("here finded courses ", studentCourses);
  for (let i = 0; i < studentCourses.length; i++) {
    for (let j = 0; j < studentNotes.length; j++) {
      if (studentCourses[i].id == studentNotes[j].courseId) {
        // Combine information from studentCourses[i] and studentNotes[j]
        const combinedInfo = {
          course: studentCourses[i],
          note: studentNotes[j],
        };

        // Push the combined object into studentResponse
        studentResponse.push(combinedInfo);
      }
    }
  }
  studentResponse
    ? res.json({ courses: studentResponse })
    : res.json({ msg: "not found" });
  // course.findOne({ _id: id }).then((data) => {
  //   res.json({ course: data });
  // });
});
app.put("/courses", (req, res) => {
  //traitement de la request
  console.log("here in BL : update Course");
  let newCourse = req.body;
  for (let i = 0; i < coursesTab.length; i++) {
    if (coursesTab[i].id == newCourse.id) {
      coursesTab[i] = newCourse;
      break;
    }
  }
  res.json({ msg: "updtated with success" });
});
app.get("/users/teachers", (req, res) => {
  //traitement de la request
  console.log("here into BL : get all teachers");
  let teachersTab = usersTab.filter((elt) => {
    return elt.role == "teacher";
  });
  console.log(teachersTab);
  res.json({ teachers: teachersTab });
});
app.get("/users/students", (req, res) => {
  //traitement de la request
  console.log("here into BL : get all students");
  let studentsTab = usersTab.filter((elt) => {
    return elt.role == "student";
  });
  console.log(studentsTab);
  res.json({ students: studentsTab });
});
app.get("/users/:id", (req, res) => {
  //traitement de la request
  console.log("here into BL : get user by id ");
  let id = req.params.id;
  let findeduser = usersTab.find((elt) => {
    return elt.id == id;
  });
  console.log("here finded user ", findeduser);
  findeduser ? res.json({ user: findeduser }) : res.json({ msg: "not found" });
});

app.put("/users", (req, res) => {
  //traitement de la request
  console.log("here in BL : update Course");
  let newUser = req.body;
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].id == newUser.id) {
      usersTab[i] = newUser;
      break;
    }
  }
  res.json({ msg: "updtated with success" });
});
app.delete("/users/:id", (req, res) => {
  //traitement de la request
  let id = req.params.id;
  x = false;
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].id == id) {
      usersTab.splice(i, 1);
      x = true;
      break;
    }
  }
  x
    ? res.json({ msg: "deleted with success", id: id })
    : res.json({ msg: "not found" });
});
app.delete("/courses/:id", (req, res) => {
  //traitement de la request
  let id = req.params.id;
  x = false;
  for (let i = 0; i < coursesTab.length; i++) {
    if (coursesTab[i].id == id) {
      coursesTab.splice(i, 1);
      x = true;
      break;
    }
  }
  x
    ? res.json({ msg: "deleted with success", id: id })
    : res.json({ msg: "not found" });
});
app.post("/courses", (req, res) => {
  //traitement de la request
  console.log("here into BL : add player", req.body);
  let obj = req.body;
  obj.id = newId(coursesTab);
  coursesTab.push(obj);
  res.json({ msg: "added successfully" });
});
// Make app importable from another files
module.exports = app;
