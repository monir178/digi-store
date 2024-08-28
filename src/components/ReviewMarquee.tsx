import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import MaxWidthWrapper from "./MaxWidthWrapper";

export const userReviews = [
  {
    id: 1,
    name: "John Doe",
    review: "This product exceeded my expectations!",
    rating: 5,
    img: "/reviews/john.jpeg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Great quality and fast shipping.",
    rating: 4,
    img: "/reviews/jane.jpeg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    review: "Good value for the money.",
    rating: 4,
    img: "/reviews/alex.jpeg",
  },
  {
    id: 4,
    name: "Emily Brown",
    review: "Amazing customer service!",
    rating: 5,
    img: "/reviews/emily.jpeg",
  },
  {
    id: 5,
    name: "Michael Davis",
    review: "I highly recommend this product.",
    rating: 5,
    img: "/reviews/michael.jpeg",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    review: "Not as good as I expected, but decent.",
    rating: 3,
    img: "/reviews/sophia.jpeg",
  },
  {
    id: 7,
    name: "James Taylor",
    review: "Fantastic! Will buy again.",
    rating: 5,
    img: "/reviews/james.jpeg",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    review: "The product is okay, but the packaging was damaged.",
    rating: 3,
    img: "/reviews/olivia.jpeg",
  },
  {
    id: 9,
    name: "David Anderson",
    review: "Excellent quality, very satisfied.",
    rating: 5,
    img: "/reviews/david.jpeg",
  },
  {
    id: 10,
    name: "Ava Hernandez",
    review: "It works perfectly and looks great!",
    rating: 4,
    img: "/reviews/ava.jpeg",
  },
];

const ReviewMarquee = () => {
  return (
    <section className="border-t border-gray-200 bg-white">
      <MaxWidthWrapper className="pb-20 pt-10">
        <h1 className="text-2xl font-bold tracking-tight text-center text-gray-500 sm:text-3xl mb-12">
          What customer says about us
        </h1>
        <div className="bg-white py-8">
          <Marquee pauseOnHover gradient={false} direction="right" speed={30}>
            {userReviews.map((review) => (
              <div key={review.id} className="mx-4">
                <ReviewCard {...review} />
              </div>
            ))}
          </Marquee>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ReviewMarquee;
