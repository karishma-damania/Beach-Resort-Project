import React from 'react';
import {useContext} from "react";
import {RoomContext} from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
	return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
	const context = useContext(RoomContext);
	const {
		handleChange, type, capacity, price, minPrice, maxPrice, minSize, breakfast, pets
	} = context;
	let types =getUnique(rooms, 'type');
	types = ['all', ...types];
	types= types.map((item, index) => {
		return <option value={item} key ={index}>{item}</option>
	})

	let people = getUnique(rooms, 'capacity');
	people = people.map((item, index) => {
		return <option key={index} value={item}>{item}</option>
	})
	return (
		<section className= "filter-container">
			<Title title="search-rooms"/>
			<form className="filter-form">
			{/*Select type*/}
			<div className="form-group">
			<label htmlFor="type">Room Type</label>
			<select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}
			</select>
			</div>
			{/*End Select Type*/}
			{/*Select Guests*/}
			<div className="form-group">
			<label htmlFor="type">No. Of Guests</label>
			<select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}
			</select>
			</div>
			{/*End Select Guests*/}

			{/* Room Price*/}
			<div className="form-group">
			<label htmlFor="price">Room Price ${price}
			</label>
			<input type ="range" name ="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
			</div>
			{/* End Room Price*/}

			{/*Extras*/}
			<div className="form-group">
			<div className="single-extra">
			<input type ="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
			<label htmlFor="breakfast">Breakfast Included</label>
			</div>

			<div className="single-extra">
			<input type ="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
			<label htmlFor="pets">Pets Allowed</label>
			</div>

			</div>
			{/*End of Extras*/}

			</form>
		</section>
	)
}