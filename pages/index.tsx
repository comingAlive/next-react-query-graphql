import { useGetLaunchesQuery } from "../graphql/generated/graphql";

const IndexPage = () => {
  const { data } = useGetLaunchesQuery();
  return (
    <div style={{ textAlign: "center" }}>
      {data?.launchesPast[0].mission_name}
    </div>
  );
};

export default IndexPage;
