import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/layouts/NavBar'
import Home from '../../components/pages/Home'
import QuemSomos from '../../components/pages/QuemSomos'
import Contato from '../../components/pages/Contato'
import NoPage from '../../components/pages/NoPage'

        function Sidebar() {
            return(<>
         
            <Routes>
                <Route path="/" element={ < NavBar / > }>
                    <Route index element={ < Home / > } />
                    <Route path="quem-somos" element={ < QuemSomos / > } />
                    <Route path="contato" element={ < Contato / > } />
                    <Route path="*" element={ < NoPage / > } />            
                </Route>
            </Routes>
            </>);

                            }
                    ;
                    export default Sidebar;
