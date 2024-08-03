import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import Navbar from "./components/basic/Navbar"
import Header from "./components/basic/Header"
import AddOptionspopUp from "./components/add/AddOptionspopUp"
import { useState } from "react"
import OwnClasses from "./components/home/OwnClasses"
import JoinedClasses from "./components/home/JoinedClasses"
import JoinedInsititutes from "./components/home/JoinedInsititutes"
import Revert from "./pages/Revert"
import Class from "./pages/Class"
import Announcements from "./pages/class/Announcements"
import Notes from "./pages/class/Notes"
import Quizes from "./pages/class/Quizes"
import Signup from "./pages/Signup"
import Members from "./pages/class/Members"
import CreateQuiz from "./pages/CreateQuiz"
import Notification from "./components/basic/Notification"
import Profile from "./pages/Profile"

const App = () => {
  const [pop, setPop] = useState(0);
  const [notification, setNotification] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex h-full w-full fixed top-0 left-0">
        <Navbar />
        <div className="flex flex-col w-full h-full relative overflow-scroll">
          <Header setPop={setPop} setNotification={setNotification} />
          <Routes>
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/h" element={<HomePage />} >
                <Route path="/o" element={<OwnClasses />} />
                <Route path="s" element={<JoinedInsititutes />} />
                <Route path="e" element={<JoinedClasses />} />
              </Route>
              <Route path="/cls" element={<Class />}>
                <Route path="a/:id" element={<Announcements />} />
                <Route path="n/:id" element={<Notes />} />
                <Route path="q/:id" element={<Quizes />} />
                <Route path="m/:id" element={<Members />} />
              </Route>
              <Route path='/createquiz' element={<CreateQuiz />} >
              </Route>
              <Route path="*" element={<Revert />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/profile' element={<Profile />} />
            </>
          </Routes>
        </div>
        {notification && <Notification setNotification={setNotification} />}
        {pop != 0 && <AddOptionspopUp pop={pop} setPop={setPop} />}
      </div>
    </BrowserRouter>
  )
}

export default App