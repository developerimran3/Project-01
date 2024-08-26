const student_create_form = document.getElementById("student-create");
const msg = document.querySelector(".msg");

student_create_form.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const { name, email, phone, location, photo } = Object.fromEntries(form_data);
  if (!name || !email || !phone || !location || !photo) {
    msg.innerHTML = createAlert("All fields are requard");
  } else if (!isEmail(email)) {
    msg.innerHTML = createAlert("Invalid email Address", "warning");
  } else if (!isMobile(phone)) {
    msg.innerHTML = createAlert("Invalid Mobile Nubmer", "warning");
  }
};
