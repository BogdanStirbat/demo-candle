import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products/:handle">
          <ProductPage />
        </Route>
        
      </Router>
      
    </div>
  );
}

export default App;
