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
import ClubApproved from './pages/Dashboard/Pages/Clubs/approved';
import DrawComptation from './pages/Dashboard/Pages/Comptation/draw';
import CompOnooltDetail from './pages/Onoolt/comp-details-onoolt';
import CompPlay from './pages/CompPlay/comp_play';
import JinControl from './pages/JinControl/index';
import MeduulegDetail from './pages/Dashboard/Pages/Comptation/meduuleg-detail';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/comp-onoolt/:comp/:kg' element={<CompOnooltDetail/>}/>
        <Route path='/comp-play/:comp/:kg' element={<CompPlay/>}/>
        <Route path='/comp-jin/:comp/:kg' element={<JinControl/>}/>

        <Route path="/dashboard" element={<Home />}>
          <Route index element={<Dashboard/>}/>
          <Route path="teams-req" element={<TeamsReq/>}/>
          <Route path="teams-active" element={<TeamsActive/>}/>
          <Route path="comp-list" element={<ComptationList/>}/>
          <Route path="comp-list/:slug" element={<DrawComptation/>}/>
          <Route path="comp-list/:slug/:org" element={<MeduulegDetail/>}/>
          <Route path="comp-calendar" element={<ComptationCalendar/>}/>
          <Route path="club-list/requested" element={<ClubLists/>}/>
          <Route path="club-list/approved" element={<ClubApproved/>}/>
          <Route path="admins" element={<Admins/>}/>
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
