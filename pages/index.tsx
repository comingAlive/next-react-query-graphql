import Container from "@/components/Container";
import Form from "@/components/Form";
import HalfStarIcon from "@/components/icons/HalfStarIcon";
import StarIcon from "@/components/icons/StarIcon";
import { client } from "@/lib/swr";
import Image from "next/image";
import { usePostQuery } from "../src/generated/graphql";

function Index() {
  // const { data } = usePost("post", { id: 1 });

  const {data} = usePostQuery(client, { id: 1 });
  // const { data } = usePostQuery();

  return (
    <Container>
      <div
        onClick={() => console.log(data)}
        className="p-10 text-black bg-white"
      >
        123 {data?.post?.title}
      </div>
      <div className="grid relative grid-cols-2 h-screen">
        <span className="absolute left-80 w-3/4 h-full from-blue-200 to-white transform-gpu translate-x-24 -skew-x-12 sm:bg-gradient-to-br" />
        <div className="z-10 my-auto space-y-24">
          <Image src="/logos/logo.png" width={60} height={60} />
          <div className="text-6xl font-bold">
            Find the best deals on flight now
          </div>
          <div>
            <div className="flex">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <HalfStarIcon />
            </div>
            <div>
              Our customers rate us 4.5 of 5 stars based on 3200+ reviews!
            </div>
          </div>
        </div>
        <Form />
      </div>
    </Container>
  );
}

export default Index;
