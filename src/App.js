import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Dashboard'
import Dashboard from './pages/Dashboard/Pages/home';
import TeamsReq from './pages/Dashboard/Pages/Teams/req';
import TeamsActive from './pages/Dashboard/Pages/Teams/active';
import ComptationList from './pages/Dashboard/Pages/Comptation/list'
import ComptationCalendar from './pages/Dashboard/Pages/Comptation/calendar';
import ClubLists from './pages/Dashboard/Pages/Clubs/req'
import Admins from './pages/Dashboard/Pages/Admins/admin'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>

        <Route path="/dashboard" element={<Home />}>
          <Route index element={<Dashboard/>}/>
          <Route path="teams-req" element={<TeamsReq/>}/>
          <Route path="teams-active" element={<TeamsActive/>}/>
          <Route path="comp-list" element={<ComptationList/>}/>
          <Route path="comp-calendar" element={<ComptationCalendar/>}/>
          <Route path="club-list" element={<ClubLists/>}/>
          <Route path="admins" element={<Admins/>}/>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
