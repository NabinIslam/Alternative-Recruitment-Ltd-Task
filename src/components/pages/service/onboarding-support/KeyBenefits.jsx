import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const KeyBenefits = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container flex flex-col justify-between gap-[100px] lg:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-6 lg:basis-1/2">
          <div className="flex items-center">
            <span className="rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
              Key Benefits
            </span>
          </div>
          <h2 className="text-left text-4xl font-semibold lg:text-5xl">
            Key Benefits of Our Onboarding Support
          </h2>
          <p className="text-left text-sm font-medium">
            Our onboarding support streamlines the integration process,
            enhancing employee engagement, reducing time-to-productivity,
            providing tailored training, and fostering a positive work
            environment that promotes long-term retention and satisfaction.
          </p>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_356_4358)">
                  <rect
                    x="5"
                    y="5"
                    width="42"
                    height="42"
                    rx="4"
                    fill="#FBFBFB"
                    shape-rendering="crispEdges"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.1234 30.2089V35.0274H29.1889C29.3814 34.4983 29.889 34.12 30.4843 34.12C31.2448 34.12 31.8623 34.7375 31.8623 35.4979C31.8623 36.2585 31.2448 36.8759 30.4843 36.8759C29.889 36.8759 29.3814 36.4977 29.1889 35.9685H26.6528C26.528 35.9685 26.4083 35.919 26.32 35.8307C26.2318 35.7424 26.1822 35.6228 26.1822 35.4979V30.2089H23.3337V36.0519C23.8628 36.2444 24.241 36.7521 24.241 37.3474C24.241 38.1079 23.6236 38.7254 22.8631 38.7254C22.1026 38.7254 21.4851 38.1079 21.4851 37.3474C21.4851 36.7521 21.8634 36.2444 22.3925 36.0519V30.2089H19.544V35.4979C19.544 35.6228 19.4944 35.7424 19.4061 35.8307C19.3179 35.919 19.1982 35.9685 19.0734 35.9685H16.5373C16.3448 36.4977 15.8372 36.8759 15.2419 36.8759C14.4814 36.8759 13.8639 36.2585 13.8639 35.4979C13.8639 34.7375 14.4814 34.12 15.2419 34.12C15.8372 34.12 16.3448 34.4983 16.5373 35.0274H18.6028V30.2089H15.9835C14.0867 30.2089 12.5352 28.6573 12.5352 26.7618C12.5352 25.3236 13.428 24.0843 14.6856 23.5684C14.6797 23.4627 14.6769 23.357 14.6771 23.2512C14.6771 20.2078 17.1435 17.7402 20.1869 17.7402C21.675 17.7402 23.0266 18.3306 24.0182 19.2906C24.5568 19.0979 25.1246 18.9996 25.6966 19.0002C28.2619 19.0002 30.3721 20.9409 30.6417 23.4342C32.1383 23.8404 33.191 25.2089 33.191 26.7618C33.191 28.6573 31.6395 30.2089 29.7427 30.2089H27.1234ZM34.0114 25.7431C33.6903 24.4088 32.7522 23.2841 31.4812 22.7335C30.9106 20.0624 28.5386 18.0591 25.6966 18.0591C25.1968 18.0591 24.7117 18.1212 24.2483 18.2379C23.409 17.5569 22.3952 17.0826 21.2849 16.8922C22.0569 14.7812 24.0827 13.2744 26.4609 13.2744C27.949 13.2744 29.3006 13.8648 30.2922 14.8248C30.8308 14.6321 31.3987 14.5339 31.9707 14.5345C34.5359 14.5345 36.6461 16.4752 36.9157 18.9684C38.4123 19.3746 39.465 20.7432 39.465 22.2959C39.465 24.1915 37.9135 25.7431 36.0167 25.7431H34.0114ZM31.9889 17.9969H30.9593C30.6996 17.9969 30.4887 18.2078 30.4887 18.4675C30.4887 18.7272 30.6996 18.9381 30.9593 18.9381H31.9889V19.9678C31.9889 20.2275 32.1998 20.4384 32.4595 20.4384C32.7193 20.4384 32.9301 20.2275 32.9301 19.9678V18.9381H33.9598C34.2195 18.9381 34.4304 18.7272 34.4304 18.4675C34.4304 18.2078 34.2195 17.9969 33.9598 17.9969H32.9301V16.9672C32.9301 16.7075 32.7193 16.4966 32.4595 16.4966C32.1998 16.4966 31.9889 16.7075 31.9889 16.9672V17.9969Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_356_4358"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
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
                      result="effect1_dropShadow_356_4358"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_356_4358"
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
                  Smooth onboarding process enhances new hire adjustment and
                  overall workplace experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_356_4376)">
                  <rect
                    x="5"
                    y="5"
                    width="42"
                    height="42"
                    rx="4"
                    fill="#FBFBFB"
                    shape-rendering="crispEdges"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M32.3725 28.7873C31.8795 28.9035 31.4086 29.0986 30.9779 29.365C30.9107 29.4068 30.8313 29.4246 30.7526 29.4154C30.674 29.4063 30.6008 29.3707 30.5449 29.3146L29.8559 28.625L28.7127 29.7687L29.4018 30.4584C29.4577 30.5144 29.4932 30.5877 29.5023 30.6664C29.5115 30.7451 29.4938 30.8246 29.4521 30.892C29.1855 31.3221 28.9901 31.7924 28.8732 32.2847C28.8375 32.4435 28.6963 32.556 28.5311 32.556H27.5572V34.1738H28.5311C28.6963 34.1738 28.8375 34.2857 28.8732 34.4451C28.9904 34.9379 29.1844 35.4066 29.4521 35.8379C29.4938 35.9052 29.5115 35.9847 29.5024 36.0634C29.4932 36.1421 29.4578 36.2154 29.4018 36.2715L28.7127 36.9611L29.8559 38.1049L30.5449 37.4158C30.6008 37.3597 30.674 37.3241 30.7526 37.315C30.8313 37.3058 30.9107 37.3236 30.9779 37.3654C31.4086 37.6318 31.8795 37.8269 32.3725 37.9431C32.5301 37.98 32.6426 38.1218 32.6426 38.2853V39.2597H34.2598V38.2853C34.2598 38.1218 34.3723 37.98 34.5322 37.9431C35.025 37.8271 35.4938 37.6326 35.9244 37.3654C35.9916 37.3235 36.0711 37.3056 36.1497 37.3148C36.2284 37.3239 36.3017 37.3595 36.3574 37.4158L37.0465 38.1049L38.1926 36.9611L37.5012 36.2715C37.4452 36.2154 37.4097 36.1421 37.4006 36.0634C37.3914 35.9847 37.4091 35.9052 37.4508 35.8379C37.7175 35.4078 37.913 34.9375 38.0297 34.4451C38.0654 34.2863 38.209 34.1738 38.3719 34.1738H39.3457V32.5566H38.3719C38.209 32.5566 38.0654 32.4447 38.0297 32.2853C37.9125 31.7925 37.7186 31.3238 37.4508 30.8925C37.3646 30.7537 37.3863 30.5738 37.5012 30.4584L38.1926 29.7687L37.0465 28.625L36.3574 29.3146C36.3016 29.3707 36.2284 29.4063 36.1497 29.4154C36.0711 29.4246 35.9917 29.4068 35.9244 29.365C35.4945 29.0988 35.0243 28.9037 34.5322 28.7873C34.4547 28.7696 34.3855 28.7261 34.336 28.6639C34.2865 28.6018 34.2596 28.5246 34.2598 28.4451V27.4707H32.6426V28.4457C32.6432 28.6086 32.5307 28.7504 32.3725 28.7873ZM13.6928 18.9711C14.2477 18.8709 14.9654 18.7261 15.1805 18.5849C15.3457 18.4765 15.4723 18.3207 15.525 18.1566C15.5514 18.0763 15.5824 17.9222 15.4963 17.791C15.4102 17.6597 15.2572 17.6263 15.1734 17.6181C15.1518 17.6164 15.1301 17.6152 15.109 17.6152C14.9561 17.6152 14.7885 17.6674 14.6426 17.7623C14.4275 17.9047 14.0086 18.5035 13.6928 18.9711ZM18.8836 18.7748C18.324 19.0695 17.7568 19.3168 17.1996 19.5049L17.0273 20.9152L18.6803 19.5213L18.8836 18.7748ZM14.6092 15.5445C15.0041 15.1103 15.4582 14.689 15.9533 14.2935L15.1857 14.1828L13.248 15.1373L14.6092 15.5445ZM17.7879 18.5258C17.5342 18.6353 17.2811 18.7349 17.025 18.8228L15.1641 15.9781C15.3457 15.7789 15.5396 15.5855 15.743 15.398L17.7879 18.5258ZM19.9365 15.1765C19.9365 14.9328 19.7379 14.7347 19.4941 14.7347C19.2504 14.7347 19.0518 14.9328 19.0518 15.1765C19.0518 15.4203 19.2504 15.6183 19.4941 15.6183C19.7379 15.6189 19.9365 15.4203 19.9365 15.1765ZM21.8379 15.6722L19.9793 12.8299C18.7283 13.2588 17.4053 14.0011 16.2762 14.931L18.4313 18.224C19.7355 17.5607 20.9455 16.6466 21.8379 15.6722ZM20.6396 15.1765C20.6396 15.8076 20.1252 16.3215 19.4936 16.3215C18.8619 16.3215 18.3475 15.8076 18.3475 15.1765C18.3475 14.5449 18.8619 14.031 19.4936 14.031C20.1252 14.031 20.6396 14.5449 20.6396 15.1765ZM20.6824 12.6207C21.4289 12.4332 22.1297 12.3728 22.7227 12.4707L23.4094 12.6154L23.2658 13.3009C23.1176 13.884 22.7824 14.5027 22.3113 15.1115L20.6824 12.6207ZM16.8053 25.1738C16.7648 25.189 16.7238 25.1961 16.6834 25.1961C16.5398 25.1961 16.4057 25.1088 16.3535 24.9681C16.2844 24.7865 16.3775 24.5838 16.5592 24.5152C20.7838 22.9291 25.7062 20.6797 30.4119 16.0226L29.2494 16.0203C29.0555 16.0197 28.9002 15.8621 28.9002 15.6681C28.9002 15.4742 29.0578 15.3172 29.2518 15.3172L31.2539 15.3213C31.3471 15.3213 31.4355 15.3588 31.5029 15.425C31.5676 15.4917 31.6035 15.5811 31.6031 15.674L31.5984 17.675C31.5986 17.7212 31.5896 17.7669 31.572 17.8096C31.5544 17.8523 31.5285 17.8911 31.4958 17.9237C31.4631 17.9563 31.4243 17.9822 31.3815 17.9997C31.3388 18.0173 31.2931 18.0262 31.2469 18.0259C31.0529 18.0259 30.8953 17.8677 30.8953 17.6738L30.8977 16.5312C26.1029 21.2744 21.099 23.5619 16.8053 25.1738ZM18.1184 33.0136V28.1427H15.9316V33.0136H18.1184ZM23.1129 33.0136V26.5771H20.9244V33.0136H23.1129ZM28.1051 29.3802L27.9662 29.5203C27.9332 29.5528 27.907 29.5915 27.8892 29.6342C27.8713 29.6769 27.8621 29.7227 27.8621 29.769C27.8621 29.8153 27.8713 29.8611 27.8892 29.9038C27.907 29.9465 27.9332 29.9853 27.9662 30.0177L28.7127 30.7642C28.5219 31.1094 28.3702 31.4747 28.2604 31.8535H27.2057C27.0117 31.8535 26.8541 32.0111 26.8541 32.205V33.0136H25.9189V24.459H28.1051V29.3802ZM30.9135 28.5927V22.3291H33.0996V26.7675H32.291C32.0971 26.7675 31.9395 26.9252 31.9395 27.1191V28.1744C31.5839 28.278 31.2401 28.4182 30.9135 28.5927ZM30.007 33.3652C30.007 31.465 31.5521 29.9193 33.4518 29.9193C35.3508 29.9193 36.8988 31.465 36.8988 33.3652C36.8988 35.2654 35.3514 36.8111 33.4518 36.8111C31.5521 36.8111 30.007 35.2654 30.007 33.3652Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_356_4376"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
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
                      result="effect1_dropShadow_356_4376"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_356_4376"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">
                  Boosted Productivity
                </h6>
                <p className="text-sm font-medium">
                  ailored training ensures employees are productive from day
                  one, maximizing efficiency.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_356_4369)">
                  <rect
                    x="5"
                    y="5"
                    width="42"
                    height="42"
                    rx="4"
                    fill="#FBFBFB"
                    shape-rendering="crispEdges"
                  />
                  <g clip-path="url(#clip0_356_4369)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.9226 11.4688C26.2996 11.4688 28.2266 13.3957 28.2266 15.7728C28.2266 18.1498 26.2996 20.0768 23.9226 20.0768C21.5455 20.0768 19.6186 18.1498 19.6186 15.7728C19.6186 13.3957 21.5455 11.4688 23.9226 11.4688ZM12.0547 20.611H15.3061C15.6288 20.611 15.892 20.8742 15.892 21.197V39.9452C15.892 40.2679 15.6288 40.5311 15.3061 40.5311H12.0547C11.732 40.5311 11.4688 40.2679 11.4688 39.9452V21.197C11.4688 20.8742 11.732 20.611 12.0547 20.611ZM20.2677 28.2567H23.5191C23.8418 28.2567 24.1051 28.5199 24.105 28.8427V39.9453C24.105 40.268 23.8418 40.5312 23.5191 40.5312H20.2677C19.945 40.5312 19.6818 40.268 19.6818 39.9453V28.8427C19.6817 28.5199 19.945 28.2567 20.2677 28.2567ZM28.4809 26.4131H31.7322C32.0549 26.4131 32.3181 26.6763 32.3181 26.9991V39.9453C32.3181 40.268 32.0549 40.5312 31.7322 40.5312H28.4809C28.1581 40.5312 27.8949 40.268 27.8949 39.9453V26.9991C27.895 26.6763 28.1582 26.4131 28.4809 26.4131ZM36.694 31.8896H39.9453C40.268 31.8896 40.5312 32.1528 40.5312 32.4755V39.9453C40.5312 40.268 40.268 40.5312 39.9453 40.5312H36.694C36.3713 40.5312 36.1081 40.268 36.1081 39.9453V32.4754C36.1081 32.1528 36.3713 31.8896 36.694 31.8896ZM38.7627 27.1589L37.9609 24.5338C37.9239 24.4166 37.8422 24.3188 37.7335 24.2614C37.6247 24.2041 37.4978 24.192 37.3802 24.2277C37.2626 24.2633 37.1638 24.3439 37.1053 24.452C37.0467 24.56 37.0331 24.6868 37.0674 24.8048L37.4421 26.0316L30.3941 20.5436C30.3341 20.4966 30.2635 20.4651 30.1886 20.4518C30.1136 20.4384 30.0364 20.4436 29.9639 20.4669L29.9639 20.4666L22.0229 23.0404L14.0118 14.9609C13.9686 14.9174 13.9171 14.8828 13.8605 14.8591C13.8038 14.8355 13.7431 14.8232 13.6817 14.8231C13.6203 14.8229 13.5595 14.8348 13.5027 14.8581C13.446 14.8815 13.3944 14.9158 13.3508 14.9591C13.3073 15.0023 13.2727 15.0538 13.2491 15.1104C13.2254 15.1671 13.2132 15.2278 13.213 15.2892C13.2128 15.3506 13.2248 15.4114 13.2481 15.4682C13.2714 15.5249 13.3057 15.5765 13.349 15.6201L21.562 23.9032C21.6227 23.9643 21.6992 24.0074 21.7829 24.0277C21.8666 24.0481 21.9542 24.0449 22.0363 24.0186L30.0154 21.4325L36.7783 26.6985L35.8768 26.6169C35.8157 26.6114 35.7541 26.6179 35.6956 26.6362C35.6371 26.6545 35.5827 26.6841 35.5356 26.7234C35.4885 26.7626 35.4496 26.8108 35.4211 26.8651C35.3926 26.9195 35.3751 26.9788 35.3696 27.0399C35.3641 27.101 35.3706 27.1626 35.3889 27.2211C35.4071 27.2797 35.4368 27.334 35.476 27.3811C35.5153 27.4282 35.5635 27.4671 35.6178 27.4956C35.6721 27.5241 35.7315 27.5416 35.7926 27.5471L38.2691 27.7712C38.3482 27.7798 38.4281 27.7682 38.5015 27.7372C38.5748 27.7063 38.6389 27.6571 38.6879 27.5944C38.7538 27.5103 38.7887 27.4061 38.7868 27.2993V27.2986C38.7858 27.2511 38.7777 27.204 38.7627 27.1589ZM25.6218 14.284C25.3804 13.709 24.9207 13.3768 24.4153 13.2487C24.4073 13.2466 24.3993 13.2447 24.3913 13.2428V13.0491C24.3913 12.9248 24.3419 12.8056 24.254 12.7177C24.1661 12.6298 24.0469 12.5804 23.9226 12.5804C23.7982 12.5804 23.679 12.6298 23.5911 12.7177C23.5032 12.8056 23.4538 12.9248 23.4538 13.0491V13.2494C23.1955 13.3136 22.9541 13.4294 22.7553 13.591C22.4117 13.8703 22.1938 14.2762 22.2184 14.7823C22.2432 15.2935 22.4977 15.636 22.8519 15.8672C23.1518 16.063 23.5163 16.1636 23.8514 16.2187C24.0996 16.2594 24.3635 16.3231 24.56 16.4418C24.7019 16.5274 24.8083 16.6513 24.8306 16.8352C24.834 16.8635 24.8359 16.8818 24.836 16.8901C24.8393 17.0279 24.7719 17.134 24.6708 17.2108C24.5282 17.319 24.3234 17.3833 24.1167 17.4084C24.0673 17.4148 24.0175 17.4189 23.9677 17.4206C23.7244 17.4264 23.4853 17.3675 23.2998 17.2439C23.1537 17.1467 23.0422 17.0048 22.9958 16.8188C22.9646 16.7001 22.8879 16.5985 22.7824 16.5358C22.6769 16.4731 22.551 16.4544 22.4319 16.4837C22.3127 16.513 22.2098 16.588 22.1454 16.6924C22.081 16.7969 22.0603 16.9225 22.0876 17.0421C22.1956 17.4751 22.4506 17.8023 22.7834 18.0239C22.9839 18.1575 23.213 18.2506 23.4538 18.3034V18.4962C23.4538 18.6206 23.5031 18.7398 23.591 18.8277C23.679 18.9156 23.7982 18.965 23.9225 18.965C24.0468 18.965 24.166 18.9156 24.254 18.8277C24.3419 18.7398 24.3913 18.6206 24.3913 18.4962V18.3127C24.6918 18.255 24.9924 18.1379 25.2347 17.9541C25.5629 17.705 25.7813 17.3479 25.7698 16.868C25.7691 16.8203 25.766 16.7727 25.7608 16.7253C25.6974 16.2037 25.4162 15.8647 25.0433 15.6397C24.7251 15.4476 24.3472 15.3525 24.0014 15.2957C23.7723 15.2581 23.5323 15.1954 23.3609 15.0835C23.2438 15.0071 23.1598 14.8974 23.1522 14.7383C23.1435 14.5602 23.2217 14.4161 23.3448 14.3161C23.4475 14.2326 23.5796 14.1743 23.7235 14.1454C23.8773 14.1146 24.036 14.1185 24.1881 14.1568C24.4263 14.2171 24.6431 14.3743 24.7575 14.6465C24.7813 14.7032 24.816 14.7547 24.8597 14.798C24.9034 14.8414 24.9553 14.8757 25.0122 14.8989C25.0692 14.9222 25.1302 14.9341 25.1917 14.9338C25.2532 14.9335 25.3141 14.9211 25.3709 14.8973C25.4276 14.8735 25.4792 14.8388 25.5225 14.7951C25.5658 14.7514 25.6001 14.6996 25.6234 14.6426C25.6467 14.5857 25.6586 14.5247 25.6583 14.4632C25.658 14.4016 25.6456 14.3407 25.6218 14.284Z"
                      fill="#F90945"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_356_4369"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
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
                      result="effect1_dropShadow_356_4369"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_356_4369"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_356_4369">
                    <rect
                      width="30"
                      height="30"
                      fill="white"
                      transform="translate(11 11)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">Lower Turnover</h6>
                <p className="text-sm font-medium">
                  Engaging onboarding reduces early turnover, fostering
                  long-term employee retention and satisfaction.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_356_4387)">
                  <rect
                    x="5"
                    y="5"
                    width="42"
                    height="42"
                    rx="4"
                    fill="#FBFBFB"
                    shape-rendering="crispEdges"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2614 33.6415C15.3943 32.5432 16.6072 31.8429 17.6248 32.277C17.6464 32.2861 17.6587 32.3076 17.6559 32.3308C17.523 33.4291 16.3101 34.1294 15.2924 33.6953C15.2821 33.691 15.2734 33.6834 15.2678 33.6737C15.2622 33.6639 15.2599 33.6526 15.2614 33.6415ZM30.4799 33.7698C31.7815 32.8415 32.7712 31.5283 33.2969 30.0152C33.3122 29.9709 33.2649 29.9305 33.2236 29.9527C32.5954 30.2896 31.9345 30.5748 31.2473 30.8118C31.2011 30.8278 31.1605 30.7758 31.1871 30.7349L31.8164 29.7657L31.8152 29.7677C32.4343 29.507 33.033 29.1982 33.5846 28.8481C33.5907 28.8443 33.596 28.8393 33.6 28.8333C33.604 28.8273 33.6067 28.8205 33.6078 28.8134C33.9065 27.0968 33.6187 25.352 32.8218 23.8544C32.8181 23.8475 32.8129 23.8415 32.8066 23.8368C32.8002 23.8322 32.7929 23.8291 32.7852 23.8278C32.7775 23.8264 32.7695 23.8268 32.762 23.829C32.7544 23.8311 32.7475 23.835 32.7416 23.8403C31.9838 24.5205 31.0975 25.0869 30.118 25.5079C30.1072 25.5124 30.0984 25.5204 30.0928 25.5306C30.0873 25.5409 30.0854 25.5527 30.0874 25.5641C30.232 26.4074 30.2572 27.0224 30.2421 27.8612C30.2421 27.8723 30.2383 27.8831 30.2314 27.8918C30.0056 28.1856 29.7592 28.4631 29.4941 28.722C29.4596 28.7558 29.4013 28.7273 29.4067 28.6792C29.5122 27.748 29.4932 26.7885 29.351 25.8648C29.3499 25.8573 29.3471 25.8502 29.343 25.844C29.3389 25.8377 29.3334 25.8324 29.327 25.8285C29.3206 25.8246 29.3134 25.8221 29.3059 25.8212C29.2985 25.8204 29.2909 25.8212 29.2838 25.8236C28.3897 26.1176 27.4332 26.2951 26.4376 26.3355C26.4242 26.3361 26.4116 26.3418 26.4024 26.3514C26.3931 26.361 26.388 26.3738 26.388 26.3872V30.833C26.388 30.8627 26.4125 30.886 26.4422 30.8846L27.1842 30.8482C27.1912 30.8479 27.1982 30.8489 27.2048 30.8514C27.2113 30.8538 27.2173 30.8576 27.2224 30.8624C27.2275 30.8672 27.2315 30.873 27.2343 30.8795C27.237 30.8859 27.2384 30.8928 27.2384 30.8999V31.5715C27.2384 31.5848 27.2333 31.5975 27.2241 31.6072C27.215 31.6168 27.2024 31.6225 27.1892 31.6231L26.4371 31.6593C26.4239 31.66 26.4114 31.6657 26.4022 31.6753C26.3931 31.6849 26.3879 31.6977 26.3879 31.7109V35.1363C26.3879 35.1661 26.4127 35.1895 26.4424 35.1879C26.689 35.1745 26.9348 35.149 27.1789 35.1116C27.1863 35.1104 27.1938 35.1109 27.201 35.1129C27.2081 35.1149 27.2148 35.1185 27.2204 35.1234C27.2261 35.1282 27.2306 35.1342 27.2337 35.141C27.2368 35.1478 27.2384 35.1552 27.2384 35.1626V36.7153C27.2385 36.7685 27.2596 36.8195 27.2972 36.857C27.3348 36.8946 27.3858 36.9158 27.4389 36.9159H27.8132C27.8663 36.9158 27.9173 36.8946 27.9549 36.857C27.9925 36.8195 28.0136 36.7685 28.0137 36.7153V30.5113L27.9883 30.3725L27.3887 28.3463C27.3645 28.2654 27.3724 28.1784 27.4106 28.1031C27.5321 27.8652 27.843 27.9121 27.9214 28.1462L28.7776 29.657C28.8559 29.91 29.1574 30.0083 29.3696 29.8592C30.7743 28.8725 31.4453 27.7254 32.118 26.1833C32.1761 26.05 32.4339 26.3474 32.2999 26.8209C31.82 28.516 30.7583 30.0867 29.7016 31.4671C29.5082 31.7197 29.39 32.0201 29.4425 32.3499L30.1418 36.7467C30.1491 36.7939 30.1731 36.837 30.2094 36.868C30.2458 36.899 30.2921 36.9159 30.3398 36.9157H30.7162C30.7453 36.9158 30.774 36.9096 30.8004 36.8975C30.8268 36.8854 30.8502 36.8677 30.8691 36.8456C30.8879 36.8235 30.9017 36.7976 30.9095 36.7696C30.9173 36.7417 30.919 36.7123 30.9143 36.6837L30.4588 33.8199C30.4572 33.8104 30.4583 33.8007 30.4621 33.7918C30.4658 33.7829 30.472 33.7753 30.4799 33.7698ZM24.8218 35.1114C25.0659 35.1488 25.3094 35.1742 25.5583 35.1877C25.5653 35.1882 25.5723 35.1871 25.5789 35.1847C25.5855 35.1823 25.5916 35.1786 25.5967 35.1737C25.6018 35.1689 25.6058 35.1631 25.6086 35.1566C25.6114 35.1501 25.6128 35.1432 25.6127 35.1362V31.7108C25.6128 31.6975 25.6077 31.6848 25.5985 31.6751C25.5893 31.6655 25.5768 31.6598 25.5635 31.6592L24.8115 31.623C24.7982 31.6223 24.7857 31.6166 24.7766 31.607C24.7674 31.5974 24.7623 31.5846 24.7623 31.5714V30.8997C24.7623 30.87 24.7868 30.8467 24.8165 30.8481L25.5585 30.8844C25.5655 30.8848 25.5725 30.8837 25.5791 30.8813C25.5856 30.8789 25.5916 30.8751 25.5967 30.8703C25.6018 30.8655 25.6058 30.8597 25.6086 30.8532C25.6113 30.8468 25.6127 30.8398 25.6127 30.8328V26.387C25.6127 26.3737 25.6075 26.3608 25.5983 26.3512C25.5891 26.3416 25.5765 26.3359 25.5631 26.3354C24.5675 26.295 23.611 26.1174 22.7169 25.8234C22.7098 25.821 22.7022 25.8202 22.6948 25.8211C22.6873 25.8219 22.6801 25.8244 22.6737 25.8283C22.6673 25.8323 22.6618 25.8375 22.6577 25.8438C22.6535 25.8501 22.6508 25.8572 22.6497 25.8646C22.5074 26.7885 22.4884 27.7479 22.594 28.6792C22.5994 28.7272 22.5412 28.7558 22.5065 28.722C22.2394 28.4616 21.9946 28.1838 21.7693 27.8916C21.748 27.864 21.7516 27.533 21.7516 27.4767C21.7516 26.8229 21.8071 26.1835 21.9133 25.5639C21.9153 25.5525 21.9134 25.5407 21.9078 25.5305C21.9023 25.5203 21.8934 25.5122 21.8827 25.5077C20.9032 25.0867 20.0168 24.5203 19.259 23.8401C19.2532 23.8348 19.2463 23.831 19.2387 23.8288C19.2312 23.8266 19.2232 23.8262 19.2155 23.8276C19.2078 23.8289 19.2005 23.832 19.1941 23.8367C19.1878 23.8413 19.1826 23.8473 19.1789 23.8542C18.3821 25.3518 18.0942 27.0966 18.3929 28.8131C18.394 28.8202 18.3967 28.827 18.4007 28.833C18.4047 28.8391 18.41 28.8441 18.4161 28.8479C18.9629 29.195 19.5565 29.5017 20.17 29.7609C20.1801 29.7651 20.1886 29.7725 20.1941 29.7819C20.3896 30.1068 20.5951 30.4234 20.8061 30.7313C20.8342 30.7722 20.7935 30.8256 20.7466 30.8094C20.062 30.5729 19.4031 30.2884 18.7771 29.9526C18.7358 29.9304 18.6885 29.9708 18.7039 30.0151C19.2295 31.5282 20.2193 32.8415 21.5209 33.7698C21.5288 33.7753 21.535 33.7829 21.5388 33.7918C21.5425 33.8007 21.5436 33.8104 21.542 33.8199L21.0865 36.6836C21.0818 36.7123 21.0835 36.7416 21.0913 36.7696C21.0991 36.7975 21.1129 36.8235 21.1317 36.8456C21.1506 36.8676 21.174 36.8853 21.2004 36.8975C21.2268 36.9096 21.2555 36.9158 21.2846 36.9156H21.661C21.7088 36.9159 21.755 36.8989 21.7914 36.8679C21.8277 36.8369 21.8517 36.7938 21.859 36.7466L22.5583 32.3498C22.6108 32.0201 22.4926 31.7197 22.2992 31.4671C21.2425 30.0866 20.1808 28.516 19.7009 26.8208C19.5669 26.3474 19.8247 26.0499 19.8828 26.1833C20.5582 27.7309 21.2382 28.8774 22.646 29.8699C22.8579 30.0193 23.1598 29.9208 23.238 29.6676L24.0766 28.1573C24.1092 28.0986 24.137 28.0237 24.2183 27.9791C24.4461 27.8539 24.6871 28.0927 24.6121 28.3461L24.0125 30.3724L23.9871 30.5112V36.7151C23.9872 36.7683 24.0084 36.8192 24.0459 36.8568C24.0835 36.8944 24.1345 36.9155 24.1876 36.9156H24.5619C24.6151 36.9155 24.666 36.8944 24.7036 36.8568C24.7412 36.8192 24.7623 36.7683 24.7624 36.7151V35.1624C24.7624 35.1549 24.764 35.1476 24.7671 35.1408C24.7702 35.134 24.7747 35.128 24.7803 35.1232C24.786 35.1183 24.7926 35.1148 24.7998 35.1127C24.807 35.1107 24.8145 35.1103 24.8218 35.1114ZM27.2534 19.9509C27.2182 19.9153 27.2494 19.8552 27.2988 19.8636C29.3735 20.2149 31.1849 21.3979 32.3539 23.0865C32.361 23.0967 32.3642 23.1091 32.3629 23.1214C32.3616 23.1338 32.3558 23.1452 32.3467 23.1537C31.6655 23.79 30.8636 24.324 29.9733 24.7266C29.9664 24.7298 29.959 24.7314 29.9514 24.7313C29.9438 24.7312 29.9364 24.7295 29.9296 24.7262C29.9228 24.7229 29.9168 24.7182 29.912 24.7123C29.9072 24.7065 29.9038 24.6996 29.902 24.6923C29.4431 22.8967 28.536 21.2464 27.2534 19.9509ZM26.3881 20.311C26.3881 20.3009 26.391 20.291 26.3965 20.2826C26.4021 20.2742 26.4099 20.2675 26.4192 20.2635C26.4285 20.2595 26.4387 20.2583 26.4486 20.26C26.4586 20.2618 26.4678 20.2664 26.4751 20.2733C27.8068 21.5249 28.7372 23.1839 29.1781 24.9931C29.1812 25.0056 29.1795 25.0189 29.1733 25.0302C29.1671 25.0415 29.1568 25.0501 29.1446 25.0542C28.3 25.3423 27.3913 25.5176 26.4419 25.5592C26.435 25.5595 26.428 25.5584 26.4214 25.556C26.4149 25.5535 26.4089 25.5498 26.4039 25.5449C26.3988 25.5401 26.3948 25.5343 26.3921 25.5279C26.3894 25.5214 26.388 25.5145 26.388 25.5075V20.311H26.3881ZM25.5256 20.2734C25.533 20.2665 25.5422 20.2618 25.5521 20.2601C25.5621 20.2584 25.5723 20.2596 25.5815 20.2636C25.5908 20.2676 25.5987 20.2742 25.6042 20.2827C25.6098 20.2911 25.6127 20.301 25.6127 20.3111V25.5076C25.6127 25.5146 25.6113 25.5215 25.6086 25.5279C25.6059 25.5344 25.6019 25.5402 25.5968 25.545C25.5918 25.5498 25.5858 25.5536 25.5792 25.556C25.5727 25.5585 25.5657 25.5596 25.5587 25.5593C24.6094 25.5176 23.7007 25.3424 22.8561 25.0543C22.8439 25.0501 22.8337 25.0416 22.8274 25.0302C22.8212 25.0189 22.8195 25.0057 22.8226 24.9931C23.2636 23.1839 24.1939 21.525 25.5256 20.2734ZM24.702 19.8636C24.7514 19.8552 24.7826 19.9153 24.7474 19.9509C23.4649 21.2464 22.5577 22.8968 22.0989 24.6923C22.0971 24.6996 22.0936 24.7065 22.0889 24.7123C22.0841 24.7182 22.0781 24.7229 22.0713 24.7262C22.0645 24.7295 22.057 24.7312 22.0495 24.7313C22.0419 24.7314 22.0344 24.7298 22.0276 24.7266C21.1373 24.324 20.3354 23.79 19.6541 23.1537C19.645 23.1452 19.6393 23.1338 19.638 23.1214C19.6366 23.1091 19.6398 23.0967 19.6469 23.0865C20.8159 21.3979 22.6273 20.2149 24.702 19.8636ZM36.7394 21.3129C36.6065 22.4112 35.3936 23.1115 34.376 22.6774C34.3656 22.6731 34.3569 22.6655 34.3513 22.6557C34.3457 22.646 34.3435 22.6347 34.3449 22.6236C34.4778 21.5252 35.6907 20.8249 36.7084 21.259C36.7298 21.2682 36.7423 21.2896 36.7394 21.3129ZM38.3828 27.5082C37.7173 28.395 36.3193 28.395 35.6537 27.5082C35.6469 27.4993 35.6432 27.4884 35.6432 27.4772C35.6432 27.466 35.6469 27.455 35.6537 27.4461C36.3193 26.5594 37.7173 26.5594 38.3828 27.4461C38.3897 27.455 38.3934 27.466 38.3934 27.4772C38.3934 27.4884 38.3897 27.4993 38.3828 27.5082ZM36.7084 33.6953C35.6908 34.1294 34.4778 33.4291 34.3449 32.3308C34.3434 32.3197 34.3457 32.3083 34.3513 32.2986C34.3569 32.2889 34.3656 32.2813 34.376 32.277C35.3936 31.8429 36.6065 32.5432 36.7394 33.6415C36.7409 33.6526 36.7386 33.6639 36.733 33.6737C36.7274 33.6834 36.7187 33.691 36.7084 33.6953ZM32.2185 16.7692C32.6526 17.7868 31.9523 18.9998 30.854 19.1327C30.8428 19.1342 30.8315 19.1319 30.8218 19.1263C30.8121 19.1207 30.8045 19.112 30.8002 19.1016C30.3661 18.084 31.0664 16.8711 32.1647 16.7382C32.1758 16.7367 32.1871 16.7389 32.1969 16.7446C32.2066 16.7502 32.2142 16.7589 32.2185 16.7692ZM26.0315 15.0948C26.9182 15.7603 26.9182 17.1583 26.0315 17.8239C26.0226 17.8307 26.0117 17.8344 26.0004 17.8344C25.9892 17.8344 25.9783 17.8307 25.9694 17.8239C25.0826 17.1583 25.0826 15.7603 25.9694 15.0948C25.9783 15.0879 25.9892 15.0842 26.0004 15.0842C26.0117 15.0842 26.0226 15.0879 26.0315 15.0948ZM19.8361 16.7382C20.9344 16.8711 21.6347 18.084 21.2006 19.1016C21.1963 19.112 21.1887 19.1207 21.179 19.1263C21.1693 19.1319 21.158 19.1342 21.1468 19.1327C20.0485 18.9998 19.3482 17.7869 19.7823 16.7692C19.7866 16.7589 19.7942 16.7502 19.8039 16.7446C19.8137 16.7389 19.825 16.7367 19.8361 16.7382ZM15.2924 21.259C16.31 20.8249 17.523 21.5253 17.6559 22.6236C17.6574 22.6347 17.6551 22.646 17.6495 22.6558C17.6439 22.6655 17.6352 22.6731 17.6248 22.6774C16.6072 23.1114 15.3943 22.4112 15.2614 21.3129C15.2599 21.3017 15.2622 21.2904 15.2678 21.2807C15.2734 21.271 15.2821 21.2634 15.2924 21.259ZM13.618 27.4461C14.2835 26.5594 15.6815 26.5594 16.3471 27.4461C16.3539 27.455 16.3576 27.466 16.3576 27.4772C16.3576 27.4884 16.3539 27.4993 16.3471 27.5082C15.6815 28.395 14.2835 28.395 13.618 27.5082C13.6111 27.4993 13.6074 27.4884 13.6074 27.4772C13.6074 27.466 13.6111 27.455 13.618 27.4461Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_356_4387"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
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
                      result="effect1_dropShadow_356_4387"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_356_4387"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">Cultural Alignment</h6>
                <p className="text-sm font-medium">
                  Helps new hires embrace company values, promoting strong team
                  cohesion and belonging.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>
            <button className="flex items-center rounded-lg border-2 border-primary py-1 pr-3 text-sm font-medium text-primary">
              <svg
                width="36"
                height="36"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1197_3779)">
                  <circle cx="36" cy="36" r="18" fill="#F90945" />
                  <circle
                    cx="36"
                    cy="36"
                    r="16.5"
                    stroke="#FDFDFD"
                    strokeWidth="3"
                  />
                </g>
                <path
                  d="M43.2012 35.9999L32.4012 42.2353L32.4012 29.7645L43.2012 35.9999Z"
                  fill="#FDFDFD"
                />
                <defs>
                  <filter
                    id="filter0_d_1197_3779"
                    x="0"
                    y="0"
                    width="72"
                    height="72"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1197_3779"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1197_3779"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              Watch Video
            </button>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[330px] w-full basis-full lg:min-h-[584px] lg:basis-1/2">
          <Image
            className="object-contain object-right"
            src="/images/key-benefits-onboarding-support.png"
            fill
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default KeyBenefits;
