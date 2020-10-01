import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {
  state = {
    op1Text: '',
    op2Text: ''
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
    console.log(this.state.op1Text)
    console.log(this.state.op2Text)
  }

  render() {

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

export default connect()(NewQuestion)
