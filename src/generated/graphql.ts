import gql from "graphql-tag";
import * as Urql from "urql";

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  post?: Maybe<Post>;
  feed?: Maybe<Array<Maybe<Post>>>;
  filterPosts?: Maybe<Array<Maybe<Post>>>;
};

export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};

export type QueryFilterPostsArgs = {
  searchString?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  signupUser: User;
  deleteOnePost?: Maybe<Post>;
  createDraft?: Maybe<Post>;
  publish?: Maybe<Post>;
};

export type MutationSignupUserArgs = {
  data: UserCreateInput;
};

export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};

export type MutationCreateDraftArgs = {
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
  authorEmail: Scalars["String"];
};

export type MutationPublishArgs = {
  id?: Maybe<Scalars["Int"]>;
};

export type Post = {
  __typename?: "Post";
  id: Scalars["Int"];
  title: Scalars["String"];
  content?: Maybe<Scalars["String"]>;
  published: Scalars["Boolean"];
  author?: Maybe<User>;
};

export type User = {
  __typename?: "User";
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  email: Scalars["String"];
  posts: Array<Post>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>;
};

export type UserCreateInput = {
  email: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateWithoutAuthorInput = {
  content?: Maybe<Scalars["String"]>;
  published?: Maybe<Scalars["Boolean"]>;
  title: Scalars["String"];
};

export type PostCreateOrConnectWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type PostQuery = { __typename?: "Query" } & {
  post?: Maybe<
    { __typename: "Post" } & Pick<
      Post,
      "id" | "title" | "content" | "published"
    > & {
        author?: Maybe<
          { __typename?: "User" } & Pick<User, "id" | "name" | "email"> & {
              posts: Array<{ __typename?: "Post" } & Pick<Post, "id">>;
            }
        >;
      }
  >;
};

export const PostDocument = gql`
  query Post($id: Int!) {
    post(where: { id: $id }) {
      id
      title
      content
      published
      author {
        id
        name
        email
        posts {
          id
        }
      }
      __typename
    }
  }
`;

export function usePostQuery(
  options: Omit<Urql.UseQueryArgs<PostQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<PostQuery>({ query: PostDocument, ...options });
}
