// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home';
import RecipeList from './components/recipes/RecipeList';
import RecipeDetails from './components/recipes/RecipeDetails';
import SignInForm from './components/common/SignInForm';
import SignUpForm from './components/common/SignUpForm';
import AdminDashboard from './components/admin/AdminDashboard';
import AddRecipeForm from './components/admin/AddRecipeForm';
import EditRecipeForm from './components/admin/EditRecipeForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipes" component={RecipeList} />
          <Route path="/recipe/:id" component={RecipeDetails} />
          <Route path="/sign" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/add-recipe" component={AddRecipeForm} />
          <Route path="/edit-recipe/:id" component={EditRecipeForm} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
