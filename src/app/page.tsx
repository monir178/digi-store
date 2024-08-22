import Banner from "@/components/Banner";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import StandOutSection from "@/components/StandOutSection";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <Banner />
        {/* Todo: List Products here */}
      </MaxWidthWrapper>
      <StandOutSection />
    </>
  );
}
