import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, TextField, Button } from '@mui/material';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { getTimeAgo } from '../../util/date';
import axios from 'axios';

export default function CModal(props) {
  const [expand, setExpand] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [prevImage, setPrevImage] = React.useState('');
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
  const [caption, setCaption] = React.useState('');
  const [postedDate, setPostedDate] = React.useState('');
  // Emoji Handler -----
  const handleEmojiToggle = () => {
    setShowEmojiPicker((prevState) => !prevState);
  };

  const handleEmojiSelect = (emoji) => {
    // Get the emoji representation (native or colons)
    const emojiText = emoji.native || emoji.colons;

    // Append the emoji to the existing text
    setCaption((prevText) => prevText + emojiText);
  };

  const handleChange = (e) => {
    setCaption(e.target.value);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrevImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const createPost = async () => {
    let user_id = '64ce94e00b4464d0a6bb294d';
    const formData = new FormData();
    const postDate = new Date();
    const timeAgo = getTimeAgo(postDate);
    formData.append('post_img', image); // Assuming 'image' is defined elsewhere in your code.
    formData.append('caption', caption); // Assuming 'caption' is defined elsewhere in your code.
    formData.append('user_id', user_id);

    let res = await axios.post('http://localhost:3500/api/v1/post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the correct content type for form data.
      },
    });
    if(res.data.success){
      props.setOpen(false)
    }
    setPostedDate(timeAgo);
    // Now you can use the 'timeAgo' variable to display the time in the post
    // console.log('created at:', timeAgo); 
    // console.log('created !');
  };

  React.useEffect(() => {
    // const interval = setInterval(() => {
    //   const timeAgo = getTimeAgo(postedDate);
    //   console.log('1 minute passed. Current time:', timeAgo);
    // }, 3000); // 1 minute in milliseconds
    // // Clear the interval when the component is unmounted
    // return () => clearInterval(interval);
  }, []);
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
          {prevImage && !expand ? (
            <span
              onClick={() => setExpand(true)}
              className='absolute cursor-pointer right-10 text-blue-600'>
              Next
            </span>
          ) : (
            <span
              onClick={createPost}
              className='absolute cursor-pointer right-10 text-blue-600'>
              Share
            </span>
          )}
        </div>

        <div className='relative w-full h-full'>
          <div
            style={{
              position: prevImage ? 'relative' : 'absolute',
              top: prevImage ? '' : '50%',
              left: prevImage ? '' : '50%',
              transform: prevImage ? '' : 'translate(-50%, -50%)',
            }}>
            {prevImage ? (
              ''
            ) : (
              <label
                className='bg-blue-800 text-white p-2 rounded'
                htmlFor='upload-button'>
                <span>Choose prevImage</span>
              </label>
            )}
            <input
              name='img'
              type='file'
              id='upload-button'
              accept='image/*'
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            <div className={`${expand && 'flex'}`}>
              {prevImage && (
                <div
                  className={`flex ${
                    expand ? 'w-[70%]' : ':w-full'
                  } justify-center h-[350px]  overflow-hidden`}>
                  <img
                    src={prevImage}
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
              {expand ? (
                <div className=' w-[30%] h-auto'>
                  <head className=' flex py-3 items-center'>
                    <div className='w-full flex items-center '>
                      <img
                        className='w-[30px] h-[30px] mr-3'
                        src='/logo192.png'
                      />
                      <p className='text-sm w-full text-black'>Hammad Ahmad</p>
                    </div>
                  </head>
                  <textarea
                    value={caption}
                    onChange={handleChange}
                    style={{
                      height: 200,
                      resize: 'none', // Disable resizing of the textarea
                      border: 'none', // Remove the border
                      outline: 'none', // Remove the outline on focus
                      padding: '8px', // Add some padding for better appearance
                      boxSizing: 'border-box', // Include padding and border in the total height
                    }}
                    placeholder='Write a caption..'
                  />
                  <div
                    style={{
                      maxHeight: '100px', // Set the maximum height for the picker
                      overflowX: 'hidden',
                      overflowY: 'auto', // Enable scrolling when content exceeds the height
                    }}>
                    <Picker
                      navPosition='bottom'
                      previewPosition='none'
                      data={data}
                      onEmojiSelect={handleEmojiSelect}
                    />
                  </div>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        {/* <Button onClick={createPost} variant='outlined' sx={{ marginTop: 2 }}>
          Create
        </Button> */}
      </div>
    </Modal>
  );
}
