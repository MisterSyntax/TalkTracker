import React from 'react'
import './App.css'

import TalkList from '../../containers/TalkList/'
import AddTalkForm from '../../containers/AddTalkForm'

export default class App extends React.Component {

    render() {
        return(
            <div id="app">
                <TalkList />
                <AddTalkForm />
            </div>
        )
    }
}
