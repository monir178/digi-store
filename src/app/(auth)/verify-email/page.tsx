import VerifyEmail from "@/components/VerifyEmail";
import Image from "next/image";

interface IPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const verifyEmailPage = ({ searchParams }: IPageProps) => {
  const token = searchParams.token;
  const toEmail = searchParams.to;

  return (
    <div className="container relative flex flex-col pt-20 items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6 ">
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 size-60 text-muted-foreground">
              <Image
                src="/email-sent.jpg"
                alt="digistore email sent image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <h3 className="font-semibold text-2xl">Check your email</h3>
            {toEmail ? (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to{" "}
                <span className="font-semibold">{toEmail}</span>.
              </p>
            ) : (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to your email
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default verifyEmailPage;
