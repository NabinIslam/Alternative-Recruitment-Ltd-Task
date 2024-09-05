"use client";

import SubServiceCard from "../SubServiceCard";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContractStaffing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <section className="py-[50px]">
      <div className="container flex flex-col-reverse items-center justify-between gap-24 lg:flex-row">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          className="basis-1/2 text-center"
        >
          <img src="/contract-staffing.png" alt="" />
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          className="basis-1/2 space-y-5 text-center lg:text-left"
        >
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Contract Staffing
          </h2>
          <p className="text-sm font-medium">
            Contract staffing involves hiring workers for specific projects or
            periods, often through agencies, to meet short-term needs without
            permanent employment commitments. Employers benefit from flexibility
            in scaling their workforce as required, while workers gain
            experience in diverse roles. Contracts specify terms like duration,
            tasks, and compensation, offering clarity for both parties. This
            arrangement allows businesses to manage costs effectively and access
            specialized skills, while contractors enjoy varied opportunities and
            potential for long-term engagements based on performance and project
            demands.
          </p>
          <Button>See more</Button>
        </motion.div>
      </div>
      <div className="container mt-[50px] grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* card */}

        <SubServiceCard
          ref={ref}
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.46875 23.0398V19.1484C5.47034 18.6395 5.63686 18.1447 5.94336 17.7383C6.24985 17.332 6.6798 17.0359 7.16875 16.8945L9.32891 16.2773C9.63137 15.2883 10.0269 14.3301 10.5102 13.4156L9.42188 11.4555C9.17636 11.0098 9.08173 10.4967 9.15214 9.99283C9.22256 9.48894 9.45423 9.0214 9.8125 8.66016L12.5656 5.90781C12.9267 5.54931 13.3942 5.31741 13.8981 5.24685C14.4021 5.17629 14.9153 5.27086 15.3609 5.51641L17.3211 6.60469C18.2355 6.12142 19.1937 5.7259 20.1828 5.42344L20.8 3.26328C20.9412 2.77419 21.2373 2.34406 21.6436 2.03742C22.05 1.73078 22.5448 1.56414 23.0539 1.5625H26.9461C27.4551 1.56409 27.9498 1.73061 28.3562 2.03711C28.7625 2.3436 29.0586 2.77355 29.2 3.2625L29.8172 5.42266C30.8063 5.72512 31.7645 6.12064 32.6789 6.60391L34.6391 5.51562C35.0848 5.27036 35.5978 5.17587 36.1017 5.24628C36.6055 5.31668 37.073 5.5482 37.4344 5.90625L40.1867 8.65937C40.5452 9.02046 40.7771 9.48797 40.8477 9.99189C40.9182 10.4958 40.8237 11.009 40.5781 11.4547L39.4898 13.4148C39.9731 14.3293 40.3686 15.2875 40.6711 16.2766L42.8312 16.8938C43.3202 17.0351 43.7501 17.3312 44.0566 17.7376C44.3631 18.1439 44.5297 18.6387 44.5312 19.1477V23.0398C44.5298 23.5489 44.3633 24.0437 44.0568 24.4501C43.7503 24.8564 43.3203 25.1525 42.8312 25.2937L40.8617 25.8563C40.7916 25.8761 40.719 25.8864 40.6461 25.8867C40.4576 25.8867 40.2754 25.8185 40.1332 25.6947C39.991 25.5709 39.8983 25.3999 39.8723 25.2131C39.8464 25.0264 39.8888 24.8366 39.9918 24.6786C40.0948 24.5207 40.2514 24.4054 40.4328 24.3539L42.4023 23.7914C42.5656 23.7444 42.7092 23.6456 42.8113 23.5099C42.9135 23.3742 42.9688 23.2089 42.9688 23.0391V19.1484C42.9684 18.9788 42.913 18.8139 42.8109 18.6785C42.7087 18.5431 42.5653 18.4445 42.4023 18.3977L39.8273 17.6609C39.6987 17.6241 39.5816 17.555 39.4872 17.4601C39.3928 17.3651 39.3244 17.2476 39.2883 17.1188C38.9688 15.9601 38.5083 14.8449 37.9172 13.7984C37.8513 13.682 37.8164 13.5506 37.8158 13.4168C37.8153 13.283 37.8491 13.1513 37.9141 13.0344L39.2125 10.6969C39.2943 10.5482 39.3257 10.377 39.302 10.209C39.2784 10.041 39.2009 9.88516 39.0812 9.76484L36.3297 7.0125C36.2091 6.8932 36.0533 6.81604 35.8853 6.79253C35.7174 6.76902 35.5463 6.80041 35.3977 6.88203L33.0602 8.18047C32.9433 8.24578 32.8116 8.27981 32.6777 8.27926C32.5439 8.27871 32.4124 8.24361 32.2961 8.17734C31.2496 7.58618 30.1345 7.12571 28.9758 6.80625C28.8469 6.77018 28.7294 6.7017 28.6345 6.60733C28.5396 6.51297 28.4704 6.39586 28.4336 6.26719L27.6969 3.69219C27.65 3.52931 27.5516 3.38604 27.4163 3.28391C27.2811 3.18177 27.1164 3.12628 26.9469 3.12578H23.0539C22.8843 3.12611 22.7194 3.18152 22.584 3.28367C22.4486 3.38582 22.35 3.52919 22.3031 3.69219L21.5664 6.26719C21.5296 6.39586 21.4604 6.51297 21.3655 6.60733C21.2706 6.7017 21.1531 6.77018 21.0242 6.80625C19.8655 7.12571 18.7504 7.58618 17.7039 8.17734C17.5876 8.24361 17.4561 8.27871 17.3223 8.27926C17.1884 8.27981 17.0567 8.24578 16.9398 8.18047L14.6016 6.88125C14.4531 6.79885 14.2817 6.76708 14.1136 6.79076C13.9454 6.81445 13.7895 6.89229 13.6695 7.0125L10.9172 9.76406C10.7978 9.88453 10.7205 10.0404 10.697 10.2084C10.6735 10.3764 10.705 10.5475 10.7867 10.6961L12.0852 13.0336C12.1501 13.1506 12.1839 13.2822 12.1834 13.416C12.1828 13.5498 12.1479 13.6812 12.082 13.7977C11.4909 14.8442 11.0304 15.9593 10.7109 17.118C10.6749 17.2469 10.6064 17.3644 10.512 17.4593C10.4177 17.5542 10.3006 17.6233 10.1719 17.6602L7.59688 18.3969C7.434 18.4437 7.29073 18.5422 7.18859 18.6774C7.08646 18.8127 7.03097 18.9774 7.03047 19.1469V23.0398C7.0308 23.2095 7.08621 23.3744 7.18836 23.5098C7.29051 23.6452 7.43387 23.7437 7.59688 23.7906L9.56641 24.3531C9.76584 24.41 9.9345 24.5438 10.0353 24.725C10.1361 24.9062 10.1608 25.1201 10.1039 25.3195C10.047 25.519 9.91326 25.6876 9.73202 25.7884C9.55079 25.8892 9.33693 25.9139 9.1375 25.857L7.16797 25.2937C6.6791 25.1523 6.24925 24.8562 5.94289 24.4499C5.63653 24.0435 5.47016 23.5488 5.46875 23.0398ZM6.25 42.1875C6.0428 42.1875 5.84409 42.2698 5.69757 42.4163C5.55106 42.5628 5.46875 42.7616 5.46875 42.9688V47.6562C5.46875 47.8634 5.55106 48.0622 5.69757 48.2087C5.84409 48.3552 6.0428 48.4375 6.25 48.4375C6.4572 48.4375 6.65591 48.3552 6.80243 48.2087C6.94894 48.0622 7.03125 47.8634 7.03125 47.6562V42.9688C7.03125 42.7616 6.94894 42.5628 6.80243 42.4163C6.65591 42.2698 6.4572 42.1875 6.25 42.1875ZM43.75 42.1875C43.5428 42.1875 43.3441 42.2698 43.1976 42.4163C43.0511 42.5628 42.9688 42.7616 42.9688 42.9688V47.6562C42.9688 47.8634 43.0511 48.0622 43.1976 48.2087C43.3441 48.3552 43.5428 48.4375 43.75 48.4375C43.9572 48.4375 44.1559 48.3552 44.3024 48.2087C44.4489 48.0622 44.5312 47.8634 44.5312 47.6562V42.9688C44.5312 42.7616 44.4489 42.5628 44.3024 42.4163C44.1559 42.2698 43.9572 42.1875 43.75 42.1875ZM32.4242 26.8633C32.5979 26.9764 32.8094 27.0159 33.0122 26.9733C33.2151 26.9307 33.3927 26.8094 33.5063 26.6359C34.506 25.1035 35.0731 23.3295 35.1478 21.5013C35.2225 19.6731 34.8019 17.8588 33.9305 16.2499C33.0591 14.641 31.7693 13.2975 30.1973 12.3611C28.6254 11.4248 26.8297 10.9305 25 10.9305C23.1703 10.9305 21.3746 11.4248 19.8027 12.3611C18.2307 13.2975 16.9409 14.641 16.0695 16.2499C15.1981 17.8588 14.7775 19.6731 14.8522 21.5013C14.9269 23.3295 15.494 25.1035 16.4937 26.6359C16.5499 26.7219 16.6224 26.796 16.7071 26.8539C16.7919 26.9119 16.8872 26.9526 16.9877 26.9737C17.0882 26.9948 17.1918 26.9959 17.2927 26.977C17.3936 26.958 17.4898 26.9194 17.5758 26.8633C17.6618 26.8072 17.7358 26.7347 17.7938 26.6499C17.8517 26.5652 17.8924 26.4698 17.9135 26.3694C17.9347 26.2689 17.9358 26.1652 17.9168 26.0643C17.8979 25.9634 17.8592 25.8672 17.8031 25.7812C16.957 24.4846 16.4768 22.9835 16.4135 21.4364C16.3501 19.8894 16.7058 18.354 17.4431 16.9925C18.1804 15.631 19.2718 14.494 20.602 13.7016C21.9321 12.9093 23.4517 12.491 25 12.491C26.5483 12.491 28.0679 12.9093 29.398 13.7016C30.7282 14.494 31.8196 15.631 32.5569 16.9925C33.2942 18.354 33.6499 19.8894 33.5865 21.4364C33.5232 22.9835 33.043 24.4846 32.1969 25.7812C32.0837 25.9549 32.044 26.1663 32.0865 26.3691C32.129 26.5719 32.2509 26.7496 32.4242 26.8633ZM48.4375 41.4062V47.6562C48.4375 47.8634 48.3552 48.0622 48.2087 48.2087C48.0622 48.3552 47.8634 48.4375 47.6562 48.4375C47.4491 48.4375 47.2503 48.3552 47.1038 48.2087C46.9573 48.0622 46.875 47.8634 46.875 47.6562V41.4062C46.8738 40.3706 46.4618 39.3778 45.7295 38.6455C44.9972 37.9132 44.0044 37.5012 42.9688 37.5H35.9375C35.8086 37.506 35.68 37.5186 35.5523 37.5375C36.3137 38.6841 36.7194 40.0299 36.7188 41.4062V47.6562C36.7188 47.8634 36.6364 48.0622 36.4899 48.2087C36.3434 48.3552 36.1447 48.4375 35.9375 48.4375C35.7303 48.4375 35.5316 48.3552 35.3851 48.2087C35.2386 48.0622 35.1562 47.8634 35.1562 47.6562V41.4062C35.1546 39.9564 34.5779 38.5663 33.5527 37.5411C32.5274 36.5159 31.1374 35.9392 29.6875 35.9375H20.3125C18.8626 35.9392 17.4726 36.5159 16.4473 37.5411C15.4221 38.5663 14.8454 39.9564 14.8438 41.4062V47.6562C14.8438 47.8634 14.7614 48.0622 14.6149 48.2087C14.4684 48.3552 14.2697 48.4375 14.0625 48.4375C13.8553 48.4375 13.6566 48.3552 13.5101 48.2087C13.3636 48.0622 13.2812 47.8634 13.2812 47.6562V41.4062C13.2806 40.0299 13.6863 38.6841 14.4477 37.5375C14.32 37.5186 14.1914 37.506 14.0625 37.5H7.03125C5.99563 37.5012 5.00278 37.9132 4.27048 38.6455C3.53819 39.3778 3.12624 40.3706 3.125 41.4062V47.6562C3.125 47.8634 3.04269 48.0622 2.89618 48.2087C2.74966 48.3552 2.55095 48.4375 2.34375 48.4375C2.13655 48.4375 1.93784 48.3552 1.79132 48.2087C1.64481 48.0622 1.5625 47.8634 1.5625 47.6562V41.4062C1.56489 39.9803 2.12372 38.6117 3.12002 37.5916C4.11633 36.5715 5.47143 35.9806 6.89687 35.9445C6.2036 35.2278 5.73668 34.3228 5.55435 33.3425C5.37203 32.3621 5.48238 31.3498 5.87162 30.4317C6.26087 29.5137 6.91179 28.7305 7.7432 28.18C8.57461 27.6294 9.54971 27.3358 10.5469 27.3358C11.544 27.3358 12.5191 27.6294 13.3505 28.18C14.182 28.7305 14.8329 29.5137 15.2221 30.4317C15.6114 31.3498 15.7217 32.3621 15.5394 33.3425C15.3571 34.3228 14.8902 35.2278 14.1969 35.9445C14.6846 35.955 15.1686 36.0312 15.6359 36.1711C16.9196 35.0155 18.5854 34.3758 20.3125 34.375H20.8797C19.9239 33.5371 19.2464 32.4276 18.9374 31.1947C18.6285 29.9617 18.7028 28.6639 19.1504 27.4743C19.5981 26.2847 20.3978 25.2598 21.443 24.5364C22.4881 23.813 23.7289 23.4255 25 23.4255C26.2711 23.4255 27.5119 23.813 28.557 24.5364C29.6022 25.2598 30.4019 26.2847 30.8496 27.4743C31.2972 28.6639 31.3715 29.9617 31.0625 31.1947C30.7536 32.4276 30.0761 33.5371 29.1203 34.375H29.6875C31.4145 34.3756 33.0803 35.015 34.3641 36.1703C34.8314 36.0304 35.3154 35.9542 35.8031 35.9437C35.1098 35.227 34.6429 34.322 34.4606 33.3417C34.2783 32.3613 34.3886 31.349 34.7779 30.4309C35.1671 29.5129 35.818 28.7297 36.6495 28.1792C37.4809 27.6286 38.456 27.3351 39.4531 27.3351C40.4503 27.3351 41.4254 27.6286 42.2568 28.1792C43.0882 28.7297 43.7391 29.5129 44.1284 30.4309C44.5176 31.349 44.628 32.3613 44.4456 33.3417C44.2633 34.322 43.7964 35.227 43.1031 35.9437C44.5287 35.9798 45.8839 36.5708 46.8802 37.5911C47.8766 38.6114 48.4353 39.9802 48.4375 41.4062ZM7.03125 32.4219C7.03125 33.1172 7.23744 33.7969 7.62374 34.375C8.01004 34.9532 8.55911 35.4038 9.2015 35.6699C9.8439 35.936 10.5508 36.0056 11.2327 35.8699C11.9147 35.7343 12.5411 35.3995 13.0328 34.9078C13.5245 34.4161 13.8593 33.7897 13.9949 33.1077C14.1306 32.4258 14.061 31.7189 13.7949 31.0765C13.5288 30.4341 13.0782 29.885 12.5001 29.4987C11.9219 29.1124 11.2422 28.9062 10.5469 28.9062C9.61479 28.9073 8.72118 29.278 8.06209 29.9371C7.40301 30.5962 7.03228 31.4898 7.03125 32.4219ZM25 34.375C25.9271 34.375 26.8334 34.1001 27.6042 33.585C28.3751 33.0699 28.9759 32.3379 29.3307 31.4813C29.6855 30.6248 29.7783 29.6823 29.5974 28.773C29.4166 27.8637 28.9701 27.0285 28.3146 26.3729C27.659 25.7174 26.8238 25.2709 25.9145 25.0901C25.0052 24.9092 24.0627 25.002 23.2062 25.3568C22.3496 25.7116 21.6176 26.3124 21.1025 27.0833C20.5874 27.8541 20.3125 28.7604 20.3125 29.6875C20.3139 30.9303 20.8083 32.1217 21.687 33.0005C22.5658 33.8792 23.7572 34.3736 25 34.375ZM35.9375 32.4219C35.9375 33.1172 36.1437 33.7969 36.53 34.375C36.9163 34.9532 37.4654 35.4038 38.1078 35.6699C38.7501 35.936 39.457 36.0056 40.139 35.8699C40.821 35.7343 41.4474 35.3995 41.939 34.9078C42.4307 34.4161 42.7655 33.7897 42.9012 33.1077C43.0368 32.4258 42.9672 31.7189 42.7011 31.0765C42.4351 30.4341 41.9844 29.885 41.4063 29.4987C40.8282 29.1124 40.1484 28.9062 39.4531 28.9062C38.521 28.9073 37.6274 29.278 36.9683 29.9371C36.3093 30.5962 35.9385 31.4898 35.9375 32.4219ZM17.9688 42.1875C17.7615 42.1875 17.5628 42.2698 17.4163 42.4163C17.2698 42.5628 17.1875 42.7616 17.1875 42.9688V47.6562C17.1875 47.8634 17.2698 48.0622 17.4163 48.2087C17.5628 48.3552 17.7615 48.4375 17.9688 48.4375C18.176 48.4375 18.3747 48.3552 18.5212 48.2087C18.6677 48.0622 18.75 47.8634 18.75 47.6562V42.9688C18.75 42.7616 18.6677 42.5628 18.5212 42.4163C18.3747 42.2698 18.176 42.1875 17.9688 42.1875ZM32.0312 42.1875C31.824 42.1875 31.6253 42.2698 31.4788 42.4163C31.3323 42.5628 31.25 42.7616 31.25 42.9688V47.6562C31.25 47.8634 31.3323 48.0622 31.4788 48.2087C31.6253 48.3552 31.824 48.4375 32.0312 48.4375C32.2385 48.4375 32.4372 48.3552 32.5837 48.2087C32.7302 48.0622 32.8125 47.8634 32.8125 47.6562V42.9688C32.8125 42.7616 32.7302 42.5628 32.5837 42.4163C32.4372 42.2698 32.2385 42.1875 32.0312 42.1875Z" />
            </svg>
          }
          title="Flexible Workforce Solutions"
          description="We provide adaptable staffing solutions to meet your changing needs."
        />

        {/* card */}
        <SubServiceCard
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M28.1791 15.1292L33.4154 8.122C33.4786 8.03752 33.5606 7.96893 33.6549 7.9217C33.7492 7.87446 33.8533 7.84988 33.9587 7.8499C34.0642 7.84992 34.1683 7.87454 34.2626 7.92181C34.3569 7.96908 34.4389 8.03769 34.502 8.1222L39.7355 15.1294C39.8109 15.2302 39.8567 15.35 39.8679 15.4754C39.879 15.6008 39.855 15.7268 39.7986 15.8393C39.7422 15.9519 39.6556 16.0465 39.5485 16.1125C39.4413 16.1786 39.3179 16.2136 39.192 16.2135H36.3803V22.3091C36.3803 22.6837 36.0767 22.9873 35.7021 22.9873C35.3275 22.9873 35.0239 22.6837 35.0239 22.3091V15.5352C35.0239 15.3553 35.0953 15.1828 35.2225 15.0556C35.3497 14.9284 35.5222 14.857 35.7021 14.857H37.839L33.9585 9.66116L30.0759 14.857H32.2124C32.3922 14.857 32.5647 14.9284 32.6919 15.0556C32.8191 15.1828 32.8906 15.3553 32.8906 15.5352V19.8214C32.8906 20.196 32.587 20.4996 32.2124 20.4996C31.8377 20.4996 31.5341 20.196 31.5341 19.8214V16.2135H28.7224C28.5966 16.2135 28.4732 16.1784 28.3661 16.1123C28.2591 16.0462 28.1725 15.9516 28.1161 15.839C28.0598 15.7265 28.0358 15.6005 28.0469 15.4752C28.058 15.3498 28.1038 15.2301 28.1791 15.1292ZM19.0684 4.66927C19.1118 4.53588 19.1954 4.4192 19.3078 4.33531C19.4202 4.25141 19.5558 4.20442 19.696 4.20081L23.5183 4.10286L24.7907 0.501103C24.8374 0.368814 24.924 0.254264 25.0385 0.17324C25.153 0.0922162 25.2898 0.0487061 25.4301 0.0487061C25.5704 0.0487061 25.7073 0.0922162 25.8218 0.17324C25.9363 0.254264 26.0229 0.368814 26.0696 0.501103L27.3419 4.10286L31.1642 4.20081C31.3044 4.20447 31.44 4.25149 31.5523 4.3354C31.6647 4.4193 31.7483 4.53596 31.7916 4.66933C31.8349 4.80269 31.8359 4.94621 31.7943 5.08013C31.7527 5.21404 31.6706 5.33177 31.5593 5.41712L28.525 7.74183L29.6114 11.4049C29.6512 11.5394 29.6485 11.6829 29.6034 11.8157C29.5583 11.9485 29.4732 12.064 29.3597 12.1465C29.2463 12.2289 29.11 12.2741 28.9698 12.2759C28.8296 12.2777 28.6922 12.236 28.5767 12.1565L25.4301 9.99095L22.2807 12.1567C22.1651 12.2361 22.0278 12.2777 21.8875 12.2758C21.7473 12.274 21.6111 12.2287 21.4977 12.1462C21.3843 12.0637 21.2992 11.9481 21.2542 11.8153C21.2092 11.6825 21.2064 11.539 21.2463 11.4045L22.3351 7.74163L19.301 5.41712C19.1897 5.33182 19.1075 5.2141 19.0659 5.08016C19.0242 4.94623 19.0251 4.80267 19.0684 4.66927ZM21.6496 5.50765L23.5308 6.94886C23.6399 7.03238 23.721 7.14707 23.7634 7.27772C23.8058 7.40837 23.8076 7.54883 23.7684 7.6805L23.0933 9.95169L25.046 8.60882C25.1592 8.53108 25.2932 8.48949 25.4305 8.48952C25.5677 8.48956 25.7017 8.53122 25.8148 8.60901L27.7658 9.95159L27.092 7.68011C27.053 7.54848 27.0548 7.40811 27.0972 7.27754C27.1397 7.14697 27.2208 7.03236 27.3297 6.94886L29.211 5.50765L26.8408 5.4469C26.7035 5.44339 26.5705 5.3983 26.4595 5.31758C26.3484 5.23686 26.2644 5.12432 26.2187 4.99485L25.4303 2.76321L24.6419 4.99485C24.5962 5.12434 24.5122 5.2369 24.4011 5.31762C24.2901 5.39834 24.1571 5.44343 24.0198 5.4469L21.6496 5.50765ZM11.6683 16.2135H14.48V22.3091C14.48 22.6837 14.7836 22.9873 15.1583 22.9873C15.5329 22.9873 15.8365 22.6837 15.8365 22.3091V15.5352C15.8365 15.3553 15.765 15.1828 15.6378 15.0556C15.5106 14.9284 15.3381 14.857 15.1583 14.857H13.0214L16.902 9.66116L20.7847 14.857H18.6483C18.4684 14.857 18.2959 14.9284 18.1687 15.0556C18.0415 15.1828 17.9701 15.3553 17.9701 15.5352V19.8214C17.9701 20.0013 18.0415 20.1738 18.1687 20.301C18.2959 20.4282 18.4684 20.4996 18.6483 20.4996C18.8282 20.4996 19.0007 20.4282 19.1279 20.301C19.2551 20.1738 19.3265 20.0013 19.3265 19.8214V16.2135H22.1382C22.2641 16.2135 22.3874 16.1784 22.4945 16.1123C22.6016 16.0462 22.6881 15.9516 22.7445 15.839C22.8009 15.7265 22.8249 15.6005 22.8137 15.4752C22.8026 15.3498 22.7568 15.2301 22.6815 15.1292L17.4452 8.122C17.382 8.03749 17.3 7.96888 17.2057 7.92162C17.1114 7.87436 17.0073 7.84974 16.9018 7.84974C16.7963 7.84978 16.6923 7.87443 16.598 7.92173C16.5037 7.96903 16.4217 8.03767 16.3585 8.1222L11.125 15.1294C11.0497 15.2302 11.0038 15.35 10.9927 15.4754C10.9815 15.6007 11.0055 15.7267 11.0619 15.8392C11.1183 15.9518 11.2048 16.0464 11.312 16.1125C11.4191 16.1786 11.5424 16.2136 11.6683 16.2135ZM32.3692 43.3387L29.7029 41.6551C29.4366 41.7799 29.1648 41.8928 28.8885 41.9936L28.1922 45.0705C28.1583 45.2206 28.0743 45.3547 27.9541 45.4507C27.8339 45.5467 27.6846 45.5991 27.5307 45.5991H23.3297C23.1759 45.5991 23.0266 45.5467 22.9063 45.4507C22.7861 45.3546 22.7022 45.2205 22.6682 45.0704L21.9719 41.9934C21.6959 41.8924 21.4244 41.7795 21.1582 41.6548L18.4913 43.3387C18.3611 43.4209 18.2069 43.4564 18.054 43.4393C17.901 43.4223 17.7584 43.3537 17.6496 43.2449L14.6786 40.2739C14.5698 40.1651 14.5012 40.0226 14.4841 39.8697C14.467 39.7168 14.5024 39.5627 14.5844 39.4325L16.2662 36.7653C16.1422 36.499 16.0299 36.2275 15.9295 35.9515L12.8529 35.2554C12.7028 35.2214 12.5688 35.1374 12.4727 35.0172C12.3767 34.897 12.3244 34.7477 12.3244 34.5939V30.3928C12.3244 30.2389 12.3767 30.0897 12.4727 29.9695C12.5688 29.8492 12.7028 29.7653 12.8529 29.7313L15.9293 29.0351C16.0295 28.7588 16.1418 28.4871 16.2659 28.2206L14.5841 25.551C14.5022 25.4209 14.4668 25.2668 14.484 25.114C14.5011 24.9612 14.5697 24.8187 14.6785 24.71L17.6495 21.739C17.7583 21.6302 17.9009 21.5616 18.0539 21.5445C18.2068 21.5275 18.361 21.5629 18.4912 21.6451L21.1579 23.3289C21.4241 23.2049 21.6958 23.0927 21.9719 22.9926L22.668 19.9161C22.702 19.7661 22.7859 19.632 22.9061 19.5359C23.0264 19.4399 23.1757 19.3875 23.3295 19.3875H27.5305C27.6844 19.3875 27.8337 19.4399 27.9539 19.5359C28.0741 19.632 28.1581 19.7661 28.192 19.9161L28.8882 22.9928C29.1642 23.0931 29.4356 23.2053 29.7017 23.3292L32.3689 21.6451C32.499 21.563 32.6532 21.5275 32.8062 21.5445C32.9592 21.5616 33.1018 21.6302 33.2106 21.739L36.1816 24.71C36.2903 24.8187 36.3589 24.9612 36.376 25.114C36.3931 25.2668 36.3579 25.4209 36.2759 25.551L34.5942 28.2206C34.7183 28.487 34.8306 28.7588 34.9308 29.0351L38.0073 29.7313C38.1573 29.7653 38.2914 29.8492 38.3874 29.9695C38.4835 30.0897 38.5358 30.2389 38.5358 30.3928V34.5939C38.5358 34.7477 38.4835 34.897 38.3874 35.0172C38.2914 35.1374 38.1573 35.2214 38.0073 35.2554L34.9306 35.9515C34.8303 36.2275 34.7179 36.499 34.594 36.7653L36.2757 39.4325C36.3578 39.5627 36.3932 39.7168 36.3761 39.8697C36.359 40.0226 36.2904 40.1651 36.1816 40.2739L33.2106 43.2449C33.1018 43.3537 32.9593 43.4223 32.8064 43.4393C32.6534 43.4564 32.4993 43.4209 32.3692 43.3387ZM30.106 40.3055L32.635 41.9024L34.8396 39.6978L33.2449 37.1686C33.1819 37.0688 33.1461 36.9542 33.141 36.8363C33.1358 36.7184 33.1615 36.6012 33.2156 36.4963C33.4353 36.069 33.6193 35.6242 33.7658 35.1666C33.8018 35.0542 33.8665 34.9532 33.9535 34.8735C34.0405 34.7938 34.1469 34.7382 34.262 34.7121L37.1794 34.052V30.9346L34.262 30.2744C34.1469 30.2484 34.0406 30.1928 33.9535 30.1131C33.8665 30.0334 33.8018 29.9323 33.7658 29.82C33.6166 29.3543 33.4317 28.9074 33.2164 28.4916C33.162 28.3867 33.136 28.2693 33.1409 28.1511C33.1459 28.033 33.1817 27.9182 33.2447 27.8182L34.8397 25.2862L32.635 23.0815L30.106 24.6783C30.0062 24.7414 29.8916 24.7773 29.7736 24.7825C29.6557 24.7877 29.5384 24.7619 29.4334 24.7078C29.0061 24.4883 28.5613 24.3043 28.1038 24.1577C27.9914 24.1217 27.8903 24.057 27.8106 23.9699C27.7309 23.8829 27.6752 23.7766 27.6492 23.6615L26.9889 20.7441H23.8716L23.2115 23.6615C23.1854 23.7766 23.1297 23.8829 23.05 23.9699C22.9703 24.0569 22.8693 24.1217 22.7569 24.1577C22.2913 24.307 21.8443 24.4917 21.4287 24.7071C21.3235 24.7614 21.206 24.7874 21.0878 24.7823C20.9695 24.7773 20.8547 24.7415 20.7545 24.6783L18.2254 23.0815L16.0208 25.2862L17.6158 27.8182C17.6788 27.9182 17.7145 28.033 17.7195 28.1511C17.7245 28.2692 17.6985 28.3866 17.6442 28.4915C17.4288 28.9074 17.244 29.3543 17.0947 29.82C17.0587 29.9323 16.994 30.0334 16.9069 30.1131C16.8199 30.1928 16.7136 30.2484 16.5985 30.2744L13.681 30.9346V34.0519L16.5985 34.712C16.7136 34.7381 16.8199 34.7937 16.9069 34.8734C16.9939 34.9531 17.0586 35.0542 17.0947 35.1665C17.2412 35.6242 17.4252 36.0689 17.6449 36.4963C17.6989 36.6012 17.7246 36.7184 17.7195 36.8363C17.7143 36.9542 17.6785 37.0687 17.6156 37.1685L16.0208 39.6977L18.2254 41.9023L20.7545 40.3054C20.8544 40.2423 20.969 40.2065 21.0869 40.2013C21.2049 40.1961 21.3222 40.2218 21.4272 40.2759C21.8545 40.4964 22.2993 40.6814 22.757 40.8289C22.8694 40.8649 22.9704 40.9297 23.0501 41.0167C23.1298 41.1037 23.1854 41.21 23.2115 41.3251L23.8716 44.2424H26.9889L27.6492 41.325C27.6752 41.21 27.7309 41.1037 27.8106 41.0167C27.8903 40.9297 27.9913 40.865 28.1037 40.8289C28.5611 40.6822 29.0054 40.4975 29.4321 40.2767C29.5371 40.2222 29.6546 40.1962 29.7729 40.2013C29.8911 40.2064 30.006 40.2423 30.106 40.3055ZM42.5805 32.4933C42.5805 28.7257 41.3813 25.1491 39.1125 22.1498C39.0588 22.0788 38.9916 22.019 38.9148 21.9739C38.838 21.9288 38.753 21.8993 38.6648 21.8871C38.5766 21.8749 38.4868 21.8801 38.4006 21.9026C38.3144 21.9251 38.2335 21.9643 38.1625 22.0181C38.0914 22.0718 38.0317 22.139 37.9866 22.2158C37.9415 22.2926 37.912 22.3776 37.8998 22.4658C37.8876 22.554 37.8928 22.6438 37.9153 22.73C37.9378 22.8162 37.977 22.8971 38.0307 22.9681C40.1198 25.7298 41.2241 29.0237 41.2241 32.4933C41.2241 38.5882 37.7601 44.0743 32.3265 46.7072L32.7685 45.0578C32.8135 44.8846 32.7882 44.7007 32.6981 44.546C32.608 44.3914 32.4605 44.2786 32.2876 44.2323C32.1148 44.186 31.9306 44.2098 31.7753 44.2987C31.62 44.3875 31.506 44.5342 31.4583 44.7067L30.5303 48.1692C30.4838 48.3429 30.5081 48.528 30.598 48.6838C30.688 48.8396 30.8361 48.9533 31.0098 48.9998L34.4723 49.9279C34.646 49.9743 34.8311 49.9499 34.9869 49.86C35.1426 49.7701 35.2563 49.622 35.303 49.4484C35.3495 49.2746 35.3252 49.0895 35.2353 48.9337C35.1453 48.778 34.9972 48.6643 34.8235 48.6177L32.6765 48.0422C38.7157 45.2305 42.5805 39.2015 42.5805 32.4933ZM31.6073 30.8381C32.0499 32.488 31.8233 34.2118 30.9693 35.6913C30.1152 37.1711 28.7358 38.229 27.0853 38.6702C26.5417 38.8166 25.9812 38.891 25.4182 38.8913C24.3104 38.8913 23.2172 38.601 22.2321 38.0325C20.7523 37.1783 19.6944 35.799 19.2532 34.1486C18.8107 32.4988 19.0372 30.7748 19.8911 29.295C20.745 27.8151 22.1242 26.7564 23.7746 26.3137L23.7751 26.3136C25.4255 25.8724 27.1493 26.0998 28.6285 26.954C30.1083 27.8084 31.1661 29.1879 31.6073 30.8381ZM30.297 31.189C29.9493 29.8885 29.116 28.8018 27.9501 28.1285C26.7847 27.4554 25.4265 27.276 24.126 27.6238C22.8255 27.9725 21.7388 28.8068 21.0661 29.9729C20.3932 31.1389 20.2148 32.4972 20.5636 33.7977C20.9113 35.0983 21.7447 36.1848 22.9103 36.8576C24.0759 37.5305 25.4342 37.709 26.7345 37.3601C28.0352 37.0123 29.1218 36.179 29.7946 35.0134C30.4674 33.8476 30.6458 32.4895 30.297 31.189ZM25.4302 48.287C16.7214 48.287 9.63638 41.2019 9.63638 32.4932C9.63638 30.0054 10.2211 27.5682 11.3329 25.3701L11.8342 27.2403C11.8808 27.414 11.9945 27.5621 12.1503 27.652C12.3061 27.7419 12.4912 27.7663 12.6649 27.7198C12.8386 27.6732 12.9867 27.5595 13.0767 27.4037C13.1666 27.2479 13.1909 27.0628 13.1444 26.8891L12.2164 23.4266C12.1698 23.2529 12.0561 23.1048 11.9003 23.0148C11.7445 22.9249 11.5594 22.9005 11.3857 22.947L7.92329 23.8751C7.7508 23.9228 7.60415 24.0367 7.5153 24.1921C7.42644 24.3474 7.40258 24.5316 7.44891 24.7044C7.49524 24.8773 7.60801 25.0248 7.76265 25.1149C7.91728 25.205 8.10125 25.2303 8.27446 25.1853L10.1621 24.6793C8.92856 27.0871 8.28013 29.7623 8.28013 32.493C8.28013 41.9496 15.9737 49.6433 25.4304 49.6433C25.5204 49.6448 25.6099 49.6284 25.6935 49.595C25.7771 49.5616 25.8532 49.5119 25.9174 49.4487C25.9816 49.3856 26.0326 49.3103 26.0674 49.2273C26.1022 49.1442 26.1201 49.0551 26.1201 48.9651C26.12 48.875 26.1021 48.7859 26.0673 48.7029C26.0325 48.6198 25.9815 48.5446 25.9172 48.4815C25.853 48.4184 25.7769 48.3687 25.6933 48.3353C25.6097 48.3019 25.5202 48.2855 25.4302 48.287Z" />
            </svg>
          }
          title="Specialized Skill Sets on Demand"
          description="We provide access to professionals with specific skill sets when needed."
        />

        {/* card */}
        <SubServiceCard
          ref={ref}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M29.1654 5.72913H20.832C20.4176 5.72913 20.0202 5.56451 19.7272 5.27148C19.4342 4.97845 19.2695 4.58103 19.2695 4.16663C19.2695 3.75223 19.4342 3.3548 19.7272 3.06177C20.0202 2.76875 20.4176 2.60413 20.832 2.60413H29.1654C29.5798 2.60413 29.9772 2.76875 30.2702 3.06177C30.5632 3.3548 30.7279 3.75223 30.7279 4.16663C30.7279 4.58103 30.5632 4.97845 30.2702 5.27148C29.9772 5.56451 29.5798 5.72913 29.1654 5.72913Z" />
              <path d="M25 11.9791C24.5856 11.9791 24.1882 11.8145 23.8951 11.5215C23.6021 11.2285 23.4375 10.831 23.4375 10.4166V4.16663C23.4375 3.75223 23.6021 3.3548 23.8951 3.06177C24.1882 2.76875 24.5856 2.60413 25 2.60413C25.4144 2.60413 25.8118 2.76875 26.1049 3.06177C26.3979 3.3548 26.5625 3.75223 26.5625 4.16663V10.4166C26.5625 10.831 26.3979 11.2285 26.1049 11.5215C25.8118 11.8145 25.4144 11.9791 25 11.9791Z" />
              <path d="M25.0001 47.3958C21.8115 47.405 18.675 46.5882 15.8959 45.0249C15.5686 44.805 15.3366 44.4694 15.2465 44.0855C15.1563 43.7016 15.2146 43.2979 15.4096 42.9552C15.6047 42.6125 15.9221 42.3562 16.2982 42.2378C16.6744 42.1193 17.0813 42.1475 17.4376 42.3166C19.7476 43.6095 22.3529 44.2827 25.0001 44.2708C27.8645 44.27 30.6735 43.4819 33.1203 41.9926C35.567 40.5032 37.5573 38.37 38.8736 35.8259C40.1899 33.2819 40.7815 30.4249 40.5838 27.5674C40.3861 24.7098 39.4067 21.9616 37.7526 19.623C36.0986 17.2845 33.8335 15.4456 31.205 14.3074C28.5765 13.1691 25.6856 12.7754 22.8484 13.1691C20.0112 13.5628 17.3368 14.7288 15.1175 16.5398C12.8982 18.3507 11.2195 20.7369 10.2647 23.4374C10.1987 23.634 10.0944 23.8155 9.9576 23.9714C9.82083 24.1272 9.65441 24.2543 9.46805 24.3451C9.28168 24.436 9.07909 24.4889 8.87208 24.5007C8.66507 24.5125 8.45778 24.483 8.2623 24.4138C8.06682 24.3447 7.88705 24.2374 7.73347 24.0981C7.57988 23.9588 7.45556 23.7903 7.36775 23.6025C7.27994 23.4146 7.23039 23.2112 7.22199 23.004C7.21359 22.7969 7.2465 22.5901 7.31882 22.3958C8.4646 19.155 10.4792 16.2916 13.1424 14.1185C15.8056 11.9453 19.0149 10.5461 22.4196 10.0737C25.8243 9.60128 29.2934 10.0739 32.4476 11.4399C35.6019 12.8058 38.32 15.0126 40.3048 17.819C42.2896 20.6254 43.4647 23.9233 43.7018 27.3525C43.9389 30.7816 43.2288 34.2099 41.6491 37.2628C40.0694 40.3156 37.6809 42.8754 34.7447 44.6625C31.8084 46.4496 28.4374 47.3951 25.0001 47.3958Z" />
              <path d="M29.166 30.7291C28.9244 30.7295 28.6861 30.6731 28.4702 30.5645L24.3035 28.4812C24.0432 28.352 23.8242 28.1527 23.671 27.9057C23.5179 27.6587 23.4368 27.3739 23.4368 27.0833V20.8333C23.4368 20.4189 23.6015 20.0215 23.8945 19.7284C24.1875 19.4354 24.5849 19.2708 24.9993 19.2708C25.4137 19.2708 25.8112 19.4354 26.1042 19.7284C26.3972 20.0215 26.5618 20.4189 26.5618 20.8333V26.1187L29.8639 27.7687C30.1789 27.926 30.4315 28.185 30.5809 28.5038C30.7302 28.8226 30.7675 29.1825 30.6867 29.5252C30.6059 29.8678 30.4118 30.1731 30.1358 30.3917C29.8598 30.6102 29.5181 30.7291 29.166 30.7291ZM16.666 28.6458H4.16602C3.75161 28.6458 3.35419 28.4812 3.06116 28.1881C2.76814 27.8951 2.60352 27.4977 2.60352 27.0833C2.60352 26.6689 2.76814 26.2715 3.06116 25.9784C3.35419 25.6854 3.75161 25.5208 4.16602 25.5208H16.666C17.0804 25.5208 17.4778 25.6854 17.7709 25.9784C18.0639 26.2715 18.2285 26.6689 18.2285 27.0833C18.2285 27.4977 18.0639 27.8951 17.7709 28.1881C17.4778 28.4812 17.0804 28.6458 16.666 28.6458ZM16.666 34.8958H6.24935C5.83495 34.8958 5.43752 34.7312 5.14449 34.4381C4.85147 34.1451 4.68685 33.7477 4.68685 33.3333C4.68685 32.9189 4.85147 32.5215 5.14449 32.2284C5.43752 31.9354 5.83495 31.7708 6.24935 31.7708H16.666C17.0804 31.7708 17.4778 31.9354 17.7709 32.2284C18.0639 32.5215 18.2285 32.9189 18.2285 33.3333C18.2285 33.7477 18.0639 34.1451 17.7709 34.4381C17.4778 34.7312 17.0804 34.8958 16.666 34.8958ZM16.666 41.1458H10.416C10.0016 41.1458 9.60419 40.9812 9.31116 40.6881C9.01814 40.3951 8.85352 39.9977 8.85352 39.5833C8.85352 39.1689 9.01814 38.7715 9.31116 38.4784C9.60419 38.1854 10.0016 38.0208 10.416 38.0208H16.666C17.0804 38.0208 17.4778 38.1854 17.7709 38.4784C18.0639 38.7715 18.2285 39.1689 18.2285 39.5833C18.2285 39.9977 18.0639 40.3951 17.7709 40.6881C17.4778 40.9812 17.0804 41.1458 16.666 41.1458Z" />
            </svg>
          }
          title="Short-Term & Project-Based Staffing"
          description="We offer staffing for short-term projects and temporary roles."
        />
      </div>
    </section>
  );
};

export default ContractStaffing;
