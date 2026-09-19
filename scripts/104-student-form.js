function registerStudent(event){

        let newStudent = new Student(firstName, lastName,studentCohort, studentEmail, studentClass);
        
        let getTable = document.getElementById("tbody");
        let row = document.createElement("tr");
        row.innerHTML += `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${studentCohort}</td>
        <td><button class="btn btn-danger delete-btn">Delete</button></td>
        `

        let registerStudent = new Register(firstName, lastName, studentCohort, studentEmail, studentClass);

   


}
};