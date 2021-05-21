const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }


	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllMenuItems() {
	const data = await fetchAPI(`
	query MyQuery {
		items {
		  edges {
			node {
			  	id
			  	title
			  	slug
			  	featuredImage {
					node {
				  	 altText
				 	 mediaDetails {
						height
						width
				  	}
				  sourceUrl
				}
			  }
			}
		  }
		}
	  }
	  
	`)
	return data?.items
}

export async function getAllMenuItemSlugs() {
	const data = await fetchAPI(`
	query MyQuery {
		items {
		  edges {
			node {
			  	id
			  	slug
				}
			  }
			}
		  }
	`)
	return data?.items
}

export async function getMenuItemBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		item(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		  menuItemInformation {
			price
		  }
		  nutritionalInformation {
			nutritionalData {
			  property
			  value
			}
		  }
		  showcase {
			banner {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		}
	  }
		` , {
		variables: {
			"id" : id
			}
		}
	)
	return data?.item
}

export async function getMenuTypesAndMenuItems() {
	const data = await fetchAPI (`
		query MyQuery {
			menuTypes {
			edges {
				node {
					id
					name
					items {
							edges {
								node {
									id
									title
									slug
									uri
									featuredImage {
										node {
											altText
											sourceUrl
											mediaDetails {
											height
											width
											}
										}
									}
						}
						}
				}
				}
			}
			}
		}
		
	`)
	return data?.menuTypes
}

export async function getLocation() {
	const data = await fetchAPI (`
	query MyQuery {
		locations {
		  edges {
			node {
			  id
			  content
			  featuredImage {
				node {
				  altText
				  sourceUrl
				  mediaDetails {
					height
					width
				  }
				}
			  }
			  title
			  locationInformation {
				city
				fieldGroupName
				phoneNumber
				state
				streetAddress
				zipCode
			  }
			  slug
			  uri
			}
		  }
		}
	  }
	  
	`)
	return data?.locations
}
export async function getPeople() {
	const data = await fetchAPI (`
		query MyQuery {
			peoples {
			edges {
				node {
				id
				content
				featuredImage {
					node {
					altText
					mediaDetails {
						width
						height
					}
					sourceUrl
					}
				}
				title
				slug
				uri
				personInformation {
					jobTitle
				}
				}
			}
			}
		}
	  
	  
	`)
	return data?.peoples
	}

	export async function getLocationSlugs() {
		const data = await fetchAPI(`
		query MyQuery {
			locations {
			  edges {
				node {
					  id
					  slug
					}
				  }
				}
			  }
		`)
		return data?.locations
	}
export async function getLocationBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		location(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		  locationInformation {
			city
			phoneNumber
			state
			streetAddress
			zipCode
		  }
		  relatedPeople {
			employees {
			  ... on People {
				id
				title
				personInformation {
				  jobTitle
				}
				featuredImage {
				  node {
					altText
					mediaDetails {
					  height
					  width
					}
					sourceUrl
				  }
				}
				slug
			  }
			}
		  }
		  menuTypes {
			edges {
			  node {
				id
				name
				items {
				  edges {
					node {
					  id
					  title
					  featuredImage {
						node {
						  altText
						  mediaDetails {
							height
							width
						  }
						  sourceUrl
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	  
	  ` , {
		variables: {
			"id" : id
			}
		}
	)
	return data?.location
}

export async function getPeopleSlugs() {
	const data = await fetchAPI(`
	query MyQuery {
		peoples {
		  edges {
			node {
				  id
				  slug
				}
			  }
			}
		  }
	`)
	return data?.peoples
}
export async function getPeopleBySlug(id) {
const data = await fetchAPI(`
query MyQuery($id: ID!) {
	people(id: $id, idType: SLUG) {
	id
	title
	content
	featuredImage {
		node {
		altText
		mediaDetails {
			height
			width
		}
		sourceUrl
		}
	}
	personInformation {
		emailAddress
		jobTitle
	}
	relatedLocations {
		employees {
		... on Location {
			id
			title
			slug
			locationInformation {
			streetAddress
			}
			featuredImage {
			node {
				altText
				mediaDetails {
				height
				width
				}
				sourceUrl
	  
			}
			}
		}
		}
	}
	}
}  
  ` , {
	variables: {
		"id" : id
		}
	}
)
return data?.people
}
