import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
export type CreateJediMutationFn = Apollo.MutationFunction<CreateJediMutation, CreateJediMutationVariables>;

/**
 * __useCreateJediMutation__
 *
 * To run a mutation, you first call `useCreateJediMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateJediMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createJediMutation, { data, loading, error }] = useCreateJediMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateJediMutation(baseOptions?: Apollo.MutationHookOptions<CreateJediMutation, CreateJediMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateJediMutation, CreateJediMutationVariables>(CreateJediDocument, options);
      }
export type CreateJediMutationHookResult = ReturnType<typeof useCreateJediMutation>;
export type CreateJediMutationResult = Apollo.MutationResult<CreateJediMutation>;
export type CreateJediMutationOptions = Apollo.BaseMutationOptions<CreateJediMutation, CreateJediMutationVariables>;
export const DeleteJediDocument = gql`
    mutation deleteJedi($id: Int!) {
  deleteJedi(id: $id)
}
    `;
export type DeleteJediMutationFn = Apollo.MutationFunction<DeleteJediMutation, DeleteJediMutationVariables>;

/**
 * __useDeleteJediMutation__
 *
 * To run a mutation, you first call `useDeleteJediMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteJediMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteJediMutation, { data, loading, error }] = useDeleteJediMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteJediMutation(baseOptions?: Apollo.MutationHookOptions<DeleteJediMutation, DeleteJediMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteJediMutation, DeleteJediMutationVariables>(DeleteJediDocument, options);
      }
export type DeleteJediMutationHookResult = ReturnType<typeof useDeleteJediMutation>;
export type DeleteJediMutationResult = Apollo.MutationResult<DeleteJediMutation>;
export type DeleteJediMutationOptions = Apollo.BaseMutationOptions<DeleteJediMutation, DeleteJediMutationVariables>;
export const UpdateJediDocument = gql`
    mutation updateJedi($id: Int!, $update: JediUpdateInput!) {
  updateJedi(id: $id, update: $update)
}
    `;
export type UpdateJediMutationFn = Apollo.MutationFunction<UpdateJediMutation, UpdateJediMutationVariables>;

/**
 * __useUpdateJediMutation__
 *
 * To run a mutation, you first call `useUpdateJediMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateJediMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateJediMutation, { data, loading, error }] = useUpdateJediMutation({
 *   variables: {
 *      id: // value for 'id'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateJediMutation(baseOptions?: Apollo.MutationHookOptions<UpdateJediMutation, UpdateJediMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateJediMutation, UpdateJediMutationVariables>(UpdateJediDocument, options);
      }
export type UpdateJediMutationHookResult = ReturnType<typeof useUpdateJediMutation>;
export type UpdateJediMutationResult = Apollo.MutationResult<UpdateJediMutation>;
export type UpdateJediMutationOptions = Apollo.BaseMutationOptions<UpdateJediMutation, UpdateJediMutationVariables>;
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

/**
 * __useGetJediQuery__
 *
 * To run a query within a React component, call `useGetJediQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJediQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJediQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetJediQuery(baseOptions: Apollo.QueryHookOptions<GetJediQuery, GetJediQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJediQuery, GetJediQueryVariables>(GetJediDocument, options);
      }
export function useGetJediLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJediQuery, GetJediQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJediQuery, GetJediQueryVariables>(GetJediDocument, options);
        }
export type GetJediQueryHookResult = ReturnType<typeof useGetJediQuery>;
export type GetJediLazyQueryHookResult = ReturnType<typeof useGetJediLazyQuery>;
export type GetJediQueryResult = Apollo.QueryResult<GetJediQuery, GetJediQueryVariables>;
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

/**
 * __useGetJediPaginatedQuery__
 *
 * To run a query within a React component, call `useGetJediPaginatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJediPaginatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJediPaginatedQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useGetJediPaginatedQuery(baseOptions?: Apollo.QueryHookOptions<GetJediPaginatedQuery, GetJediPaginatedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJediPaginatedQuery, GetJediPaginatedQueryVariables>(GetJediPaginatedDocument, options);
      }
export function useGetJediPaginatedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJediPaginatedQuery, GetJediPaginatedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJediPaginatedQuery, GetJediPaginatedQueryVariables>(GetJediPaginatedDocument, options);
        }
export type GetJediPaginatedQueryHookResult = ReturnType<typeof useGetJediPaginatedQuery>;
export type GetJediPaginatedLazyQueryHookResult = ReturnType<typeof useGetJediPaginatedLazyQuery>;
export type GetJediPaginatedQueryResult = Apollo.QueryResult<GetJediPaginatedQuery, GetJediPaginatedQueryVariables>;
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

/**
 * __useGetRepublicUnitsQuery__
 *
 * To run a query within a React component, call `useGetRepublicUnitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRepublicUnitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRepublicUnitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRepublicUnitsQuery(baseOptions?: Apollo.QueryHookOptions<GetRepublicUnitsQuery, GetRepublicUnitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRepublicUnitsQuery, GetRepublicUnitsQueryVariables>(GetRepublicUnitsDocument, options);
      }
export function useGetRepublicUnitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRepublicUnitsQuery, GetRepublicUnitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRepublicUnitsQuery, GetRepublicUnitsQueryVariables>(GetRepublicUnitsDocument, options);
        }
export type GetRepublicUnitsQueryHookResult = ReturnType<typeof useGetRepublicUnitsQuery>;
export type GetRepublicUnitsLazyQueryHookResult = ReturnType<typeof useGetRepublicUnitsLazyQuery>;
export type GetRepublicUnitsQueryResult = Apollo.QueryResult<GetRepublicUnitsQuery, GetRepublicUnitsQueryVariables>;