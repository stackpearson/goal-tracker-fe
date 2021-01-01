import {Route, Switch} from 'react-router-dom';
import MyNav from './Nav';
import Dashboard from './Dashboard';
import Goals from './Goals';
import AddGoal from './AddGoal';
import Goal from './Goal';
import Tasks from './Tasks';
import Task from './Task';
import AddTask from './AddTask';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Switch>
        <Route exact path = '/' component={Dashboard} />
        <Route path = '/goals' component={Goals} />
        <Route path = '/tasks' component={Tasks} />
        <Route path = '/task/:taskId' component={Task} />
        <Route path = '/goal/:goalId' component={Goal} />
        <Route path = '/add-goal' component={AddGoal} />
        <Route path = '/add-task' component={AddTask} />
      </Switch>
    </div>
  );
}

export default App;
