const form = document.getElementById("contact-form");
const responseDiv = document.getElementById("response");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // get form data
  const formData = new FormData(form);

  // create request
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "contact.php");
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  // handle response
  xhr.onload = function () {
    if (xhr.status === 200) {
      responseDiv.innerHTML = "Thank you for contacting us!";
      form.reset();
    } else {
      responseDiv.innerHTML = "Error: " + xhr.statusText;
    }
  };

  // send request
  xhr.send(new URLSearchParams(formData));
});

function callNow() {
    alert("Please call 7059054537 NOW!!!");
  }
