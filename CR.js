// Sample data for courses (replace this with your actual data)
const courses = [
  { id: 1, name: 'Mathematics', description: 'Learn about numbers and equations' },
  { id: 2, name: 'Science', description: 'Explore the natural world' },
  { id: 3, name: 'History', description: 'Discover the past' }
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
