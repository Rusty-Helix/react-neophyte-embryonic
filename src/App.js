import Header from './components/Header'
import './index.css'


// App is also a component
const App = () => { // same as the file name


  return (
    // this can only return 1 element
    <div className="Container">
      <Header />
      {/* add props in a component tag */}
      
    </div>
    // jsx expression must have one element
  );
}

export default App;
