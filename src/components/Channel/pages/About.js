import React from "react";
import { useContextValues } from "../../../Context/ContextApI";
import { formatNumberToCurr } from "../../../Utils/functions";
import styles from "../../../Utils/styles";

const About = () => {
  const { currentChannelDetails } = useContextValues();

  console.log(currentChannelDetails);

  return (
    <div className={`${styles.subSectionPY}`}>
      <div className="flex gap-10 flex-col md:flex-row">
        {/* left */}
        <div className="description w-full md:w-[70%]">
          <h2 className="text-2xl font-semibold mb-5">Description</h2>
          <pre className="font-['Roboto'_,sans-serif] whitespace-pre-wrap">
            {currentChannelDetails?.description}
          </pre>

          <div className="mt-10">
            <h2 className="text-2xl mb-5 font-semibold">Links</h2>
            <div className="grid grid-cols-2 gap-5">
              {currentChannelDetails?.links?.map((link) => (
                <a
                  href={link?.targetUrl}
                  key={link?.targetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline w-fit"
                >
                  {link?.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* right */}

        <div className="w-full md:w-[30%]">
          <ul>
            <li className="border-b border-gray-400 py-2">Stats</li>
            <li className="border-b border-gray-400 py-2">
              {currentChannelDetails?.joinedDateText}
            </li>
            <li className="border-b border-gray-400 py-2">
              {formatNumberToCurr(currentChannelDetails?.stats?.views)} views
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
