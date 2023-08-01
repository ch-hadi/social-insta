import './App.css';
import Post from './components/Post/Post';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='w-full flex h-screen relative '>
      <div className='w-2/12 h-screen '>
        <Sidebar />
      </div>
      <div className='w-8/12 pt-10 '>
        <div className='mx-auto w-[38%] pb-[10px]'>
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className='w-2/12 bg-gray-300 h-screen'></div>
    </div>
  );
}

export default App;
