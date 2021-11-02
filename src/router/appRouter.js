import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Posts from '../components/posts/index';
import post from '../components/singlePost/index';
import AllPosts from '../components/posts/allPosts';
import Footer from '../container/Footer';
import Header from '../container/Header';
import employees from '../components/employees/index';

export default function AppRoute() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/' component={Posts} />
                <Route exact path='/allPosts' component={AllPosts} />
                <Route exact path='/allEmployees' component={employees} />
                <Route exact path='/:id' component={post} />

            </Switch>
            <Footer/>
        </Router>

    )
} 
