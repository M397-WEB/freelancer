import React from 'react'
import { HashLoader } from 'react-spinners'

export default function Loader() {
  return (
   <>
   <div className="conatiner">
    <div className="row">
        <div className="col-3 mx-auto" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"60vh"}}>
            <HashLoader color='rgba(3, 43, 243, 0.8)' size={"70"} />
        </div>
    </div>
   </div>
   </>
  )
}
