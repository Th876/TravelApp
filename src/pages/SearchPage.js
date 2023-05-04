import { useState } from 'react';
import SearchStyle from '../stylecomponents/SearchStyle.css';
import PlacesAutocomplete from 'react-places-autocomplete'
import { geocodeByAddress, geocodeByPlaceId, getLatLng, } from 'react-places-autocomplete';
import loadingicon from '../images/loadingicon.gif';
import { FaSearch } from 'react-icons/fa';
import refreshbtnsearch from '../images/refreshbtnsearch.png';


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
         <h1>It Really Starts here</h1>
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
        
            <div className='input-container'>
            <FaSearch className='search-icon'/>
            <input
              {...getInputProps({
                placeholder: 'Enter the name of a place',
                className: 'location-search-input',
              })}
             />
             </div>
            <div className="autocomplete-dropdown-container">
              {loading && <img src={loadingicon} alt='loading icon' className='loadicon'/>}

              {/* Map through data */}
              {suggestions.map(suggestion => {
                const className = suggestion.active
               // The item that the cursor is placed over will have a different color from the rest of items.
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
              
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

      {/* ⚠️⚠️⚠️⚠️⚠️⚠️⚠️ */}
      <div onClick={() => window.location.reload(true)}>
      <img src={refreshbtnsearch} alt='refresh search icon' className='refresh-search'/>  
      </div> 
      </div>
   )
}