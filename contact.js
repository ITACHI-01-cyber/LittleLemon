
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();

    if(name==="" || email==="" || msg==="") {
      formMessage.textContent = "⚠ Please fill in all fields!";
      formMessage.style.color = "red";
      return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
      formMessage.textContent = "⚠ Invalid email!";
      formMessage.style.color = "orange";
      return;
    }

    formMessage.textContent = "✅ Thanks " + name + "! I'll contact you shortly.";
    formMessage.style.color = "#00f2fe";
    contactForm.reset();
  });
