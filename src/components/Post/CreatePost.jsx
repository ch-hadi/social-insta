import React, { useState } from 'react';

const CreatePost = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  return (
    <div class='flex absolute pt-40   flex-col justify-center '>
      <div class=' flex flex-col items-center rounded overflow-hidden w-[800px] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none'>
        <div className=' w-full text-center  bottom-1 '>
          <p>Create Post</p>
        </div>
        <div className='h-[400px] w-full bg-red-800'>
          {selectedFile && (
            <div>
              <h2>Selected File:</h2>
              <p>{selectedFile.name}</p>
              {/* You can display the file content or any other information here */}
            </div>
          )}
        </div>
        <div>
          <input type='file' onChange={handleFileChange} />
          {/* You can add a button or other UI elements here to trigger the file selection */}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
