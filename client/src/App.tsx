import { FC} from 'react';
import './App.css';
import FormPage from './components/FormPage';

const App:FC = () => {
  // useEffect(() => {
  //   axios.get('/api/v1/hello').then((res) => console.log(res))
  // }, [])
  return (
    <div className="App">
    <FormPage/>
    </div>
  );
}

export default App;
