function getContentInPDF() {
    // Access form elements
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let dec = document.getElementById("dec").value;

    // Create a single HTML element by adding form data
    let element = document.createElement("div");
    element.innerHTML =
      "<h1>Form Data</h1>" +
      "<p>Name: " +  name + "</p>" +
      "<p>Email Id: " +  email + "</p>" +
      "<p>Mobile No. : " +  tel + "</p>" +
      "<p>Message : " +  dec + "</p>" +
    // Create a new PDF using the form element
    html2pdf().from(element).save();
  }


  console.log("hii shubham")