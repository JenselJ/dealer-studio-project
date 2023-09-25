import "./App.scss";
import Card from "./Components/Card";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    setBorder(2);
  }, []);

  const [border, setBorder] = useState(null);

  function newBorder(x) {
    setBorder(x);
    console.log(x);
  }

  const data = [
    {
      id: 1,
      header: "Header 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      button: "Button 1",
    },
    {
      id: 2,
      header: "Header 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      button: "Button 2",
    },
    {
      id: 3,
      header: "Header 3",
      // body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaSPLITincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      body2:
        "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      button: "Button 3",
    },
  ];

  return (
    <div>
      <div className="banner-image"></div>
      <div className="banner">
        <div className="banner-child">
          <div className="banner-title">Welcome to G Automotive</div>
          <div className="banner-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="banner-btn-wrapper">
            <div className="banner-btn">
              <div className="banner-btn-text">Contact Us</div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-space">
        <div className="card-space-child">
          {data.map((card) => {
            return (
              <Card border={border} newBorder={newBorder} cardDetails={card} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
