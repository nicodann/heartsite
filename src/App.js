import './App.css';
import Lobe from './components/Lobe'
import PointLeft from './components/PointLeft';
import PointRight from './components/PointRight';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Lobe/><Lobe/>
      </div>
      <div className='row'>
        <PointLeft/><PointRight/>
      </div>

    </div>
  );
}

export default App;
