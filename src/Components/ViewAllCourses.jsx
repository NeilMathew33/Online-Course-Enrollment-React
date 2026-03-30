import React, { useState } from 'react'
import CoursesNavBar from './CoursesNavBar'

const ViewAllCourses = () => {

    const [courseData, setCourseData] = new useState([
        { "name": "Neil", "course": "react", "profilepic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh71IbWH8fNUXwnhHFGsus5w_-wBad4mt1wA&s" },
        { "name": "Ronaldo", "course": "react", "profilepic": "https://www.shutterstock.com/image-photo/busy-professional-young-business-man-260nw-2510015505.jpg" },
        { "name": "Messi", "course": "react", "profilepic": "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147492362/images/c384f4b-050c-ebdf-0d88-05ec1efe1c6_DIY_vs._Done_for_You_Course_Creation_-_eLearning_Partners.png" },
        { "name": "Neymar", "course": "react", "profilepic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_98Tbdh5HMdMCOn1TGDA4LSsC7O5e1UiUgQ&s" },
        { "name": "Vini", "course": "react", "profilepic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInoKiN_WMP2CbRcHbhfic0K3kl5PLJg5v1g&s" },
        { "name": "Luna", "course": "react", "profilepic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdW9VKYBSQcYl5gntpQSIgSzZT28kH70seg&s" },
        { "name": "Mbappe", "course": "react", "profilepic": "https://blog.braincert.com/content/images/2024/10/Blog-Banner---01.10.2024.png" },
        { "name": "Amrit", "course": "C++", "profilepic": "https://cdn.prod.website-files.com/61356a51ecf1c7b9186f1b9f/622a4531be9c1c021263fbb2_online-professor-skills.png" },
        { "name": "Noopura", "course": "Python", "profilepic": "https://img1.wsimg.com/isteam/stock/o39dDe0" },
    ])

    return (
        <div>
            <CoursesNavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {courseData.map(
                                (value,index) => {
                                    return (
                                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img height="200" src={value.profilepic} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{value.name}</h5>
                                        <p class="card-text">{value.course}</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                                    )
                                }
                            )}
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllCourses