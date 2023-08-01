import * as React from 'react';

import Modal from '@mui/material/Modal';

const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,

  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   borderRadius: '10px',
};

export default function CModal(props) {
  const [image, setImage] = React.useState(null);

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

  return (
    <div>
      <Modal open={props.open} onClose={props.handleClose}>
        <div style={style} className='bg-white h-[400px]'>
          <div className=' bg-white flex justify-center'>
            <p>Create Post</p>
          </div>
          <div className='relative w-full h-full'>
            <div
              style={{
                position: image ? 'relative' : 'absolute',
                top: image ? '' : '50%',
                left: image ? '' : '50%',
                transform: image ? '' : 'translate(-50%, -50%)',
              }}>
              <label
                className='bg-blue-800 text-white p-2 rounded'
                htmlFor='upload-button'>
                <span>Choose Image</span>
              </label>
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
                    style={{ width: '100%', objectFit: 'contain' }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
