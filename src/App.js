import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>
  <Navbar title="TextUtils"/>
  <div className="container my-4">
    <TextForm heading="Enter your text to analyze"/>
  </div>
</>
  )
};
export default App;