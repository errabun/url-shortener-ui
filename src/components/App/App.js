import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
      .then(data => this.setState({ urls:  data.urls }))
      .catch(error => this.setState({ error: error}))
  }

  updateState = url => {
    this.setState({ urls: [...this.state.urls, url] })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1 className='title'>URL Shortener</h1>
          <UrlForm newUrl={this.updateState} />
        </header>
        {!this.state.error &&
          <UrlContainer urls={this.state.urls} />}
        {this.state.error &&
          <h1 className='error-msg'>{this.state.error}</h1>
        }
      </main>
    );
  }
}

export default App;
