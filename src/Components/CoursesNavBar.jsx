import React from 'react'

const CoursesNavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">AddOnlineCourse</a>
        <a class="nav-link" href="/search">Search Online Course</a>
        <a class="nav-link" href="/delete">Delete Online Course</a>
        <a class="nav-link" href="/ViewAll">View all online courses</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default CoursesNavBar