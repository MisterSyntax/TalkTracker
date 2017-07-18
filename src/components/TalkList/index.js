import React from 'react'

import Talk from '../Talk'

export default class TalkList extends React.Component {

    constructor(props){
        super(props)
        this.toggleContent = this.toggleContent.bind(this)
        console.log(this.props)
    }

    toggleContent(viewState) {
        viewState ? this.props.onDisableContent() : this.props.onEnableContent()
    }

    render() {
        return (
            <div id="main">  
                {this.props.allTalks.map(talk=><Talk key={talk.id} info={talk} removeTalk={this.props.onRemoveTalk}/>)}
            </div>
        );
    }
}