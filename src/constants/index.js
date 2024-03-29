import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  visual1,
  visual2,
  visual3,
  vis_dis1,
  vis_dis2,
  vis_dis3,
  vis_dis13,
  vis_dis14,
  vis_dis15,


} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Rainfall Prediction",
  },
  {
    id: "work",
    title: "AI Rainfall Prediction",
  },
  {
    id: "project",
    title: "Explainable AI",
  },
  {
    id: "feedback",
    title: "Features",
  },
  // {
  //   id: "contact",
  //   title: "XKL",
  // },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "SVM",
    icon: html,
  },
  {
    name: "ROC",
    icon: css,
  },
  {
    name: "Annual Rainfall",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const visualizations = [
  {
    id:1,
    name: "PREDICTED ON 2021",
    icon: visual1,
  },
  {
    id:2,
    name: "PREDICTED ON 2022",
    icon: visual2,
  },
  {
    id:3,
    name: "PREDICTED ON 2023",
    icon: visual3,
  },
  // {
  //   id:4,
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   id:5,
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   id:6,
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   id:7,
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   id:8,
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   id:9,
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   id:10,
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   id:11,
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   id:12,
  //   name: "figma",
  //   icon: figma,
  // }
];

const infos = [
  {
    id:1,
    title:"PREDICTED ON 2021",
    img:vis_dis1,
    description:[
      "The blue line in the graph shows the actual rainfall data for 2021. The green line shows the fitted ARIMA model's prediction of the rainfall data. The shaded areas around the green line show the model's uncertainty in its predictions. The wider the shaded area, the less certain the model is about its prediction. The two horizontal red lines show the thresholds used to define heavy rainfall and no rainfall events. The ARIMA model was used to predict the probability of a heavy rainfall or no rainfall event occurring at each time point. These probabilities are shown by the gray line in the graph. The higher the gray line, the more likely it is that a heavy rainfall event will occur at that time point. The x-axis of the graph shows the time in days. \n The y-axis of the graph shows the rainfall in millimeters.\n The graph shows the data for the entire year of 2021.",

    ]
  },
  {
    id:2,
    title:"PREDICTED ON 2022",
    img:vis_dis2,
    description:[
      "The blue line in the graph shows the actual rainfall data for 2022. The green line shows the fitted ARIMA model's prediction of the rainfall data. The shaded areas around the green line show the model's uncertainty in its predictions. The wider the shaded area, the less certain the model is about its prediction. The two horizontal red lines show the thresholds used to define heavy rainfall and no rainfall events. The ARIMA model was used to predict the probability of a heavy rainfall or no rainfall event occurring at each time point. These probabilities are shown by the gray line in the graph. The higher the gray line, the more likely it is that a heavy rainfall event will occur at that time point. The x-axis of the graph shows the time in days. The y-axis of the graph shows the rainfall in millimeters. The graph shows the data for the entire year of 2022",
      ,
    ]
  },
  {
    id:3,
    title:"PREDICTED ON 2023",
    img:vis_dis3,
    description:[
      "The blue line in the graph shows the actual rainfall data for 2023. The green line shows the fitted ARIMA model's prediction of the rainfall data. The shaded areas around the green line show the model's uncertainty in its predictions. The wider the shaded area, the less certain the model is about its prediction. The two horizontal red lines show the thresholds used to define heavy rainfall and no rainfall events. The ARIMA model was used to predict the probability of a heavy rainfall or no rainfall event occurring at each time point. These probabilities are shown by the gray line in the graph. The higher the gray line, the more likely it is that a heavy rainfall event will occur at that time point. The x-axis of the graph shows the time in days. The y-axis of the graph shows the rainfall in millimeters. The graph shows the data for the entire year of 2023 ",
    ]
  },
  {
    id:13,
    title:"Average Rain Fall in mm",
    img:vis_dis13,
    description:[
      "In the domain of crop yield recommendation, the Avg Rainfall (mm) feature plays a pivotal role in shaping agricultural guidance. This metric encapsulates the average precipitation in millimeters over a designated timeframe, serving as a critical indicator of the water supply available for crop growth. The variability in rainfall directly impacts the soil moisture levels, influencing decisions on suitable crop selections and optimal cultivation strategies.",
      "Agricultural experts and decision-support systems leverage this feature to tailor recommendations, advising farmers on crops that align with the prevailing climatic conditions. Whether a region experiences abundant or scarce rainfall greatly influences the suggested agricultural practices to maximize crop yield and ensure sustainable farming outcomes",
      "In essence, the Avg Rainfall (mm) feature encapsulates the climatic factor that is fundamental to successful crop cultivation. Its integration into crop yield recommendation models allows for more accurate and region-specific guidance, fostering a resilient and productive agricultural landscape",
    ]
  },
  {
    id:14,
    title:"Country Wise Croup Yeild Data",
    img:vis_dis14,
    description:[
      "To provide country-specific crop yield recommendations, a comprehensive analysis of crop production data is indispensable. Country-wise reports encompass crucial details such as crop varieties, planting and harvesting seasons, and environmental factors. Leveraging this information, advanced machine learning models can generate personalized recommendations by considering historical yield data, climate conditions, and soil quality. ",
      "These tailored insights empower farmers and policymakers to make informed decisions, optimizing crop selection and cultivation practices for increased productivity and sustainable agriculture.",
      "The country-wise crop yield recommendation reports play a pivotal role in shaping agricultural strategies. By offering targeted insights into optimal crop choices and cultivation techniques based on local conditions, these reports contribute to maximizing yields and ensuring food security.",
    ]
  },
  {
    id:15,
    title:"World Region",
    img:vis_dis15,
    description:[ 
      "World region crop production involves the analysis and understanding of the agricultural output across different geographic areas globally. Various features play a crucial role in determining crop yield recommendations for specific world regions. These features include climate conditions, soil types, available water resources, and historical crop performance.",
      "Understanding the unique characteristics of each region is essential for tailoring crop recommendations that maximize yield and ensure sustainable agricultural practices.",
      "Climate conditions significantly influence crop production. Factors such as temperature, precipitation, and sunlight duration impact the growth and development of crops. Different regions experience diverse climates, ranging from arid and semi-arid to tropical and temperate.",
    ]
  },
]

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    id:13,
    name: "Avg Rainfall in mm ",
    icon: html,
  },
  {
    id:14,
    name: "Country wise crop Yeild Production",
    icon: css,
  },
  {
    id:15,
    name: "World Regions",
    icon: javascript,
  },
];

const projects = [
  {
    name: "LIME1",
    description:
      "Blue bars: These bars represent the contributions of different features to predictions for each month. The taller the bar, the contribution of that feature to the prediction.",
    tags: [
      {
        name: "High",
        color: "blue-text-gradient",
      },
      {
        name: "Heavy",
        color: "green-text-gradient",
      },
      {
        name: "Moderate",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "LIME2",
    description:
      "Timeline: This horizontal line represents the time period under consideration. The specific dates are not shown in the image you sent, but it appears divided into months.",
    tags: [
      {
        name: "High",
        color: "blue-text-gradient",
      },
      {
        name: "Heavy",
        color: "green-text-gradient",
      },
      {
        name: "Moderate",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "LIME3",
    description:
      "Top bar: This shows the predicted class, which in this case is Heavy Rainfall. The number beneath it likely represents the confidence score of the prediction.",
    tags: [
      {
        name: "High",
        color: "blue-text-gradient",
      },
      {
        name: "Heavy",
        color: "green-text-gradient",
      },
      {
        name: "Moderate",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, visualizations, experiences, testimonials, projects, infos };
