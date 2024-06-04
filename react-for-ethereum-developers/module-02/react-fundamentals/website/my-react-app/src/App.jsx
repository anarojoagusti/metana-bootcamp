import Header from './Header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';

function App() {

  //Return statements can only return one component
  //Then we have to enclouse our components in a fragment (empty set of <>)
  return(
    <>
      <Header/>
      <Food/>
      <Footer/>
    </>
  );

}

export default App
