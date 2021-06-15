import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrl } from '../../apiCalls';
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
  }

  handleSubmit = e => {
    e.preventDefault();
    postUrl(this.state.urlToShorten, this.state.title)
      .then(url => this.setState({ urls: [...this.props.allUrls, url] }))
      .catch(error => console.log(error))
    this.clearInputs();
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm
            allUrls={this.state.urls} handleSubmit={this.handleSubmit}
          />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
