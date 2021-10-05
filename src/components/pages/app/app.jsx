import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavMenu from '../../layout/navbar';
// import Footer from './components/layout/footer';
import Features from '../features';
import LogIn from '../../autorization/log-in';
import SignIn from '../../autorization/sign-in';
import Profile from '../profile';
import PageNotFound from '../PageNotFound';
import Show from '../show';
import Seasons from '../seasons/';
import Episodes from '../episodes';
import Search from '../search';
import Homepage from '../homepage';
import { AuthProvider } from '../../autorization/contexts/authContexts';
import SaveUserData from '../../autorization/sign-in/saveuserdata';
import HumanProfile from '../humanProfile';

function App() {
    return (
        <AuthProvider>
            <Router>
                <NavMenu />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/redirect" component={SaveUserData} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/shows/:id/seasons" component={Seasons} />
                    <Route path="/shows/:id/episodes" component={Episodes} />
                    <Route path="/shows/:id" component={Show} />
                    <Route path="/people/:id" component={HumanProfile} />
                    <Route path="/shows" component={Features} />
                    <Route path="/search" component={Search} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
            {/* <Footer/> */}
        </AuthProvider>
    )
}
export default App;