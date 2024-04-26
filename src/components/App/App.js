import Masters from '../../pages/masters/Masters.jsx';
import { Route, Routes } from 'react-router-dom';
import { Paths } from '../../routes.js';
import Base from '../../pages/base/base.jsx';
import Main from '../../pages/main/Main.jsx';
function App() {
  return (
    <Routes>
      <Route path={Paths.ROOT} element={<Base />}>
        <Route index element={<Main />} />
        <Route path={Paths.MASTERS} element={<Masters />} />
      </Route>
    </Routes>
  );
}

export default App;
