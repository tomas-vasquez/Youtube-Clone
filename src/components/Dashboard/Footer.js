import React from "react";
import Icons from "../Common/Icons";

//config

export default function Footer() {
  return (
    <>
      <div className="copyright py-4 text-center text-white">
        <div className="container">
          made with <i className="fas fa-heart"></i> by{" "}
          <a
            className="badge badge-dark"
            rel="noopener"
            href="https://tomas-dev.vercel.app"
            aria-label="My GitHub"
          >
            Tomi
          </a>{" "}
          using <Icons icon="react" />
          <p className="mb-0">
            <small className="text-muted">
              {" "}
              Project code is open source. Feel free to fork and make your own
              version.
            </small>
          </p>
        </div>
      </div>
    </>
  );
}
