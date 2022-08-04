import "./App.css"
import { useState, useEffect } from "react"

import Channel from "./Components/Channel"

function App() {
	const [initalState, setInitialState] = useState([1, 2, 3])
	const url = "/api"

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (response.status === 200) {
					return response.json()
				}
			})
			.then((data) => setInitialState(data))
	}, [])

	return (
		<div className="App">
			It works! New Words
			<Channel data={initalState} />
		</div>
	)
}

export default App
