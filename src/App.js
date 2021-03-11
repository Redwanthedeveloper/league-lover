import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LeagueDetails from './screens/LeagueDetails';
import NotFound from './screens/NotFound';

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/league/:leagueId' component={LeagueDetails} />
          <Route path='*' component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
