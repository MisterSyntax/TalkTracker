/**
 * @desc: THis is a sample container for connecting the state with a component
 */

import React from 'react'

//import your component
import TalkList from '../../components/TalkList/'

import { connect } from 'react-redux'

//import whatever action you need to update your state
import { removeTalk } from '../../actions'

const mapStateToProps = (state, props) => (
    {
        allTalks: state.allTalks
    }
)

const mapDispatchToProps = dispatch => {
    return {
        onRemoveTalk(id) {
            console.log(id)
            dispatch(
                removeTalk(id)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TalkList)