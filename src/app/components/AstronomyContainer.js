import React, {Component} from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

class AstronomyContainer extends Component {

	// New Constructor function
	constructor() {
		super();

		this.state = {
			astronomy: [],
		}

	};
	// End of constructor

	// Call a lifecycle
	componentDidMount() {
		const API_KEY = 'Cq7gldUA1xinOioewvpBRealWvzuVbIz2J7pQbyw';
		const END_Point = 'https://api.nasa.gov/planetary/apod?api_key=';

		axios.get(END_Point+API_KEY)
		.then(response => {

			this.setState({
				astronomy: response.data
			})

			console.log(this.state.astronomy)
		})
		.catch(error => {
			console.log(error, "failed to fetch data dude")
		});
	}
	// End of lifecycle

	render() {
		const { astronomy } = this.state;
		return (

			<AstronomyCard data={astronomy} />

			)
	}
}

export default AstronomyContainer;