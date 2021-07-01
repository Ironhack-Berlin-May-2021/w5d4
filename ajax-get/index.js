const getDataForCountry = country => {

	// using fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
	// fetch(`https://restcountries.eu/rest/v2/name/${country}`)
	// 	.then(response => response.json())
	// 	.then(data => console.log(data));


	axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
		.then(response => {
			console.log(response.data[0]);
			const countryDetails = response.data[0];
			// we update the dom with the data from the api
			document.querySelector('#country-name').innerText = countryDetails.name;
			document.querySelector('#country-population').innerText = countryDetails.population;
			document.querySelector('#country-flag').setAttribute('src', countryDetails.flag);

		})
		.catch(err => {
			console.log(err);
		})
}

document.querySelector('button').onclick = () => {
	// console.log('click');
	const userInput = document.querySelector('#name').value;
	console.log(userInput);
	getDataForCountry(userInput);

}