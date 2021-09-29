import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavMenu from '../../layout/navbar';
// import Footer from './components/layout/footer';
import Homepage from '../homepage';
import LogIn from '../../autorization/log-in';
import SignIn from '../../autorization/sign-in';
import Profile from '../PageNotFound';
import PageNotFound from '../PageNotFound';
import Show from '../show';
import Seasons from '../seasons/';
import Episodes from '../episodes';
import Search from '../search';
import { AuthProvider } from '../../autorization/contexts/authContexts';

function App() {
    return (
        <AuthProvider>
            <Router>
                <NavMenu />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/shows/:id/seasons" component={Seasons} />
                    <Route path="/shows/:id/episodes" component={Episodes} />
                    <Route path="/shows/:id" component={Show} />
                    <Route path="/shows" component={Homepage} />
                    <Route path="/search" component={Search} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
            {/* <Footer/> */}
        </AuthProvider>
    )
}
export default App;