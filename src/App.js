
import './App.css';
import Navbar from './components/navbar/navbar';
import PageOne from './components/navbar/content/pageOne/pageOne';
import PageTwo from './components/navbar/content/pageTwo/pageTwo';
import Footer from './components/footer/footer';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className='app-header'/>
      <div className='text-header'>
        <h1>Building the future</h1>
      </div>
      <div className='wrapper'>
        <PageOne />
        <PageTwo />
        <Footer />
      </div>

      {/* <div className="footer">
        <p>Newtrun &copy; 2022</p>
      </div> */}
    </div>
  );
}

export default App;
