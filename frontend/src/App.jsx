import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import ChooseUser from './components/ChooseUser'
import AdminRegister from './components/AdminRegister'
import AdminSignIn from './components/AdminSignIn'
import StudentSignIn from './components/StudentSignIn'
import TeacherSignIn from './components/TeacherSignIn'

import AdminDashboard from './pages/Admin/Dashboard'
import StudentDashboard from './pages/Students/Dashboard'
import TeacherDashboard from '../src/pages/Teachers/Dashboard';


import Classes from '../src/pages/Admin/Classes';
import Exam from '../src/pages/Admin/Exam';
import Attendance from '../src/pages/Admin/Attendance';
import Performance from '../src/pages/Admin/Performance';
import Teachers from '../src/pages/Admin/Teachers';
import Students from '../src/pages/Admin/Students';
import Assignments from '../src/pages/Admin/Assignments';
import Library from '../src/pages/Admin/Library';
import EventCalender from '../src/pages/Admin/EventCalender';
import SettingsProfile from '../src/pages/Admin/SettingsProfile';
import Announcement from '../src/pages/Admin/Announcement';


import StudentAssignments from '../src/pages/Students/Assignments';
import ExamSection from '../src/pages/Students/Exams';
import PerformanceSection from '../src/pages/Students/Performance';
import AttendanceSection from '../src/pages/Students/Attendance';
import LibrarySection from '../src/pages/Students/Library';
import AnnouncementSection from '../src/pages/Students/Announcement';
import ProfileSection from '../src/pages/Students/Profile';


import ClassSection from '../src/pages/Teachers/Classes';
import StudentSection from '../src/pages/Teachers/Students';
import TeacherSection from '../src/pages/Teachers/Teachers';
import CheckPerformanceSection from '../src/pages/Teachers/Performance';
import EventSection from '../src/pages/Teachers/Events';
import TeacherProfileSection from '../src/pages/Teachers/Profile';
import CheckAnnouncementSection from '../src/pages/Teachers/Announcement';
import AssignmentSection from '../src/pages/Teachers/Assignments';
import CheckAttendanceSection from '../src/pages/Teachers/Attendance';
import CheckExamSection from '../src/pages/Teachers/Exams';




function App() {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/choose-user' element={<ChooseUser/>} />

        <Route path='/admin/register' element={<AdminRegister/>} />


        {/* All sign in pages routes  */}
        <Route path='/admin-signIn' element={<AdminSignIn/>} />
        <Route path='/student-signIn' element={<StudentSignIn/>} />
        <Route path='/teacher-signIn' element={<TeacherSignIn/>} />
        {/* All the dashboard routes */}

        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />
        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />  


        {/* Admin section routes */}
        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/performance" element={<Performance />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />
        <Route exact path="/admin/students" element={<Students />} />
        <Route exact path="/admin/assignments" element={<Assignments />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/events" element={<EventCalender />} />
        <Route exact path="/admin/settings" element={<SettingsProfile />} />


       
        {/* Student section routes */}
        <Route exact path="/student/assignments" element={<StudentAssignments />} />
        <Route exact path="/student/exams" element={<ExamSection />} />
        <Route exact path="/student/performance" element={<PerformanceSection />} />
        <Route exact path="/student/attendance" element={<AttendanceSection />} />
        <Route exact path="/student/library" element={<LibrarySection />} />
        <Route exact path="/student/communication" element={<AnnouncementSection/>} />
        <Route exact path="/student/settings" element={<ProfileSection />} />


        {/* Teachers sections here */}
        <Route exact path="/teacher/classes" element={<ClassSection />} />
        <Route exact path="/teacher/students" element={<StudentSection />} />
        <Route exact path="/teacher/teachers" element={<TeacherSection />} />
        <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
        <Route exact path="/teacher/exams" element={<CheckExamSection />} />
        <Route exact path="/teacher/performance" element={<CheckPerformanceSection />} />
        <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
        <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
        <Route exact path="/teacher/events" element={<EventSection />} />
        <Route exact path="/teacher/settings" element={<TeacherProfileSection/>} />

      </Routes>
    </Router>
  )
}

export default App
