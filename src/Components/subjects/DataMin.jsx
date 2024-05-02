import React, { useState } from "react";
import { RxEyeOpen, RxEyeClosed, RxDownload } from "react-icons/rx";
import { FaArrowTurnDown } from "react-icons/fa6";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
// import "./style.css";
import "animate.css";

const DataMin = () => {
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
    link.href = "/Images/MiningSyllabus.png.jpg";
    link.download = "DataMining_syllabus.png";
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
        <h1>Introduction to Data Mining</h1>
        <div className="">
          <iframe
            width="700"
            height="355"
            src="https://www.youtube.com/embed/81bm2OsEzbg?si=MlZZf1U7wt4Emq3e"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
                  src="/Images/MiningSyllabus.png.jpg"
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
              Data warehousing addresses the pressing need for robust decision
              support systems by providing a comprehensive solution for managing
              and analyzing data. This introduction highlights the shortcomings
              of past decision support systems and the necessity for more
              advanced approaches like data warehousing. Key components of data
              warehousing include the nature of data, emphasizing its
              organization and structure within the warehouse environment. OLAP
              (Online Analytical Processing) plays a vital role in data
              warehouses, offering essential features and functions for data
              analysis and exploration. Various OLAP models are utilized to
              facilitate multidimensional data analysis, enabling users to gain
              insights from complex datasets. A comparison between operational
              database systems and data warehouses underscores the distinct
              purposes and functionalities of each, illustrating the unique
              value proposition of data warehousing in supporting
              decision-making processes.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Introduction to Data Warehousing,
              OLAP in the Data Warehouse, , Comparison between operational Data
              Base Systems & Data warehouse.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Data Mining/Unit 1.pdf"
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
              In the realm of data warehousing, understanding the components and
              architecture is essential. This overview delves into the various
              components involved, including metadata and its types, which play
              a crucial role in data management and organization within the
              warehouse. Multidimensional data models, such as data cubes and
              schemas, enable complex data representation and analysis,
              incorporating concept hierarchies to facilitate deeper insights.
              OLAP operations within these models allow for flexible data
              exploration and manipulation. The data warehouse architecture
              typically follows a three-tier structure, encompassing data
              extraction, transformation, and loading processes to ensure data
              integrity and consistency. The critical importance of data quality
              is emphasized, highlighting the challenges associated with
              maintaining high-quality data and its implications for
              decision-making processes.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span> Meta data & its types,
              Multidimensional Data Model, concept hierarchies, OLAP operations
              in multidimensional data models, Data Warehouse Architecture: -
              3-tier architecture, Data Extraction, Transformation, and Loading,
              Data Quality: Why is data Quality Critical? Data Quality
              Challenges.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Data Mining/Unit 2.pdf"
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
              Data mining is a powerful approach for extracting valuable
              insights from large datasets, making it a crucial tool in today's
              data-driven world. This introduction outlines the functionalities
              of data mining systems, which encompass various tasks such as
              classification, clustering, and association rule mining. The
              classification of data mining systems provides insights into their
              underlying methodologies and approaches. Major issues in data
              mining, including data preprocessing challenges, are addressed to
              ensure the reliability and accuracy of mining results. Data
              preprocessing involves several steps, such as data summarization,
              cleaning, integration, transformation, and reduction, aimed at
              preparing the data for effective mining. Frequent pattern mining,
              association, and correlation analysis are fundamental concepts in
              data mining, with efficient and scalable methods available for
              extracting valuable patterns from datasets of varying sizes. This
              comprehensive overview sets the stage for exploring the various
              aspects of data mining and its practical applications in different
              domains.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>Introduction, Data Mining
              Functionalities, Classification of Data Mining System; Major
              Issues in Data Mining, Data Preprocessing: Preprocess, Descriptive
              Data Summarization, Data Cleaning, Data Integration &
              Transformation, Data Reduction, Mining Frequent Patterns,
              Association, and Correlations, Basic Concept, Efficient & Scalable
              Frequent Item set Mining Methods, Mining Various Kinds of
              Association Rules.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Data Mining/Unit 3.pdf"
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
              Prediction is a vital aspect of data mining, enabling the
              anticipation of future trends and outcomes based on historical
              data. However, several issues must be addressed to ensure the
              accuracy and reliability of predictions. Classification methods
              play a significant role in prediction tasks, with decision tree
              induction, Bayesian classification, backpropagation, associative
              classification, and nearest neighbor classification being
              prominent techniques. Decision tree induction involves
              constructing a tree-like model of decisions based on input
              features, making it intuitive and easy to interpret. Bayesian
              classification utilizes probabilistic principles to assign class
              labels to instances, offering a robust framework for
              classification tasks. Backpropagation is a key algorithm in neural
              network-based classification, allowing for iterative refinement of
              model parameters to improve prediction accuracy. Associative
              classification leverages association rule mining techniques to
              classify instances based on their similarities to previously seen
              patterns. Nearest neighbor classification relies on the proximity
              of instances in feature space to determine their class labels,
              making it a flexible and versatile approach. Overall, these
              classification methods provide valuable tools for making
              predictions and guiding decision-making processes in various
              domains.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>
              Prediction Issues, Classification by Decision Tree Induction,
              Bayesian Classification, Classification by Back Propagation,
              Associative Classification, nearest neighbor classification,
              Prediction.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Data Mining/Unit 4.pdf"
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
              Cluster analysis is a fundamental technique in data mining and
              machine learning, aimed at grouping similar objects or data points
              into clusters based on their inherent characteristics or
              attributes. This process helps uncover hidden patterns and
              structures within the data, facilitating better understanding and
              decision-making. Cluster analysis methods can be categorized into
              various types, each with its own approach and characteristics.
              Major clustering methods include partitioning methods,
              hierarchical methods, density-based methods, and more.
              Partitioning methods involve dividing the dataset into a
              predefined number of clusters, with examples including k-means and
              k-medoids algorithms. Hierarchical methods build a hierarchical
              structure of clusters, allowing for a nested organization of data
              points. Cure and Chameleon are notable hierarchical clustering
              algorithms. Density-based methods, such as DBSCAN (Density-Based
              Spatial Clustering of Applications with Noise) and OPTICS
              (Ordering Points To Identify the Clustering Structure), focus on
              identifying dense regions of data points as clusters. Wave Cluster
              and CLIQUE are other density-based clustering techniques. Current
              trends in cluster analysis encompass applications in text mining
              and web mining. Text mining involves extracting valuable insights
              and knowledge from large volumes of textual data, while web mining
              focuses on analyzing web data to discover patterns and trends for
              various purposes, such as improving search engine results or
              understanding user behavior online. These trends highlight the
              continued relevance and versatility of cluster analysis in
              addressing contemporary data analysis challenges.
            </p>
            <p className="imp-para">
              <span>Important Topics : </span>What is Cluster Analysis, Types,
              Categorization of Major Clustering Methods, Partitioning Methods,
              Hierarchical Methods- cure and chameleon, Density-Based Methods:
              DBSCAN &OPTICS, Wave Cluster, CLIQUE. Text mining, web mining.
            </p>
            <details>
              <summary className="notes-size">
                View Notes
                <FaArrowTurnDown className="ml-3 text-sm" />
              </summary>
              <embed
                src="/PDF/Data Mining/Unit 5.pdf"
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
              <Link to="https://www.javatpoint.com/data-mining" target="_blank">
                JavaPoint Data Mining Tutorial
              </Link>
            </li>
            <li>
              <Link
                to="https://www.youtube.com/watch?v=cLI_bIlq-oU&list=PL-JvKqQx2AteuF5RnKVD0ZuW1_Tuk8H60"
                target="_blank"
              >
                University Academy (YouTube playlist)
              </Link>
            </li>
            <li>
              <Link
                to="https://www.geeksforgeeks.org/data-mining/"
                target="_blank"
              >
                GFG
              </Link>
            </li>
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

export default DataMin;
