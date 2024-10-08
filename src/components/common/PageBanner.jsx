import FadeInUpWithSlowBounce from "../animations/FadeInUpWithSlowBounce";
import Breadcrumbs from "../ui/Breadcrumbs";

const PageBanner = ({ title }) => {
  return (
    <section className="space-y-6 bg-banner-bg bg-cover bg-center bg-no-repeat py-[50px] text-center text-white">
      <FadeInUpWithSlowBounce className="space-y-4">
        <h1 className="text-3xl font-semibold lg:text-4xl">{title}</h1>
        <Breadcrumbs />
      </FadeInUpWithSlowBounce>
    </section>
  );
};

export default PageBanner;
