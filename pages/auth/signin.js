import { Signin } from "../../components/SignIn";
import { getProviders } from "next-auth/react";

export default function signin(props) {
  return (
    <div>
      <Signin props={props}></Signin>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
