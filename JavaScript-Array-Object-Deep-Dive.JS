//  STORE 10 STUDENT INFORMATION
/* 
    name:
    email:
    id  : 
*/

// U__id generator for unique id (utility for to create random id  )

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

// console.log(create_UUID());

const student = [
  {
    id: "9797a273-c3a9-4b75-9b38-884b31c3d70e",
    name: "Najmus Sakib",
    email: "najmussakib173@gmail.com",
  },
  {
    id: "777e8096-fced-4b20-af8c-0722072adb04",
    name: "Akib",
    email: "Akib@gmail.com",
  },
  {
    id: "c4e2f048-5bd3-4965-a466-4dd6cf7f6333",
    name: "Rakib",
    email: "Rakib@gmail.com",
  },
];

// Easyly travers
// filter
//Delete
//update
//Create a New One

//  Create a New Student
student.push({
  id: create_UUID(),
  name: "Imam",
  email: "imam@gmail.com",
});

// Update a student information
const idToUpadte = "c4e2f048-5bd3-4965-a466-4dd6cf7f6333";
const updateData = {
  name: "Amira Islam",
  email: "amiraislam@gmail.com",
};

const updateindex = student.findIndex((item) => item.id === idToUpadte);

student[updateindex] = {
  id: idToUpadte,
  ...updateData,
};

console.log(student);
