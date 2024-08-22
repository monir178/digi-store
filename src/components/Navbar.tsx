import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import digiStore from "/public/digiStore.svg";
import Image from "next/image";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 ">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Todo: Mobile Nav */}

              <div className=" flex lg:ml-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src={digiStore}
                    height={45}
                    width={45}
                    alt="DigiStore Logo"
                  />
                  <p className="font-mono font-bold text-violet-500 text-lg md:text-xl">
                    DigiStore
                  </p>
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
