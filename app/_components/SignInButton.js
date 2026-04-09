import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction} className="w-full max-w-md">
      <button className="w-full flex items-center justify-center gap-4 sm:gap-6 text-base sm:text-lg border border-primary-300 px-6 sm:px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
