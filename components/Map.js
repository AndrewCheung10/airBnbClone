import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

function Map({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({});

	const coordinates = searchResults.map(result => ({
		longitude: result.long,
		latitude: result.lat,
	}))

	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		width: "100%",
		height: "100%",
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});

	return (
		<ReactMapGL
			mapStyle="mapbox://styles/pazu/cl5x4dmdi004916mvpq1a0wh8"
			mapboxAccessToken={process.env.mapbox_key}
			{...viewport}
			// onViewportChange={(nextViewport) => setViewport(nextViewport)}
			onMove={(e) => setViewport(e.viewport)}
		>
			{searchResults.map(result => (
				<div key={result.long}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}
					>
						<p
							role="img"
							onClick={() => setSelectedLocation(result)} className="cursor-pointer text-2xl animate-bounce"
							aria-label="push-pin"
						>
							📍
						</p>
					</Marker>

					{/* The popup that should show if we click on a Marker */}
					{/* {selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							latitude={result.lat}
							longitude={result.long}
						>
							{result.long}
						</Popup>
					) : (
						false
					)} */}
				</div>
			))}

			{selectedLocation.long != null ? (
				<Popup
					onClose={() => setSelectedLocation({})}
					closeOnClick={true}
					latitude={selectedLocation.lat}
					longitude={selectedLocation.long}
				>
					{selectedLocation.long}
				</Popup>
			) : (
				false
			)}
		</ReactMapGL>
	);
}

export default Map