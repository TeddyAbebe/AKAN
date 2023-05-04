import React from "react";

export const navlink = [
  {
    url: "/",
    text: "Home",
    icon: require("./files/Icons/Home.png"),
  },
  {
    url: "/summary",
    text: "Executive Summary",
    icon: require("../data/files/Icons/message.png"),
  },
  {
    url: "/analysis",
    text: "Onsite Analysis",
    icon: require("../data/files/Icons/list.png"),
  },
  {
    url: "/mapping",
    text: "Experience Mapping",
    icon: require("../data/files/Icons/map.png"),
  },
  {
    url: "/consideration",
    text: "Consideration",
    icon: require("../data/files/Icons/consider.png"),
  },
  {
    url: "/decision",
    text: "Decision",
    icon: require("../data/files/Icons/bulb.png"),
  },
  {
    url: "/loyality",
    text: "Loyallity",
    icon: require("../data/files/Icons/loyality.png"),
  },
  {
    url: "/feedback",
    text: "User Feedback",
    icon: require("../data/files/Icons/repeat.png"),
  },
  {
    url: "/conclusion",
    text: "Conclusion",
    icon: require("../data/files/Icons/target.png"),
  },
  {
    url: "/about",
    text: "About Company",
    icon: require("../data/files/Icons/send.png"),
  },
];

export const socials = [
  {
    icon1: require("../data/files/Icons/twitter.png"),
    icon2: require("../data/files/Icons/Instagram.png"),
    icon3: require("../data/files/Icons/linkedin.png"),
    icon4: require("../data/files/Icons/discord.png"),
  },
];

export const home = [
  {
    header: "Herby Box |  Customer     Journey Analysis",
    note: "Journey Mapping can transform Customer Experience using the founders' foundation. A Partner's JeS score shows poor Onsite Conversion Rates with high drop-offs. Improving Conversion Rates to industry average can bring in £53k p.a. The Consideration Phase is the most problematic and needs urgent attention.",
    image: "./files/Images/woman.jpg",
  },
];

export const executiveSummary = [
  {
    header: "Executive Summery",
    note: "Journey Mapping Exercise presents an opportunity to transform an unmanaged Customer Experience by building on the solid foundation laid by it’s founders. At the halfway point of 2022 the Partner’s [TP] JeS* score and Onsite Conversion Rate (CvR) highlights a need to optimise all phases of the customer journey: A CvR increase to industry average is estimated to generate incremental ~£53k p.a for the business. The Consideration Phase of the journey identified as the highest friction point in the journey and therefore requires urgent attention. Onsite visits are volatile and only 13% of visitors return to the site. users are leaving the Partner’s [TP] website at almost twice the rate of the industry average after landing on the homepage",
    image: "",
  },
];

export const onsiteAnalysis = [
  {
    header: "Onsite Analytics",
    note: "The goal of a customer journey onsite analysis is to identify opportunities for improving the customer experience and increase customer satisfaction and loyalty. This analysis can provide valuable insights to help companies optimize their online and offline presence and enhance the overall customer experience.",
  },
];

export const experienceMapping = [
  {
    header: "Experience Mapping",
    note: "At [Your Company Name], we help businesses understand their customers' journey through our Experience Mapping service. We identify touchpoints and pain points, then provide customized plans for improvement. With our expertise, you can deliver a seamless, engaging experience that drives results. Contact us today to learn more.",
  },
];

export const consideration = [
  {
    header: "Consideration Phase: 23%",
    note: "At this stage in the journey potential customers, through your marketing efforts, are evaluating:",
    list1: "The Problem",
    list2: "It’s Urgency",
    list3: "How it can be solved",
    list4: "Whether it really needs to be solved here and now",
    icon1: require("./files/Icons/Qmessage.png"),
    icon2: require("./files/Icons/clock.png"),
    icon3: require("./files/Icons/thick.png"),
    icon4: require("./files/Icons/person.png"),
  },
];

export const decision = [
  {
    header: "Decision Phase: 38%",
    note1:
      "As the final stop for potential buyers, this is the phase to turn them into customers. Your goal here is to remove as much friction as possible and encourage them to take the final steps to convert. Some ways to optimise this final part of your funnel is to:",
    note2:
      "Remove any obstacles to purchase. A small incentive can create enough encouragement for consumers to buy. This is often done, depending on your business, by offering free trials, discounts, coupons, or a phone call.",
    blueNote:
      "Make sure product or service pages are fully built out with interesting descriptions, videos and photos",
    greenNote:
      "Ensure the checkout process has no issues with payments or abandoned carts.",
    pinkNote:
      "Make it simple for users to compare pricing and clearly outline all product benefits.",
    iconNote: "Optimised Solutions",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5547 0H10.4632C3.90795 0 0 3.906 0 10.458V25.524C0 32.094 3.90795 36 10.4632 36H25.5367C32.092 36 35.9999 32.094 35.9999 25.542V10.458C36.0179 3.906 32.11 0 25.5547 0ZM10.1391 29.07C10.1391 29.808 9.52675 30.42 8.78838 30.42C8.05001 30.42 7.43771 29.808 7.43771 29.07V25.344C7.43771 24.606 8.05001 23.994 8.78838 23.994C9.52675 23.994 10.1391 24.606 10.1391 25.344V29.07ZM19.3596 29.07C19.3596 29.808 18.7473 30.42 18.009 30.42C17.2706 30.42 16.6583 29.808 16.6583 29.07V21.6C16.6583 20.862 17.2706 20.25 18.009 20.25C18.7473 20.25 19.3596 20.862 19.3596 21.6V29.07ZM28.5802 29.07C28.5802 29.808 27.9679 30.42 27.2296 30.42C26.4912 30.42 25.8789 29.808 25.8789 29.07V17.874C25.8789 17.136 26.4912 16.524 27.2296 16.524C27.9679 16.524 28.5802 17.136 28.5802 17.874V29.07ZM28.5802 12.186C28.5802 12.924 27.9679 13.536 27.2296 13.536C26.4912 13.536 25.8789 12.924 25.8789 12.186V10.44C21.3022 15.1591 15.4937 18.5016 9.11254 20.088C9.00449 20.124 8.89643 20.124 8.78838 20.124C8.17607 20.124 7.63581 19.71 7.47372 19.098C7.29363 18.378 7.72585 17.64 8.46422 17.46C14.487 15.9589 19.9546 12.7674 24.2221 8.262H21.9709C21.2326 8.262 20.6203 7.65 20.6203 6.912C20.6203 6.174 21.2326 5.562 21.9709 5.562H27.2476C27.3196 5.562 27.3736 5.598 27.4457 5.598C27.5357 5.616 27.6258 5.616 27.7158 5.652C27.8059 5.688 27.8779 5.742 27.9679 5.796C28.022 5.832 28.076 5.85 28.13 5.886C28.148 5.904 28.148 5.922 28.166 5.922C28.2381 5.994 28.2921 6.066 28.3461 6.138C28.4002 6.21 28.4542 6.264 28.4722 6.336C28.5082 6.408 28.5082 6.48 28.5262 6.57C28.5442 6.66 28.5802 6.75 28.5802 6.858C28.5802 6.876 28.5982 6.894 28.5982 6.912V12.186H28.5802Z"
          fill="white"
        />
      </svg>
    ),
    bulb: (
      <svg
        width="24"
        height="30"
        viewBox="0 0 24 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.12084 29C10.3137 28.0902 13.6879 28.0902 16.8807 29M6.84199 23.4571V21.8335C3.63517 19.8879 1 16.0946 1 12.0635C1 5.13487 7.34393 -0.296021 14.5105 1.27166C17.6615 1.97152 20.4222 4.07109 21.8583 6.9685C24.7723 12.8473 21.7049 19.09 17.2014 21.8195V23.4431C17.2014 23.8491 17.3548 24.7869 15.8629 24.7869H8.18049C6.64679 24.8009 6.84199 24.199 6.84199 23.4571Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

export const loyality = [
  {
    header: "Loyalty Phase: 50%",
    note1:
      "It’s far cheaper to retain existing customers than finding new for new ones. Existing customers are more likely to make purchases since they have previously experienced your product and know what to expect. The probability of selling to an existing customer is between 60% and 70%, whilst the probability of selling to a new customer can vary from 5% to 20%.",
    note2:
      "Here is where repeat customers become loyal advocates; spending more, writing reviews, posting about TP’s on socials, and driving more new prospect customers for you.",
    note3: "Some ways to accomplish this level of advocacy are to: ",
    head: "Achieve Level Of Advocacy",
    blueNote:
      "Do the basics well; billing, product support, returns, reviews and research",
    greenNote:
      "Nurture the personal connection with your customers through content & community development",
    pinkNote:
      "Reward customers with special promotions or early previews of new products",
    icon: (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.58984 32.8208C1.58984 26.6982 7.68075 21.7464 15.1797 21.7464C16.6985 21.7464 18.1698 21.9521 19.5462 22.3317M15.1797 17.0002C17.2776 17.0002 19.2896 16.1668 20.7731 14.6834C22.2566 13.1999 23.09 11.1879 23.09 9.08996C23.09 6.99202 22.2566 4.98002 20.7731 3.49655C19.2896 2.01309 17.2776 1.17969 15.1797 1.17969C13.0818 1.17969 11.0697 2.01309 9.58628 3.49655C8.10282 4.98002 7.26942 6.99202 7.26942 9.08996C7.26942 11.1879 8.10282 13.1999 9.58628 14.6834C11.0697 16.1668 13.0818 17.0002 15.1797 17.0002Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M31.0002 26.493C31.0002 27.6795 30.668 28.8028 30.0826 29.752C29.7504 30.3215 29.3232 30.8278 28.8328 31.2391C27.7253 32.2358 26.2699 32.8212 24.672 32.8212C23.5813 32.8235 22.5087 32.5416 21.56 32.0035C20.6113 31.4653 19.8191 30.6894 19.2614 29.752C18.6591 28.7718 18.3414 27.6434 18.3438 26.493C18.3438 24.4996 19.2614 22.7119 20.7168 21.557C21.6471 20.8114 22.7691 20.3438 23.9535 20.2081C25.1379 20.0724 26.3365 20.2741 27.4113 20.79C28.4861 21.3059 29.3932 22.115 30.0281 23.124C30.6631 24.1329 31.0001 25.3008 31.0002 26.493Z"
          stroke="white"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22.2041 26.4928L23.7703 28.059L27.1401 24.9424"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

export const feedback = [
  {
    header: "Audit 🔬",
    secHeader: "Customer Research & User Testing",
    noteHeader: "Methodology",
    note: "30 minutes interview followed by 1 hour of live user testing with x2 Existing Customers and x1 Prospective Customer",
  },
  {
    Header2: "What are users saying?",
    icon: (
      <svg
        width="26"
        height="24"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.881 0H6.29368C2.81957 0 0 2.62307 0 5.8578V14.0681C0 17.3029 2.81957 19.9259 6.29368 19.9259H8.18179C8.52165 19.9259 8.97479 20.1377 9.18878 20.3964L11.0769 22.7372C11.9076 23.7723 13.2671 23.7723 14.0978 22.7372L15.986 20.3964C16.2251 20.1024 16.6027 19.9259 16.9929 19.9259H18.881C22.3552 19.9259 25.1747 17.3029 25.1747 14.0681V5.8578C25.1747 2.62307 22.3552 0 18.881 0ZM7.55242 11.7626C6.84753 11.7626 6.29368 11.2333 6.29368 10.5864C6.29368 9.93944 6.86011 9.41012 7.55242 9.41012C8.24472 9.41012 8.81116 9.93944 8.81116 10.5864C8.81116 11.2333 8.25731 11.7626 7.55242 11.7626ZM12.5874 11.7626C11.8825 11.7626 11.3286 11.2333 11.3286 10.5864C11.3286 9.93944 11.8951 9.41012 12.5874 9.41012C13.2797 9.41012 13.8461 9.93944 13.8461 10.5864C13.8461 11.2333 13.2923 11.7626 12.5874 11.7626ZM17.6223 11.7626C16.9174 11.7626 16.3636 11.2333 16.3636 10.5864C16.3636 9.93944 16.93 9.41012 17.6223 9.41012C18.3146 9.41012 18.881 9.93944 18.881 10.5864C18.881 11.2333 18.3272 11.7626 17.6223 11.7626Z"
          fill="#3D9BA2"
        />
      </svg>
    ),
  },
  {
    id: 1,
    image: require("./files/Images/user1.png"),
    feedbackTitle: "Colors?",
    feedback:
      "Really like the colours on the homepage; they are welcoming and calm but this could be more personalised.",
  },
  {
    id: 2,
    image: require("./files/Images/user2.png"),
    feedbackTitle: "Recycling?",
    feedback:
      "Disappointed there was no information on recycling the glass jars; maybe TP could create an incentive for re-using the jars or sending jars back to TP Box for discounts on next order.",
  },
  {
    id: 3,
    image: require("./files/Images/user3.png"),
    feedbackTitle: "Pop ups?",
    feedback:
      "The '15% off' pop up isn't relevant or personalised to me so I automatically cancel it.",
  },
  {
    id: 4,
    image: require("./files/Images/user4.png"),
    feedbackTitle: "Information?",
    feedback:
      "The 'Box info' is pretty much the the same as description, so maybe box should include info on what is included in the box.",
  },
  {
    id: 5,
    image: require("./files/Images/user5.png"),
    feedbackTitle: "Unsure?",
    feedback:
      "I took the Quiz because I was new to their products so was unsure what I needed.",
  },
  {
    id: 6,
    image: require("./files/Images/user6.png"),
    feedbackTitle: "Frequent user?",
    feedback:
      "I've only been on the website twice in the past 2+ years to change my bank details and home address.",
  },
];

export const conclusion = [
  {
    header: "Conclusion",
    header2: "Key Takeaways",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.2397 3.7621C25.209 -1.25403 17.0511 -1.25403 12.0543 3.7621C8.53623 7.24789 7.4825 12.264 8.84215 16.685L0.854182 24.6768C0.293325 25.255 -0.0975761 26.3942 0.0213937 27.2104L0.531264 30.9173C0.718216 32.1415 1.85693 33.2978 3.08062 33.4678L6.78567 33.978C7.60147 34.097 8.74018 33.7229 9.31803 33.1278L10.7117 31.7334C11.0516 31.4104 11.0516 30.8662 10.7117 30.5262L7.41451 27.2274C7.17746 26.9874 7.04451 26.6636 7.04451 26.3262C7.04451 25.9888 7.17746 25.665 7.41451 25.425C7.90739 24.9319 8.72318 24.9319 9.21605 25.425L12.5302 28.7408C12.8531 29.0638 13.397 29.0638 13.7199 28.7408L17.323 25.1529C21.7249 26.5303 26.7386 25.459 30.2397 21.9732C35.2534 16.9571 35.2534 8.77824 30.2397 3.7621ZM21.249 16.9911C20.1221 16.9911 19.0414 16.5432 18.2446 15.746C17.4477 14.9488 17.0001 13.8676 17.0001 12.7401C17.0001 11.6127 17.4477 10.5315 18.2446 9.73425C19.0414 8.93704 20.1221 8.48917 21.249 8.48917C22.3759 8.48917 23.4566 8.93704 24.2534 9.73425C25.0503 10.5315 25.4979 11.6127 25.4979 12.7401C25.4979 13.8676 25.0503 14.9488 24.2534 15.746C23.4566 16.5432 22.3759 16.9911 21.249 16.9911Z"
          fill="white"
        />
      </svg>
    ),
    note1:
      "JeS score (70) and Onsite Conversion Rate (1%) indicate the Partner’s Experience is currently unmanaged and impacting the brand’s ability to attract and retain new customers.",

    note2:
      "Prioritisation exercise recommended to inform sequencing and execution",
    note3:
      "The Experience Mapping Exercise highlights the need to invest in all phases of the User Journey, however the the greatest opportunity to transform an unmanaged experience into one that people love, and scale the business lies in the Consideration Phase 23% :",

    icon1: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.2956 0H8.71935C3.25662 0 0 3.255 0 8.715V21.27C0 26.745 3.25662 30 8.71935 30H21.2806C26.7433 30 29.9999 26.745 29.9999 21.285V8.715C30.015 3.255 26.7583 0 21.2956 0ZM22.9014 11.94L19.4347 16.41C18.9995 16.965 18.3842 17.325 17.6788 17.4C16.9735 17.49 16.2831 17.295 15.7278 16.86L12.9815 14.7C12.943 14.6663 12.8972 14.6419 12.8477 14.6289C12.7983 14.6159 12.7464 14.6146 12.6963 14.625C12.6363 14.625 12.5312 14.655 12.4412 14.775L8.86942 19.41C8.64431 19.695 8.31414 19.845 7.98398 19.845C7.74386 19.845 7.50374 19.77 7.29363 19.605C7.17637 19.5154 7.07791 19.4035 7.00388 19.2759C6.92986 19.1482 6.88172 19.0072 6.86221 18.861C6.8427 18.7147 6.8522 18.5661 6.89017 18.4235C6.92815 18.2809 6.99385 18.1472 7.08353 18.03L10.6553 13.395C11.0905 12.84 11.7058 12.48 12.4112 12.39C13.1015 12.3 13.8069 12.495 14.3622 12.93L17.1085 15.09C17.2136 15.18 17.3186 15.18 17.3937 15.165C17.4537 15.165 17.5588 15.135 17.6488 15.015L21.1155 10.545C21.2052 10.4274 21.3174 10.3289 21.4457 10.2553C21.5739 10.1816 21.7156 10.1344 21.8624 10.1162C22.0092 10.098 22.1581 10.1094 22.3004 10.1495C22.4428 10.1897 22.5757 10.2578 22.6913 10.35C23.1866 10.755 23.2766 11.46 22.9014 11.94Z"
          fill="#497E4F"
        />
      </svg>
    ),
    head1: "Top funnel activity",
    headNote1:
      "volume and volatility of Visitors indicates a need to invest in your Paid & Organic marketing to drive consistent traffic",

    icon2: (
      <svg
        width="18"
        height="22"
        viewBox="0 0 18 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15.4V18.15C18 20.273 16.3376 22 14.2941 22H3.70588C1.66235 22 0 20.273 0 18.15V17.435C0 15.708 1.35529 14.3 3.01765 14.3H16.9412C17.5235 14.3 18 14.795 18 15.4ZM12.7059 0H5.29412C1.05882 0 0 1.1 0 5.5V13.838C0.804706 13.101 1.86353 12.65 3.01765 12.65H16.9412C17.5235 12.65 18 12.155 18 11.55V5.5C18 1.1 16.9412 0 12.7059 0ZM10.0588 9.625H4.76471C4.33059 9.625 3.97059 9.251 3.97059 8.8C3.97059 8.349 4.33059 7.975 4.76471 7.975H10.0588C10.4929 7.975 10.8529 8.349 10.8529 8.8C10.8529 9.251 10.4929 9.625 10.0588 9.625ZM13.2353 5.775H4.76471C4.33059 5.775 3.97059 5.401 3.97059 4.95C3.97059 4.499 4.33059 4.125 4.76471 4.125H13.2353C13.6694 4.125 14.0294 4.499 14.0294 4.95C14.0294 5.401 13.6694 5.775 13.2353 5.775Z"
          fill="#497E4F"
        />
      </svg>
    ),
    head2: "Onboarding",
    headNote2:
      "optimise ‘tea finder’ experience to make your onboard experience more personalised & helpful",

    icon3: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.2482 0C6.3892 0 0 6.39032 0 14.2507C0 22.1111 6.3892 28.5014 14.2482 28.5014C22.1072 28.5014 28.4964 22.1111 28.4964 14.2507C28.4964 6.39032 22.1072 0 14.2482 0ZM14.2482 17.6259H9.74878C9.13386 17.6259 8.62392 17.1159 8.62392 16.5008C8.62392 15.8858 9.13386 15.3758 9.74878 15.3758H14.2482C14.8631 15.3758 15.3731 15.8858 15.3731 16.5008C15.3731 17.1159 14.8631 17.6259 14.2482 17.6259ZM18.7477 13.1257H9.74878C9.13386 13.1257 8.62392 12.6156 8.62392 12.0006C8.62392 11.3856 9.13386 10.8755 9.74878 10.8755H18.7477C19.3626 10.8755 19.8725 11.3856 19.8725 12.0006C19.8725 12.6156 19.3626 13.1257 18.7477 13.1257ZM28.9464 30C28.6764 30 28.4065 29.895 28.2115 29.7L25.4218 26.9098C25.2271 26.7118 25.118 26.4451 25.118 26.1673C25.118 25.8895 25.2271 25.6228 25.4218 25.4248C25.8268 25.0198 26.4867 25.0198 26.9066 25.4248L29.6963 28.2149C30.1012 28.6199 30.1012 29.28 29.6963 29.7C29.4863 29.895 29.2163 30 28.9464 30Z"
          fill="#497E4F"
        />
      </svg>
    ),
    head3: "Browsing",
    headNote3:
      "make it easier for users to find the products they want but improving your ‘Filter’ feature",
  },
];

export const about = [
  {
    header: "",
    header2: "Creating experiences people love",
    note: "Our mission is simple; provide holistic Customer Experience expertise to help our business partners achieve long-term, sustainable growth.  With over a decades worth experience working with companies of all sizes; from global FTSE 100 brands to Start Ups, we blend data, strategy, technology & creativity to build distinctive, memorable experiences that:",
    list1: "- Increase customer loyalty",
    list2: " - Increase conversion",
    list3: "- Increase acquisition",
    list4: "- Reduce cost of service",
    header3: "Get in touch..",
    header4: "Our Work Experience",
  },
];
// learn my lesson count my blessing and look to the rising sun and run run run
