import React, { useState } from 'react'
import Uploaded from './Uploaded';
import Upload from './Upload';
const Index = () => {
   const [uploadStatus, setUploadStatus] = useState<any>(true)
   let DocumentObjectModel = null;
   if (uploadStatus) {
      DocumentObjectModel = <Uploaded />
   } else {
      DocumentObjectModel = <Upload />
   }
   return (
      <>
         {
            DocumentObjectModel
         }
      </>
   )
}

export default Index
