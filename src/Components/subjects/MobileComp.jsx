import React, { useState } from "react";
import { RxEyeOpen, RxEyeClosed, RxDownload } from "react-icons/rx";
import { FaArrowTurnDown } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import "./css/sub.css";

const MobileComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [arrowOpen, setArrowOpen] = useState(false);
  const handleArrow = () => {
    setArrowOpen(!arrowOpen);
  };
  const handleToggleImage = () => {
    setIsOpen(!isOpen);
  };
  const handleSyllabus = () => {
    const link = document.createElement("a");
    link.href = "/Images/MobileSyllabus.png.jpg";
    link.download = "MobileComputing_syllabus.png";
    link.click();
  };
  const handleQuestionPaper = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Networks/Question paper Network.pdf";
    link.download = "Neetworks_Question_Papers.pdf";
    link.click();
  };
  const handleEBook = () => {
    const link = document.createElement("a");
    link.href = "/PDF/Networks/Computer Networks Book.pdf";
    link.download = "Network_E_Book.pdf";
    link.click();
  };
  return (
    <>
      <div className="net-div animate__animated animate__fadeInUp">
        <h1>Introduction to Mobile Computing</h1>
        <div className="">
          <iframe
            width="700"
            height="355"
            src="https://www.youtube.com/embed/GT-tYP8RGIs?si=0uS-SQ19r__n5FSr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="syllabus">
          <h2 className="text-[20px] font-bold">Open Syllabus</h2>

          <div
            className="absolute top-10 left-36"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <button onClick={handleToggleImage}>
              {isOpen ? (
                <RxEyeOpen className="eye-size" />
              ) : (
                <RxEyeClosed className="eye-size" />
              )}
            </button>
            {isOpen && (
              <div style={{ marginLeft: "10px" }}>
                <img
                  src="/Images/MobileSyllabus.png.jpg"
                  alt="Opened Image"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "80vh",
                    border: "2px solid black",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        <div className="my-2 text-xl space-y-3 ">
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 1
            </summary>
            <p className="intro-para">
              In the realm of telecommunications, various components and
              techniques drive modern communication systems. Applications range
              from mobile phones to broadcasting networks, each utilizing
              specific frequencies for radio transmission. Signals convey
              information over these frequencies, with modulation techniques
              like Amplitude Shift Keying, Frequency Shift Keying, and Phase
              Shift Keying altering signal characteristics for transmission.
              Antennas serve as conduits for signals, facilitating their
              propagation through the air. Multiplexing techniques such as Space
              Division, Frequency Division, Time Division, and Code Division
              Multiplexing efficiently share transmission mediums among multiple
              signals. Spread spectrum techniques like Direct Sequence Spread
              Spectrum and Frequency Hopping Spread Spectrum enhance security
              and efficiency by spreading signals across a broad frequency
              range. Cellular systems divide areas into cells served by base
              stations, ensuring seamless connectivity for users across vast
              distances. Together, these elements form the foundation of
              telecommunications, enabling the exchange of information in
              today's interconnected world.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Multiplexing, Modulation, Spread
              Spectrum, Cellular System, Antennas, signals and Applications.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/MobileComp/Unit 1.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
          </details>
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 2
            </summary>
            <p className="intro-para">
              Motivation for specialized Medium Access Control (MAC) protocols
              arises from the need to address specific challenges in
              communication networks. Hidden and exposed terminals, which occur
              when some nodes cannot directly sense each other's transmissions,
              lead to inefficiencies in traditional MAC schemes. Near and far
              terminals experience different signal strengths, necessitating
              adaptive MAC protocols to optimize communication. Techniques like
              Space Division Multiple Access (SDMA), Frequency Division Multiple
              Access (FDMA), and Time Division Multiple Access (TDMA) allocate
              resources efficiently in wireless networks. Fixed Time Division
              Multiplexing (TDM) assigns fixed time slots to users, ensuring
              predictable access to the medium. Classical Aloha and Slotted
              Aloha are contention-based MAC protocols where nodes contend for
              the medium, with Slotted Aloha providing improved efficiency by
              organizing transmission slots. Carrier Sense Multiple Access
              (CSMA) protocols sense the medium before transmission, while CSMA
              with Collision Detection detects and resolves collisions. Multiple
              Access with Collision Avoidance (MACA) schemes prevent collisions
              through coordination between nodes. These specialized MAC
              protocols address various network conditions and challenges,
              ensuring efficient and reliable communication in diverse
              environments.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Hidden and exposed terminals, Near
              and far terminals, SDMA, FDMA, TDMA, Fixed TDM, Classical Aloha,
              Slotted Aloha, CSMA, CSMA with collision detection, Multiple
              access with collision avoidance
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/MobileComp/Unit 2.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
          </details>
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 3
            </summary>
            <p className="intro-para">
              In the realm of telecommunications, GSM (Global System for Mobile
              Communications) stands as a cornerstone, offering a wide array of
              mobile services. Its system architecture encompasses various
              elements, including base stations, mobile switching centers, and
              network operations centers, facilitating seamless communication.
              The radio interface defines how devices communicate with the
              network, employing protocols like GSM protocol stack to ensure
              efficient data exchange. Localization and calling functionalities
              enable users to connect with each other, while handover mechanisms
              ensure uninterrupted communication as mobile devices move between
              cells. Robust security measures safeguard user data and network
              integrity against unauthorized access and malicious attacks.
              Satellite systems, with their rich history and diverse
              applications, have revolutionized global communication. From
              broadcasting and navigation to remote sensing and internet access,
              satellites play a vital role in modern connectivity. Understanding
              the basics of GEO (Geostationary Earth Orbit), LEO (Low Earth
              Orbit), and MEO (Medium Earth Orbit) satellites is essential for
              grasping their unique characteristics and applications. Routing
              protocols dictate how data is transmitted between satellites and
              ground stations, while localization and handover mechanisms ensure
              seamless connectivity as satellites move across the sky. GPRS
              (General Packet Radio Service) complements GSM by enabling
              packet-switched data transmission, facilitating services like
              internet browsing and email on mobile devices. Together, these
              technologies form the backbone of modern telecommunications,
              enabling global connectivity and empowering users with access to a
              wealth of services and information.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>GSM, Satellite System, GEO, MEO,
              LEO, GPRS
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/MobileComp/Unit 3.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
          </details>
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 4
            </summary>
            <p className="intro-para">
              In the domain of wireless communication, infra-red and radio
              transmission methods offer distinct advantages and applications.
              While infra-red transmission is ideal for short-range,
              line-of-sight communication, radio transmission enables broader
              coverage and versatility, making it suitable for various
              scenarios. Infrastructure and ad-hoc networks provide different
              networking models, with infrastructure networks relying on fixed
              infrastructure elements like base stations, while ad-hoc networks
              dynamically form connections between devices without centralized
              infrastructure. IEEE 802.11 standards, including 802.11b and
              802.11a, define system architectures and protocol architectures
              for wireless local area networks (WLANs). These standards
              encompass the physical layer, medium access control (MAC) layer,
              and MAC management, ensuring interoperability and efficient
              communication between devices. Bluetooth technology, known for its
              user-friendly scenarios, features an architecture comprising radio
              and baseband layers, enabling seamless wireless connectivity
              between devices over short distances. Introduction to Wireless
              Application Protocol (WAP) architecture and protocol stack reveals
              the framework for delivering internet-based services to mobile
              devices. WAP architecture defines how mobile devices interact with
              servers to access web content, while the protocol stack outlines
              the layers involved in transmitting data over wireless networks,
              ensuring compatibility and efficient data exchange.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Infra-red vs radio transmission,
              IEEE 802.11, BLuetooth, . Introduction to WAP architecture and
              Protocol stack.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/MobileComp/Unit 4.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
          </details>
          <details open className="unit-details">
            <summary className="unit-summary" onClick={handleArrow}>
              {arrowOpen ? (
                <MdKeyboardArrowRight className="text-[22px]" />
              ) : (
                <MdKeyboardArrowDown className="text-[22px]" />
              )}
              Unit 5
            </summary>
            <p className="intro-para">
              In Mobile IP, various layers facilitate seamless communication in
              mobile networks. Goals, assumptions, and requirements set the
              stage for mobility within IP networks, while entities and
              terminology clarify key components. IP packet delivery ensures
              efficient transmission, while agent discovery locates Mobile IP
              agents. Registration informs network entities of device location,
              and tunneling and encapsulation secure data transmission.
              Optimizations like reverse tunneling improve efficiency, and IPv6
              support ensures compatibility. Dynamic Host Configuration Protocol
              (DHCP) automates network configuration. Together, these layers and
              functionalities enable smooth mobility and connectivity.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>
              Mobile IP: Goals, assumptions and requirements, Entities and
              terminology, IP packet delivery, Agent discovery, Registration,
              Tunneling and encapsulation, Optimizations, Reverse tunneling,
              IPv6, Dynamic host configuration protocol.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/MobileComp/Unit 5.pdf"
                width="800"
                height="500"
                sandbox="allow-same-origin allow-scripts"
                className="embed-pdf"
              />
            </details>
          </details>
        </div>
        <div className="extra-material">
          <h2>More material that you can Study from :)</h2>
          <ol className="flex flex-col">
            <li>
              <Link
                to="https://www.javatpoint.com/mobile-computing"
                target="_blank"
              >
                JavaPoint Mobile Computing Tutorial
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/playlist?list=PLV8vIYTIdSnZMKTQSTxWbx4NGNfxyZq_N"
                target="_blank"
              >
                Easy engineering (YouTube playlist)
              </Link>
            </li>
            {/* <li>
              <Link
                to="https://www.youtube.com/playlist?list=PLrjkTql3jnm-kLRBgIt8kvuwbTScoI2IJ"
                target="_blank"
              >
                N (YouTube playlist) (Best for numericals)
              </Link>
            </li> */}
          </ol>
        </div>
        <div className="download-div space-x-4">
          <button className="button" onClick={handleSyllabus}>
            Syllabus <RxDownload className="ml-2" />
          </button>
          <button className="button" onClick={handleQuestionPaper}>
            Question Papers <RxDownload className="ml-2" />
          </button>
          <button className="button" onClick={handleEBook}>
            E-Book <RxDownload className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileComp;
