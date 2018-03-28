import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Main from './components/Main'

import App from './App'

//--- Router imports ---//
import ChannelList from './components/Channels/ChannelList'
import Channel from './components/Channels/Channel'
import Post from './components/posts/Post'

const routes = (
  <Router>
    <App>
      <Route exact path='/' render={() => <Main/>} />
      <Route exact path='/channels' render={() => <ChannelList />} />
      {/* <Route exact path='/channels/:id'
        render={({ match }) => <Channel channel={noteById(match.params.id)} />}/> */}

      <Route exact path='/channels/:id' component={Channel}/>
      <Route exact path='/channels/:id/:id' component={Post} />
      {/* <Redirect from="users(/:id)" to="names(/:id)" /> */}
      {/* <Route path="*" component={PageNotFound} /> */}
    </App>
  </Router>
)

export default routes