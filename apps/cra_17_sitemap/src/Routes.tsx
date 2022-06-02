import { Redirect, Route, Switch } from 'react-router-dom'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/home" render={() => <div />} />
      <Route exact path="/about" render={() => <div />} />

      <Redirect from="/" to="/home" />
    </Switch>
  )
}
