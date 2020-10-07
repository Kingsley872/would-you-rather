import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    op1Text: '',
    op2Text: '',
    toHome: false
  }

  handleOp1Change = (e) => {
    const text = e.target.value
    this.setState(() => ({
      op1Text: text
    }))
  }

  handleOp2Change = (e) => {
    const text = e.target.value
    this.setState(() => ({
      op2Text:text
    }))
  }

  handleOnClick = (e) => {
    e.preventDefault()
    if(this.props.authedUser === '') {
      alert("Login First!")
    } else {
      this.props.dispatch(handleAddQuestion(this.state.op1Text, this.state.op2Text))

      this.setState(() => ({
        op1Text: '',
        op2Text: '',
        toHome: true
      }))
    }
  }

  render() {

    if(this.state.toHome === true) {
      return <Redirect to="/" />
    }

    const { op1Text, op2Text } = this.state
    const op1TextLeft = 100 - op1Text.length
    const op2TextLeft = 100 - op2Text.length

    return (
      <div>
        <h3 className='center'>Create New Question</h3>
        <p className='center'>Complete the question</p>
        <form className='new-question'>
          <textarea
            placeholder='option one'
            value={op1Text}
            className='textarea'
            maxLength={100}
            onChange={this.handleOp1Change}
            />
          {op1TextLeft <= 20 && (
            <div className='option-text-length'>
              {op1TextLeft}
            </div>
          )}

          <h3 className='center'>or</h3>

          <textarea
            placeholder='option two'
            value={op2Text}
            className='textarea'
            maxLength={100}
            onChange={this.handleOp2Change}
            />
          {op2TextLeft <= 20 && (
            <div className='option-text-length'>
              {op2TextLeft}
            </div>
          )}

        </form>
        <div className='center'>
          <button
            className='btn'
            onClick={this.handleOnClick}
            disabled={op1Text === '' || op2Text === ''}
            >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }){
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
