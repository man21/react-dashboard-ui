import Dashboard from 'containers/Dashboard/Dashboard'
import { BrowserRouter,  Route, Switch } from 'react-router-dom'
import Task from '../components/Task/Task'
import App from '../containers/App/App'

import MyTablePagination from '../components/Faculty/table_pagination';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <App>
          <Route path="/test">
            <Task />
          </Route>
          <Route>
            <Dashboard>
              <Switch>
                <Route path="/dashboard/test">
                  <Task />
                </Route>

                <Route path="/faculty/accept">
                  <MyTablePagination />
                </Route>
              </Switch>
            </Dashboard>
          </Route>
        </App>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
