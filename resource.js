// Sample data for courses (replace this with your actual data)
const courses = [
  { id: 1, name: 'Matematika', description: 'MAPEL MATEMATIKA' },
  { id: 2, name: 'Fisika', description: 'MAPEL FISIKA' },
  { id: 3, name: 'Kimia', description: 'MAPEL KIMIA' },
  { id: 4, name: 'Biologi', description: 'MAPEL BIOLOGI' },
  { id: 5, name: 'Informatika', description: 'MAPEL INFORMATIKA' },
  { id: 6, name: 'B.Inggris', description: 'MAPEL B.INGGRIS' },
  { id: 7, name: 'B.Indonesia', description: 'MAPEL B.INDONESIA' },
  { id: 8, name: 'Geografi', description: 'MAPEL GEOGRAFI' },
  { id: 9, name: 'PPKN', description: 'MAPEL PPKN' },
  { id: 10, name: 'PJOK', description: 'MAPEL PJOK' },
  { id: 11, name: 'Sejarah', description: 'MAPEL SEJARAH' },
  { id: 12, name: 'Ekonomi', description: 'MAPEL EKONOMI' },
  { id: 13, name: 'Sosiologi', description: 'MAPEL SOSIOLOGI' },
  { id: 14, name: 'Seni Rupa', description: 'MAPEL SENI RUPA' },
  { id: 15, name: 'Agama', description: 'MAPEL AGAMA' }
];

// Function to display the list of courses
function displayCourses() {
  const courseList = document.querySelector('.course-list');

  courses.forEach(course => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    courseCard.textContent = course.name;
    courseCard.addEventListener('click', () => displayCourseDetails(course));
    courseList.appendChild(courseCard);
  });
}

// Function to display course details
function displayCourseDetails(course) {
  const courseDetails = document.querySelector('.course-details');
  courseDetails.innerHTML = `
    <h2>${course.name}</h2>
    <p>${course.description}</p>
  `;
}

// Initial function call to display courses
displayCourses();
