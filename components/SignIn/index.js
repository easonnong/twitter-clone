import { signIn } from "next-auth/react";

export const Signin = (props) => {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png"
        alt="twitter image inside a phone"
        className="rotate-6 hidden object-cover md:w-44 md:h-80 md:inline-flex"
      ></img>

      <div className="mt-10">
        {Object.values(props.providers).map((provider) => (
          <div className="flex flex-col items-center">
            <img
              src="/images/twitter-logo.png"
              alt="twitter logo"
              className="w-36 object-cover"
            ></img>

            <p className="text-center text-sm italic my-10">
              This app is created for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
