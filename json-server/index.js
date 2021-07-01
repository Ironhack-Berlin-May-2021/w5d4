// axios.get('http://localhost:3000/flicks')
// 	.then(response => console.log(response.data))
// 	.catch(err => console.log(err))

axios.post('http://localhost:3000/flicks', {
	title: 'Empire strikes back',
	director: 'Irvin Kershner',
	rating: 10
})
	.then(movie => console.log(movie));