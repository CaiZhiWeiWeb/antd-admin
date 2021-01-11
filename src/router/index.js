import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import LoginDemo from '../pages/login/index'
import Layout from '../pages/layout/index'
import NoMatch from '../pages/404/index'
import Demo from '../pages/demo/index'

function IRouter() {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={LoginDemo} />
          <Route path="/layout" render={() =>
            <Layout>
              <Switch>
                <Route path="/layout/demo" component={Demo} />
                <Route component={NoMatch} />
              </Switch>
            </Layout>
          } />
          <Route component={NoMatch} />
        </Switch>
      </App>
    </Router>
  )
}

export default IRouter