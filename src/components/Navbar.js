import React, {Component} from 'react';
import logo from "../images/logo.png";
import {FaAlignRight} from "react-icons/fa";
import {Link} from "react-router-dom";

export default class Navbar extends Component {
	state={
		isOpen:false
	};
	handleToggle=()=>{
		this.setState({isOpen:!this.state.isOpen});
	};
	render() {
		return (
			<nav className="navbar">
			<div className="nav-center">
			<div className="nav-header">
			<Link to="/">
			<img className="navimage"src={logo} alt="Beach Resort"/>
			</Link>
			<button type="button" onClick={this.handleToggle} className="nav-btn">
				<FaAlignRight className="nav-icon" />
			</button>
			</div>
			<ul className={this.state.isOpen? "nav-links show-nav": "nav-links"}>
				<li style={{paddingTop: "3%", paddingBottom: "0"}}>
					<Link to="/" > Home </Link>
				</li>
				<li style={{paddingTop: "3%", paddingBottom: "0"}}>
					<Link to="/rooms" >All Rooms</Link>
				</li>
			</ul>
			</div>
			</nav>
		);
	}
}