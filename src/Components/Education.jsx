import React from "react";

function Education() {
  const goSkill = () => {
    let section = document.getElementById("skill");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        id="Edu"
        className="flex flex-col items-center bg-gray-900 w-full h-screen py-2"
      >
        <h1 className="text-3xl my-5 text-white font-bold md:text-4xl lg:text-7xl">
          Education
        </h1>
        {/* This is for Education view */}
        <div className="h-fit w-full flex justify-around items-center flex-row">
          {/* This div for Detail of College */}
          <div className="h-fit w-fit">
            <table className=" border-5  border-green-800 p-2">
              <tr>
                <th className=" border-2 p-2 bg-red-300 hover:bg-red-400 text-center ">
                  STREAM
                </th>
                <th className=" border-2 p-2 bg-green-300 hover:bg-green-400 text-center">
                  NAME OF INSTITUTION
                </th>
                <th className=" border-2 p-2 bg-blue-300 hover:bg-blue-400 text-center">
                  BOARD/UNIVERSITY
                </th>
                <th className=" border-2 p-2 bg-fuchsia-300 hover:bg-fuchsia-400 text-center">
                  YEAR OF PASSING
                </th>
                <th className=" border-2 p-2 bg-purple-300 hover:bg-purple-400  text-center">
                  PERFORMANCE (%)
                </th>
              </tr>
              {/* B tech */}
              <tr>
                <td className=" border-2 p-7 bg-amber-100 text-center">
                  B.Tech(CSE)
                </td>
                <td className=" border-2 p-7 bg-amber-100 text-center">
                  Aravali Institute of Technical Studies
                </td>
                <td className=" border-2 p-7 bg-amber-100 text-center">
                  {" "}
                  RAJASTHAN TECHNICAL UNIVERSITY
                </td>
                <td className=" border-2 p-7 bg-amber-100 text-center">2024</td>
                <td className=" border-2 p-7 bg-amber-100 text-center">
                  {" "}
                  80.75%
                </td>
              </tr>
              {/* Diploma */}
              <tr>
                <td className=" border-2 p-7  bg-amber-100 text-center">
                  Diploma(CSE)
                </td>

                <td className=" border-2 p-7  bg-amber-100 text-center">
                  Jai Polytechnic College
                </td>

                <td className=" border-2 p-7  bg-amber-100 ">
                  HARYANA STATE BOARD OF TECHNICAL EDUCATION
                </td>

                <td className=" border-2 p-7  bg-amber-100 text-center">
                  2021
                </td>

                <td className=" border-2 p-7  bg-amber-100 text-center">
                  70.40%
                </td>
              </tr>

              {/* School */}
              <tr>
                <td className=" border-2 p-7  bg-amber-100 text-center">
                  10th
                </td>

                <td className=" border-2 p-7  bg-amber-100 text-center">
                  Sant Mother Teresa High School
                </td>

                <td className=" border-2 p-7  bg-amber-100 text-center ">
                  JHARKHAND ACADEMIC COUNCIL
                </td>

                <td className=" border-2 p-7  bg-amber-100 text-center">
                  2018
                </td>

                <td className=" border-2 p-7  bg-amber-100 text-center">
                  60.00%
                </td>
              </tr>
            </table>
          </div>

          {/* This div for images and graph */}
          <div></div>
        </div>

        <div
          onClick={goSkill}
          className="h-8 w-8 rounded-2xl flex justify-center items-center bg-white"
        >
          <div className="h-3 w-3 border-b-2 border-e-2 border-b-blue-900  border-e-blue-900 rotate-45 hover:border-b-red-600 hover:border-e-red-600" />
        </div>
      </div>
    </>
  );
}
export default Education;
