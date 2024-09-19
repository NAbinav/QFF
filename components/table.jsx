import React from "react";

const table = () => {
  return (
    <div className="flex justify-center snap-center self-center">
      <table className="tg">
        <thead>
          <tr className="m-2  ">
            <th className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>
                Day 1: Tuesday October 01 2024
              </span>
            </th>
            <th className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>
                Day 2: Wednesday October 02 2024
              </span>
            </th>
            <th className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>
                Day 3: Thursday October 03 2024
              </span>
            </th>
            <th className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>
                Day 4: Friday October 04 2024
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-2  ">
            <td className="m-2  tg-0lax ">
              <span style={{ fontWeight: "bold" }}>
                Venue: AB 1 Nethaji Auditorium{" "}
              </span>
            </td>
            <td className="m-2  tg-0lax ">
              <span style={{ fontWeight: "bold" }}>
                Venue: Online - MS Teams
              </span>
            </td>
            <td className="m-2  tg-0lax ">
              <span style={{ fontWeight: "bold" }}>
                Venue: AB 1 - Netaji Auditorium
              </span>
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>
                Venue: Kasturba Auditorium
              </span>
            </td>
          </tr>
          <tr>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>
                Kickoff - Opening Ceremony
              </span>
              <br />
              9.00 AM - 9:30 AM
              <br />
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Workshop Session - 3</span>
              <br />
              10:00 AM - 11:30 AM
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Plenary Speaker - 1</span>
              <br />
              10:00 AM - 10:45 AM
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Hackathon Review 2</span>
              <br />
              9:00 AM - 10:00 AM
            </td>
          </tr>
          <tr>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Workshop Session - 1</span>
              <br />
              9.30 AM - 11:00 AM
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Break</span>
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Plenary Speaker - 2</span>
              <br />
              10:45 AM - 11:30 AM
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>
                Project Showcase Session
              </span>
              <br />
              11:00 AM - 11:30 AM
            </td>
          </tr>
          <tr>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Break</span>
              <br />
              11:00 AM - 11:15 AM
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>11:30 AM - 11:45 AM</span>
              <br />
              Workshop Session - 4
            </td>
            <td className="  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Panel Discussion</span>
              <br />
              11:30 AM - 12:30 Noon
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Hackathon Review 3</span>
              <br />
              1:00 PM - 3:00 PM
            </td>
          </tr>
          <tr>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Workshop Session - 2</span>
              <br />
              11:15 AM - 12:30 PM
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>11:45 AM - 1:00 PM</span>
              <br />
              Webinar 2 - TBA
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Break</span>
            </td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>Closing Ceremony</span>
              <br />
              3:30 PM - 4:00 PM
            </td>
          </tr>
          <tr>
            <td className="m-2  tg-0lax">
              Workshop Session - 2<br />
              11:15 AM - 12:30 PM
            </td>
            <td className="m-2  tg-0lax"></td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>12:30 Noon - 2:00 PM</span>
              <br />
              Venue: Kasturba Auditorium
            </td>
            <td className="m-2  tg-0lax"></td>
          </tr>
          <tr>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>
                Venue: Online - MS Teams
              </span>
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>Webinar 1 - TBA</span>
              <br />
              7:00 PM - 8:00 PM
            </td>
            <td className="m-2  tg-0lax"></td>
            <td className="m-2  tg-0lax">
              <span style={{ fontWeight: "bold" }}>
                Venue: Kasturba Auditorium
              </span>
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>Hackathon Briefing</span>
              <br />
              2:00PM - 2:30PM
              <br />
              <br />
              <span style={{ fontWeight: "bold" }}>Hackathon Review</span>
              <br />
              7:00PM - 8:00PM
            </td>
            <td className="m-2  tg-0lax"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default table;
