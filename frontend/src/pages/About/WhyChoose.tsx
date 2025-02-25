import { TrendingUp, PhoneCall } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <>
      <section className="bg-gradient-primary"
        style={{
          // background: "linear-gradient(180deg, #f7f7f7, )",
        }}
      >
        <div className="px-4 mx-auto py-14 max-w-7xl sm:px-8">
        <h2 className="mt-4 text-2xl md:text-5xl font-orbitron font-semibold text-white mb-4">
            Why <span className="text-yellow">Choose Us</span>
          </h2>
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:gap-20">
            {/* Left Section */}
            <div className="w-full md:w-1/2">
              <p className="mb-8 text-lg text-center md:text-left text-[#FFFFFF] font-clashDisplay">
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                of using lorem the is Ipsum less normal.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 sm:gap-8 sm:pt-5">
                <div className="flex items-center justify-center gap-2 rounded-lg sm:gap-4">
                  <div className="p-2 bg-gray-100 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="mt-4 text-sm font-semibold text-center text-[#FFFFFF] font- sm:text-lg sm:text-left">
                    Business Growth
                  </h2>
                </div>
                <div className="flex items-center justify-center gap-2 rounded-lg sm:gap-4">
                  <div className="p-2 bg-gray-100 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2l9 9-9 9-9-9 9-9z" />
                    </svg>
                  </div>
                  <h2 className="mt-4 text-sm font-semibold text-center text-[#FFFFFF] sm:text-lg sm:text-left">
                    Technology Consultancy
                  </h2>
                </div>
              </div>

              <hr className="my-1 sm:my-2" />

              <div className="grid grid-cols-2 gap-4 pt-2 sm:gap-8 sm:pt-5">
                <div className="flex items-center justify-center gap-2 rounded-lg sm:gap-4">
                  <div className="w-11">
                    <img
                      className="rounded-full w-11"
                      src="https://jthemes.net/themes/html/growim/assets/images/resources/why-choose-three-author.jpg"
                      alt=""
                    />
                  </div>
                  <h2 className="mt-4 text-sm font-semibold text-center text-[#FFFFFF] sm:text-lg sm:text-left">
                    Muhammad Haseeb <br />
                    <span className="text-base font-normal text-[#FFFFFF] sm:text-sm">
                      Founder
                    </span>
                  </h2>
                </div>
                <div className="flex items-center gap-2 rounded-lg sm:gap-4">
                  <div className="p-3 bg-primary rounded-xl">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-sm font-semibold text-center text-[#FFFFFF] sm:text-lg sm:text-left">
                    Call us now <br />
                    <span className="text-base font-normal text-[#FFFFFF] sm:text-xl">
                      +208-555-0112
                    </span>
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Section (Image + Girl Animation) */}
            <div className="relative flex items-center justify-center w-full pl-0 md:w-1/2 md:pl-28">
              <img src={'images/lady-bg.png'} className="w-2/3 md:w-10/12" alt="Background" />
              <div>
                <img
                  src={'images/why_choose_girl.png'}
                  alt="Why Choose Us"
                  className="absolute bottom-0 w-2/3 md:w-10/12 left-20 md:left-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;