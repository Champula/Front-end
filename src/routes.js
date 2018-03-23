import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from './components/Main'

import App from './App'

//--- Router imports ---//
import ChannelList from './components/Channels/ChannelList'
import Channel from './components/Channels/Channel'

const routes = (
  <Router>
    <App>
      <Route exact path='/' component={Main} />
      <Route exact path='/channels' component={ChannelList} />
      <Route exact path='/channels/:id' component={Channel}/>
      {/* <Redirect from="users(/:id)" to="names(/:id)" /> */}
      {/* <Route path="*" component={PageNotFound} /> */}
    </App>
  </Router>
)

export default routes