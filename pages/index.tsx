import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);
  return <div></div>;
};

export default Home;
