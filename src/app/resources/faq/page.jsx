import { Suspense } from "react";
import FaqSkeleton from "@/components/skeletons/FaqSkeleton";
import PageBanner from "@/components/common/PageBanner";
import Faqs from "@/components/pages/faq/Faqs";

export const metadata = {
  title: "Hire&Fire | Frequently Asked Questions",
};

const FAQPage = () => {
  return (
    <main>
      <PageBanner title="FAQ" />
      <section className="py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-5">
            <h6 className="text-center text-2xl font-medium text-primary lg:text-left">
              FAQ
            </h6>
            <h2 className="text-center text-4xl font-semibold md:text-4xl lg:text-left lg:text-[40px]">
              Our experts answer the most frequently asked questions
            </h2>
            <p className="text-center text-sm font-medium lg:text-left">
              Clear answers to common inquiries about job search, application
              processes, requirements, and company culture for applicants.
            </p>

            {/* faq container */}

            <Suspense fallback={<FaqSkeleton />}>
              <Faqs />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
