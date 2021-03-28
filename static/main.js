
class Course {
    constructor(id,name,tag) {
        this.id = id;
        this.name = name;
        this.tag = tag;
    }
    syncContent() {
        document.getElementById("course").textContent = "Course ID: " + this.id;
        document.getElementById("name").textContent = "Course Name: " + this.name;
        document.getElementById("tag").textContent = "Tags: " + this.tag;
    }
}

const course = [{
    "id": "8.01",
    "name": {
        "origin" : "Physics I – Classical Mechanics",
        "trans" : "Cơ Học Cổ Điển"
    },
    "tag" : ["cơ học Newton", "Vật lý I", "classical"]
  },{
    "id": "6.00",
    "name": {
        "origin" : "Introduction to Computer Science and Programming",
        "trans" : "Bắt đầu với khoa học máy tính và lập trình"
    },
    "tag" : ["Undergraduate", "Khoa học máy tính", "lập trình"]
  }

];
const physics = new Course(course[0].id, course[0].name.origin, course[0].tag);
const computerScience = new Course(course[1].id, course[1].name.origin, course[1].tag);

console.log(physics)
console.log(computerScience)


const selectElement = document.querySelector('.course-name');
selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.result');
    result.textContent = event.target.value;

})

// async function courseInfor() {
//     let response = await fetch("db/mit.json");
//     let item = await response.json();
// }

