import Masters from '../../pages/masters/Masters.jsx';
import { Route, Routes } from 'react-router-dom';
import { Paths } from '../../routes.js';
import Base from '../../pages/base/base.jsx';
import Main from '../../pages/main/Main.jsx';
import ServicesCost from '../../pages/services/servicesCost.jsx';
import NotFoundPage from '../../pages/NotFound/NotFound.jsx';
import Contacts from '../../pages/contacts/contacts.jsx';
function App() {
  return (
    <Routes>
      <Route path={Paths.ROOT} element={<Base />}>
        <Route index element={<Main />} />
        <Route path={Paths.MASTERS} element={<Masters />} />
        <Route path={Paths.SERVICECOST} element={<ServicesCost />} />
        <Route path={Paths.CONTACTS} element={<Contacts />} />
        {<Route path="*" element={<NotFoundPage />} />}
      </Route>
    </Routes>
  );
}

export default App;
