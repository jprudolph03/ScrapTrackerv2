import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="ui inverted top fixed menu">
        <div className="ui container">
          <Link href="/">
            <a className="header item">SCTv2</a>
          </Link>
          <div
            role="listbox"
            aria-expanded="false"
            className="ui item simple dropdown"
            tabIndex="0"
          >
            <div
              aria-atomic="true"
              aria-live="polite"
              role="alert"
              className="divider text"
            >
              Admin
            </div>
            <i aria-hidden="true" className="dropdown icon"></i>
            <div className="menu transition visible">
              <Link href="/addNewPart">
                <div aria-roledescription="option" className="item">
                  Add New Part
                </div>
              </Link>
              <Link href="/addNewLot">
                <div aria-roledescription="option" className="item">
                  Start New Lot
                </div>
              </Link>
            </div>
          </div>
          <div
            role="listbox"
            aria-expanded="false"
            className="ui item simple dropdown"
            tabIndex="0"
          >
            <div
              aria-atomic="true"
              aria-live="polite"
              role="alert"
              className="divider text"
            >
              Scrap Reporting
            </div>
            <i aria-hidden="true" className="dropdown icon"></i>
            <div className="menu transition visible">
              <div aria-roledescription="option" className="item">
                Forging
              </div>
              <div aria-roledescription="option" className="item">
                Pressing
              </div>
              <div aria-roledescription="option" className="item">
                Tapping
              </div>
              <div aria-roledescription="option" className="item">
                VS / Pack
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
