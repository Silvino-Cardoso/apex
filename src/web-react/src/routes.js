import React from "react"

import { BrowserRouter as Router,Switch, Route } from "react-router-dom"

import { Hotsite } from "./pages/Hotsite"

import { WithLogo } from "./components/Page/WithLogo"

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Hotsite/>
                </Route>
            </Switch>
            <Switch>
                <Route path='/WithLogo'>
                    <WithLogo/>
                </Route>
            </Switch>
        </Router>
    )

}

export { Routes }