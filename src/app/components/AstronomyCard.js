import React from 'react';



const AstronomyCard = (props) => {

	const { title, url, hdurl, explanation, date, copyright, media_type } = props.data;

	let nasa = null;

	let media = {media_type};
	let video = "video";
	let image = "image";

	if (media = video) {
		nasa = (
			<div className="astronomy-card">
			<h6 className="astronomy-title">{title}</h6>

			<a href={hdurl} className="astronomy-image-wrapper">
				<iframe height="300" width="450" src={url} alt={title} />
			</a>

			<p>{explanation}</p>

			<span>{date}, {copyright}</span>
		</div>
		); 

		console.log("video working "+media);
	} else if (media = image) {
		nasa = (
			<div className="astronomy-card">
			<h6 className="astronomy-title">{title}</h6>

			<a href={hdurl} className="astronomy-image-wrapper">
				<img src={url} alt={title} />
			</a>

			<p>{explanation}</p>

			<span>{date}, {copyright}</span>
		</div>
			);
		console.log("image is working "+media);
	} else {null}

	return (

		nasa
		)
}


export default AstronomyCard;