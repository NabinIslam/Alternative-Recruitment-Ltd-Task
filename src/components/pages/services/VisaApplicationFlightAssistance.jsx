import Button from "../../ui/Button";
import SubServiceCard from "../../common/SubServiceCard";
import { Link } from "@/i18n/routing";
import ServiceImage from "@/components/common/ServiceImage";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";

const VisaApplicationFlightAssistance = () => {
  return (
    <section className="pb-[50px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row-reverse">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Visa Application Flight Assistance
          </h2>
          <p className="text-sm font-medium">
            Our Visa Application and Flight Assistance service simplifies the
            travel process for your international employees. We handle the
            complex visa application procedures, ensuring all documentation is
            accurate and compliant with local regulations. Once the visa is
            approved, we assist in booking flights that best suit your business
            needs and employee schedules. From start to finish, our team
            provides seamless coordination, minimizing travel disruptions and
            ensuring a stress-free transition for your global workforce. Focus
            on your business while we handle the logistics.
          </p>
          <div>
            <Link href="/service/visa-application-flight-assistance">
              <Button>See More</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Visa Application Flight Assistance.png"
            title1="Visa and Travel Support"
            desc1="Assistance with visas and travel."
            title2="Visa and Flight Coordination"
            desc2="Seamless visa & flight arrangements."
            title3="Travel Visa and Flight Aid"
            desc3="Comprehensive visa & flight assistance."
          />
        </FadeInRightWithSlowBounce>
      </div>
      <div className="container mt-[50px] grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* card */}
        <SubServiceCard
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.9082 23.2227H24.4141V21.7578C23.3203 21.6895 22.2461 21.4062 21.2598 20.9473C21.0547 21.6992 20.9375 22.4609 20.9082 23.2227ZM24.4141 20.5859V16.4551C23.1836 17.2168 22.2363 18.3887 21.6406 19.8242C22.5098 20.2637 23.4473 20.5176 24.4141 20.5859ZM30.3906 18.3984C29.6191 17.6367 28.7012 17.041 27.6758 16.6602C28.3984 17.4121 28.9746 18.291 29.3848 19.248C29.7461 18.9941 30.0781 18.7109 30.3906 18.3984ZM28.3691 27.7832C27.5 27.3535 26.5527 27.0996 25.5859 27.0312V31.1621C26.8164 30.4004 27.7637 29.2285 28.3691 27.7832ZM21.2598 26.6699C22.2559 26.2012 23.3203 25.9277 24.4141 25.8594V24.3945H20.9082C20.9375 25.166 21.0547 25.9277 21.2598 26.6699ZM25.5859 16.4648V20.5957C26.5527 20.5273 27.5 20.2734 28.3691 19.8438C27.7637 18.3984 26.8164 17.2266 25.5859 16.4648ZM29.0918 24.3945H25.5859V25.8496C26.6797 25.918 27.7539 26.1914 28.75 26.6602C28.9453 25.9277 29.0625 25.166 29.0918 24.3945ZM27.6758 30.9668C28.6914 30.5859 29.6191 29.9902 30.3906 29.2285C30.0781 28.916 29.7461 28.6328 29.3848 28.3887C28.9746 29.3457 28.3984 30.2148 27.6758 30.9668ZM28.75 20.957C27.7539 21.4258 26.6797 21.6992 25.5859 21.7676V23.2227H29.0918C29.0625 22.4609 28.9453 21.6992 28.75 20.957ZM22.3242 16.6602C21.3086 17.041 20.3809 17.6367 19.6191 18.3984C19.9316 18.7109 20.2637 18.9844 20.625 19.2383C21.0254 18.2812 21.6016 17.4023 22.3242 16.6602ZM34.1895 2.34375L16.0254 7.73437H34.1895V2.34375ZM20.2051 27.2559C19.9316 26.3281 19.7754 25.3613 19.7363 24.3945H17.3828C17.4902 25.8203 17.998 27.1875 18.8477 28.3398C19.2676 27.9395 19.7168 27.5684 20.2051 27.2559ZM19.6191 29.2285C20.3906 29.9902 21.3086 30.5859 22.3242 30.9668C21.6016 30.2148 21.0254 29.3457 20.6152 28.3887C20.2637 28.6426 19.9219 28.9258 19.6191 29.2285ZM20.2051 20.3711C19.7168 20.0586 19.2676 19.6973 18.8477 19.2871C17.998 20.4395 17.4902 21.8066 17.3828 23.2324H19.7363C19.7754 22.2559 19.9316 21.2988 20.2051 20.3711ZM24.4141 31.1621V27.0312C23.4473 27.0996 22.5098 27.3633 21.6406 27.7832C22.2363 29.2285 23.1836 30.4004 24.4141 31.1621Z" />
              <path d="M37.9883 8.90625H12.0703L11.4746 9.08203L11.4648 9.05273C11.1328 9.24805 10.9277 9.59961 10.9277 9.99023V46.7676C10.9277 47.3633 11.416 47.8516 12.0117 47.8516H37.9883C38.584 47.8516 39.0723 47.3633 39.0723 46.7676V9.99023C39.0723 9.39453 38.584 8.90625 37.9883 8.90625ZM25 15C29.8633 15 33.8184 18.9453 33.8184 23.8184C33.8184 28.6816 29.873 32.6367 25 32.6367C20.1367 32.627 16.1914 28.6914 16.1816 23.8184C16.1816 18.9453 20.1367 15 25 15ZM28.8574 41.9922H21.1426C20.8203 41.9922 20.5566 41.7285 20.5566 41.4062C20.5566 41.084 20.8203 40.8203 21.1426 40.8203H28.8574C29.1797 40.8203 29.4434 41.084 29.4434 41.4062C29.4434 41.7285 29.1797 41.9922 28.8574 41.9922ZM33.4473 38.0566H16.5527C16.2305 38.0566 15.9668 37.793 15.9668 37.4707C15.9668 37.1484 16.2305 36.8848 16.5527 36.8848H33.4473C33.7695 36.8848 34.0332 37.1484 34.0332 37.4707C34.0332 37.793 33.7695 38.0566 33.4473 38.0566Z" />
              <path d="M29.7949 27.2461C30.2832 27.5586 30.7324 27.9297 31.1523 28.3301C32.002 27.1777 32.5098 25.8203 32.6172 24.3945H30.2637C30.2246 25.3613 30.0684 26.3184 29.7949 27.2461ZM30.2637 23.2227H32.6172C32.5098 21.7969 32.002 20.4297 31.1523 19.2871C30.7422 19.6973 30.2832 20.0586 29.7949 20.3711C30.0684 21.2988 30.2246 22.2656 30.2637 23.2227Z" />
            </svg>
          }
          title="Visa and Flight Management"
          description="Complete management of visa applications and flight arrangements for seamless travel."
        />
        {/* card */}
        <SubServiceCard
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_5443)">
                <path d="M11.3469 28.7163C11.4061 29.0594 11.4687 29.4029 11.545 29.742L12.0387 31.962C12.7636 32.0851 13.5041 32.0851 14.229 31.962L14.7223 29.742C14.7976 29.4029 14.8616 29.0594 14.9208 28.7163C14.3258 28.7593 13.73 28.7891 13.1341 28.7891C12.5382 28.7891 11.9407 28.7593 11.3469 28.7163ZM16.7692 28.511C16.6874 29.054 16.5889 29.5945 16.4739 30.1315L16.2049 31.3551C17.6991 30.6438 18.903 29.4399 19.6143 27.9457L18.3902 28.2148C17.8549 28.3352 17.3164 28.4295 16.7692 28.511ZM16.2019 18.3967L16.4713 19.621C16.5904 20.1589 16.6837 20.6974 16.7666 21.2411C17.3095 21.323 17.8514 21.4207 18.3868 21.5355L19.6109 21.8045C18.8993 20.311 17.6956 19.1078 16.2019 18.3967ZM16.9738 23.0895C17.0606 24.2795 17.0606 25.4738 16.9738 26.6634C17.3173 26.6032 17.66 26.5407 18.0004 26.4653L20.219 25.9716C20.3434 25.2465 20.3434 24.5055 20.219 23.7804L18.0004 23.2871C17.66 23.2118 17.3164 23.1487 16.9738 23.0895Z" />
                <path d="M26.1097 12.3145H0.088623V49.1029C0.088623 49.3409 0.183158 49.5691 0.35143 49.7374C0.519703 49.9057 0.747929 50.0002 0.985903 50.0002H26.1097C26.3477 50.0002 26.5759 49.9057 26.7442 49.7374C26.9125 49.5691 27.007 49.3409 27.007 49.1029V13.2117C27.007 12.9738 26.9125 12.7455 26.7442 12.5773C26.5759 12.409 26.3477 12.3145 26.1097 12.3145ZM18.5178 46.4111H7.75049V44.6165H18.5178V46.4111ZM20.3124 42.822H5.95593V41.0274H20.3124V42.822ZM8.64777 39.2328V37.4383H10.4423V39.2328H8.64777ZM12.2369 39.2328V37.4383H14.0314V39.2328H12.2369ZM15.826 39.2328V37.4383H17.6206V39.2328H15.826ZM13.1342 33.8492C8.1785 33.8492 4.16137 29.832 4.16137 24.8764C4.16137 19.9207 8.1785 15.9036 13.1342 15.9036C18.0898 15.9036 22.107 19.9207 22.107 24.8764C22.1017 29.8293 18.0876 33.8436 13.1342 33.8492Z" />
                <path d="M6.6544 21.8085L7.87806 21.5391C8.41643 21.4207 8.95491 21.3266 9.49866 21.2446C9.57978 20.7017 9.67782 20.1613 9.79263 19.6245L10.062 18.4004C8.56895 19.112 7.36585 20.3153 6.6544 21.8085ZM22.107 7.46915C22.1071 7.33169 22.0757 7.19603 22.0151 7.07266C21.9544 6.94929 21.8663 6.8415 21.7574 6.75762C21.6485 6.67374 21.5217 6.61602 21.387 6.58891C21.2522 6.5618 21.113 6.56602 20.9801 6.60126L6.11154 10.5197H22.107V7.46915ZM14.9209 21.0366C14.8617 20.693 14.7978 20.3504 14.7224 20.01L14.2291 17.7904C13.5043 17.6669 12.7637 17.6669 12.0389 17.7904L11.5451 20.0101C11.4689 20.3504 11.4063 20.6931 11.3471 21.0366C12.5368 20.9498 13.7312 20.9498 14.9209 21.0366ZM9.49866 28.511C8.95546 28.4299 8.41496 28.3317 7.87795 28.2165L6.65429 27.9475C7.36589 29.4416 8.56975 30.6454 10.0638 31.357L9.79488 30.1333C9.6743 29.5957 9.5802 29.0548 9.49866 28.511ZM9.29408 26.6625C9.20689 25.4731 9.20689 24.279 9.29408 23.0896C8.95009 23.1488 8.60755 23.2118 8.26748 23.2872L6.0484 23.7805C5.92527 24.5057 5.92527 25.2464 6.0484 25.9716L8.26748 26.4653C8.60755 26.5407 8.95009 26.6033 9.29408 26.6625ZM11.1119 22.8548C10.9918 24.1998 10.9918 25.5528 11.1119 26.8977C12.4569 27.0178 13.8099 27.0178 15.1549 26.8977C15.2754 25.5528 15.2754 24.1998 15.1549 22.8548C13.8099 22.7343 12.4568 22.7343 11.1119 22.8548ZM28.8016 30.1504L29.8649 30.0177C30.1453 29.983 30.4257 30.083 30.6215 30.2866L32.4007 32.1299L32.6895 31.3105L31.7553 29.356C31.6529 29.1415 31.6396 28.8951 31.7186 28.6709L36.0748 16.3298L35.5312 15.1854L34.3864 15.733L32.75 20.3583L31.8185 22.9919L30.0239 28.0667C29.9846 28.1778 29.9238 28.2802 29.845 28.3679C29.7661 28.4555 29.6707 28.5268 29.5643 28.5775L28.8016 28.9482V30.1504Z" />
                <path d="M31.3724 0L29.3085 5.83232L28.9794 6.76549L27.5112 10.9233C27.9044 11.1621 28.2296 11.498 28.4556 11.8988C28.6816 12.2995 28.8007 12.7516 28.8016 13.2117V18.7925L31.7629 17.7599L32.8135 14.7819C32.8927 14.5576 33.0577 14.3738 33.2722 14.271L35.5618 13.1765C35.6682 13.1256 35.7835 13.0962 35.9012 13.0898C36.0189 13.0835 36.1367 13.1004 36.2479 13.1397C36.359 13.1789 36.4614 13.2396 36.5491 13.3184C36.6367 13.3973 36.708 13.4926 36.7588 13.5989L37.8537 15.8881C37.9564 16.1031 37.9696 16.35 37.8905 16.5747L36.8384 19.5526L39.6474 24.064C39.7184 24.1783 39.7628 24.3071 39.7773 24.4408C39.7919 24.5746 39.7762 24.7099 39.7315 24.8368L38.8342 27.375C38.7724 27.55 38.6579 27.7015 38.5064 27.8087C38.3548 27.9159 38.1738 27.9734 37.9882 27.9734C37.7706 27.9734 37.5604 27.8945 37.3967 27.7513L34.7605 25.4389L33.5351 28.914L34.4692 30.8681C34.5716 31.0828 34.5849 31.3293 34.506 31.5537L33.6087 34.0922C33.5469 34.2672 33.4323 34.4186 33.2809 34.5258C33.1295 34.633 32.9485 34.6906 32.763 34.6907C32.6428 34.6913 32.5237 34.6678 32.4128 34.6215C32.3019 34.5753 32.2014 34.5072 32.1173 34.4213L29.6415 31.8569L28.8016 31.9594V39.0575L35.7494 41.5102L48.2942 5.97779L31.3724 0ZM32.059 7.85467L30.5208 7.3163L31.1184 5.62426L32.6567 6.1679L32.059 7.85467ZM35.1364 8.94128L33.5977 8.39753L34.1953 6.70638L35.7341 7.24923L35.1364 8.94128ZM38.2125 10.027L36.6747 9.48413L37.2718 7.79209L38.8101 8.33045L38.2125 10.027ZM41.2891 11.1138L39.7486 10.5698L40.3461 8.87768L41.884 9.42143L41.2891 11.1138ZM42.8281 11.6567L43.4257 9.96418L44.9635 10.507L44.366 12.1995L42.8281 11.6567Z" />
                <path d="M28.8015 26.1495L29.6848 23.6469L28.8015 23.6837V26.1495ZM37.585 25.5287L37.8965 24.6462L36.0748 21.7195L35.4057 23.6161L37.585 25.5287ZM30.9982 19.9268L28.8015 20.693V21.8874L30.3279 21.8246L30.9982 19.9268Z" />
              </g>
              <defs>
                <clipPath id="clip0_1_5443">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Visa Application & Flight Services"
          description="Expert services for visa applications and flight arrangements, ensuring smooth travel."
        />
        {/* card */}
        <SubServiceCard
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_5427)">
                <path d="M50 24.1562C50 35.6392 41.5301 45.1811 30.5098 46.8635C30.6028 46.3539 30.6288 45.8261 30.5663 45.2913L30.4143 43.992C34.327 43.3254 37.8595 41.5301 40.6594 38.9481C40.4913 38.8083 40.3239 38.6271 40.1589 38.3864C39.4153 37.3013 40.3877 36.2247 40.3877 35.2758C40.3877 34.3451 38.5113 34.4217 38.4426 33.8052C38.2055 31.6704 39.7526 31.6413 40.5774 30.8165C41.4023 29.9917 39.7622 28.1164 38.7028 28.2374C37.6362 28.3513 34.634 27.7449 34.9083 25.4479C35.2426 22.6503 31.344 22.8971 30.7858 21.5913C29.972 19.6879 31.3248 17.3533 33.0894 16.8229C35.5887 16.0717 38.0509 14.0327 37.8586 11.7629C37.6407 9.19225 36.4771 6.87387 34.5607 5.49666C32.5226 4.67012 30.3621 4.18575 28.1662 4.06308C26.1582 4.14249 24.3929 4.58874 24.4734 5.50802C24.6709 7.7608 31.077 8.34593 30.002 10.4518C29.4416 11.5496 25.2354 13.099 26.0209 14.7329C26.5319 15.7954 27.7893 14.8847 27.3198 16.9245C27.1038 17.8631 26.2809 19.6266 25.0153 19.7404C23.7211 19.8612 22.6434 16.4326 19.1207 16.3202C17.4553 16.2669 15.1091 18.9186 17.1013 20.7998C18.3077 21.939 20.5715 19.4306 21.2396 21.39C21.7105 22.7708 21.1762 25.6715 23.3737 26.8838C24.1747 27.3257 25.4028 27.7109 26.6173 28.328C24.8146 28.6962 22.5996 29.3831 19.984 30.3906L17.7802 29.8092C18.7028 29.0412 20.2017 28.5006 19.8246 26.8225C19.2706 24.357 14.9898 25.2869 12.0386 22.3357C11.1332 21.4305 9.20204 18.4245 9.20996 14.8131C7.73888 17.6074 6.90163 20.7851 6.90163 24.1563C6.90163 25.194 6.9808 26.2136 7.133 27.2094C7.09828 27.2088 7.06397 27.2028 7.02933 27.2028C6.09991 27.2028 5.18839 27.3981 4.34362 27.7672C4.15361 26.573 4.05792 25.3657 4.05743 24.1564C4.05743 11.4901 14.3624 1.18481 27.0286 1.18481C39.695 1.18465 50 11.49 50 24.1562ZM32.7687 30.8516L27.1584 33.4305L27.2454 32.208L30.8799 30.5673C30.3615 30.5302 29.8244 30.5161 29.2881 30.5161C27.2801 30.5161 23.8873 31.5326 20.1349 33.0221L8.09999 29.8476C7.54356 29.7008 6.9629 29.6699 6.39402 29.7568C5.82514 29.8436 5.28017 30.0464 4.79289 30.3525L4.20114 30.7243C3.62344 31.0872 3.61732 31.9271 4.18962 32.2985L11.424 36.9919C9.69583 37.8757 8.0562 38.7734 6.61078 39.6306L2.89852 37.6653C2.59895 37.5067 2.26842 37.4152 1.92992 37.3973C1.59142 37.3793 1.25307 37.4353 0.938394 37.5613L0.587005 37.7021C0.0629852 37.9119 -0.156541 38.5351 0.12042 39.027L2.16544 42.6603L2.16634 42.66C1.39477 43.3238 0.95506 43.8743 0.95506 44.2552C0.95506 45.3954 2.35817 45.6804 3.59493 45.6804C5.80081 45.6804 34.9321 39.0104 34.9321 32.9676C34.9319 31.7708 34.1135 31.1723 32.7687 30.8516ZM20.4862 42.6498L26.8966 40.3916C27.1789 40.2921 27.4806 40.4803 27.5154 40.7777L28.0774 45.5829C28.1459 46.1683 28.0279 46.7604 27.7404 47.275C27.4528 47.7895 27.0103 48.2002 26.4758 48.4487L25.8746 48.7281C25.6918 48.8131 25.4864 48.8366 25.2891 48.7952C25.0919 48.7538 24.9133 48.6497 24.7801 48.4984L20.2908 43.3987C20.0723 43.1503 20.1741 42.7597 20.4862 42.6498Z" />
              </g>
              <defs>
                <clipPath id="clip0_1_5427">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Visa & Travel Logistics Support"
          description="Assisting with visa applications and travel logistics for a hassle-free journey."
        />
      </div>
    </section>
  );
};

export default VisaApplicationFlightAssistance;
