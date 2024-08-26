const student_create_form = document.getElementById("student-create");

student_create_form.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);
  console.log(data);
};
