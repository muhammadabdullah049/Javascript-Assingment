var students = [
    { name: "John Doe", fatherName: "Mr. Doe", age: 18, rollNo: "A001", class: "10th" },
    { name: "Jane Smith", fatherName: "Mr. Smith", age: 17, rollNo: "A002", class: "10th" },
    { name: "David Johnson", fatherName: "Mr. Johnson", age: 16, rollNo: "A003", class: "10th" },
    // Add more students as needed
];

function initTable() {
    var tbody = document.querySelector("#studentTable tbody");

    students.forEach(function(student) {
        var row = document.createElement("tr");

        var studentDetails = ["name", "fatherName", "age", "rollNo", "class"];
        studentDetails.forEach(function(detail) {
            var cell = document.createElement("td");
            cell.textContent = student[detail];
            row.appendChild(cell);
        });

        var attendanceCell = document.createElement("td");
        attendanceCell.setAttribute("class", "attendance-options");
        var presentRadio = createRadioButton("Present", "attendance-" + student.rollNo, "present");
        var absentRadio = createRadioButton("Absent", "attendance-" + student.rollNo, "absent");
        var leaveRadio = createRadioButton("Leave", "attendance-" + student.rollNo, "leave");
        attendanceCell.appendChild(presentRadio);
        attendanceCell.appendChild(absentRadio);
        attendanceCell.appendChild(leaveRadio);
        row.appendChild(attendanceCell);

        tbody.appendChild(row);
    });
}

function createRadioButton(labelText, name, value) {
    var label = document.createElement("label");
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.name = name;
    radio.value = value;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(labelText));
    return label;
}

document.addEventListener("DOMContentLoaded", function() {
    initTable();
});






// var students = [
//     { name: "John Doe", fatherName: "Mr. Doe", age: 18, rollNo: "A001", class: "10th", attendance: "present" },
//     { name: "Jane Smith", fatherName: "Mr. Smith", age: 17, rollNo: "A002", class: "10th", attendance: "absent" },
//     { name: "David Johnson", fatherName: "Mr. Johnson", age: 16, rollNo: "A003", class: "10th", attendance: "leave" },
//     // Add more students as needed
// ];

// function initTable() {
//     var tbody = document.querySelector("#studentTable tbody");
//     var presentCount = 0;
//     var absentCount = 0;
//     var leaveCount = 0;

//     students.forEach(function(student) {
//         var row = document.createElement("tr");

//         var studentDetails = ["name", "fatherName", "age", "rollNo", "class"];
//         studentDetails.forEach(function(detail) {
//             var cell = document.createElement("td");
//             cell.textContent = student[detail];
//             row.appendChild(cell);
//         });

//         var attendanceCell = document.createElement("td");
//         attendanceCell.textContent = student.attendance;
//         row.appendChild(attendanceCell);

//         tbody.appendChild(row);

//         // Update counts
//         if (student.attendance === "present") {
//             presentCount++;
//         } else if (student.attendance === "absent") {
//             absentCount++;
//         } else if (student.attendance === "leave") {
//             leaveCount++;
//         }
//     });

//     document.getElementById("presentCount").textContent = presentCount;
//     document.getElementById("absentCount").textContent = absentCount;
//     document.getElementById("leaveCount").textContent = leaveCount;
// }

// document.addEventListener("DOMContentLoaded", function() {
//     initTable();
// });




