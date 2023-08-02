import * as React from 'react';

import Modal from '@mui/material/Modal';
import { Box, TextField, Button } from '@mui/material';

export default function CModal(props) {
  const [expand, setExpand] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [descreption, setDescription] = React.useState('');

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const createPost = () => {
    const formData = new FormData();
    formData.append = ('img', image);
    console.log('created !');
  };

  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: expand ? 900 : 600,
          borderRadius: 10,
        }}
        className={`bg-white ${!image ? 'h-[440px]' : ''} p-2 overflow-hidden`}>
        <div className=' bg-white-400 shadow-sm py-2 rounded text-black-400 flex justify-center '>
          <p>Create Post</p>
          {image ? (
            <span
              onClick={() => setExpand(true)}
              className='absolute cursor-pointer right-10 text-blue-600'>
              Next
            </span>
          ) : (
            ''
          )}
        </div>

        <div className='relative w-full h-full'>
          <div
            style={{
              position: image ? 'relative' : 'absolute',
              top: image ? '' : '50%',
              left: image ? '' : '50%',
              transform: image ? '' : 'translate(-50%, -50%)',
            }}>
            {image ? (
              ''
            ) : (
              <label
                className='bg-blue-800 text-white p-2 rounded'
                htmlFor='upload-button'>
                <span>Choose Image</span>
              </label>
            )}
            <input
              type='file'
              id='upload-button'
              accept='image/*'
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            {image && (
              <div className='w-full flex justify-center h-[350px]  overflow-hidden'>
                <img
                  src={image}
                  alt='Preview'
                  style={{
                    width: '100%',
                    borderRadius: 10,
                    objectFit: 'contain',
                    marginTop: 5,
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <Button onClick={createPost} variant='outlined' sx={{ marginTop: 2 }}>
          Create
        </Button>
      </div>
    </Modal>
  );
}
