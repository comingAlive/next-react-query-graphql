export const fetcher = async <JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> => {
  const res = await fetch(input, init);
  return res.json();
};

// Graphql-Request fetcher alternative
// export const fetcher = (query) => request(`https://api.spacex.land/graphql/`, query);
