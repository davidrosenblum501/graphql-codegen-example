import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CloneTrooper: ResolverTypeWrapper<CloneTrooper>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Jedi: ResolverTypeWrapper<Jedi>;
  JediInput: JediInput;
  JediLightsaberColor: JediLightsaberColor;
  JediPaginated: ResolverTypeWrapper<JediPaginated>;
  JediRank: JediRank;
  JediUpdateInput: JediUpdateInput;
  Mutation: ResolverTypeWrapper<{}>;
  PaginationResult: ResolversTypes['JediPaginated'];
  Query: ResolverTypeWrapper<{}>;
  RepublicUnit: ResolversTypes['CloneTrooper'] | ResolversTypes['Jedi'];
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CloneTrooper: CloneTrooper;
  Int: Scalars['Int'];
  Jedi: Jedi;
  JediInput: JediInput;
  JediPaginated: JediPaginated;
  JediUpdateInput: JediUpdateInput;
  Mutation: {};
  PaginationResult: ResolversParentTypes['JediPaginated'];
  Query: {};
  RepublicUnit: ResolversParentTypes['CloneTrooper'] | ResolversParentTypes['Jedi'];
  String: Scalars['String'];
};

export type CloneTrooperResolvers<ContextType = any, ParentType extends ResolversParentTypes['CloneTrooper'] = ResolversParentTypes['CloneTrooper']> = {
  corps?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JediResolvers<ContextType = any, ParentType extends ResolversParentTypes['Jedi'] = ResolversParentTypes['Jedi']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lightsaberColor?: Resolver<ResolversTypes['JediLightsaberColor'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  padawan?: Resolver<Maybe<ResolversTypes['Jedi']>, ParentType, ContextType>;
  padawanId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['JediRank'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JediPaginatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['JediPaginated'] = ResolversParentTypes['JediPaginated']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  jedi?: Resolver<Array<ResolversTypes['Jedi']>, ParentType, ContextType>;
  pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createJedi?: Resolver<ResolversTypes['Jedi'], ParentType, ContextType, RequireFields<MutationCreateJediArgs, 'input'>>;
  deleteJedi?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteJediArgs, 'id'>>;
  updateJedi?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateJediArgs, 'id' | 'update'>>;
};

export type PaginationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationResult'] = ResolversParentTypes['PaginationResult']> = {
  __resolveType: TypeResolveFn<'JediPaginated', ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  jedi?: Resolver<Maybe<ResolversTypes['Jedi']>, ParentType, ContextType, RequireFields<QueryJediArgs, 'id'>>;
  jediPaginated?: Resolver<ResolversTypes['JediPaginated'], ParentType, ContextType, Partial<QueryJediPaginatedArgs>>;
  republicUnits?: Resolver<Array<ResolversTypes['RepublicUnit']>, ParentType, ContextType, Partial<QueryRepublicUnitsArgs>>;
};

export type RepublicUnitResolvers<ContextType = any, ParentType extends ResolversParentTypes['RepublicUnit'] = ResolversParentTypes['RepublicUnit']> = {
  __resolveType: TypeResolveFn<'CloneTrooper' | 'Jedi', ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CloneTrooper?: CloneTrooperResolvers<ContextType>;
  Jedi?: JediResolvers<ContextType>;
  JediPaginated?: JediPaginatedResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PaginationResult?: PaginationResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RepublicUnit?: RepublicUnitResolvers<ContextType>;
};

