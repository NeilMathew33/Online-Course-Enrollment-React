import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddOnlineCourseEnrollment from './Components/AddOnlineCourseEnrollment';
import SearchCourse from './Components/SearchCourse';
import DeleteCourse from './Components/DeleteCourse';
import ViewAllCourses from './Components/ViewAllCourses';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddOnlineCourseEnrollment />} />
      <Route path="/search" element={<SearchCourse />} />
      <Route path="/delete" element={<DeleteCourse />} />
      <Route path="/ViewAll" element={<ViewAllCourses />} />
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
