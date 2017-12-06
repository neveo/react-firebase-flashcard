import React, { Component } from 'react';
import './Card.css';

const Card = (props) =>(
	<div className="card-container">
		<div className="card">
			<div className="front">
				<div className="eng">English Word</div>
			</div>
			<div className="back">
				<div className="han">Hanzi</div>
				<div className="pin">Pinyin</div>
			</div>
		</div>
	</div>
)

export default Card