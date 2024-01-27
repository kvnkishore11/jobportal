import './App.css';
import './index.css';

import { useEffect, useState } from 'react';

import LoginForm from './components/LoginForm';
import MyPostings from './components/MyPostings';
import Message from './components/Message';


import { initialState } from './utils/state';
import { COMPONENTS } from './utils/constants';



import JobForm from './components/JobForm';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import MyApplications from './components/MyApplications';




// App component starts here
function App() {
  
  const [state, setState] = useState(initialState)



function selectComponent() {
  switch (state.component) {
    case COMPONENTS.HOME:
      return <Home />;

 
    case COMPONENTS.ALL_JOBS:
      return <Jobs />;

    case COMPONENTS.POST_JOB:
      return <JobForm />;

    case COMPONENTS.PROFILE:
      return <Profile />;

    case COMPONENTS.MY_POSTINGS:
      return <MyPostings />

    case COMPONENTS.MY_APPLICATIONS:
      return <MyApplications />

    default:
      return <Jobs />;
  }
}



  return (
    
        <div className="App">
       

          { !state.isloggedIn ?<LoginForm /> : 
          
            <div className="content">
                <Navbar / >
                { selectComponent() }
                <Footer />
            </div>
          
          }

    
      

          { state.message && <Message />}
         
   
      </div>


  );
}

export default App;


