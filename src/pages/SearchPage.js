import { useState } from 'react';
import SearchStyle from '../components/SearchStyle.css';
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId, getLatLng, } from 'react-places-autocomplete';


export default function SearchPage () {

   const [place, setPlace] = useState();
   const [coordinates, setCoordinates] = useState({
      lat: null,
      lng: null,
   })

   const handleChoice = async value => {
      // pass in the address value and return the results 
      const res = await geocodeByAddress(value);
      //store the results in the getLatLng variable to get the coordinates of the address
      const latLong = await getLatLng(res[0])
      console.log(latLong);
      // whatever user inputs, captures the value
      setPlace(value);
      setCoordinates(latLong);
   }
   return(
      <div className='search-container'>
         <h1>This is where it starts...</h1>
         <h2>Address Lookup</h2>
         <table>
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Address</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>{coordinates.lat}</td>
              <td>{coordinates.lng}</td>
              <td>{place}</td>
            </tr>
          </tbody>
         </table>         
      
      <PlacesAutocomplete
        value={place}
        onChange={setPlace}
        onSelect={handleChoice}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
         //the suggestions.descriptions change so need a key here
          <div key={suggestions.descriptions}>
            <label>Search </label>
            <input
              {...getInputProps({
                placeholder: 'Enter the name of a place',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}

              {/* Map through data */}
              {suggestions.map(suggestion => {
                const className = suggestion.active
               // The item that the cursor is placed over will have a different color from the rest of items.
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: 'var(--tangerine)', width: '650px', marginLeft: 'auto', marginRight: 'auto', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer', width: '650px', marginLeft: 'auto', marginRight: 'auto'};
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      </div>
   )
}