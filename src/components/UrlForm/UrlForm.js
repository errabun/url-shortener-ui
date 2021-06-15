import React, { Component } from 'react';
import { postUrl } from '../../apiCalls'

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    postUrl(this.state.urlToShorten, this.state.title)
      .then(url => this.props.newUrl(url))
      .catch(error => console.log(error))
    e.preventDefault();
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
          className='title-input'
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='urlToShorten'
          value={this.state.urlToShorten}
          onChange={e => this.handleNameChange(e)}
          className='url-input'
        />

        <button onClick={e => this.handleSubmit(e)} className='form-submit'>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
