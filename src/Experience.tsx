import "./experince.css";
import React from "react";

interface ExperienceProps {
  details: {
    company: string;
    location: string;
    designation: string;
    yearFrom: string;
    yearTo: string;
    desc: string[];
  }[];
}

const Experience = ({ details }: ExperienceProps) => {
  return (
    <div className="CV-page">
      <div className="CV-grid">
        <div className="CV-grid-column">
          <div className="CV-jobs">
            <h2 className="CV-secondaryHeading CV-jobs-heading">
              Relevant Experience
            </h2>
            {details
              .slice(0)
              .reverse()
              .map((detail) => {
                return (
                  <section className="CV-timeline CV-job">
                    <h3 className="CV-timeline-heading">
                      <span className="CV-timeline-heading-title">
                        {detail.company}{" "}
                      </span>
                      &#8211;{" "}
                      <span className="CV-timeline-heading-location">
                        {detail.location}{" "}
                      </span>
                      <small className="CV-timeline-heading-duration">
                        {detail.yearFrom} - {detail.yearTo}
                      </small>
                    </h3>
                    <ul className="CV-timeline-details">
                      {detail.desc.map((des) => {
                        return <li className="CV-job-timeline-item">{des}</li>;
                      })}
                    </ul>
                  </section>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
