import { ArrowDownToLineIcon, CheckCircle, Leaf } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLineIcon,
    description:
      "Get your assets instantly via email and start downloading without delay.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Each asset on our platform is meticulously verified by our team, guaranteeing the highest level of quality. ",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We’ve committed 1% of every sale to preserving and restoring the natural environment.",
  },
];

const StandOutSection = () => {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="pb-20 pt-10">
        <h1 className="text-2xl font-bold tracking-tight text-center text-gray-500 sm:text-3xl mb-12">
          Why We Stand Out ?
        </h1>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
          {perks.map((perk) => (
            <div
              key={perk.name}
              className="text-center md:flex md:items-center md:text-left lg:block lg:text-center">
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-violet-100 text-violet-900">
                  {<perk.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default StandOutSection;
