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
         <p>Latitude: {coordinates.lat}</p>
         <p>Longitude: {coordinates.lng}</p>
         <p>Address: {place} </p>
         
      
      <PlacesAutocomplete
        value={place}
        onChange={setPlace}
        onSelect={handleChoice}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
         //the suggestions.descriptions change so need a key here
          <div key={suggestions.descriptions}>
            <input
              {...getInputProps({
                placeholder: 'Enter a Place ...',
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
                  ? { backgroundColor: 'blue', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
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