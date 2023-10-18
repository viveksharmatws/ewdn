import Image from "next/image";
import Link from "next/link";

// import { FaLink } from "./FaLink";
import { BsSearch } from "react-icons/bs";
// import { FaLink } from "./FaLink";
import { FaLink } from "react-icons/fa";

const LatestBlogs = () => {
  return (
    <section className=" mx-auto max-w-[1400px] pb-[90px]">
      <h1 className=" mx-auto mb-[15px] border-t-2 px-[10px] pt-[90px]  text-[45px] font-normal leading-[47px] text-black ">
        Our Latest Blog
      </h1>

      <div className="grid grid-cols-1 gap-[10px]  sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 ">
        <div className=" flex flex-col px-[15px] pb-[1px] pt-[15px] ">
          <div className="w-full">
            <div className="group relative overflow-hidden">
              <Image
                src="/images/blueman.jpg"
                alt="Image of person"
                width={340}
                height={300}
                className="transition duration-1000  hover:scale-110 hover:grayscale "
              />
              <div className=" absolute  inset-[40%] z-10 flex gap-2 opacity-0 duration-300 group-hover:opacity-100">
                <Link
                  href="#"
                  className="  flex h-[50px] w-[50px] items-center justify-center border border-t-2 p-3  cursor-pointer "
                >
                  <BsSearch color="#ffffff" />
                </Link>
                <Link
                  href="#"
                  className="  flex h-[50px] w-[250px] items-center justify-center border border-t-2  cursor-pointer p-3"
                >
                  <FaLink color="white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] ">
              <a href="">September 3,2023</a>
            </h4>
            <h2 className="text-[22px] font-normal leading-[23px]">
              Turpis at eleifend Aenean porta
            </h2>
            <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
              Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc
              urna Morbi...
            </p>
            <a
              href=""
              className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
            >
              read more
            </a>
          </div>
        </div>

        <div className="flex flex-col px-[15px] pb-[1px] pt-[15px] ">
          <div className="w-full ">
            <div className="group relative overflow-hidden">
              <Image
                src="/images/browngir;.jpg"
                alt="Image of person"
                width={340}
                height={300}
                className="transition duration-1000  hover:scale-110 hover:grayscale "
              />
              <div className=" absolute  inset-[40%] z-10 flex gap-2 opacity-0 duration-300 group-hover:opacity-100">
                <Link
                  href="#"
                  className="  flex h-[50px] w-[50px] items-center justify-center border border-t-2 p-3 cursor-pointer "
                >
                  <BsSearch color="#ffffff" />
                </Link>
                <Link
                  href="#"
                  className="  flex h-[50px] w-[250px] items-center justify-center border border-t-2  p-3 cursor-pointer "
                >
                  <FaLink color="white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] ">
              <a href="">September 3,2023</a>
            </h4>
            <h2 className="text-[22px] font-normal leading-[23px]">
              Turpis at eleifend Aenean porta
            </h2>
            <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
              Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc
              urna Morbi...
            </p>
            <a
              href=""
              className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
            >
              read more
            </a>
          </div>
        </div>
        <div className="flex flex-col px-[15px] pb-[1px] pt-[15px] ">
          <div className="w-full ">
            <div className=" group relative overflow-hidden">
              <Image
                src="/images/yellowshoes.jpg"
                alt="Image of person"
                width={340}
                height={300}
                className="transition duration-1000  hover:scale-110 hover:grayscale "
              />
              <div className=" absolute  inset-[40%] z-10 flex gap-2 opacity-0 duration-300 group-hover:opacity-100">
                <Link
                  href="#"
                  className="  flex h-[50px] w-[50px] items-center justify-center border border-t-2 p-3 cursor-pointer  "
                >
                  <BsSearch color="#ffffff" />
                </Link>
                <Link
                  href="#"
                  className="  flex h-[50px] w-[250px] items-center justify-center border border-t-2  p-3 cursor-pointer "
                >
                  <FaLink color="white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] ">
              <a href="">September 3,2023</a>
            </h4>
            <h2 className="text-[22px] font-normal leading-[23px]">
              Turpis at eleifend Aenean porta
            </h2>
            <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
              Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc
              urna Morbi...
            </p>
            <a
              href=""
              className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
            >
              read more
            </a>
          </div>
        </div>
        <div className="flex flex-col px-[15px] pb-[1px] pt-[15px] ">
          <div className="w-full ">
            <div className=" group relative overflow-hidden">
              <Image
                src="/images/cattop.jpg"
                alt="Image of person"
                width={340}
                height={300}
                className="transition duration-1000  hover:scale-110 hover:grayscale "
              />

              <div className=" absolute  inset-[40%] z-10 flex gap-2 opacity-0 duration-300 group-hover:opacity-100 ">
                <Link
                  href="#"
                  className="  flex h-[50px] w-[50px] items-center justify-center border border-t-2 p-3  cursor-pointer "
                >
                  <BsSearch color="#ffffff" />
                </Link>
                <Link
                  href="#"
                  className="  flex h-[50px] w-[250px] items-center justify-center  border-4  p-3 cursor-pointer "
                >
                  <FaLink color="white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <h4 className="text-[15px] font-medium leading-[50px] text-[#FF0000] ">
              <a href="">September 3,2023</a>
            </h4>
            <h2 className="text-[22px] font-normal leading-[23px]">
              Turpis at eleifend Aenean porta
            </h2>
            <p className="mb-[11px] text-[18px] font-normal leading-[24px] text-[#666666]">
              Turpis at eleifend ps mi elit Aenean porta ac sed faucibus. Nunc
              urna Morbi...
            </p>
            <a
              href=""
              className="text-[17px] font-medium capitalize tracking-[0.5px] underline"
            >
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LatestBlogs;
