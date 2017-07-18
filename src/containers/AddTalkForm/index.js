/**
 * @desc: THis is a sample container for connecting the state with a component
 */

import React from 'react'

//import your component
import AddTalkForm from '../../components/AddTalkForm/'

import { connect } from 'react-redux'

//import whatever action you need to update your state
import { addTalk } from '../../actions'

const mapStateToProps = (state, props) => (
    {
        allTalks: state.allTalks
    }
)

const mapDispatchToProps = dispatch => {
    return {
        onAddTalk(talk) {
            dispatch(
                addTalk(talk)
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTalkForm)