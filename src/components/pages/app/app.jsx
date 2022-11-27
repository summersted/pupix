import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
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
import UsersPage from '../users';
import TestsPage from '../tests';
import QuestionsPage from '../questions';
import PassingTestPage from '../passingTestPage';
import ResultPage from '../resultPage';


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
                <NavMenu isAuthenticated={isAuthenticated} />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/signin" component={SignIn} />
                    {isAuthenticated ? (
                        <Route path="/profile" component={Profile} />
                    ) : (
                        <Route path="/profile">
                            <Redirect to="/login" />
                        </Route>
                    )}
                    <Route path="/users" component={UsersPage} />
                    <Route path="/tests" component={TestsPage} />
                    <Route path="/passing-test/:id" component={PassingTestPage} />
                    <Route path="/questions" component={QuestionsPage} />
                    <Route path="/results" component={ResultPage} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </AuthContext.Provider>
    )
}
export default App;