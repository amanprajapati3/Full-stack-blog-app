
import Main from '../components/Main';
import Trending from './home/Trending';
import Creators from '../Admin/Creators';
import Footer from "../components/Footer";
import Coding from './home/Coding';
import Games from './home/Games';
import Sports from './home/Sports';

const Home = () => {
  return (
    <>
    <Main/>
    <Trending/>
    <Coding/>
    <Games/>
    <Sports/>
    <Creators/>
    <Footer/>
    </>
  )
}

export default Home;