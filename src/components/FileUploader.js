
 import React from 'react';
import { useState } from 'react';

  function FileUploader() {
    const [file, setFile] = useState(null);
    

    async function Uploader(){
    const formData = new FormData();
    formData.append('file', file);
    let response = await fetch('http://localhost:8080/upload', {
        method: 'POST',
        body: formData
    });
    if (response.status === 200) {
        console.log('File uploaded successfully');
    }
    else {  console.log('error'); }}

    function handleChange(e) {
        setFile(e.target.files[0]);
    }
return (
    <div>
<div class="flex justify-center">
  <div class="mb-3 w-96">
  <input class="form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="file" type="file"
    onChange= {handleChange}/>
  </div>
</div>
<button
  onClick = {Uploader}
  accept=".docx, .doc, .pdf"
   class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  Button
</button>
</div>

)

}
export default FileUploader;