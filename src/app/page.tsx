import Banner from "@/components/Banner";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import ReviewMarquee from "@/components/ReviewMarquee";
import StandOutSection from "@/components/StandOutSection";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <Banner />
        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          title="Brand new"
          href="/products"
        />
        <StandOutSection />
        <ReviewMarquee />
      </MaxWidthWrapper>
    </>
  );
}
