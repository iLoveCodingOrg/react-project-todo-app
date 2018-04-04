import React from 'react';

export default class NewItem extends React.Component{
  constructor(){
    super();

    this.state = {
      text: ''
    }

    this.updateText = this.updateText.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  updateText(e){
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    if(this.state.text === ''){
      return
    }
    this.props.addItem(this.state.text)
    this.setState({ text: ''})
  }

  render(){
    return(
      <form className="input-group">
        <input
          className="form-control"
          value={this.state.text}
          onChange={this.updateText}
          type="text"/>
        <span className="input-group-btn">
          <input
            className="btn btn-default"
            type="submit"
            value="Add Item"
            onClick={this.handleSubmit}
            />
        </span>
      </form>
    )
  }
}