import React, { useState } from "react";

function Tab() {
  const [activeTab, setactiveTab] = useState("Home");
  return (
    <div style={Style.Container}>
      <h2>Tab Component</h2>
      <div style={Style.tabContainer}>
        <button
          style={activeTab === "Home" ? Style.activeBtn : Style.Btn}
          onClick={() => setactiveTab("Home")}
        >
          Home
        </button>
        <button
          style={activeTab === "About" ? Style.activeBtn : Style.Btn}
          onClick={() => setactiveTab("About")}
        >
          About
        </button>
        <button
          style={activeTab === "Contact" ? Style.activeBtn : Style.Btn}
          onClick={() => setactiveTab("Contact")}
        >
          Contact
        </button>
      </div>
      <div style={Style.contentBox}>
        {activeTab === "Home" && <p>this is home page</p>}
        {activeTab === "About" && <p>this is about us page</p>}
        {activeTab === "Contact" && <p>this is contact us:xxxxxxx</p>}
      </div>
    </div>
  );
}
const Style = {
  Container: {
    minHeight: "100vh",
    padding: "20px",
    background: "lightgrey",
  },
  tabContainer: {
    padding: "20px",
    border: "none",
    margin: "20px",
  },
  contentBox: {
    height: "100px",
    width: "300px",
    border: "1px solid",
    marginLeft: "500px",
  },
  activeBtn:{
    background:"green"
  },
  Btn:{
    background:"white"
  }
};

export default Tab;
