import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
	const [results, setResults] = useState([]);
	const [errMess, setErrorMess] = useState("");

	const searchApi = async (searchTerm) => {
		// console.log("hi there");
		try {
			const response = await yelp.get("/search", {
				params: {
					limit: 50,
					term: searchTerm,
					location: "san jose",
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMess("Something went wrong, Try again later");
		}
	};

	// console.log(results);

	//Call searchApi when component is first rendered. BAD CODE
	// searchApi("pasta");

	useEffect(() => {
		searchApi("pasta");
	}, []);

	return [searchApi, results, errMess];
};
