import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CloneTrooper = {
  __typename?: 'CloneTrooper';
  corps: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Jedi = {
  __typename?: 'Jedi';
  id: Scalars['Int'];
  lightsaberColor: JediLightsaberColor;
  name: Scalars['String'];
  padawan?: Maybe<Jedi>;
  padawanId?: Maybe<Scalars['Int']>;
  rank: JediRank;
};

export type JediInput = {
  lightsaberColor: JediLightsaberColor;
  name: Scalars['String'];
  padawanId?: InputMaybe<Scalars['Int']>;
  rank: JediRank;
};

export enum JediLightsaberColor {
  Blue = 'BLUE',
  Green = 'GREEN',
  Purple = 'PURPLE'
}

export type JediPaginated = PaginationResult & {
  __typename?: 'JediPaginated';
  count: Scalars['Int'];
  jedi: Array<Jedi>;
  pages: Scalars['Int'];
};

export enum JediRank {
  Knight = 'KNIGHT',
  Master = 'MASTER',
  Padawan = 'PADAWAN'
}

export type JediUpdateInput = {
  lightsaberColor?: InputMaybe<JediLightsaberColor>;
  name?: InputMaybe<Scalars['String']>;
  padawanId?: InputMaybe<Scalars['Int']>;
  rank?: InputMaybe<JediRank>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createJedi: Jedi;
  deleteJedi: Scalars['Boolean'];
  updateJedi: Scalars['Boolean'];
};


export type MutationCreateJediArgs = {
  input: JediInput;
};


export type MutationDeleteJediArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateJediArgs = {
  id: Scalars['Int'];
  update: JediUpdateInput;
};

export type PaginationResult = {
  count: Scalars['Int'];
  pages: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  jedi?: Maybe<Jedi>;
  jediPaginated: JediPaginated;
  republicUnits: Array<RepublicUnit>;
};


export type QueryJediArgs = {
  id: Scalars['Int'];
};


export type QueryJediPaginatedArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryRepublicUnitsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type RepublicUnit = CloneTrooper | Jedi;


export const CreateJediDocument = gql`
    mutation createJedi($input: JediInput!) {
  createJedi(input: $input) {
    id
    name
    lightsaberColor
    rank
  }
}
    `;
export const DeleteJediDocument = gql`
    mutation deleteJedi($id: Int!) {
  deleteJedi(id: $id)
}
    `;
export const UpdateJediDocument = gql`
    mutation updateJedi($id: Int!, $update: JediUpdateInput!) {
  updateJedi(id: $id, update: $update)
}
    `;
export const GetJediDocument = gql`
    query getJedi($id: Int!) {
  jedi(id: $id) {
    id
    name
    lightsaberColor
    rank
    padawanId
    padawan {
      id
      name
      lightsaberColor
      rank
    }
  }
}
    `;
export const GetJediPaginatedDocument = gql`
    query getJediPaginated($page: Int, $pageSize: Int) {
  jediPaginated(page: $page, pageSize: $pageSize) {
    count
    pages
    jedi {
      id
      name
      lightsaberColor
      rank
      padawanId
    }
  }
}
    `;
export const GetRepublicUnitsDocument = gql`
    query getRepublicUnits {
  republicUnits {
    ... on Jedi {
      __typename
      id
      name
      rank
    }
    ... on CloneTrooper {
      __typename
      id
      name
      corps
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createJedi(variables: CreateJediMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateJediMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateJediMutation>(CreateJediDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createJedi', 'mutation');
    },
    deleteJedi(variables: DeleteJediMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteJediMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteJediMutation>(DeleteJediDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteJedi', 'mutation');
    },
    updateJedi(variables: UpdateJediMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateJediMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateJediMutation>(UpdateJediDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateJedi', 'mutation');
    },
    getJedi(variables: GetJediQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetJediQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetJediQuery>(GetJediDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getJedi', 'query');
    },
    getJediPaginated(variables?: GetJediPaginatedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetJediPaginatedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetJediPaginatedQuery>(GetJediPaginatedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getJediPaginated', 'query');
    },
    getRepublicUnits(variables?: GetRepublicUnitsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRepublicUnitsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRepublicUnitsQuery>(GetRepublicUnitsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRepublicUnits', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type CreateJediMutationVariables = Exact<{
  input: JediInput;
}>;


export type CreateJediMutation = { __typename?: 'Mutation', createJedi: { __typename?: 'Jedi', id: number, name: string, lightsaberColor: JediLightsaberColor, rank: JediRank } };

export type DeleteJediMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteJediMutation = { __typename?: 'Mutation', deleteJedi: boolean };

export type UpdateJediMutationVariables = Exact<{
  id: Scalars['Int'];
  update: JediUpdateInput;
}>;


export type UpdateJediMutation = { __typename?: 'Mutation', updateJedi: boolean };

export type GetJediQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetJediQuery = { __typename?: 'Query', jedi?: { __typename?: 'Jedi', id: number, name: string, lightsaberColor: JediLightsaberColor, rank: JediRank, padawanId?: number | null, padawan?: { __typename?: 'Jedi', id: number, name: string, lightsaberColor: JediLightsaberColor, rank: JediRank } | null } | null };

export type GetJediPaginatedQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
}>;


export type GetJediPaginatedQuery = { __typename?: 'Query', jediPaginated: { __typename?: 'JediPaginated', count: number, pages: number, jedi: Array<{ __typename?: 'Jedi', id: number, name: string, lightsaberColor: JediLightsaberColor, rank: JediRank, padawanId?: number | null }> } };

export type GetRepublicUnitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRepublicUnitsQuery = { __typename?: 'Query', republicUnits: Array<{ __typename: 'CloneTrooper', id: number, name: string, corps: string } | { __typename: 'Jedi', id: number, name: string, rank: JediRank }> };
