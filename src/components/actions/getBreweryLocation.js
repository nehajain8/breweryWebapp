import axios from 'axios';
import { fetchCards } from './actions';

const getBreweryLocationUrl = 'https://be5v9uz8x9.execute-api.us-east-2.amazonaws.com/Dev/digi-update-breweryLocation';
const getBreweryLocation = async (dispatch) => {
    console.log(dispatch);
    console.log('in action');
    try {
        const response = await axios.get('/Dev/digi-update-breweryLocation',
            {
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'withCredentials': true,
                    'x-api-key': '9c5lLsXsjaazbX5cc8Gb53jvurStCIUhaBc2Wbwc',
                    
                }
            }
        );
        dispatch(fetchCards(response.data));
    } catch (error) {
        console.error('Error in get Brewery Location', error.message);
    }
};
export default getBreweryLocation;