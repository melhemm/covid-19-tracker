import React, {useState, useEffect} from "react"
import { fetchCountries } from "../../api"

const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchApi()
  }, [setFetchedCountries])

return(
  <div>
    <p className="label">Select Country</p>
    <select className="ui fluid dropdown" defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
      <option value="">Global</option>
      {fetchedCountries.map((country, i) => 
        <option value={country} key={i}>{country}</option>
      )}
    </select>
  </div>
  
)
}

export default CountryPicker