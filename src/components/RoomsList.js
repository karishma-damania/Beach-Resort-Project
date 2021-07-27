import React from 'react';
import Room from "./Room";
import {FaFrown} from "react-icons/fa";

export default function RoomsList({rooms}) {
	if (rooms.length===0){
		return (
			<div className="empty-search">
			<h3>No Rooms Matched Your Search <br/><br/>
			<FaFrown/></h3>
			</div>
			)
	}
	return (
		<section className="roomsList">
			<div className="roomslist-center">
				{rooms.map(item => {return <Room key ={item.id} room={item} />;
			})}
			</div>
		</section>
	)
}