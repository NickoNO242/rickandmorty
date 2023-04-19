
import React, { useState } from "react";
const Form = () => {
  const [url, setUrl]=useState([])
  const getUrl = (event) => {
    let output = document.getElementById("listing");
    let file = document.querySelector('#filepicker');
    let value= file.dir
    let files = event.target.files;
    console.log(files)
    setUrl(files.name)

  };
 

  return (
    <form className="bg-light mt-5 p-3 w-25 mx-auto rounded">
      <div className="mb-3 ">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <div className="mb-3">
        <label for="exampleFilePicker" className="form-label">
          Seleccione Archivo
        </label>
        <input
          type="file"
          className="form-control"
          id="filepicker"
          name="fileList"
          webkitdirectory=''
          onChange={getUrl}
          
        />
        <ul id="listing"></ul>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Form;

// import React, { useState } from 'react';

// function DirectorySelector() {
//   const [selectedDirectory, setSelectedDirectory] = useState(null);

//   const handleDirectorySelect = (event) => {
//     setSelectedDirectory(event.target.files[0].path);
//     console.log(selectedDirectory);
//   };
  
//   return (
//     <div className='mt-5 bg-light'>
//       <input type="file" webkitdirectory='' onChange={handleDirectorySelect} />
//       {selectedDirectory && <p>Selected directory: {selectedDirectory} console.log(selectedDirectory);</p>}
//     </div>
//   );
// }
// export default DirectorySelector