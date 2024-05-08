import { Route, Routes } from 'react-router-dom';
import StacksPage from './pages/StacksPage';
import EditsPage from './pages/EditsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/stacks' element={<StacksPage />}/>
      <Route path='/edits' element={<EditsPage />}/>
    </Routes>
  );
}

export default App;
