import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Install({ installable, onInstallClick, onCloseClick }) {
  return (
    <InstallWrap className="block md:hidden">
      {installable && (
        <Fade bottom>
          <div
            className="bg-white bg-opacity-45 backdrop-filter backdrop-blur-xl border-2 rounded-t-2xl w-full h-48 text-center fixed bottom-0 left-0 p-4 shadow-md z-50"
            style={{ fontFamily: "Roboto" }}
          >
            <button
              className="text-red-800 text-xl flex items-end justify-end w-full"
              onClick={onCloseClick}
            >
              &#10005;
            </button>
            <h1 className="text-lg text-gray-700 font-medium">
              For a better experience <br /> use LeoImpex Lite
            </h1>
            <button
              className="text-white bg-[#F16022] rounded-md mt-4 p-2 px-5 text-[14px] mr-4"
              onClick={onInstallClick}
            >
              INSTALL
            </button>
          </div>
        </Fade>
      )}
    </InstallWrap>
  );
}

const InstallWrap = styled.div`
  .install-banner {
    /* background-color: #f6cfe0;
    width: 100%;
    height: 8rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
    z-index: 50; */
  }
`;

export default Install;
