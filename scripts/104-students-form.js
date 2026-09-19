// ==== OBJECT CONSTRUCTOR ===
function Student(name, lastname, cohort, email, classValue){
    this.name = name;
    this.lastname = lastname;
    this.cohort = cohort;
    this.email = email;
    this.class = classValue;
}

// ==== REGISTER STUDENT ===
function registerStudent(event){
    event.preventDefault();

    let name = document.getElementById("studentName").value;
    let lastname = document.getElementById("studentLastname").value;
    let cohort = document.getElementById("studentCohort").value;
    let email = document.getElementById("studentEmail").value;
    let classValue = document.getElementById("studentClass").value;  

    let newStudent = new Student(name, lastname, cohort, email, classValue);
    
    let body = document.getElementById("body");
    const row = document.createElement("tr");

    row.innerHTML += `
            <td> ${newStudent.name} </td>
            <td> ${newStudent.lastname} </td>
            <td> ${newStudent.cohort} </td>
            <td> ${newStudent.email} </td>
            <td> ${newStudent.class} </td>
            <td> <button class="btn btn-danger delete-btn">Delete</button> </td>
    `;

    // Detele Functionality
    row.querySelector(".delete-btn").addEventListener("click", function(){

        let confirmation = confirm("Are you sure you want to delete this studen?");

        if(confirmation){
            row.remove();
        }
    });

    body.appendChild(row);
}


// ==== ANONYMOUS FUNCTION - TEST ===
//const button = document.querySelector("#testButton");

document.querySelector("#testButton").addEventListener("click", function(){
    alert("Button Clicked!");
});