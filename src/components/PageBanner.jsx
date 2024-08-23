import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const PageBanner = ({ title }) => {
  return (
    <section className="py-[50px] text-center bg-banner-bg bg-cover bg-no-repeat bg-center text-white space-y-6">
      <h1 className="text-3xl lg:text-5xl font-semibold">{title}</h1>
      <div className="text-sm flex justify-center items-center gap-3">
        Home <MdKeyboardDoubleArrowRight />
        About Us
      </div>
    </section>
  );
};

export default PageBanner;
