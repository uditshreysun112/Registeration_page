document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents default form submission

    // Perform form validation or any additional logic here
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;

    if (fullName === "" || email === "") {
        alert("Please fill in all required fields.");
    } else {
        alert("Form submitted successfully!");
        // You could add logic to proceed to the next step
    }
});

document.getElementById('downloadPDF').addEventListener('click', function() {
    // Gather form data
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const gender = document.getElementById('gender').value;
    const occupation = document.getElementById('occupation').value;

    const idType = document.getElementById('idType').value;
    const idNumber = document.getElementById('idNumber').value;
    const issueAuthority = document.getElementById('issueAuthority').value;
    const issueDate = document.getElementById('issueDate').value;
    const expiryDate = document.getElementById('expiryDate').value;

    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add text to the PDF
    doc.setFontSize(12);
    doc.text('Registration Form', 10, 10);

    doc.text('Personal Details:', 10, 20);
    doc.text(`Full Name: ${fullName}`, 10, 30);
    doc.text(`Date of Birth: ${dob}`, 10, 40);
    doc.text(`Email: ${email}`, 10, 50);
    doc.text(`Mobile Number: ${mobileNumber}`, 10, 60);
    doc.text(`Gender: ${gender}`, 10, 70);
    doc.text(`Occupation: ${occupation}`, 10, 80);

    doc.text('Identity Details:', 10, 90);
    doc.text(`ID Type: ${idType}`, 10, 100);
    doc.text(`ID Number: ${idNumber}`, 10, 110);
    doc.text(`Issue Authority: ${issueAuthority}`, 10, 120);
    doc.text(`Issue Date: ${issueDate}`, 10, 130);
    doc.text(`Expiry Date: ${expiryDate}`, 10, 140);

    // Save the PDF
    doc.save('registration_form.pdf');
});
