export default `#graphql
  # Special GraphQL type
  # All the "getters", read-only operations
  type Query {
    jedi(id: Int!): Jedi
    jediPaginated(page: Int, pageSize: Int): JediPaginated!
    republicUnits(page: Int, pageSize: Int): [RepublicUnit!]!
  }

  # Special GraphQL type
  # All the "setters", write operations
  type Mutation {
    createJedi(input: JediInput!): Jedi!
    updateJedi(id: Int!, update: JediUpdateInput!): Boolean!
    deleteJedi(id: Int!): Boolean!
  }

  # List of possible lightsaber colors
  enum JediLightsaberColor {
    BLUE
    GREEN
    PURPLE
  }

  # List of possible ranks
  enum JediRank {
    PADAWAN
    KNIGHT
    MASTER
  }

  # Custom input object, all fields are required
  # Input types are only allowed as parameters, cannot be returned
  input JediInput {
    name: String!
    lightsaberColor: JediLightsaberColor!
    rank: JediRank!
    padawanId: Int
  }

  # Custom input object, all fields are optional
   # Input types are only allowed as parameters, cannot be returned
  input JediUpdateInput {
    name: String
    lightsaberColor: JediLightsaberColor
    rank: JediRank
    padawanId: Int
  }

  # Custom response object
  # Types are only allowed as returns, cannot be parameters
  type Jedi {
    id: Int!
    name: String!
    lightsaberColor: JediLightsaberColor!
    rank: JediRank!
    padawanId: Int
    padawan: Jedi
  }

  # Anything that conforms to a PaginationResult must have these properties
  interface PaginationResult {
    count: Int!
    pages: Int!
  }

  # Custom response object that guarantees it will conform to the PaginationResult interface
  # Types are only allowed as returns, cannot be parameters
  type JediPaginated implements PaginationResult {
    count: Int!
    pages: Int!
    jedi: [Jedi!]! # Not nullable array that contains not-nullable Jedi objects
  }

  # Another custom type
  type CloneTrooper {
    id: Int!
    name: String!
    corps: String!
  }

  # Union is a collection of types
  # A republic unit unit is either a Jedi or a Clone Trooper
  union RepublicUnit = Jedi | CloneTrooper
`;