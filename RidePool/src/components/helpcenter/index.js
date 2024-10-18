import React, { useState } from "react"; // Make sure to import useState

const Helpcenter = ({ listItems }) => {
  const [expandedItems, setExpandedItems] = useState(
    Array(listItems.length).fill(false)
  );

  const toggleReadMore = (index) => {
    const updatedItems = [...expandedItems];
    updatedItems[index] = !updatedItems[index];
    setExpandedItems(updatedItems);
  };

  return (
    <>
      <div className="container">
        <h1 className="carpool_title">Carpool Help Centre</h1>
        <ul className="projectitem">
          {listItems.map((item, index) => (
            <li className="projectitemcontainer" key={index}>
              <div className="flex-row">
                <h2 className="listitem_h1 stylish-heading">
                  {item.carpool_que}
                </h2>
                <div
                  className={`paragraph-container ${
                    expandedItems[index] ? "expanded" : "collapsed"
                  }`}
                >
                  <p className="listitem_p">{item.carpool_ans}</p>
                </div>
                <button
                  className="read-more-btn"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedItems[index] ? "Read Less" : "Read More"}
                </button>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>TERMS AND CONDITIONS</p>
          <p>@2024.inc</p>
        </div>
      </footer>
    </>
  );
};

export default Helpcenter;
