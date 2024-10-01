import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between gap-10 lg:flex-row">
        <FadeInLeftWithSlowBounce className="relative min-h-[600px] w-full basis-full lg:basis-1/2">
          <Image
            className="h-auto w-full object-contain object-center lg:object-left"
            src="/images/why-choose-us-onboarding.png"
            fill
          />
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="basis-full space-y-6 lg:basis-1/2">
          <div className="flex items-center">
            <span className="rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-left text-4xl font-semibold leading-[62px] lg:text-4xl">
            Why Choose Us for Onboarding Support
          </h2>
          <p className="text-left text-sm font-medium">
            Choose us for seamless onboarding support that boosts productivity,
            reduces turnover, and fosters cultural integration. Our tailored
            approach ensures new hires are equipped with the skills and guidance
            needed for long-term success.
          </p>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_356_4175)">
                  <rect
                    x="5"
                    y="5"
                    width="44"
                    height="44"
                    rx="4"
                    fill="white"
                  />
                  <rect
                    x="5.5"
                    y="5.5"
                    width="43"
                    height="43"
                    rx="3.5"
                    stroke="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.5342 16.8143H35.2085C34.2846 16.8149 33.5261 17.5735 33.5261 18.4989V20.6124H37.2188V18.4989C37.2188 17.573 36.46 16.8143 35.5342 16.8143ZM18.4658 37.1855H26.7852C26.3417 36.758 26.0661 36.1606 26.0661 35.501V33.3874H16.7812V35.501C16.7812 36.4268 17.54 37.1855 18.4658 37.1855ZM20.1503 24.8333C19.4248 24.1077 18.2481 24.1078 17.5225 24.8333C16.797 25.5589 16.797 26.7355 17.5225 27.4611C18.2482 28.1867 19.4247 28.1867 20.1503 27.4611C20.876 26.7355 20.876 25.5589 20.1503 24.8333ZM19.5619 25.2774C19.6238 25.2177 19.7067 25.1846 19.7927 25.1853C19.8788 25.1861 19.9611 25.2206 20.0219 25.2814C20.0827 25.3423 20.1172 25.4246 20.118 25.5106C20.1187 25.5966 20.0857 25.6795 20.0259 25.7414L18.7503 27.017C18.6887 27.0785 18.6053 27.1131 18.5183 27.1131C18.4313 27.1131 18.3478 27.0785 18.2863 27.017L17.6469 26.3776C17.5872 26.3157 17.5541 26.2329 17.5548 26.1468C17.5556 26.0608 17.5901 25.9785 17.6509 25.9177C17.7118 25.8568 17.7941 25.8223 17.8801 25.8216C17.9661 25.8208 18.049 25.8539 18.1109 25.9137L18.5183 26.321L19.5619 25.2774ZM28.5128 24.4253C29.853 24.796 30.6482 26.1825 30.2877 27.5279C30.1066 28.2037 29.6679 28.7428 29.105 29.0681L29.1053 29.0687C27.8906 29.77 26.3413 29.3548 25.6394 28.1401L25.6388 28.1405C24.9374 26.9256 25.3525 25.3754 26.567 24.6739C26.5736 24.6701 26.5803 24.6665 26.5871 24.6632C27.1409 24.3497 27.8115 24.2428 28.4737 24.4148C28.4871 24.4175 28.5001 24.421 28.5128 24.4253ZM28.2375 26.6396L29.712 27.0347C29.7818 26.2477 29.3496 25.498 28.6326 25.1651L28.2375 26.6396ZM27.5521 27.0347C27.5307 26.9976 27.5168 26.9565 27.5112 26.914C27.5056 26.8714 27.5084 26.8282 27.5196 26.7867L27.9995 24.9955C27.6149 24.9611 27.2291 25.0467 26.895 25.2404C25.9939 25.7618 25.686 26.9129 26.2053 27.8124L26.2047 27.8127C26.6495 28.5752 27.5542 28.9317 28.3955 28.6694L27.5521 27.0347ZM29.5424 27.6678L28.4667 27.3795L28.9775 28.3697C29.2201 28.1852 29.414 27.9442 29.5424 27.6678ZM22.6172 21.5844H21.3608V22.7179H22.6172V21.5844ZM21.0327 20.9282H22.9454C23.0324 20.9282 23.1158 20.9627 23.1774 21.0243C23.2389 21.0858 23.2735 21.1693 23.2735 21.2563V23.0461C23.2735 23.1331 23.2389 23.2166 23.1774 23.2781C23.1158 23.3396 23.0324 23.3742 22.9454 23.3742H21.0327C20.9457 23.3742 20.8622 23.3396 20.8007 23.2781C20.7392 23.2166 20.7046 23.1331 20.7046 23.0461V21.2563C20.7046 21.1693 20.7392 21.0858 20.8007 21.0243C20.8622 20.9627 20.9457 20.9282 21.0327 20.9282ZM25.9234 20.2593H24.667V22.7179H25.9234V20.2593ZM24.3389 19.6031H26.2515C26.3385 19.6031 26.422 19.6376 26.4835 19.6992C26.5451 19.7607 26.5796 19.8442 26.5796 19.9312V23.0461C26.5796 23.1331 26.5451 23.2166 26.4835 23.2781C26.422 23.3396 26.3385 23.3742 26.2515 23.3742H24.3389C24.2518 23.3742 24.1684 23.3396 24.1068 23.2781C24.0453 23.2166 24.0107 23.1331 24.0107 23.0461V19.9312C24.0107 19.8442 24.0453 19.7607 24.1068 19.6992C24.1684 19.6376 24.2518 19.6031 24.3389 19.6031ZM29.2295 19.0297H27.9731V22.7179H29.2296V19.0297H29.2295ZM27.645 18.3734H29.5576C29.6447 18.3734 29.7281 18.408 29.7897 18.4695C29.8512 18.5311 29.8858 18.6145 29.8858 18.7016V23.046C29.8858 23.1331 29.8512 23.2165 29.7897 23.2781C29.7281 23.3396 29.6447 23.3742 29.5576 23.3742H27.645C27.558 23.3742 27.4745 23.3396 27.413 23.2781C27.3514 23.2165 27.3169 23.1331 27.3169 23.046V18.7016C27.3169 18.6145 27.3514 18.5311 27.413 18.4695C27.4745 18.408 27.558 18.3734 27.645 18.3734ZM22.1394 25.6556C22.0524 25.6556 21.9689 25.621 21.9074 25.5595C21.8458 25.498 21.8113 25.4145 21.8113 25.3275C21.8113 25.2405 21.8458 25.157 21.9074 25.0955C21.9689 25.0339 22.0524 24.9994 22.1394 24.9994H24.3526C24.4396 24.9994 24.5231 25.0339 24.5846 25.0955C24.6461 25.157 24.6807 25.2405 24.6807 25.3275C24.6807 25.4145 24.6461 25.498 24.5846 25.5595C24.5231 25.621 24.4396 25.6556 24.3526 25.6556H22.1394ZM22.1394 27.0491C22.0524 27.0491 21.9689 27.0145 21.9074 26.953C21.8458 26.8915 21.8113 26.808 21.8113 26.721C21.8113 26.634 21.8458 26.5505 21.9074 26.489C21.9689 26.4274 22.0524 26.3929 22.1394 26.3929H24.3526C24.4396 26.3929 24.5231 26.4274 24.5846 26.489C24.6461 26.5505 24.6807 26.634 24.6807 26.721C24.6807 26.808 24.6461 26.8915 24.5846 26.953C24.5231 27.0145 24.4396 27.0491 24.3526 27.0491H22.1394ZM22.1394 28.4426C22.0524 28.4426 21.9689 28.408 21.9074 28.3465C21.8458 28.285 21.8113 28.2015 21.8113 28.1145C21.8113 28.0275 21.8458 27.944 21.9074 27.8825C21.9689 27.8209 22.0524 27.7864 22.1394 27.7864H24.3526C24.4396 27.7864 24.5231 27.8209 24.5846 27.8825C24.6461 27.944 24.6807 28.0275 24.6807 28.1145C24.6807 28.2015 24.6461 28.285 24.5846 28.3465C24.5231 28.408 24.4396 28.4426 24.3526 28.4426H22.1394ZM34.4128 30.0012C33.3705 28.959 31.6805 28.959 30.6382 30.0012C29.596 31.0434 29.596 32.7335 30.6382 33.7757C31.6805 34.8179 33.3705 34.8179 34.4128 33.7757C35.455 32.7335 35.455 31.0434 34.4128 30.0012ZM32.8698 28.5809C30.9043 28.3786 29.2003 29.918 29.2003 31.8885C29.2003 33.8589 30.9043 35.3983 32.8698 35.196V35.8871C32.8698 36.6005 32.2847 37.1856 31.5713 37.1856H28.4069C27.481 37.1856 26.7223 36.4269 26.7223 35.501V33.0593C26.7223 32.9723 26.6877 32.8888 26.6262 32.8273C26.5646 32.7658 26.4812 32.7312 26.3941 32.7312H18.794V28.6612C20.1992 28.685 21.3508 27.5521 21.3508 26.1472C21.3508 24.7424 20.1993 23.6096 18.794 23.6333V18.1128C18.794 17.3993 19.3789 16.8143 20.0925 16.8143H33.589C33.1455 17.2418 32.8699 17.8393 32.8699 18.4989V28.5809H32.8698ZM31.4289 30.652C31.5787 30.5191 31.7515 30.4145 31.9387 30.3434C33.0092 29.9372 34.177 30.7255 34.177 31.8885C34.177 32.8006 33.4377 33.5399 32.5255 33.5399C31.6506 33.5399 30.9324 32.8631 30.8771 31.999C30.8658 31.8185 30.7102 31.6813 30.5297 31.6926C30.3492 31.704 30.2121 31.8595 30.2234 32.04C30.2628 32.6432 30.5346 33.1836 30.9502 33.5726C31.8612 34.4251 33.2777 34.3998 34.1573 33.5203C35.0585 32.619 35.0585 31.158 34.1573 30.2568C33.2914 29.3909 31.9077 29.3544 30.9957 30.1625C30.9626 30.1906 30.9355 30.2251 30.9158 30.2639C30.8962 30.3027 30.8845 30.345 30.8815 30.3883C30.8784 30.4317 30.884 30.4752 30.8979 30.5164C30.9119 30.5576 30.9339 30.5955 30.9627 30.6281C30.9915 30.6606 31.0265 30.6871 31.0657 30.706C31.1048 30.7248 31.1474 30.7357 31.1908 30.7379C31.2342 30.7402 31.2776 30.7337 31.3185 30.719C31.3594 30.7042 31.3969 30.6814 31.4289 30.652ZM30.9922 31.2712C30.9594 31.3509 30.8964 31.4145 30.8169 31.4481C30.7374 31.4816 30.6479 31.4824 30.5679 31.4503C30.4878 31.4182 30.4236 31.3558 30.3893 31.2767C30.355 31.1975 30.3534 31.108 30.3847 31.0277L30.4043 30.9802L30.4039 30.98C30.4068 30.9731 30.4135 30.9583 30.4239 30.9353C30.4606 30.8575 30.5263 30.7973 30.6069 30.7675C30.6875 30.7378 30.7766 30.7409 30.8549 30.7762C30.9333 30.8115 30.9946 30.8762 31.0257 30.9563C31.0568 31.0364 31.0552 31.1255 31.0212 31.2044C31.0198 31.2077 31.0147 31.2193 31.0063 31.2389L31.0058 31.2388C31.0012 31.2495 30.9967 31.2603 30.9922 31.2712ZM32.8367 32.9964V33.0872C32.8367 33.1742 32.8021 33.2577 32.7406 33.3192C32.679 33.3807 32.5956 33.4153 32.5086 33.4153C32.4215 33.4153 32.3381 33.3807 32.2765 33.3192C32.215 33.2577 32.1804 33.1742 32.1804 33.0872V33.0203H32.0999C32.0129 33.0203 31.9294 32.9857 31.8679 32.9242C31.8064 32.8626 31.7718 32.7792 31.7718 32.6922C31.7718 32.6051 31.8064 32.5217 31.8679 32.4601C31.9294 32.3986 32.0129 32.364 32.0999 32.364H32.6513C32.748 32.364 32.748 32.2166 32.6513 32.2166C32.3559 32.2166 32.1224 32.2409 31.8838 32.0024C31.4932 31.6118 31.6635 30.9538 32.1804 30.7903V30.6898C32.1804 30.6027 32.215 30.5193 32.2765 30.4577C32.3381 30.3962 32.4215 30.3616 32.5086 30.3616C32.5956 30.3616 32.679 30.3962 32.7406 30.4577C32.8021 30.5193 32.8367 30.6027 32.8367 30.6898V30.7566H32.9511C33.0381 30.7566 33.1215 30.7912 33.1831 30.8527C33.2446 30.9143 33.2792 30.9977 33.2792 31.0848C33.2792 31.1718 33.2446 31.2553 33.1831 31.3168C33.1215 31.3783 33.0381 31.4129 32.9511 31.4129H32.3996C32.3029 31.4129 32.3029 31.5604 32.3996 31.5604C32.695 31.5604 32.9286 31.536 33.1671 31.7745C33.5689 32.1763 33.3753 32.8546 32.8367 32.9964ZM20.1721 31.1067H27.7407C27.8277 31.1067 27.9112 31.0721 27.9727 31.0106C28.0343 30.949 28.0688 30.8656 28.0688 30.7785C28.0688 30.6915 28.0343 30.608 27.9727 30.5465C27.9112 30.485 27.8277 30.4504 27.7407 30.4504H20.1721C20.0851 30.4504 20.0016 30.485 19.9401 30.5465C19.8785 30.608 19.844 30.6915 19.844 30.7785C19.844 30.8656 19.8785 30.949 19.9401 31.0106C20.0016 31.0721 20.0851 31.1067 20.1721 31.1067ZM20.1721 29.7815H24.4346C24.5216 29.7815 24.6051 29.7469 24.6666 29.6854C24.7281 29.6239 24.7627 29.5404 24.7627 29.4534C24.7627 29.3664 24.7281 29.2829 24.6666 29.2214C24.6051 29.1598 24.5216 29.1253 24.4346 29.1253H20.1721C20.0851 29.1253 20.0016 29.1598 19.9401 29.2214C19.8785 29.2829 19.844 29.3664 19.844 29.4534C19.844 29.5404 19.8785 29.6239 19.9401 29.6854C20.0016 29.7469 20.0851 29.7815 20.1721 29.7815Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_356_4175"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_356_4175"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_356_4175"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">Tailored Plans</h6>
                <p className="text-sm font-medium">
                  Custom onboarding strategies aligned with your company’s
                  unique goals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_356_4193)">
                  <rect
                    x="5"
                    y="5"
                    width="44"
                    height="44"
                    rx="4"
                    fill="white"
                  />
                  <rect
                    x="5.5"
                    y="5.5"
                    width="43"
                    height="43"
                    rx="3.5"
                    stroke="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.8991 30.3672V34.2219H29.5515C29.7055 33.7987 30.1116 33.4961 30.5878 33.4961C31.1962 33.4961 31.6902 33.99 31.6902 34.5984C31.6902 35.2068 31.1962 35.7008 30.5878 35.7008C30.1116 35.7008 29.7055 35.3982 29.5515 34.9749H27.5226C27.4228 34.9749 27.327 34.9352 27.2564 34.8646C27.1858 34.794 27.1462 34.6983 27.1462 34.5984V30.3672H24.8673V35.0416C25.2906 35.1956 25.5932 35.6017 25.5932 36.0779C25.5932 36.6864 25.0993 37.1803 24.4909 37.1803C23.8824 37.1803 23.3885 36.6864 23.3885 36.0779C23.3885 35.6017 23.6911 35.1956 24.1144 35.0416V30.3672H21.8356V34.5984C21.8356 34.6983 21.7959 34.794 21.7253 34.8646C21.6547 34.9352 21.559 34.9749 21.4591 34.9749H19.4302C19.2762 35.3982 18.8701 35.7008 18.3939 35.7008C17.7855 35.7008 17.2915 35.2068 17.2915 34.5984C17.2915 33.99 17.7855 33.4961 18.3939 33.4961C18.8701 33.4961 19.2762 33.7987 19.4302 34.2219H21.0826V30.3672H18.9872C17.4698 30.3672 16.2285 29.1259 16.2285 27.6095C16.2285 26.4589 16.9428 25.4675 17.9489 25.0547C17.9442 24.9702 17.9419 24.8856 17.9421 24.801C17.9421 22.3663 19.9152 20.3922 22.3499 20.3922C23.5404 20.3922 24.6216 20.8645 25.415 21.6325C25.8458 21.4783 26.3001 21.3998 26.7577 21.4002C28.8099 21.4002 30.4981 22.9528 30.7137 24.9474C31.9111 25.2723 32.7532 26.3672 32.7532 27.6095C32.7532 29.1259 31.512 30.3672 29.9945 30.3672H27.8991ZM33.4095 26.7945C33.1526 25.7271 32.4022 24.8273 31.3854 24.3869C30.9288 22.2499 29.0312 20.6473 26.7577 20.6473C26.3578 20.6473 25.9698 20.697 25.5991 20.7904C24.9276 20.2456 24.1165 19.8661 23.2283 19.7138C23.8459 18.025 25.4665 16.8196 27.3691 16.8196C28.5596 16.8196 29.6408 17.2919 30.4342 18.0599C30.865 17.9057 31.3193 17.8272 31.7769 17.8276C33.8291 17.8276 35.5173 19.3802 35.7329 21.3748C36.9303 21.6997 37.7724 22.7946 37.7724 24.0368C37.7724 25.5533 36.5312 26.7945 35.0137 26.7945H33.4095ZM31.7915 20.5976H30.9678C30.76 20.5976 30.5913 20.7663 30.5913 20.9741C30.5913 21.1818 30.76 21.3505 30.9678 21.3505H31.7915V22.1743C31.7915 22.382 31.9602 22.5507 32.168 22.5507C32.3758 22.5507 32.5445 22.382 32.5445 22.1743V21.3505H33.3682C33.576 21.3505 33.7447 21.1818 33.7447 20.9741C33.7447 20.7663 33.576 20.5976 33.3682 20.5976H32.5445V19.7738C32.5445 19.5661 32.3758 19.3974 32.168 19.3974C31.9602 19.3974 31.7915 19.5661 31.7915 19.7738V20.5976Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_356_4193"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_356_4193"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_356_4193"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">
                  Seamless Integration
                </h6>
                <p className="text-sm font-medium">
                  Smooth process for quick adaptation and increased
                  productivity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_356_4185)">
                  <rect
                    x="5"
                    y="5"
                    width="44"
                    height="44"
                    rx="4"
                    fill="white"
                  />
                  <rect
                    x="5.5"
                    y="5.5"
                    width="43"
                    height="43"
                    rx="3.5"
                    stroke="#F90945"
                  />
                  <g clip-path="url(#clip0_356_4185)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.5564 30.2956H30.4449C30.2589 28.5577 28.7879 27.2042 27.0006 27.2042C25.2134 27.2041 23.7424 28.5577 23.5564 30.2956ZM37.8677 20.5909L35.3598 16.1598C35.3403 16.1253 35.2944 16.1116 35.2596 16.1313L34.4066 16.6141C34.3721 16.6336 34.3585 16.6796 34.3781 16.7143L36.872 21.1209C36.9231 21.1968 36.9326 21.2042 37.012 21.1593L37.8392 20.6912C37.8737 20.6716 37.8873 20.6256 37.8677 20.5909ZM36.7904 20.4085C36.7787 20.3285 36.7992 20.2473 36.8475 20.1825C36.8957 20.1177 36.9678 20.0748 37.0477 20.0631C37.1276 20.0514 37.2089 20.072 37.2736 20.1202C37.3384 20.1685 37.3814 20.2405 37.393 20.3204C37.3992 20.3601 37.3974 20.4007 37.3878 20.4397C37.3782 20.4787 37.3609 20.5155 37.337 20.5478C37.3131 20.5801 37.2831 20.6074 37.2486 20.6281C37.2141 20.6488 37.1759 20.6624 37.1361 20.6682C37.0963 20.674 37.0558 20.6719 37.0168 20.662C36.9779 20.652 36.9413 20.6345 36.9091 20.6103C36.877 20.5862 36.85 20.5559 36.8296 20.5213C36.8092 20.4866 36.7959 20.4483 36.7904 20.4085ZM19.6231 37.2824L17.1292 32.8759C17.0791 32.8013 17.0671 32.7934 16.9893 32.8374L16.162 33.3056C16.1275 33.3251 16.1139 33.371 16.1336 33.4058L18.6414 37.8369C18.661 37.8714 18.7069 37.885 18.7416 37.8653L19.5947 37.3826C19.6292 37.3631 19.6428 37.3171 19.6231 37.2824ZM17.2109 33.5882C17.2226 33.6681 17.202 33.7494 17.1538 33.8142C17.1055 33.879 17.0335 33.9219 16.9536 33.9336C16.8737 33.9453 16.7924 33.9247 16.7276 33.8765C16.6628 33.8282 16.6199 33.7562 16.6082 33.6763C16.6021 33.6366 16.6039 33.596 16.6135 33.557C16.6231 33.5179 16.6403 33.4812 16.6642 33.4489C16.6881 33.4165 16.7182 33.3892 16.7527 33.3686C16.7871 33.3479 16.8254 33.3343 16.8651 33.3285C16.9049 33.3227 16.9455 33.3248 16.9844 33.3347C17.0234 33.3446 17.06 33.3622 17.0921 33.3863C17.1243 33.4105 17.1513 33.4408 17.1717 33.4754C17.1921 33.51 17.2054 33.5484 17.2109 33.5882ZM35.8292 31.5137C36.378 31.9245 36.2536 31.8792 36.9381 31.9173C37.201 31.9319 37.4145 32.111 37.4746 32.3674C37.6309 33.0349 37.5647 32.9202 38.0646 33.3894C38.2566 33.5696 38.305 33.8442 38.1862 34.0791C37.8769 34.691 37.9 34.5605 37.9813 35.2413C38.0125 35.5027 37.8732 35.7441 37.6311 35.8478C37.0009 36.1177 37.1024 36.0326 36.7271 36.6063C36.583 36.8267 36.3211 36.922 36.069 36.8458C35.4128 36.6475 35.5452 36.6475 34.889 36.8458C34.6369 36.922 34.375 36.8267 34.2309 36.6063C33.8556 36.0326 33.9571 36.1177 33.3269 35.8478C33.0848 35.7441 32.9455 35.5027 32.9767 35.2413C33.058 34.5605 33.0811 34.691 32.7718 34.0791C32.653 33.8442 32.7014 33.5696 32.8934 33.3894C33.3933 32.9202 33.327 33.0349 33.4834 32.3674C33.5434 32.1111 33.757 31.9319 34.0199 31.9173C34.7043 31.8792 34.5799 31.9245 35.1288 31.5137C35.3396 31.3558 35.6184 31.3558 35.8292 31.5137ZM35.479 32.6367C34.6524 32.6367 33.9822 33.3068 33.9822 34.1335C33.9822 34.9602 34.6524 35.6303 35.479 35.6303C36.3057 35.6303 36.9759 34.9602 36.9759 34.1335C36.9758 33.3068 36.3057 32.6367 35.479 32.6367ZM34.6578 37.62C34.2384 37.6013 33.8438 37.3845 33.6032 37.0167L33.4315 36.7541L33.04 37.5948C33.036 37.6034 33.0344 37.6129 33.0355 37.6224C33.0365 37.6319 33.0401 37.6409 33.0459 37.6484C33.0517 37.656 33.0594 37.6618 33.0683 37.6652C33.0772 37.6687 33.0868 37.6696 33.0962 37.668L33.8849 37.5302L34.2872 38.2224C34.2919 38.2306 34.2989 38.2374 34.3072 38.2419C34.3156 38.2465 34.325 38.2487 34.3345 38.2483C34.344 38.2478 34.3532 38.2448 34.3611 38.2395C34.369 38.2342 34.3753 38.2269 34.3793 38.2182L34.6578 37.62ZM36.3003 37.62L36.5788 38.2182C36.5828 38.2269 36.5891 38.2342 36.597 38.2395C36.6049 38.2448 36.6141 38.2478 36.6236 38.2483C36.6331 38.2487 36.6425 38.2465 36.6509 38.2419C36.6592 38.2374 36.6662 38.2306 36.6709 38.2224L37.0732 37.5302L37.8619 37.668C37.8713 37.6696 37.8809 37.6687 37.8898 37.6653C37.8987 37.6618 37.9064 37.656 37.9122 37.6484C37.918 37.6409 37.9216 37.6319 37.9226 37.6224C37.9237 37.6129 37.9221 37.6034 37.918 37.5948L37.5266 36.7541L37.3548 37.0167C37.1143 37.3845 36.7196 37.6013 36.3003 37.62ZM18.7488 15.7483C20.4047 15.7483 21.7471 17.0907 21.7471 18.7466C21.7471 20.4024 20.4048 21.7448 18.7488 21.7448C17.093 21.7448 15.7506 20.4024 15.7506 18.7466C15.7506 17.0907 17.093 15.7483 18.7488 15.7483ZM31.9158 16.4606C30.9492 16.2016 29.5697 15.6936 28.5922 15.8314C28.2484 15.8799 27.92 15.9851 27.6128 16.1405C25.7353 16.0363 23.8712 16.4107 22.1841 17.2455C22.0835 17.0156 21.96 16.7963 21.8155 16.5911C24.9534 15.0246 28.7386 14.9761 31.9158 16.4606ZM37.7156 22.482C37.4917 22.6067 37.2406 22.6746 36.9843 22.6799C38.1455 25.3609 38.1675 28.4765 37.045 31.1737C37.2989 31.1995 37.5401 31.2978 37.7396 31.4569C38.9234 28.6091 38.9148 25.3235 37.7156 22.482ZM34.3033 18.1004L35.7055 20.5779L33.5283 21.8384C32.5613 22.3983 32.3201 22.3115 31.3411 21.9576C30.6432 21.7053 29.7561 21.3846 28.8369 21.2153C28.5917 21.1272 28.4248 20.8841 28.495 20.6219C28.575 20.3234 28.8067 20.2483 29.092 20.283C29.519 20.3717 29.9482 20.4943 30.391 20.6208C30.6025 20.6812 30.8173 20.7425 31.0541 20.8059C31.1496 20.8301 31.2507 20.8157 31.3356 20.7658C31.4206 20.716 31.4824 20.6347 31.5079 20.5395C31.5333 20.4444 31.5202 20.3431 31.4715 20.2575C31.4227 20.1719 31.3423 20.109 31.2475 20.0823C31.0345 20.0253 30.8137 19.9622 30.5961 19.9001C30.0067 19.7317 29.4282 19.5795 28.8222 19.4809C28.2598 19.3863 27.7136 19.4743 27.2194 19.7622L24.1792 21.5329C23.8201 21.7421 22.8452 22.2349 22.5223 21.7146C22.3868 21.4962 22.4089 21.0909 22.6384 20.9496C24.4773 19.8174 26.3167 18.6859 28.1556 17.5538C28.5773 17.2942 29.0239 17.2375 29.5009 17.3653L33.503 18.4364C33.5983 18.462 33.6999 18.4487 33.7854 18.3994L34.3033 18.1004ZM19.6979 35.8962L18.2958 33.4188L20.473 32.1582C21.44 31.5984 21.6811 31.6851 22.6601 32.0391C23.3581 32.2914 24.2451 32.6121 25.1643 32.7814C25.4096 32.8695 25.5764 33.1126 25.5062 33.3748C25.4263 33.6732 25.1946 33.7484 24.9093 33.7137C24.2478 33.5763 23.6 33.3657 22.9472 33.1908C22.8995 33.1773 22.8495 33.1735 22.8003 33.1795C22.7511 33.1856 22.7035 33.2013 22.6604 33.2259C22.6173 33.2504 22.5795 33.2833 22.5492 33.3225C22.5189 33.3618 22.4968 33.4067 22.484 33.4546C22.4711 33.5025 22.468 33.5525 22.4747 33.6017C22.4813 33.6508 22.4977 33.6981 22.5228 33.7409C22.5479 33.7837 22.5813 33.821 22.6209 33.8508C22.6606 33.8806 22.7058 33.9022 22.7538 33.9144C23.5598 34.1303 24.3534 34.3815 25.1791 34.5158C25.7415 34.6104 26.2877 34.5223 26.7819 34.2345L29.8221 32.4638C30.1812 32.2546 31.1561 31.7618 31.479 32.2821C31.6145 32.5005 31.5924 32.9058 31.3629 33.047C29.524 34.1793 27.6846 35.3108 25.8457 36.4429C25.424 36.7025 24.9774 36.7592 24.5004 36.6314L20.4983 35.5602C20.403 35.5346 20.3014 35.5479 20.2159 35.5972L19.6979 35.8962ZM32.3391 37.3276C32.455 37.0284 32.635 36.6878 32.7731 36.3911C32.7306 36.3605 32.6899 36.3273 32.6512 36.2919C30.7646 37.4414 28.5917 37.9784 26.3883 37.8562C26.0811 38.0116 25.7528 38.1168 25.409 38.1652C24.4315 38.303 23.0519 37.7951 22.0853 37.5361C25.3265 39.0506 29.1617 38.9733 32.3391 37.3276ZM17.2478 22.1817C15.8452 25.0165 15.7601 28.415 17.0169 31.3167C16.7606 31.322 16.5096 31.39 16.2856 31.5147C14.9769 28.4137 15.0895 24.8256 16.5934 21.8131C16.7986 21.9576 17.0179 22.0811 17.2478 22.1817ZM19.9773 17.6907C19.8057 17.2821 19.4818 17.0429 19.1239 16.9466V16.8493C19.1239 16.7498 19.0844 16.6545 19.0141 16.5841C18.9437 16.5138 18.8483 16.4743 18.7489 16.4743C18.6494 16.4743 18.5541 16.5138 18.4837 16.5841C18.4134 16.6545 18.3739 16.7498 18.3739 16.8493V16.9516C17.8638 17.0932 17.4867 17.5074 17.5135 18.0589C17.5458 18.7249 18.1072 19.009 18.6915 19.1049C18.9243 19.1431 19.3298 19.2235 19.3369 19.526C19.3425 19.7624 18.9673 19.8417 18.7792 19.8462C18.5179 19.8524 18.2196 19.7419 18.1503 19.4637C18.1253 19.3688 18.0639 19.2875 17.9795 19.2373C17.8951 19.1872 17.7944 19.1722 17.6991 19.1956C17.6037 19.2191 17.5214 19.2791 17.4699 19.3626C17.4184 19.4462 17.4018 19.5467 17.4237 19.6424C17.5418 20.1161 17.9107 20.434 18.3738 20.5477V20.6438C18.3738 20.7432 18.4133 20.8386 18.4836 20.9089C18.554 20.9793 18.6493 21.0188 18.7488 21.0188C18.8483 21.0188 18.9436 20.9793 19.014 20.9089C19.0843 20.8386 19.1238 20.7432 19.1238 20.6438V20.5554C19.647 20.442 20.0978 20.0886 20.0839 19.5085C20.0666 18.7695 19.453 18.4719 18.8116 18.3666C18.6238 18.3357 18.2722 18.265 18.2605 18.0237C18.2503 17.8144 18.4369 17.697 18.6197 17.6602C18.892 17.6054 19.1735 17.7133 19.2858 17.9807C19.3658 18.1716 19.5856 18.2615 19.7765 18.1814C19.9674 18.1013 20.0573 17.8816 19.9773 17.6907ZM27.0006 23.2324C27.9679 23.2324 28.7522 24.0165 28.7522 24.9838C28.7522 25.9512 27.968 26.7354 27.0006 26.7354C26.0333 26.7354 25.2491 25.9512 25.2491 24.9838C25.2491 24.0165 26.0333 23.2324 27.0006 23.2324Z"
                      fill="#F90945"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_356_4185"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_356_4185"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_356_4185"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_356_4185">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(15 15)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">Employee Retention</h6>
                <p className="text-sm font-medium">
                  Engaging onboarding reduces turnover and promotes long-term
                  loyalty.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_356_4201)">
                  <rect
                    x="5"
                    y="5"
                    width="44"
                    height="44"
                    rx="4"
                    fill="white"
                  />
                  <rect
                    x="5.5"
                    y="5.5"
                    width="43"
                    height="43"
                    rx="3.5"
                    stroke="#F90945"
                  />
                  <path
                    d="M35.5328 35.164L35.8452 29.9112C35.8547 29.7525 35.8317 29.5935 35.7775 29.444C35.7233 29.2945 35.6392 29.1577 35.5302 29.0419C35.4212 28.9261 35.2897 28.8339 35.1437 28.7708C34.9978 28.7077 34.8405 28.6751 34.6815 28.675H19.3124C18.6422 28.675 18.1079 29.241 18.1486 29.9112L18.4611 35.164H35.5328ZM26.9969 30.6222C27.7124 30.6222 28.292 31.2018 28.292 31.9218C28.292 32.0919 28.2585 32.2603 28.1934 32.4174C28.1284 32.5745 28.033 32.7173 27.9127 32.8375C27.7924 32.9578 27.6497 33.0532 27.4925 33.1183C27.3354 33.1834 27.167 33.2169 26.9969 33.2169C26.8269 33.2169 26.6585 33.1834 26.5013 33.1183C26.3442 33.0532 26.2014 32.9578 26.0812 32.8375C25.9609 32.7173 25.8655 32.5745 25.8004 32.4174C25.7353 32.2603 25.7018 32.0919 25.7018 31.9218C25.7018 31.2018 26.2815 30.6222 26.9969 30.6222ZM21.6807 24.1422H22.9622C23.3213 25.0705 23.939 26.0196 24.7237 26.678H23.1615C22.2422 26.678 21.3818 27.0901 20.8022 27.7693H33.1962C32.9047 27.4283 32.543 27.1543 32.1358 26.9659C31.7286 26.7776 31.2856 26.6794 30.8369 26.678H29.2747C30.0581 26.0169 30.6694 25.0795 31.0362 24.1422H32.3177C32.5979 24.1422 32.8668 24.0311 33.0654 23.8334C33.2639 23.6357 33.3761 23.3673 33.3773 23.0871V22.1135C33.3773 21.7557 33.1962 21.4388 32.9245 21.2486C32.6347 18.2282 30.0807 15.8961 26.9969 15.8961C23.9177 15.8961 21.3637 18.2282 21.0739 21.2486C20.8022 21.4388 20.6211 21.7557 20.6211 22.1135V23.0871C20.6223 23.3673 20.7345 23.6357 20.933 23.8334C21.1316 24.0311 21.4005 24.1422 21.6807 24.1422ZM30.289 23.5489C29.7864 25.0569 28.5411 26.678 27.0015 26.678C25.9903 26.678 25.1123 25.9852 24.4837 25.0863C24.7917 25.1348 25.1621 25.1791 25.6203 25.2063C25.8558 25.6501 26.3856 25.958 26.9969 25.958C27.8301 25.958 28.5049 25.3874 28.5049 24.6856C28.5049 23.9791 27.8301 23.4086 26.9969 23.4086C26.3267 23.4086 25.7562 23.7799 25.5615 24.2961C24.6567 24.2345 24.131 24.1041 23.896 24.0312C23.4531 23.0083 23.2733 21.9016 23.5871 20.832C23.9449 20.7188 24.8415 20.5376 25.969 21.0267C26.2724 21.158 26.5849 21.2123 26.9018 21.2123C28.1335 21.2123 29.3834 20.3791 29.9992 19.8946C30.6784 21.0131 30.7056 22.2946 30.289 23.5489ZM26.9969 16.8018C29.5147 16.8018 31.6249 18.6357 31.9917 21.0539H31.3894C30.9954 18.8712 29.1705 17.2727 27.0015 17.2727C25.0769 17.2727 23.4332 18.5271 22.8037 20.3203C22.7177 20.5557 22.6498 20.8003 22.6045 21.0539H22.0067C22.3735 18.6357 24.4792 16.8018 26.9969 16.8018ZM35.9698 36.0706H18.0241C17.8909 36.0704 17.7589 36.0965 17.6357 36.1475C17.5126 36.1984 17.4007 36.2731 17.3065 36.3673C17.2122 36.4615 17.1375 36.5734 17.0866 36.6966C17.0357 36.8197 17.0096 36.9517 17.0098 37.0849C17.0098 37.6465 17.4626 38.1038 18.0241 38.1038H35.9698C36.5313 38.1038 36.9886 37.6465 36.9886 37.0849C36.9886 36.5234 36.5313 36.0706 35.9698 36.0706Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_356_4201"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_356_4201"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_356_4201"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">Ongoing Support</h6>
                <p className="text-sm font-medium">
                  Continued assistance ensures success beyond the onboarding
                  phase.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WhyChooseUs;
