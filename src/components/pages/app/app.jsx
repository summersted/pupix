import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useAuth } from '../../../hooks/auth.hook';
import { AuthContext } from '../../../context/authContext';
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
import HumanProfile from '../humanProfile';


function App() {
    //export auth data from hook
    const { login, logout, token, userId } = useAuth();
    //set flag converting token to boolean type
    const isAuthenticated = !!token;
    return (
        <AuthContext.Provider value={{ 
            login, logout, token, userId, isAuthenticated
            }}>
            <Router>
                <NavMenu isAuthenticated={isAuthenticated}/>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/signin" component={SignIn} />
                    {isAuthenticated ? (
                        <Route path="/profile" component={Profile} />
                    ) : (
                        <Route path="/profile" component={LogIn} />
                    )}
                    <Route path="/shows/:id/seasons" component={Seasons} />
                    <Route path="/shows/:id/episodes" component={Episodes} />
                    <Route path="/shows/:id" component={Show} />
                    <Route path="/people/:id" component={HumanProfile} />
                    <Route path="/shows" component={Features} />
                    <Route path="/search" component={Search} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </AuthContext.Provider>
    )
}
export default App;