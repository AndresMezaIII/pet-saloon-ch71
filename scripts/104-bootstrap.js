function Register(firstName, lastName, cohort, email, class){
    this.name = firstName;
    this.lastName = lastName;
    this.cohort = cohort;
    this.email = email;
    this.class = class;
}

getValues(event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let studentCohort = document.getElementById("cohort").value;
    let studentEmail = document.getElementById("email").value;
    let studentClass = document.getElementById("studentClass").value;
    let registerStudent = new Register(firstName, lastName, studentCohort, studentEmail, studentClass);
}