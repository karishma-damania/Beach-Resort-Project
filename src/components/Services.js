import React, {Component} from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaDrumstickBite} from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
	state={
		services:[
		{
			icon:<FaCocktail/>,
			title:"Free Cocktails",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dui posuere, euismod metus eu, varius lectus!"
			
		},
				{
			icon:<FaHiking/>,
			title:"Endless Hiking",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dui posuere, euismod metus eu, varius lectus!"
			
		},
				{
			icon:<FaShuttleVan/>,
			title:"Free Shuttle",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dui posuere, euismod metus eu, varius lectus!"
			
		},
				{
			icon:<FaDrumstickBite/>,
			title:"Delicious Food",
			info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dui posuere, euismod metus eu, varius lectus!"
			
		}
		]
	}
	render() {
		return (
			<section className="services">
				<Title title="services"/>
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (<article key ={index} className="service">
								<span>
									{item.icon}
								</span>	
								<h6>
									{item.title}
								</h6>
								<p>
									{item.info}
								</p>			
												</article>)
					})}
				</div>
			</section>
		)
	}
}