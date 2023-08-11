const phone = "+251974894532";
const email = "tokkiyuam@gmail.com";
const contactInfo =
  "You can use phone call, sms or email through the given option below";
export function OfferRequirement(props) {
  const {
    title,
    description,
    keyDeliverables,
    ourApproach,
    whyChooseUs,
    contactDetails,
  } = props;

  return (
    <div className="offer-requirement">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="key-deliverables">
        <h3>Key Deliverables:</h3>
        <ul>
          {keyDeliverables.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="our-approach">
        <h3>Our Approach:</h3>
        <ol>
          {ourApproach.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> {item.description}
            </li>
          ))}
        </ol>
      </div>
      <div className="why-choose-us">
        <h3>Why Choose Us:</h3>
        <ul>
          {whyChooseUs.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-details">
        <h3>Let's Collaborate:</h3>
        <p>{contactDetails.intro}</p>
        <p>
          Contact: <span>{contactDetails.contactInformation}</span>
          <br />
          Email: <span>{contactDetails.email}</span>
          <br />
          Phone: <span>{contactDetails.phone}</span>
        </p>
      </div>
    </div>
  );
}
export function MobileAppDevelopmentOffer() {
  const offerData = {
    title: "Mobile App Development",
    description:
      "Elevating Experiences through Mobile Apps: Seamlessly Integrated, Engaging, and Cost-Effective",
    keyDeliverables: [
      {
        title: "User-Centered Design:",
        description:
          "Our expert team of UI/UX designers will create user-centered designs that cater to your target audience's needs.",
      },
      // Add more key deliverables
    ],
    ourApproach: [
      {
        title: "Discovery Phase:",
        description:
          "We start by understanding your brand's goals and requirements to align our design approach accordingly.",
      },
      // Add more approach steps
    ],
    whyChooseUs: [
      {
        title: "Expertise:",
        description:
          "Our experienced team stays updated with the latest mobile app development trends and practices.",
      },
      // Add more reasons to choose your services
    ],
    contactDetails: {
      intro:
        "Ready to turn your app idea into reality? Let's collaborate and create a mobile app that exceeds expectations.",
      contactInformation: contactInfo,
      email: email,
      phone: phone,
    },
  };

  return (
    <OfferRequirement
      title={offerData.title}
      description={offerData.description}
      keyDeliverables={offerData.keyDeliverables}
      ourApproach={offerData.ourApproach}
      whyChooseUs={offerData.whyChooseUs}
      contactDetails={offerData.contactDetails}
    />
  );
}

export function WebSolutionsOffer() {
  const offerData = {
    title: "Innovative Web Solutions",
    description:
      "Crafting Dynamic Web Experiences: Modern, Interactive, and Value-Driven",
    keyDeliverables: [
      {
        title: "User-Centered Design:",
        description:
          "Our team of experts creates web solutions with user-centered design principles to ensure intuitive and engaging user experiences.",
      },
      // Add more key deliverables
    ],
    ourApproach: [
      {
        title: "Discovery Phase:",
        description:
          "We begin by understanding your brand's vision and goals, allowing us to design web experiences that align with your objectives.",
      },
      // Add more approach steps
    ],
    whyChooseUs: [
      {
        title: "Expertise:",
        description:
          "Our skilled team of web developers and designers has a proven track record of delivering modern and interactive web solutions.",
      },
      // Add more reasons to choose your services
    ],
    contactDetails: {
      intro:
        "Ready to revolutionize your web presence? Partner with us to create web experiences that captivate and deliver value to your users.",
      contactInformation: contactInfo,
      email: email,
      phone: phone,
    },
  };

  return (
    <OfferRequirement
      title={offerData.title}
      description={offerData.description}
      keyDeliverables={offerData.keyDeliverables}
      ourApproach={offerData.ourApproach}
      whyChooseUs={offerData.whyChooseUs}
      contactDetails={offerData.contactDetails}
    />
  );
}

export function SoftwareSolutionsOffer() {
  const offerData = {
    title: "Custom Software Solutions",
    description:
      "Creating Exceptional Software Experiences: Tailored, Efficient, and Affordable",
    keyDeliverables: [
      {
        title: "Tailored Solutions:",
        description:
          "Our team creates custom software solutions that cater to your unique business needs, ensuring optimal performance and efficiency.",
      },
      // Add more key deliverables
    ],
    ourApproach: [
      {
        title: "Requirements Analysis:",
        description:
          "We start by thoroughly analyzing your requirements to create software solutions that align with your objectives.",
      },
      // Add more approach steps
    ],
    whyChooseUs: [
      {
        title: "Expertise:",
        description:
          "With a team of experienced developers, we have a proven track record of delivering software solutions that exceed client expectations.",
      },
      // Add more reasons to choose your services
    ],
    contactDetails: {
      intro:
        "Ready to elevate your software capabilities? Partner with us to create tailored and efficient software solutions that drive your business forward.",
      contactInformation: contactInfo,
      email: email,
      phone: phone,
    },
  };

  return (
    <OfferRequirement
      title={offerData.title}
      description={offerData.description}
      keyDeliverables={offerData.keyDeliverables}
      ourApproach={offerData.ourApproach}
      whyChooseUs={offerData.whyChooseUs}
      contactDetails={offerData.contactDetails}
    />
  );
}

export function BotAutomationOffer() {
  const offerData = {
    title: "Bot Automation Solutions",
    description:
      "Empowering Efficiency with Intelligent Bots: Streamlined, Adaptive, and Budget-Friendly",
    keyDeliverables: [
      {
        title: "Intelligent Bots:",
        description:
          "Our team specializes in creating intelligent bots that streamline processes, adapt to user needs, and provide budget-friendly solutions.",
      },
      // Add more key deliverables
    ],
    ourApproach: [
      {
        title: "Bot Design:",
        description:
          "We design bots that align with your business goals and automate repetitive tasks to enhance efficiency.",
      },
      // Add more approach steps
    ],
    whyChooseUs: [
      {
        title: "Expertise:",
        description:
          "With expertise in bot automation, we deliver solutions that enhance operational efficiency and provide cost-effective results.",
      },
      // Add more reasons to choose your services
    ],
    contactDetails: {
      intro:
        "Ready to empower your business with intelligent bots? Collaborate with us to create streamlined automation solutions.",
      contactInformation: contactInfo,
      email: email,
      phone: phone,
    },
  };

  return (
    <OfferRequirement
      title={offerData.title}
      description={offerData.description}
      keyDeliverables={offerData.keyDeliverables}
      ourApproach={offerData.ourApproach}
      whyChooseUs={offerData.whyChooseUs}
      contactDetails={offerData.contactDetails}
    />
  );
}

export function UIUXOffer() {
  const offerData = {
    title: "Engaging UI/UX Craftsmanship",
    description:
      "Shaping Memorable User Journeys: Intuitive, Aesthetic, and Impactful",
    keyDeliverables: [
      {
        title: "User-Centered Design:",
        description:
          "Our expert team of UI/UX designers will conduct in-depth research to understand your target audience, their behaviors, and preferences. This research forms the foundation of our design strategy, ensuring that every element of the user interface is tailored to meet user needs.",
      },
      // Add more key deliverables
    ],
    ourApproach: [
      {
        title: "Discovery Phase:",
        description:
          "We start by gaining a deep understanding of your brand, industry, and goals. This helps us align our design approach with your unique requirements.",
      },
      // Add more approach steps
    ],
    whyChooseUs: [
      {
        title: "Expertise:",
        description:
          "Our team consists of experienced UI/UX designers who stay updated with the latest design trends and best practices.",
      },
      // Add more reasons to choose your services
    ],
    contactDetails: {
      intro:
        "Ready to transform your user experience? Let's collaborate to create an intuitive and aesthetic UI/UX that leaves a lasting impact.",
      contactInformation: contactInfo,
      email: email,
      phone: phone,
    },
  };

  return (
    <OfferRequirement
      title={offerData.title}
      description={offerData.description}
      keyDeliverables={offerData.keyDeliverables}
      ourApproach={offerData.ourApproach}
      whyChooseUs={offerData.whyChooseUs}
      contactDetails={offerData.contactDetails}
    />
  );
}
