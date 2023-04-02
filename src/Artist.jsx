import React from 'react'
import FileForm from './FileForm'
import LatestImage from './LatestImage'


function Artist() {
  return (
    <div style={{display:"flex",alignItems:"center", gap:"40px"}}>
     
      <div className='mb-4' >
      
      <FileForm   />
      </div>
     <div>
      <LatestImage/>
      </div>
    </div>
  )
}

export default Artist