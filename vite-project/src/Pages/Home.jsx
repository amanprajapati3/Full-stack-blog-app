
import Main from '../components/Main';
import Trending from './home/Trending';
import Creators from '../Admin/Creators';
import Footer from "../components/Footer";
import Coding from './home/Coding';
import Games from './home/Games';
import Sports from './home/Sports';
import Study from './home/Study';

const Home = () => {
  return (
    <>
    <Main/>
    <Trending/>
    <Coding/>
    <Games/>
    <Sports/>
    <Study/>
    <Creators/>
    <Footer/>
    </>
  )
}

export default Home;