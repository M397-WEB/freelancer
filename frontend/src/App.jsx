import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './Layout/User/Master'
import Home from './User/Home'
import About from './User/About'
import Service from './User/Services'
import Project from './User/Project'
import Blog from './User/Blog'
import Team from './User/Team'
import Testimonial from './User/Testimonial'
import Page from './User/page'
import Contact from './User/Contact'
import Dashboard from './Admin/Dashboard'
import AdminMaster from './Layout/Admin/AdminMaster'
import Register from './Authentication/Register'
import { ToastContainer } from 'react-toastify'
import Login from './Authentication/Login'
import AddTechnologies from './Admin/AddTechnologies'
import ManageTechnologies from './Admin/ManageTechnologies'
import UpdateTechnology from './Admin/UpdateTechnology'
import Technologies from './User/Technologies'
import AddOrder from './User/AddOrder'
import TrackOrders from './User/TrackOrders'
import PendingOrders from './Admin/PendingOrders'
import AcceptedOrders from './Admin/AcceptedOrders'
import RejectedOrders from './Admin/RejectedOrders'
import CanceledOrders from './Admin/CanceledOrders'
import AddProject from './Admin/AddProject'
import CompletedOrders from './Admin/CompletedOrders'
import ViewFinalProjects from './Admin/ViewFinalProjects'
import ViewEnquiries from './Admin/ViewEnquiries'
import AddReview from './User/AddReview'
import ViewReviews from './Admin/ViewReviews'
import Reviews from './User/Reviews'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Master/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/technologies' element={<Technologies/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/project/:id' element={<Project/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/testimonial' element={<Testimonial/>}/>
            <Route path='/Page' element={<Page/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/addorder' element={<AddOrder/>}/>
            <Route path='/trackorders' element={<TrackOrders/>}/>
            <Route path='/addreview/:id' element={<AddReview/>}/>
            <Route path='/reviews' element={<Reviews/>}/>
            </Route>
            <Route path='/admin' element={<AdminMaster/>}>
            <Route path='/admin' element={<Dashboard/>}/>
            <Route path='/admin/addtechnologies' element={<AddTechnologies/>}/>
            <Route path='/admin/managetechnologies' element={<ManageTechnologies/>}/>
            <Route path='/admin/updatetechnology/:id' element={<UpdateTechnology/>}/>
            <Route path='/admin/pendingorders' element={<PendingOrders/>}/>
            <Route path='/admin/acceptedorders' element={<AcceptedOrders/>}/>
            <Route path='/admin/rejectedorders' element={<RejectedOrders/>}/>
            <Route path='/admin/cancledorders' element={<CanceledOrders/>}/>
            <Route path='/admin/addproject/:id' element={<AddProject/>}/>
            <Route path='/admin/completedorders' element={<CompletedOrders/>}/>
            <Route path='/admin/viewfinalproject/:id' element={<ViewFinalProjects/>}/>
            <Route path='/admin/viewenquiries' element={<ViewEnquiries/>}/>
            <Route path='/admin/viewreviews' element={<ViewReviews/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </>
  )
}

export default App
