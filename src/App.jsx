import { Route, Routes } from 'react-router-dom';
import StacksPage from './pages/StacksPage';
import EditPage from './pages/EditPage';

const App = () => {
  return (
    <Routes>
      <Route path='/stacks' element={<StacksPage />}/>
      <Route path='/edits' element={<EditPage />}/>
    </Routes>
  );
}

export default App;
