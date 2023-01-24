import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Error404 from '../components/Error404';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error404/>
  }
]);

export default router;