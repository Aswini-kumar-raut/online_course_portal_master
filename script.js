document.addEventListener("DOMContentLoaded", function() {
    // Dummy data for completed courses and videos watched
    const completedCourses = [
        { name: "HTML Basics", videosWatched: 5 },
        { name: "CSS Fundamentals", videosWatched: 8 },
        { name: "JavaScript Essentials", videosWatched: 10 }
    ];

    // Calculate the total number of courses completed and videos watched
    const totalCoursesCompleted = completedCourses.length;
    const totalVideosWatched = completedCourses.reduce((sum, course) => sum + course.videosWatched, 0);

    // Update the HTML with the dynamic data
    document.getElementById("coursesCompleted").innerText = totalCoursesCompleted;
    document.getElementById("videosWatched").innerText = totalVideosWatched;

    const completedCoursesList = document.getElementById("completedCoursesList");
    completedCourses.forEach(course => {
        const listItem = document.createElement("li");
        listItem.innerText = course.name;
        completedCoursesList.appendChild(listItem);
    });

    // Show or hide the learning info on button click
    const learningButton = document.getElementById("learningButton");
    const learningInfo = document.getElementById("learningInfo");

    learningButton.addEventListener("click", function() {
        learningInfo.style.display = learningInfo.style.display === "none" ? "block" : "none";
    });

    // Hide the learning info by default
    learningInfo.style.display = "none";
});
