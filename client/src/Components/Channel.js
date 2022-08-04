import React from "react"

function Channel({ data }) {
	return (
		<div>
			<h1>{data.channel}</h1>
			<h1>{data.tutorial}</h1>
		</div>
	)
}

export default Channel
