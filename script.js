// Add more experience sections
function addExperience() {
  let experienceSection = document.getElementById('experienceSection');
  let newExperience = document.createElement('div');
  newExperience.classList.add('experience');
  
  newExperience.innerHTML = `
      <label for="jobTitle">Job Title:</label>
      <input type="text" name="jobTitle" required><br>
      
      <label for="company">Company:</label>
      <input type="text" name="company" required><br>
      
      <label for="startDate">Start Date:</label>
      <input type="date" name="startDate"><br>
      
      <label for="endDate">End Date:</label>
      <input type="date" name="endDate"><br>
      
      <textarea name="jobDescription" placeholder="Describe your role and responsibilities"></textarea><br>
  `;
  
  experienceSection.appendChild(newExperience);
}

// Add more education sections
function addEducation() {
  let educationSection = document.getElementById('educationSection');
  let newEducation = document.createElement('div');
  newEducation.classList.add('education');
  
  newEducation.innerHTML = `
      <label for="schoolName">School Name:</label>
      <input type="text" name="schoolName" required><br>
      
      <label for="degree">Degree:</label>
      <input type="text" name="degree" required><br>
      
      <label for="gradDate">Graduation Date:</label>
      <input type="date" name="gradDate"><br>
  `;
  
  educationSection.appendChild(newEducation);
}

document.getElementById('resumeForm').onsubmit = function(event) {
  event.preventDefault();
  
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  
  let resumePreview = `
      <div class="editable" contenteditable="true">
          <h2>${name}</h2>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
      </div>
      <h2>Experience</h2>
  `;
  
  let experiences = document.querySelectorAll('.experience');
  experiences.forEach(function(experience) {
      let jobTitle = experience.querySelector('input[name="jobTitle"]').value;
      let company = experience.querySelector('input[name="company"]').value;
      let startDate = experience.querySelector('input[name="startDate"]').value;
      let endDate = experience.querySelector('input[name="endDate"]').value;
      let jobDescription = experience.querySelector('textarea[name="jobDescription"]').value;
      
      resumePreview += `
          <div class="editable" contenteditable="true">
              <h3>${jobTitle} at ${company}</h3>
              <p>${startDate} - ${endDate}</p>
              <p>${jobDescription}</p>
          </div>
      `;
  });

  let educationSection = document.querySelectorAll('.education');
  resumePreview += '<h2>Education</h2>';
  educationSection.forEach(function(education) {
      let schoolName = education.querySelector('input[name="schoolName"]').value;
      let degree = education.querySelector('input[name="degree"]').value;
      let gradDate = education.querySelector('input[name="gradDate"]').value;

      resumePreview += `
          <div class="editable" contenteditable="true">
              <h3>${schoolName}</h3>
              <p>Degree: ${degree}</p>
              <p>Graduation Date: ${gradDate}</p>
          </div>
      `;
  });
  
  document.getElementById('resumePreview').innerHTML = resumePreview;
  document.getElementById('downloadBtn').style.display = 'block';
};

// Function to download the resume as a PDF
function downloadPDF() {
  const element = document.getElementById('resumePreview');
  html2pdf().from(element).save('resume.pdf');
}
