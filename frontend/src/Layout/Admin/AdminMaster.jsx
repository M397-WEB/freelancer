import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import {Outlet} from "react-router-dom";
export default function AdminMaster(){
    return(
        <>
        <AdminHeader/>
        <Outlet/>
        <AdminFooter/>
        </>
    )
}