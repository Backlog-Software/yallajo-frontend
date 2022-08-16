import React, { Component } from 'react'
// import {
// 	MDBRow,
// 	MDBCol,
// 	MDBInput,
// 	MDBCheckbox,
// 	MDBBtn
// } from 'mdb-react-ui-kit';
import './CreateServices.css'
import axios from 'axios';
import Header from './LandingPage/Header';



export class CreateServices extends Component {



	handleSubmit = async (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const type = e.target.type.value;
		const price = e.target.price.value;
		const description = e.target.description.value;
		const imageUrl = e.target.imageUrl.value;

		const data = {
			'newService': {
				'title': title,
				'type': type,
				'price': price,
				'description': description,
				'imageUrl': imageUrl,
				'isAvailable': true
			}
		}
		console.log(data);
		await axios.post(`https://yallajo.herokuapp.com/service`, data).catch(function (error) { console.log(error) })
	}
	render() {

		return (
			<>
				<Header />
				<form onSubmit={this.handleSubmit} className="search-form-primary">
					

					<div className="select-menu-default" >
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>

						<h2>choose service:</h2>

						<select className="select-menu" name='type'>
							<option value='carRental' >Car Rental</option>
							<option value='roomRental'>Room Rental</option>
							<option value='tourGuide'>Tour Guide</option>

						</select>
					</div>

					<div className="search-form-container">
						<h2>Title:</h2>
						<input
							type="text"
							name='title'
							placeholder="Enter title"
							className="search-input"
						/>
					</div>

					<div className="search-form-container">
						<h2>Discription:</h2>
						<input
							type="text"
							name='description'
							placeholder="Enter Discription"
							className="search-input"
						/>
					</div>
					<div className="search-form-container">
						<h2>image Url:</h2>
						<input
							type="text"
							name='imageUrl'
							placeholder="Enter Image Url"
							className="search-input"
						/>
					</div>
					<div className="search-form-container">
						<h2>Price:</h2>
						<input
							type="text"
							name='price'
							placeholder="Enter price"
							className="search-input"
						/>
					</div>


					<div>
						<input  type="submit"
							className="btn-primary-default"
						
							
						/>
					</div>
				</form>
			</>


		)
	}
}


export default CreateServices;