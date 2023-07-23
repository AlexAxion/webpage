
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {HomePage, Calculator, CommunityALI} from './components/pages';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/Calculator" component={Calculator} />
        <Route path="/CommunityALI" component={CommunityALI} />
      </div>
    </Router>
    
  );
}

export default App;
