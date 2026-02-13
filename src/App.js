import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Time from './Time';
import Qibla from './Qibla';
import HomePage from './HomePage';
import PageNotFound from './PageNotFound';

function App() {
    return (
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage />}/>
      <Route path='time' element={<Time />}/>
      <Route path='qibla' element={<Qibla />}/>
      <Route path='*' element={<PageNotFound />}/>
      </Routes>
      </BrowserRouter>
    );
  }

export default App;