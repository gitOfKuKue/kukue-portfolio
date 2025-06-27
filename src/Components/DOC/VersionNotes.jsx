import React, { version } from "react";
import logo from "../../assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { li, tr, ul } from "framer-motion/client";
import Container from "../Container";
import VersionContext from "../../Context/VersionContext";

const VersionNotes = ({ className }) => {
  const { versions } = useContext(VersionContext);
  let number = 1;
  const reversedVersions = versions.slice().reverse();
  return (
    <section className={`${className} my-10`}>
      <Container>
        <div className="">
          <div className="mb-10">
            <FontAwesomeIcon icon={faCode} className="text-8xl text-border" />
            <h1 className="text-5xl text-font font-bold uppercase">
              Released <br /> Versions
            </h1>
            <h1 className="text-font-light">
              V {versions[versions.length - 1].version}
            </h1>
          </div>

          <div className="mb-5">
            <h1 className="text-4xl text-font font-bold uppercase mb-5">
              Features
            </h1>
            <ul className="list-disc list-inside text-lg leading-10">
              {versions[versions.length - 1].features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="">
            <h1 className="text-4xl text-font font-bold uppercase mb-5">
              What changed?
            </h1>
            <ul className="list-disc list-inside text-lg leading-10">
              {versions[versions.length - 1].changes.map((change) => (
                <li key={change}>{change}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-3 my-10">
            <h1 className="text-4xl text-font font-bold uppercase">Intro;</h1>
            <p className="text-justify text-lg text-font-light">
              This portfolio site showcases the latest production release of my
              personal brand, featuring a polished and fully responsive design
              built with modern frontend technologies. The current version{" "}
              <span className="font-bold">
                (V {versions[versions.length - 1].version})
              </span>{" "}
              highlights my skills in crafting clean layouts, engaging
              interactions, and seamless user experiences across devices. Key
              features include a dynamic project showcase, smooth navigation,
              optimized performance, and interactive contact elements—all
              deployed via Netlify for fast, reliable delivery. Explore the site
              to see my work in action and get a sense of my approach to
              frontend development.
            </p>
            <h2 className="text-2xl text-font font-bold mt-5 mb-2">
              Version Format
            </h2>
            <div className="text-xl text-font-light text-justify font-bold">
              <p className="">
                The version format follows a structured pattern:{" "}
                <strong className="block my-5 border border-border p-5 w-fit m-auto">
                  [main ver code].[sub ver code].[month][year]
                </strong>
              </p>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Main ver code</strong> indicates major releases that
                  include significant design, feature, or functionality changes.{" "}
                </li>
                <li>
                  <strong>Sub ver code</strong> reflects smaller updates such as
                  UI improvements, performance enhancements, or bug fixes.
                </li>
                <li>
                  <strong>MonthYear</strong> denotes the release timeline to
                  help track when each update was launched.
                </li>
              </ul>
            </div>
          </div>

          {/* Released Version Table */}
          <table className="block mb-10 xs:min-w-[1000px] md:w-fit xl:block xs:hidden">
            <thead>
              <tr className="bg-border text-aboutme">
                <th className="px-4 py-3 border border-aboutme w-10">No.</th>
                <th className="px-4 py-3 border border-aboutme w-20">
                  Versions
                </th>
                <th className="px-4 py-3 border border-aboutme w-120">
                  Features
                </th>
                <th className="px-4 py-3 border border-aboutme w-120">
                  Changes
                </th>
                <th className="px-4 py-3 border border-aboutme w-50">
                  Released Date
                </th>
              </tr>
            </thead>
            <tbody>
              {reversedVersions.map((ver) => (
                <tr key={ver.version} className="text-right">
                  <td className="text-center border border-border">
                    {number++}
                  </td>
                  <td className="py-3 px-4 border border-border">
                    {ver.version}
                  </td>
                  <td className="py-3 px-4 border border-border text-left">
                    <ul className="list-disc list-inside">
                      {ver.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-3 px-4 border border-border text-left">
                    <ul className="list-disc list-inside">
                      {ver.changes.map((change) => (
                        <li key={change}>{change}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="py-3 px-4 border border-border">
                    {ver.releasedDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="xs:block xl:hidden">
            {reversedVersions.map((ver) => (
              <div key={ver.version} className="border border-border mb-5">
                <div className="flex justify-between items-center border-b border-border p-5 bg-border text-aboutme">
                  <h1>V {ver.version}</h1>
                  <h1>
                    <span className="xs:hidden md:inline-block">
                      Released Date -{" "}
                    </span>
                    {ver.releasedDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h1>
                </div>
                <div className="p-5 border-b border-border">
                  <h1 className="text-xl text-font font-bold mb-2">Features</h1>
                  <ul className="list-disc list-inside text-lg text-font-light">
                    {ver.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-5">
                  <h1 className="text-xl text-font font-bold mb-2">Changes</h1>
                  <ul className="list-disc list-inside text-lg text-font-light">
                    {ver.changes.map((change) => (
                      <li key={change}>{change}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-center gap-2">
          <h1 className="font-bold">Developed by </h1>
          <img src={logo} alt="Logo" className="w-15 inline-block" />
        </div>
      </Container>
    </section>
  );
};

export default VersionNotes;
