import styled from 'styled-components';
import './App.css';
import AnimatedBg from './components/AnimatedBg';
import BgMusic from './components/BgMusic';
import NavBar from './components/Navbar';
import ScrollDown from './components/scrollDown';
import SideBar from './components/SideBar';
import FirstLook from './components/FirstLook';
import Loading from './components/Loading';
import AboutMe from './components/AboutMe';
import MySkills from './components/Myskills';
import MyProjects from './components/Myprojects';
import MyResume from './components/MyResume';
import ContactMe from './components/ContactMe';

function App() {

  return (
    <div className="App">
      <AnimatedBg />
      <Loading />
     
      <BgMusic />
      <NavBar />
      <ScrollDown />
      <SideBar />

      <FirstLook />
      {/* <Section></Section> */}
      <AboutMe />
      <MySkills />
      <MyProjects />
      <MyResume />
      {/* <ContactMe/> */}
    </div>
  );
}

const Div = styled.div`
  font-size: 50px;
  color: white;
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
`;
export default App;
