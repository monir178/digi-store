import Image from "next/image";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  img: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  rating,
  img,
}) => {
  return (
    <div className="bg-white border-gray-200  border-[2px] p-4 rounded-md ">
      <div>
        <div className="flex items-center gap-1">
          <Image
            src={img}
            alt={name}
            width={50}
            height={50}
            className="rounded-full h-[50px]  w-[50px]"
          />
          <h3 className="font-bold text-lg">{name}</h3>
        </div>
        <p className="mt-2 text-sm text-gray-600">{review}</p>
        <div className="mt-2">
          {Array.from({ length: rating }).map((_, index) => (
            <span key={index} className="text-yellow-500">
              ⭐
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
