import './App.css';
import Slider from './component/Slider'
import LoadingPage from './component/LoadingPage'
import ErrorPage from './component/ErrorPage'
import useFetch from './hooks/useFetch'


const App = () => {

  const {result,error,loading} = useFetch();
  
  if (loading || result === null) return <LoadingPage />
  else if (error) return  <ErrorPage />
  else return <Slider slides={result}  />
}

export default App;
