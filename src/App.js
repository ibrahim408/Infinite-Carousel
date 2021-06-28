import './App.css';
import Slider from './component/Slider'
import Loading from './component/Loading'
import useFetch from './hooks/useFetch'
import useToggle from './hooks/useToggle'
import * as Constants from './helper/constants';

function App() {

  const {toggleState,setToggleState} = useToggle();
  const {result,error,loading} = useFetch(toggleState);

  

  if (loading || result === null) return <Loading />
  else if (error) return  <Loading />
  else return <Slider slides={result} toggleState={toggleState} setToggleState={setToggleState} />

}

export default App;
