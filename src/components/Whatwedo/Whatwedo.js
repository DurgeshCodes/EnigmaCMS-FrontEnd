import React from "react";
import classes from './whatwedo.module.css';
import {
  FaMobileAlt,
  FaLaptopCode,
  FaVrCardboard,
  FaGlobe,
  FaRegImage,
  FaBrain,
} from "react-icons/fa";



export default function Whatwedo() {
  const [header] = React.useState({
    mainHeader: "What We Do",
    text:
      "These are the domains we work on.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGlobe style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "Web Development",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
      industry. simply dummy",
    },
    {
      id: 2,
      icon: <FaLaptopCode style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "Competitive Programming",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 3,
      icon: <FaBrain style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "AI/ML",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaMobileAlt style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "App Devlopment",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaVrCardboard style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "AR/VR",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
    {
      id: 6,
      icon: <FaRegImage style={{ fontSize: 40 }} className={classes.commonIcons} />,
      heading: "UI/UX",
      text:
        "Lorem Ipsum is simply dummy text of the printing typesetting\
        industry. simply dummy",
    },
  ]);
  return (
    <div className={classes.services}>
      <div className={classes.container}>
        <div className={classes.services__header}>
          <div className={classes.common}>
            <h3 className={classes.heading}>{header.mainHeader}</h3>
            <h1 className={classes.mainHeader}>{header.subHeading}</h1>
            <p className={classes.mainContent}>{header.text}</p>
            <div className={classes.commonBorder}></div>
          </div>

          <div className={classes.row}>
            {state.map((info) => (
              <div className={classes.col}>
                <div className={classes.services__box}>
                  {info.icon}
                  <div className={classes.services__boxheader}>{info.heading}</div>
                  <div className={classes.services__boxheader} style={{fontFamily: "sans-serif",
                                                                       fontSize: 14}}>{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

