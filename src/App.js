
import ROUTES from './utils/routes';

function App() {
  return (
    <>
      <ROUTES/>
      {/* <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/comp-onoolt/:comp/:kg' element={<CompOnooltDetail/>}/>
        <Route path='/comp-play/:comp/:kg' element={<CompPlay/>}/>
        <Route path='/comp-jin/:comp/:kg' element={<JinControl/>}/>
        <Route path="/dashboard" element={<Home />}>
          <Route index element={<Dashboard/>}/>
          <Route path="teams-req" element={<TeamsReq/>}/>
          <Route path="teams-active" element={<TeamsActive/>}/>
          <Route path="teams-expired" element={<TeamsExpired/>}/>
          <Route path="comp-list" element={<ComptationList/>}/>
          <Route path="comp-list/:slug" element={<DrawComptation/>}/>
          <Route path="comp-list/:slug/:org" element={<MeduulegDetail/>}/>
          <Route path="comp-calendar" element={<ComptationCalendar/>}/>
          <Route path="club-list/requested" element={<ClubLists/>}/>
          <Route path="club-list/approved" element={<ClubApproved/>}/>
          <Route path="club-list/expired" element={<ClubExpired/>}/>
          <Route path="admins" element={<Admins/>}/>
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
