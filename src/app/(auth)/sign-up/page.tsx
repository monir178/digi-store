import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto w-full flex flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Image
              src="/digiStore.svg"
              alt=" digiStore logo"
              width={100}
              height={100}
            />
            <h1 className="text-2xl font-bold">Create an account</h1>

            <Link
              href="/sign-in"
              className={buttonVariants({
                variant: "link",
                className: "text-muted-foreground",
              })}>
              Already have an account? Sign-in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
