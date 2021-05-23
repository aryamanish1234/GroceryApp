import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/private";
import { Header } from "./components/Header";
import { GrocerySection } from "./components/GrocerySection";
import { Register } from "./components/userRegister";
import { Login } from "./components/userlogin";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <PrivateRoute path="/" exact={true} >
            <GrocerySection />
            </PrivateRoute>
        
          <PrivateRoute path="/home" >
            <GrocerySection />
            </PrivateRoute>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
