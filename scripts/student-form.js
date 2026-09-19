function Student(name, lastName, cohort, email, studentClass) {
  ((this.Name = name),
    (this.lastName = lastName),
    (this.cohort = cohort),
    (this.email = email),
    (this.studentClass = studentClass));
}

function registerStudent(event) {
  event.preventDefault();
}
