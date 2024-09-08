import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";

export const highlights = [
  {
    title: "Seamless integration and customization",
    description:
      "Effortlessly syncs with your systems, temi adapts to your institutional needs, enhancing workflow and service quality.",
  },
  {
    title: "Intelligent interaction and navigation",
    description:
      "Equipped with intuitive AI, temi understands and responds to human needs, while navigating spaces independently and safely.",
  },
  {
    title: "Data-driven insights",
    description:
      "temi improves interactions and offers real-time data for smarter decisions and continuous improvements.",
  },
] as const;

export const temiAction = [
  {
    description:
      "Facilitating telepresence in healthcare remote consultations.",
    src: "/icons/consultation.png",
  },
  {
    description:
      "Patients receive attentive care through monitoring capabilities.",
    src: "/icons/ecg-machine.png",
  },
  {
    description: "Enhancing elderly care and daily living.",
    src: "/icons/elderly.png",
  },
  {
    description: "Supporting customer engagement across industries.",
    src: "/icons/cooperation.png",
  },
] as const;

export const useCases = [
  {
    videoUrl: "/video/healthcare/temi Medical.mp4",
    title: "Hospitals ",
    points: [
      "Doctors interact remotely with patients at their bedside.",
      "Senior physicians train junior doctors from different hospitals or countries.",
      "Quarantined patients stay connected with staff and loved ones.",
      "Helping navigate patients' journeys within healthcare facilities.",
      "Streamlines care coordination, allowing providers to focus on patient needs and holistic care.",
    ],
  },
  {
    videoUrl: "/video/healthcare/temi nurse.mp4",
    title: "Nursing homes",
    points: [
      "Enables virtual visits for residents, enhancing connections and quality of life.",
      "Engages residents with dementia, offering therapeutic activities that stimulate memory and interaction.",
      "Helps the elderly with daily tasks for comfort and safety.",
      "Automates tasks, cuts costs, and lets caregivers focus on personalized care.",
      "Offers interactive activities that provide emotional comfort to patients.",
      "Facilitates meaningful connections between patients and their loved ones at home.",
      "Helps manage medication schedules, ensuring patients receive their medicine on time.",
    ],
  },
];

export const useCases2 = [
  {
    videoUrl: "/video/hospitality/Museum.mp4",
    title: "Hotels",
    points: [
      "Assist front desk to provide information, check-in services, and manage simple guest requests, reducing wait times.",
      "Delivers items like towels, toiletries, and room service orders directly to guest rooms, reducing staff workload.",
      "Offers interactive tours, with guests following the robot to discover hotel amenities and points of interest, improving orientation.",
      "Enhance safety with thermal sensors, offering auto temp screening to quickly ensure guest and staff well-being.",
    ],
  },
  {
    videoUrl: "/video/hospitality/Events.mp4",
    title: "Events",
    points: [
      "Automates the check-in process, with attendees following the robot to their designated areas, and improving the flow of large crowds.",
      "Serves as an information kiosk, providing schedules, speaker bios, and directions to sections of the event, ensuring attendees have all the information they need.",
      "Can be programmed for interactive experiences, such as quizzes or games related to the event, enhancing attendee engagement.",
      "Collects real-time feedback from attendees, providing valuable insights for event organizers to improve future events.",
    ],
  },
];

export const specials = [
  {
    imgUrl: "/icons/clock.png",
    title: "Ease and efficiency",
    description:
      "Guiding patients and enhancing telepresence sessions, a helping hand for a smoother care experience, letting staff focus on top-notch patient care.",
  },
  {
    imgUrl: "/icons/remote.png",
    title: "Remote connectivity",
    description:
      "Doctors and nurses can remotely connect with patients 24/7, seven days a week, using video conferencing for seamless consultations.",
  },
  {
    imgUrl: "/icons/checklist.png",
    title: "Managing workloads",
    description:
      "Tackles staff shortages by handling routine tasks, easing the workload on healthcare teams.",
  },
];

export const specials2 = [
  {
    imgUrl: "/icons/shortage.png",
    title: "Address staff shortages",
    description:
      "Filling every role can be a challenge. temi steps in to bridge the gap, ensuring your operations run smoothly.",
  },
  {
    imgUrl: "/icons/performance.png",
    title: "Improve efficiency",
    description:
      "From greeting guests to delivering items, the service robot handles routine tasks with ease, allowing your team to focus on customer experience.",
  },
  {
    imgUrl: "/icons/customization.png",
    title: "Program application",
    description:
      "temi can be customized to support a wide range of applications, making your operations more dynamic and responsive.",
  },
];

export const stateOptions = [
  {
    name: "Select State",
    value: "nan",
  },
  {
    name: "South Australia",
    value: "sa",
  },
  {
    name: "Victoria",
    value: "vic",
  },
  {
    name: "New South Wales",
    value: "nsw",
  },
  {
    name: "Queensland",
    value: "qld",
  },
  {
    name: "Tasmania",
    value: "tas",
  },
  {
    name: "Western Australia",
    value: "wa",
  },
  {
    name: "Northern Territory",
    value: "nt",
  },
  {
    name: "Australian Capital Territory",
    value: "act",
  },
];

export const industriesAndVert = [
  {
    name: "Healthcare",
    src: "/iconsAbout/protection.png",
  },
  {
    name: "Hospitality",
    src: "/iconsAbout/building.png",
  },
  {
    name: "Manufacturing",
    src: "/iconsAbout/manufacturing.png",
  },
  {
    name: "Social Assistance",
    src: "/iconsAbout/social-care.png",
  },
  {
    name: "Government",
    src: "/iconsAbout/government.png",
  },
  {
    name: "Supply Chain Management",
    src: "/iconsAbout/supply-chain-management.png",
  },
];

export const statsData = [
  {
    percentage: 7,
    description:
      "of a nurse's practice time is dedicated to assessing patients and checking vital signs.",
  },
  {
    percentage: 19,
    description: "of a nurse's time is spent on patient care activities.",
  },
  {
    percentage: 25,
    description:
      "of a typical day for nurses is taken up by activities unrelated to nursing",
  },
  {
    percentage: 18,
    description: "of a nurse's day is spent moving within the facility",
  },
];

export const navLinks = [
  {
    name: "Home",
    href: "/",
    hasExtra: false,
    skipRender: true,
  },
  {
    name: "About",
    href: "/about",
    hasExtra: false,
    skipRender: false,
  },
  {
    name: "Use Cases",
    href: "",
    hasExtra: true,
    skipRender: false,
    additonalLinks: [
      {
        name: "Healthcare",
        href: "/use-case/healthcare",
      },
      {
        name: "Hospitality",
        href: "/use-case/hospitality",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
    hasExtra: false,
    skipRender: false,
  },
];

export const socials = [
  {
    name: "Instergram",
    icon: LuInstagram,
    link: "https://www.instagram.com/robotemi/",
  },
  {
    name: "Facebook",
    icon: LuFacebook,
    link: "https://www.facebook.com/robotemi/",
  },
  {
    name: "Linkedin",
    icon: LuLinkedin,
    link: "https://www.linkedin.com/company/robotemi/",
  },
];

export const footerlinks = [
  {
    setTitle: "Product",
    setItems: [{ name: "Product Overview", link: "/product-overview" }],
  },
  {
    setTitle: "Company",
    setItems: [
      { name: "About", link: "/about" },
      { name: "Healthcare", link: "/use-case/healthcare" },
      { name: "Hospitality", link: "/use-case/hospitality" },
    ],
  },
  {
    setTitle: "Contact",
    setItems: [
      { name: "Send a Message", link: "/contact" },
      { name: "Email Us", link: "mailto:info@omnikart.net" },
    ],
  },
];
