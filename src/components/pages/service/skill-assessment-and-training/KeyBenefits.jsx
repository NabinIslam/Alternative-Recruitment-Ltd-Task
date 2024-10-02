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
          <h2 className="text-left text-4xl font-semibold leading-[62px] lg:text-4xl">
            Key Benefits of Our Skill Assessment & Training
          </h2>
          <p className="text-left text-sm font-medium">
            Our background checks provide thorough insights, ensuring informed
            hiring decisions, enhancing workplace safety, minimizing potential
            risks, and protecting your business’s reputation while complying
            with legal and regulatory requirements.
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
                <g filter="url(#filter0_d_350_3582)">
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
                    d="M34.1239 20.7715H37.0052V16.4707C37.0051 16.4264 37.0139 16.3825 37.0308 16.3415C37.0478 16.3006 37.0726 16.2634 37.104 16.232C37.1353 16.2007 37.1725 16.1758 37.2135 16.1589C37.2544 16.1419 37.2983 16.1332 37.3426 16.1332H38.4676L35.564 12.0593L32.6605 16.1329H33.7855C33.8323 16.1327 33.8787 16.1424 33.9216 16.1612C33.9645 16.18 34.0031 16.2076 34.0347 16.2421C34.0663 16.2767 34.0904 16.3175 34.1054 16.3619C34.1204 16.4063 34.1259 16.4533 34.1216 16.5L34.1239 20.7715ZM27.7359 23.9028H30.6171V19.615C30.6171 19.5255 30.6526 19.4397 30.7159 19.3764C30.7792 19.3131 30.8651 19.2775 30.9546 19.2775H32.0796L29.176 15.2038L26.2725 19.2775H27.3975C27.4444 19.2774 27.4908 19.287 27.5337 19.3058C27.5766 19.3246 27.6151 19.3522 27.6468 19.3868C27.6784 19.4213 27.7025 19.4621 27.7175 19.5065C27.7325 19.5509 27.738 19.598 27.7338 19.6446L27.7359 23.9028ZM24.2293 27.2389V22.7595C24.2293 22.67 24.2648 22.5841 24.3281 22.5208C24.3914 22.4575 24.4772 22.422 24.5668 22.422H25.6918L22.7883 18.3481L19.8848 22.422H21.0098C21.0566 22.4218 21.103 22.4315 21.1459 22.4503C21.1888 22.4691 21.2273 22.4967 21.259 22.5312C21.2906 22.5658 21.3147 22.6066 21.3297 22.651C21.3446 22.6954 21.3502 22.7424 21.3459 22.7891L21.3484 27.2389H24.2293Z"
                    fill="#F90945"
                  />
                  <path
                    d="M20.722 29.2033H24.8558V38.0848H20.722V29.2033ZM14.3341 31.7428H18.4678V38.0848H14.3341V31.7428ZM33.4979 22.7358H37.6316V38.0848H33.4979V22.7358ZM27.1099 25.8671H31.2437V38.0848H27.1099V25.8671ZM12.9219 38.7598H39.0795V39.9408H12.9219V38.7598Z"
                    fill="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.9612 29.7785H17.8427V25.904C17.8427 25.8145 17.8783 25.7287 17.9416 25.6654C18.0049 25.6021 18.0907 25.5665 18.1802 25.5665H19.3052L16.4015 21.4927L13.498 25.5666H14.623C14.6699 25.5664 14.7163 25.5761 14.7592 25.5949C14.8021 25.6137 14.8406 25.6412 14.8723 25.6758C14.9039 25.7104 14.928 25.7512 14.943 25.7956C14.958 25.84 14.9635 25.887 14.9593 25.9337L14.9612 29.7785Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_350_3582"
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
                      result="effect1_dropShadow_350_3582"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_350_3582"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">
                  Enhanced Performance
                </h6>
                <p className="text-sm font-medium">
                  Targeted training improves skills, leading to increased
                  productivity and better overall job performance.
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
                <g filter="url(#filter0_d_350_3603)">
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
                    d="M21.782 19.0597C21.7075 19.1305 21.608 19.1688 21.5053 19.1663C21.4026 19.1637 21.3051 19.1205 21.2343 19.046C21.1635 18.9716 21.1252 18.8721 21.1277 18.7694C21.1303 18.6667 21.1736 18.5692 21.248 18.4984L24.8542 15.0631C24.9188 15.0017 25.0026 14.9644 25.0916 14.9576C25.1805 14.9507 25.2691 14.9748 25.3423 15.0257L27.0954 16.2422L31.3521 13.2559L29.9021 12.9466C29.852 12.9363 29.8045 12.9162 29.7623 12.8874C29.7201 12.8587 29.684 12.8219 29.656 12.7791C29.628 12.7363 29.6088 12.6885 29.5994 12.6383C29.59 12.588 29.5906 12.5365 29.6012 12.4865C29.6118 12.4365 29.6322 12.3891 29.6612 12.3471C29.6901 12.305 29.7271 12.269 29.77 12.2413C29.8129 12.2136 29.8609 12.1946 29.9112 12.1855C29.9614 12.1763 30.013 12.1772 30.0629 12.1881L32.3585 12.6781C32.4591 12.6994 32.5471 12.7598 32.6031 12.846C32.6591 12.9322 32.6786 13.0372 32.6573 13.1377L32.1673 15.4333C32.1571 15.4835 32.137 15.5311 32.1083 15.5734C32.0796 15.6158 32.0428 15.652 32 15.6801C31.9572 15.7081 31.9093 15.7274 31.859 15.7369C31.8087 15.7463 31.7571 15.7457 31.707 15.7351C31.657 15.7245 31.6095 15.7041 31.5674 15.6751C31.5252 15.646 31.4893 15.609 31.4616 15.566C31.4338 15.523 31.4149 15.4749 31.4058 15.4245C31.3968 15.3742 31.3978 15.3225 31.4087 15.2726L31.6872 13.9678L27.3341 17.0214C27.2688 17.0722 27.1889 17.1007 27.1062 17.1029C27.0235 17.1051 26.9423 17.0809 26.8744 17.0336L25.1592 15.8426L21.782 19.0597ZM17.1353 12.5121C16.9562 12.3331 16.7207 12.2216 16.4687 12.1968C16.2167 12.1719 15.9639 12.2352 15.7534 12.3759C15.5428 12.5165 15.3875 12.7258 15.314 12.9681C15.2405 13.2104 15.2533 13.4707 15.3502 13.7047C15.447 13.9386 15.622 14.1317 15.8453 14.2511C16.0686 14.3704 16.3264 14.4087 16.5748 14.3593C16.8231 14.3099 17.0466 14.1759 17.2073 13.9802C17.3679 13.7845 17.4557 13.5391 17.4557 13.2859C17.4559 13.1422 17.4277 12.9998 17.3727 12.8671C17.3177 12.7343 17.237 12.6136 17.1353 12.5121ZM15.8108 25.6305C15.8621 25.5795 15.9029 25.5189 15.9307 25.4521C15.9586 25.3853 15.973 25.3137 15.9731 25.2413V22.3984C15.9744 22.2962 16.0158 22.1986 16.0885 22.1268C16.1612 22.055 16.2593 22.0147 16.3615 22.0147C16.4637 22.0147 16.5618 22.055 16.6345 22.1268C16.7072 22.1986 16.7486 22.2962 16.7499 22.3984V25.2413C16.7514 25.3866 16.8101 25.5254 16.9134 25.6276C17.0167 25.7298 17.1561 25.7871 17.3014 25.7871C17.4467 25.7871 17.5861 25.7298 17.6894 25.6276C17.7926 25.5254 17.8514 25.3866 17.8529 25.2413V18.4415C17.8523 18.3901 17.8619 18.3391 17.8811 18.2914C17.9003 18.2437 17.9288 18.2003 17.965 18.1637C18.0011 18.1272 18.0441 18.0981 18.0916 18.0783C18.139 18.0585 18.1899 18.0483 18.2413 18.0483C18.2927 18.0483 18.3436 18.0585 18.391 18.0783C18.4385 18.0981 18.4815 18.1272 18.5176 18.1637C18.5538 18.2003 18.5823 18.2437 18.6015 18.2914C18.6207 18.3391 18.6303 18.3901 18.6297 18.4415V20.6739C18.6308 20.7552 18.6639 20.8328 18.7218 20.8899C18.7797 20.947 18.8577 20.979 18.939 20.979C19.0203 20.979 19.0984 20.947 19.1563 20.8899C19.2142 20.8328 19.2473 20.7552 19.2484 20.6739V17.5103C19.247 17.1424 19.1003 16.79 18.8402 16.5298C18.58 16.2697 18.2276 16.123 17.8597 16.1216H14.8633C14.4954 16.123 14.143 16.2697 13.8828 16.5298C13.6227 16.79 13.476 17.1424 13.4746 17.5103V20.6739C13.4757 20.7552 13.5088 20.8328 13.5667 20.8899C13.6246 20.947 13.7026 20.979 13.784 20.979C13.8653 20.979 13.9433 20.947 14.0012 20.8899C14.0591 20.8328 14.0922 20.7552 14.0933 20.6739V18.4415C14.0933 18.3385 14.1342 18.2397 14.207 18.1669C14.2799 18.094 14.3787 18.0531 14.4817 18.0531C14.5847 18.0531 14.6834 18.094 14.7563 18.1669C14.8291 18.2397 14.87 18.3385 14.87 18.4415V25.2413C14.8703 25.3501 14.9028 25.4565 14.9635 25.5469C15.0241 25.6373 15.1101 25.7078 15.2107 25.7494C15.3113 25.791 15.422 25.8019 15.5287 25.7808C15.6355 25.7596 15.7337 25.7073 15.8108 25.6305ZM23.3325 34.5841C22.0007 34.033 20.8526 33.1154 20.0215 31.9378C19.1903 30.7603 18.7103 29.3711 18.6371 27.9317H13.9707V28.7375C13.9718 28.746 13.9755 28.7539 13.9814 28.7601C13.9873 28.7663 13.9951 28.7704 14.0035 28.7718L15.096 28.7703C15.4187 28.7695 15.7323 28.878 15.9855 29.0782C16.2387 29.2783 16.4167 29.5583 16.4905 29.8725C16.735 30.9054 17.1435 31.8924 17.7004 32.7959C17.8717 33.0697 17.9447 33.3937 17.9073 33.7144C17.87 34.0352 17.7246 34.3337 17.495 34.5609L16.7221 35.3341C16.7169 35.3407 16.714 35.3488 16.714 35.3573C16.714 35.3657 16.7169 35.3739 16.7221 35.3805L18.411 37.0694C18.4176 37.0746 18.4257 37.0775 18.4342 37.0775C18.4426 37.0775 18.4508 37.0746 18.4574 37.0694L19.2302 36.2965C19.4573 36.0669 19.7558 35.9215 20.0766 35.8842C20.3973 35.8468 20.7212 35.9198 20.995 36.091C21.8979 36.6496 22.8853 37.0582 23.9188 37.3011C24.2331 37.3749 24.513 37.5529 24.7132 37.8061C24.9133 38.0593 25.0218 38.3729 25.021 38.6956L25.0195 39.7881C25.0195 39.7881 25.03 39.8209 25.0537 39.8209H27.4422C27.4505 39.8199 27.4582 39.816 27.4642 39.8101C27.4701 39.8042 27.4739 39.7964 27.475 39.7881V38.6953C27.4742 38.3725 27.5827 38.059 27.7828 37.8057C27.983 37.5525 28.263 37.3745 28.5772 37.3008C29.61 37.0558 30.5969 36.6474 31.5007 36.0908C31.7744 35.9196 32.0983 35.8466 32.4191 35.884C32.7398 35.9213 33.0383 36.0668 33.2654 36.2963L34.0381 37.0691C34.0445 37.075 34.0528 37.0782 34.0614 37.0782C34.07 37.0782 34.0783 37.075 34.0846 37.0691L35.7735 35.3802C35.7787 35.3736 35.7815 35.3654 35.7815 35.357C35.7815 35.3486 35.7787 35.3404 35.7735 35.3338L35.0007 34.561C34.7711 34.3339 34.6256 34.0354 34.5883 33.7147C34.5509 33.3939 34.6239 33.07 34.7952 32.7962C35.3518 31.8924 35.7603 30.9053 36.0052 29.8724C36.079 29.5582 36.257 29.2782 36.5102 29.0781C36.7634 28.8779 37.077 28.7694 37.3997 28.7703H38.4919C38.5002 28.7692 38.508 28.7654 38.5139 28.7594C38.5198 28.7535 38.5236 28.7458 38.5247 28.7375V27.9318H33.8584C33.8161 28.8007 33.6233 29.6557 33.2884 30.4586C32.9056 31.3833 32.3445 32.2234 31.637 32.9312C30.9294 33.6389 30.0895 34.2003 29.165 34.5834C28.2404 34.9665 27.2495 35.1637 26.2488 35.1639C25.2481 35.164 24.2571 34.9669 23.3325 34.5841Z"
                    fill="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.6199 34.25V22.4583H24.2852V34.1017C25.3679 34.4231 26.5129 34.474 27.6199 34.2499V34.25ZM33.0725 28.0619V18.5256H29.7379V33.4332C30.6854 32.8728 31.4834 32.0918 32.064 31.1566C32.6446 30.2213 32.9906 29.1597 33.0725 28.0619Z"
                    fill="#F90945"
                  />
                  <path
                    d="M35.1895 14.6943H38.5242V27.155H35.1895V14.6943Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_350_3603"
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
                      result="effect1_dropShadow_350_3603"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_350_3603"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">
                  Tailored Skill Development
                </h6>
                <p className="text-sm font-medium">
                  Customized training programs address your workforce's unique
                  needs, ensuring relevant skill acquisition and growth.
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
                <g filter="url(#filter0_d_350_3590)">
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
                    d="M21.7002 23.9547C21.3965 23.0989 21.2425 22.2004 21.2425 21.2843C21.2425 17.8103 23.4742 14.7855 26.6859 13.7128L25.8597 13.2393C25.8058 13.209 25.7583 13.1683 25.7202 13.1195C25.682 13.0708 25.6539 13.015 25.6374 12.9553C25.6209 12.8956 25.6164 12.8333 25.6242 12.7719C25.6319 12.7105 25.6518 12.6512 25.6826 12.5975C25.7133 12.5438 25.7545 12.4967 25.8035 12.459C25.8526 12.4212 25.9087 12.3936 25.9685 12.3776C26.0283 12.3617 26.0907 12.3577 26.152 12.366C26.2134 12.3743 26.2725 12.3947 26.3259 12.426L28.1758 13.4863C28.2292 13.5169 28.276 13.5577 28.3137 13.6064C28.3513 13.6551 28.379 13.7108 28.3951 13.7702C28.4112 13.8296 28.4155 13.8916 28.4076 13.9527C28.3998 14.0137 28.38 14.0726 28.3494 14.126L27.289 15.9759C27.2584 16.0293 27.2176 16.0762 27.1689 16.1138C27.1202 16.1515 27.0645 16.1791 27.0051 16.1952C26.9457 16.2113 26.8837 16.2156 26.8226 16.2077C26.7615 16.1999 26.7026 16.18 26.6492 16.1494C26.5414 16.0876 26.4625 15.9854 26.43 15.8655C26.3974 15.7455 26.4139 15.6175 26.4757 15.5096L26.9991 14.5964C24.1565 15.5384 22.1799 18.2123 22.1799 21.2842C22.1799 22.0932 22.3158 22.8862 22.5837 23.6412C22.6249 23.7583 22.618 23.887 22.5645 23.999C22.511 24.111 22.4153 24.1972 22.2983 24.2387C22.1813 24.2802 22.0526 24.2736 21.9405 24.2204C21.8283 24.1671 21.7419 24.0716 21.7001 23.9547L21.7002 23.9547ZM27.1931 18.7102C27.1931 19.8311 28.1058 20.743 29.2276 20.743C30.3494 20.743 31.2621 19.8311 31.2621 18.7102C31.2621 17.5893 30.3494 16.6774 29.2276 16.6774C28.1058 16.6774 27.1931 17.5893 27.1931 18.7102ZM40.5096 33.2706C40.4912 33.3356 40.459 33.3959 40.4151 33.4473C40.3712 33.4987 40.3167 33.54 40.2554 33.5683C40.2221 33.5837 36.8504 35.1456 29.7736 38.6604C28.5848 39.2855 27.8245 39.6175 26.7548 39.6175C26.1633 39.6175 25.4774 39.5161 24.5719 39.3064C23.4719 39.0518 22.0353 38.6932 20.2166 38.2392C19.2354 37.9939 18.254 37.7497 17.2722 37.5066V38.1139C17.2722 38.6266 16.8551 39.0437 16.3424 39.0437H12.3947C11.882 39.0437 11.4648 38.6266 11.4648 38.1139V29.1838C11.4648 28.6711 11.882 28.254 12.3947 28.254H16.3424C16.8551 28.254 17.2722 28.6711 17.2722 29.1838V29.8128H20.4419C21.3095 29.8128 21.6018 29.8128 22.1258 30.404C22.8979 31.2749 23.5098 31.5996 24.3835 31.6024H28.3651C29.332 31.6024 30.1326 32.3258 30.2559 33.2598C31.8537 32.5451 33.8389 31.6584 35.6525 31.33C37.8835 30.9259 39.4975 31.4486 40.4494 32.8838C40.4867 32.9401 40.5114 33.0038 40.5219 33.0706C40.5323 33.1374 40.5281 33.2056 40.5097 33.2706L40.5096 33.2706ZM39.3194 32.9714C37.4399 31.0731 33.5293 32.8226 30.6248 34.1219C30.4392 34.205 30.2534 34.2878 30.0675 34.3703C29.7525 34.9918 29.1079 35.419 28.3651 35.419H24.3821C24.374 35.419 24.366 35.4188 24.3579 35.4184C24.1416 35.4072 23.9383 35.3982 23.7476 35.3898C22.7835 35.3471 22.1465 35.3189 21.6547 35.1054C20.8934 34.7746 20.7466 34.0653 20.7024 33.5605C20.6916 33.4367 20.7304 33.3136 20.8103 33.2184C20.8902 33.1232 21.0046 33.0636 21.1285 33.0527C21.3863 33.0297 21.6138 33.2209 21.6363 33.4788C21.7078 34.2954 21.8687 34.3683 23.789 34.4532C23.9783 34.4617 24.1799 34.4706 24.3941 34.4815H28.365C28.9 34.4815 29.3353 34.0459 29.3353 33.5106C29.3353 32.9752 28.9001 32.54 28.365 32.54H24.382C23.2309 32.5363 22.3745 32.0977 21.4243 31.0259C21.2499 30.8293 21.1987 30.8026 21.1455 30.7865C21.0266 30.7504 20.7686 30.7504 20.4419 30.7504H17.2722V36.541C18.4311 36.8273 19.4953 37.0929 20.4436 37.3297C22.258 37.7826 23.6911 38.1404 24.7832 38.3931C27.0999 38.9291 27.6817 38.7013 29.342 37.8282C29.3452 37.8265 29.3484 37.8248 29.3517 37.8232C34.8387 35.0979 38.1054 33.5431 39.3194 32.9714L39.3194 32.9714ZM32.7126 24.6565C32.8369 24.6565 32.9561 24.6071 33.044 24.5193C33.1319 24.4314 33.1813 24.3122 33.1813 24.1879C33.1818 22.543 32.3674 21.2461 30.9471 20.6295C30.8735 20.5976 30.793 20.5851 30.7132 20.5932C30.6334 20.6013 30.557 20.6297 30.4913 20.6758C30.12 20.9362 29.683 21.0739 29.2277 21.0739C28.7767 21.0739 28.3431 20.9386 27.9739 20.6826C27.9082 20.637 27.8319 20.609 27.7523 20.6013C27.6726 20.5935 27.5924 20.6063 27.5191 20.6383C26.0928 21.2619 25.2745 22.5555 25.274 24.1876C25.274 24.3119 25.3234 24.4311 25.4113 24.5191C25.4992 24.607 25.6184 24.6564 25.7427 24.6565H32.7126L32.7126 24.6565ZM23.5088 25.6931C23.5074 25.6931 23.506 25.6933 23.5046 25.6933C23.4963 25.6934 23.488 25.694 23.4797 25.6946C23.4726 25.695 23.4654 25.6952 23.4583 25.696C23.4509 25.6968 23.4436 25.6982 23.4361 25.6993C23.4283 25.7005 23.4205 25.7015 23.4129 25.7031C23.4063 25.7044 23.3999 25.7064 23.3934 25.708C23.3851 25.7102 23.3768 25.712 23.3688 25.7145C23.3625 25.7165 23.3565 25.719 23.3504 25.7212C23.3422 25.7242 23.334 25.7269 23.3261 25.7302C23.3201 25.7328 23.3142 25.7359 23.3082 25.7388C23.3004 25.7425 23.2926 25.746 23.285 25.7501C23.2793 25.7532 23.2738 25.7569 23.2682 25.7602C23.2606 25.7648 23.253 25.7692 23.2458 25.7742C23.2405 25.7778 23.2355 25.7818 23.2304 25.7856C23.223 25.7911 23.2157 25.7965 23.2087 25.8023C23.2074 25.8034 23.2059 25.8043 23.2046 25.8054C23.2006 25.8088 23.1972 25.8125 23.1934 25.8159C23.1871 25.8215 23.181 25.8273 23.175 25.8333C23.1695 25.8388 23.1645 25.8445 23.1594 25.8502C23.1545 25.8558 23.1496 25.8613 23.1449 25.8671C23.1397 25.8735 23.1348 25.88 23.13 25.8866C23.1259 25.8922 23.1219 25.8978 23.118 25.9037C23.1055 25.9229 23.0943 25.943 23.0845 25.9637C23.0781 25.9772 23.0725 25.9909 23.0676 26.0049C23.0572 26.0337 23.0499 26.0635 23.0455 26.0938C23.0444 26.1016 23.0433 26.1092 23.0426 26.1171C23.0419 26.1252 23.0414 26.1333 23.0411 26.1415C23.0409 26.1464 23.0402 26.1512 23.0402 26.1561L23.0137 28.2882C23.0129 28.3497 23.0243 28.4108 23.0471 28.468C23.07 28.5251 23.1038 28.5772 23.1468 28.6213C23.1898 28.6654 23.2411 28.7005 23.2976 28.7248C23.3542 28.7491 23.415 28.7619 23.4766 28.7627H23.4825C23.6058 28.7627 23.7241 28.7141 23.8118 28.6274C23.8996 28.5408 23.9496 28.4231 23.9512 28.2998L23.9638 27.2877C25.4193 28.5651 27.2899 29.2691 29.2264 29.2683C31.566 29.2683 33.7798 28.247 35.3003 26.4664C35.38 26.3718 35.4191 26.2494 35.4089 26.1261C35.3988 26.0027 35.3403 25.8884 35.2462 25.808C35.1521 25.7276 35.03 25.6877 34.9066 25.697C34.7831 25.7063 34.6684 25.7641 34.5874 25.8576C33.2453 27.4294 31.2912 28.3309 29.2264 28.3309C27.5499 28.3316 25.9283 27.7338 24.6534 26.6451L25.6352 26.6573H25.6412C25.764 26.6558 25.8814 26.6061 25.968 26.519C26.0546 26.4318 26.1035 26.3142 26.1042 26.1914C26.105 26.0685 26.0575 25.9503 25.972 25.8621C25.8865 25.7739 25.7697 25.7228 25.6469 25.7198L23.5149 25.6933H23.5089L23.5088 25.6931ZM30.5071 14.354C33.8479 14.9672 36.2727 17.8818 36.2727 21.2843C36.2727 21.7248 36.231 22.1602 36.1511 22.5876L35.6472 21.7182C35.5849 21.6106 35.4824 21.5322 35.3623 21.5002C35.2421 21.4682 35.1142 21.4853 35.0066 21.5476C34.8991 21.6099 34.8207 21.7124 34.7887 21.8326C34.7567 21.9527 34.7737 22.0806 34.8361 22.1882L35.9052 24.033L35.907 24.0358C35.9117 24.0439 35.917 24.0516 35.9222 24.0593C35.9254 24.0641 35.9284 24.0691 35.9318 24.0737C35.9381 24.0824 35.9449 24.0906 35.9518 24.0988C35.9546 24.1022 35.9572 24.1057 35.9601 24.109C35.968 24.1179 35.9765 24.1264 35.9852 24.1347C35.9874 24.1369 35.9894 24.1393 35.9917 24.1414C36.0007 24.1497 36.0102 24.1574 36.0198 24.1651C36.0221 24.167 36.0243 24.169 36.0267 24.1708C36.0353 24.1774 36.0445 24.1834 36.0536 24.1894C36.0575 24.1919 36.0611 24.1947 36.065 24.1971C36.0725 24.2017 36.0804 24.2058 36.0883 24.21C36.0943 24.2132 36.1002 24.2167 36.1064 24.2197C36.1128 24.2228 36.1196 24.2254 36.1262 24.2283C36.1342 24.2317 36.1421 24.2352 36.1502 24.2382C36.1515 24.2386 36.1527 24.2393 36.154 24.2397C36.1633 24.243 36.1728 24.2457 36.1822 24.2484C36.1849 24.2491 36.1874 24.2502 36.1901 24.2509L36.191 24.251C36.2091 24.2559 36.2273 24.2593 36.2454 24.2618L36.2555 24.2631C36.274 24.2653 36.2924 24.2668 36.3107 24.2668C36.314 24.2668 36.3172 24.2661 36.3204 24.2661C36.3393 24.2656 36.3581 24.2644 36.3768 24.2617C36.385 24.2605 36.3929 24.2585 36.401 24.2569C36.4149 24.2543 36.4287 24.2511 36.4423 24.2472C36.4507 24.2448 36.4589 24.2417 36.4673 24.2388C36.4886 24.2313 36.5093 24.2223 36.5293 24.2117C36.5347 24.2088 36.5404 24.2066 36.5457 24.2035L38.3905 23.1344C38.4981 23.0721 38.5765 22.9696 38.6085 22.8495C38.6405 22.7293 38.6234 22.6014 38.5611 22.4938C38.4988 22.3863 38.3963 22.3079 38.2761 22.2759C38.156 22.2439 38.0281 22.2609 37.9205 22.3233L37.0623 22.8206C37.1609 22.3144 37.2104 21.7999 37.2101 21.2843C37.2101 17.4292 34.4622 14.1267 30.6762 13.4318C30.5539 13.4094 30.4278 13.4364 30.3254 13.507C30.2231 13.5776 30.153 13.6859 30.1306 13.8082C30.1081 13.9305 30.1352 14.0567 30.2057 14.159C30.2763 14.2613 30.3847 14.3314 30.5069 14.3539L30.5071 14.354Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_350_3590"
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
                      result="effect1_dropShadow_350_3590"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_350_3590"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">
                  Increased Retention
                </h6>
                <p className="text-sm font-medium">
                  Development opportunities show employees they are valued,
                  leading to increased loyalty and reduced turnover.
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
                <g filter="url(#filter0_d_350_3611)">
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
                    d="M15.2666 33.7835H17.8314C17.9928 33.7835 18.1244 33.9151 18.1244 34.0765V38.4218H14.9736V34.0765C14.9736 33.9151 15.1052 33.7835 15.2666 33.7835ZM17.5948 13.7691C20.2825 13.7691 22.4612 15.9478 22.4612 18.6354C22.4612 21.323 20.2825 23.5018 17.5948 23.5018C14.9072 23.5018 12.7285 21.323 12.7285 18.6354C12.7285 15.9478 14.9072 13.7691 17.5948 13.7691ZM19.4596 16.9759C19.195 16.3455 18.691 15.9813 18.1371 15.8409C18.1127 15.8347 18.0882 15.829 18.0636 15.8237V15.556C18.0636 15.4317 18.0142 15.3125 17.9263 15.2246C17.8384 15.1367 17.7192 15.0873 17.5948 15.0873C17.4705 15.0873 17.3513 15.1367 17.2634 15.2246C17.1755 15.3125 17.1261 15.4317 17.1261 15.556V15.8306C16.3186 16.0125 15.6869 16.6442 15.7291 17.5128C15.778 18.521 16.6458 18.9351 17.5242 19.0793C17.9857 19.1551 18.6756 19.3146 18.6887 19.8973C18.7003 20.3827 18.0372 20.5504 17.6475 20.5596C17.1546 20.5714 16.6171 20.3514 16.4878 19.8328C16.4565 19.7141 16.3799 19.6125 16.2744 19.5498C16.1689 19.4871 16.043 19.4684 15.9238 19.4977C15.8046 19.527 15.7018 19.602 15.6374 19.7064C15.573 19.8109 15.5522 19.9365 15.5796 20.0561C15.7685 20.814 16.381 21.2998 17.1261 21.4472V21.7149C17.1261 21.8392 17.1755 21.9584 17.2634 22.0463C17.3513 22.1342 17.4705 22.1836 17.5948 22.1836C17.7192 22.1836 17.8384 22.1342 17.9263 22.0463C18.0142 21.9584 18.0636 21.8392 18.0636 21.7149V21.4563C18.8846 21.3149 19.6443 20.7906 19.6225 19.8754C19.5958 18.7511 18.6433 18.3155 17.6744 18.1565C17.288 18.093 16.6863 17.9514 16.6629 17.4688C16.6428 17.0555 16.9905 16.8096 17.3579 16.7357C17.866 16.6334 18.3867 16.8413 18.5954 17.3384C18.6435 17.453 18.7352 17.5438 18.8502 17.5908C18.9652 17.6379 19.0942 17.6373 19.2088 17.5892C19.3234 17.5411 19.4142 17.4495 19.4613 17.3345C19.5083 17.2195 19.5077 17.0905 19.4596 16.9759ZM14.3891 29.9889L25.3056 23.6862L25.171 23.9194C25.111 24.0266 25.0958 24.1532 25.1285 24.2716C25.1612 24.39 25.2393 24.4908 25.3458 24.552C25.4524 24.6132 25.5787 24.6299 25.6975 24.5986C25.8163 24.5672 25.9179 24.4903 25.9804 24.3845L26.964 22.6808C27.181 22.3757 26.9659 21.9408 26.5817 21.9408H24.5697C24.4454 21.9408 24.3262 21.9902 24.2383 22.0781C24.1504 22.166 24.101 22.2852 24.101 22.4096C24.101 22.5339 24.1504 22.6531 24.2383 22.741C24.3262 22.8289 24.4454 22.8783 24.5697 22.8783H24.8345L13.9204 29.1796C13.814 29.2422 13.7368 29.3444 13.7054 29.4638C13.6741 29.5831 13.6912 29.7101 13.7531 29.8169C13.815 29.9237 13.9165 30.0017 14.0357 30.0339C14.1548 30.0661 14.2819 30.0499 14.3891 29.9889ZM35.485 13.6445C35.5305 13.7586 35.5293 13.886 35.4818 13.9993C35.4343 14.1126 35.3442 14.2027 35.2309 14.2502C35.1176 14.2977 34.9902 14.2989 34.8761 14.2534C34.762 14.2079 34.6703 14.1194 34.6207 14.007C34.523 13.7744 34.2768 13.6852 34.041 13.7327C33.9002 13.7611 33.7377 13.8473 33.7457 14.0128C33.7546 14.1962 34.0953 14.2569 34.2331 14.2796C34.9306 14.394 35.5808 14.7265 35.5999 15.5247C35.6144 16.13 35.1709 16.5188 34.6239 16.6602V16.6812C34.6239 16.8055 34.5746 16.9247 34.4867 17.0126C34.3987 17.1006 34.2795 17.1499 34.1552 17.1499C34.0309 17.1499 33.9116 17.1006 33.8237 17.0126C33.7358 16.9247 33.6864 16.8055 33.6864 16.6812V16.6504C33.2126 16.5127 32.8447 16.1721 32.723 15.6837C32.694 15.5635 32.7138 15.4367 32.778 15.331C32.8423 15.2253 32.9458 15.1493 33.0659 15.1198C33.186 15.0902 33.313 15.1095 33.4189 15.1733C33.5249 15.2372 33.6012 15.3404 33.6312 15.4604C33.6912 15.7007 33.9618 15.7884 34.1841 15.7831C34.3228 15.7798 34.6702 15.7174 34.6662 15.5466C34.6662 15.3037 34.2639 15.2321 34.0829 15.2024C33.8301 15.1609 33.5538 15.084 33.3226 14.9332C33.0371 14.7468 32.832 14.4702 32.8119 14.0568C32.784 13.481 33.1578 13.0346 33.6865 12.8622V12.8227C33.6865 12.6984 33.7359 12.5792 33.8238 12.4913C33.9117 12.4034 34.0309 12.354 34.1553 12.354C34.2796 12.354 34.3988 12.4034 34.4867 12.4913C34.5746 12.5792 34.624 12.6984 34.624 12.8227V12.8564C34.9863 12.9714 35.3093 13.2261 35.485 13.6445ZM34.1553 11.7031C32.4715 11.7031 31.1065 13.0681 31.1065 14.7519C31.1065 16.2764 32.2253 17.5394 33.6866 17.7649V20.369C33.2816 19.5755 32.647 18.9224 31.8655 18.4948C31.0839 18.0672 30.1917 17.8849 29.3051 17.9717C29.2654 17.9753 29.2269 17.9871 29.192 18.0062C29.1571 18.0253 29.1264 18.0514 29.1019 18.0828C29.0774 18.1142 29.0596 18.1503 29.0496 18.1889C29.0396 18.2274 29.0376 18.2676 29.0437 18.307C29.3858 20.5716 31.4044 22.1984 33.6866 22.066V24.3348H32.8177C32.74 24.335 32.6656 24.3659 32.6107 24.4208C32.5558 24.4757 32.5249 24.5501 32.5247 24.6278V38.4218H35.6754V24.6278C35.6754 24.4664 35.5438 24.3348 35.3824 24.3348H34.6241V22.066C36.9063 22.1984 38.9248 20.5715 39.267 18.307C39.2731 18.2676 39.2711 18.2274 39.2611 18.1889C39.2511 18.1503 39.2333 18.1142 39.2088 18.0828C39.1843 18.0514 39.1536 18.0253 39.1187 18.0062C39.0837 17.9871 39.0452 17.9753 39.0056 17.9717C38.119 17.8849 37.2267 18.0672 36.4452 18.4948C35.6637 18.9224 35.0291 19.5755 34.6241 20.369V17.7649C36.0853 17.5394 37.2041 16.2764 37.2041 14.7519C37.2041 13.0681 35.8391 11.7031 34.1553 11.7031ZM13.4294 40.2968C13.305 40.2968 13.1858 40.2474 13.0979 40.1595C13.01 40.0716 12.9606 39.9523 12.9606 39.828C12.9606 39.7037 13.01 39.5845 13.0979 39.4965C13.1858 39.4086 13.305 39.3593 13.4294 39.3593H37.2196C37.344 39.3593 37.4632 39.4086 37.5511 39.4965C37.639 39.5845 37.6884 39.7037 37.6884 39.828C37.6884 39.9523 37.639 40.0716 37.5511 40.1595C37.4632 40.2474 37.344 40.2968 37.2196 40.2968H13.4294ZM29.5322 27.3097C29.6936 27.3097 29.8252 27.4413 29.8252 27.6027V38.4218H26.6744V27.6027C26.6744 27.4413 26.806 27.3097 26.9674 27.3097H29.5322ZM23.6818 30.6166H21.117C21.0393 30.6168 20.9649 30.6477 20.91 30.7026C20.8551 30.7575 20.8242 30.8319 20.824 30.9096V38.4218H23.9748V30.9096C23.9748 30.7482 23.8432 30.6166 23.6818 30.6166Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_350_3611"
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
                      result="effect1_dropShadow_350_3611"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_350_3611"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">Measurable ROI</h6>
                <p className="text-sm font-medium">
                  Track training outcomes to demonstrate skill enhancement and
                  provide clear evidence of return on investment.
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
                className="animate-floating"
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
            src="/images/key-benefits-skill.png"
            fill
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default KeyBenefits;
