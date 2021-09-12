import React from 'react'
import Header from './Header/Header'
import CountryPicker from './CountryPicker/CountryPicker'
import { fetchData } from '../api'

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData})
    
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
  }

  render() {
    const {data} = this.state
    return (
      <div className='ui container'>
        <Header 
          data={data}
        />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
      </div>
    )
  }
}

export default App