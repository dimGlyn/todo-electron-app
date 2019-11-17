const httpGQL = async gqlquery => await fetch('http://localhost:4000', {
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(gqlquery)
	})
	.then(res => {
		return res.json();
	});

export { httpGQL as default }
