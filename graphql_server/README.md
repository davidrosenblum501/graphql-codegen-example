# GraphQL Codegen Example Server

### Environment Setup:
* Install Node.js (16.x).
* Run `npm install`.
* For dev mode, run `npm run dev`.
* For prod mode, run `npm run build && npm start`.

### Configurations
* Create a `.env` file.
```
PORT = 4000
GRAPHQL_CODEGEN_URL = http://localhost:4000/graphql
```

### Other Scripts
* Run codegen via `npm run codegen`. 

### Queries
```graphql
query getJedi {
	jedi(id: 1) {
		id
		name
		lightsaberColor
		rank
		padawanId
		padawan {
			id
			name
			rank
		}
	}
}

query getJediPaginated {
	jediPaginated {
		count
		pages
		jedi {
			id
			name
			lightsaberColor
			rank
			padawanId
			padawan {
				id
				name
				rank
			}
		}
	}
}

query getRepublicUnits {
	republicUnits {
			... on Jedi {
				name
				lightsaberColor
				rank
			}
			
			... on CloneTrooper {
				id
				name
				corps
			}
	}
}

mutation createJedi {
	createJedi(input: {
		name: "David"
		rank: KNIGHT
		lightsaberColor: BLUE
	}) {
		id
		name
	}
}
```