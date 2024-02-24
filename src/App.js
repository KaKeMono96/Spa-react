import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar/index';
import PostsList from './components/PostsList/index';
import Modal from './components/Modal/index';
 
function App() {
  let [showModal , setShowModal ] = useState(false);

  let [posts,setPosts] = useState([
    { 
      id : 1,
      title : 'First post'
    },
    { 
      id : 2,
      title : 'Second post'
    },
    { 
      id : 3,
      title : 'Third post'
    }

  ]);

  return (
    <>
      <Navbar setShowModal = {setShowModal}/>
      <PostsList posts= {posts} />
      {/* <Modal/> */}
       {/* modal content */}
      {/* <Modal>
        <h1>Zoom class is available now.</h1>
        <p>feel free to <a href=''>join</a> here</p>
      </Modal> */}
      {showModal && <Modal danger>
        <h1>This is testing</h1>
        <p>lorem15
          hfkgslvhew;bewhg;weohiegrgie
        </p>
        <button onClick={()=> setShowModal(false)}>close</button>
      </Modal>}

      
    </>
   
 
  );
}



export default App;





 
