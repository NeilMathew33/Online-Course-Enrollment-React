import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddOnlineCourseEnrollment from './Components/AddOnlineCourseEnrollment';
import SearchCourse from './Components/SearchCourse';
import DeleteCourse from './Components/DeleteCourse';
import ViewAllCourses from './Components/ViewAllCourses';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddOnlineCourseEnrollment />} />
      <Route path="/search" element={<SearchCourse />} />
      <Route path="/delete" element={<DeleteCourse />} />
      <Route path="/ViewAll" element={<ViewAllCourses />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
