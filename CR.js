// List of subjects
const subjects = [
  "Matematika",
  "Fisika",
  "Kimia",
  "Biologi",
  "Informatika",
  "Bahasa Inggris",
  "Bahasa Indonesia",
  "Geografi",
  "PPKN",
  "Pjok",
  "Sejarah",
  "Ekonomi",
  "Sosiologi",
  "Seni Rupa",
  "Agama"
];

// Function to display the list of subjects
function displaySubjects() {
  const subjectList = document.querySelector('.subject-list');

  subjects.forEach(subject => {
    const subjectButton = document.createElement('button');
    subjectButton.classList.add('subject-button');
    subjectButton.textContent = subject;
    subjectButton.addEventListener('click', () => displaySubjectDetails(subject));
    subjectList.appendChild(subjectButton);
  });
}

// Function to display subject details
function displaySubjectDetails(subject) {
  const subjectDetails = document.querySelector('.subject-details');
  subjectDetails.innerHTML = `
    <h2>${subject}</h2>
    <p>Details for ${subject} will be displayed here.</p>
  `;
}

// Initial function call to display subjects
displaySubjects();

