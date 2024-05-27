import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ButtonGoBack from '../ui/buttons/buttonGoBack/ButtonGoBack';

import { arrRoutesisGoBackDisabled } from '../routes/routes';

const Layout = () => {
   const location = useLocation();
   return (
      <>
         <Header />
         <main>
            {!arrRoutesisGoBackDisabled.includes(location.pathname) && (
               <ButtonGoBack />
            )}
            <Outlet />
         </main>
         <Footer />
      </>
   );
};

export default Layout;
