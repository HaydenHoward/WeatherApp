import { useState } from "react";
import { GEO_API_URL, geoApiOptions } from "./api";
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ onSearchChange }) => {
    const [search, setSearch] = useState(null);

    // Returns possible locations then once the user selects the location they want, it then returns the lat and long as well as the city's name. 
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    })
                };
            })
            .catch(err => console.error(err));
    }

    // Searches the data
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (

        // Is the search bar
        <AsyncPaginate
            placeholder="Enter Location"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />

    )
}

export default Search;