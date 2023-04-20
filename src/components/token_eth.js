import React from "react";

export function TokenETH() {
  return (
    <div className="container">
      <p className="bottom-space-sm" />
      <div className="token__section">
        <div className="token__wrapper">
          <div className="token__container-card">
            <div
              className="token__container-cardInfo"
              style={{ height: "200px" }}
            >
              <p className="bottom-space-sm" />

              <div className="row" style={{ flexFlow: "column", padding: "0px 10px 10px 1px" }}>

                  <img
                    src="images/web/ethereum.png"
                    width="150px"
                    alt="bscscan-logo"
                  />
                  
                <h2
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    textAlign: "center",
                    letterSpacing: "0.95em",
                    margin: "5px",
                  }}
                >
                  <i>X-</i>TOKEN
                </h2>
                <h2
                  style={{
                    fontSize: "10px",
                    fontWeight: "500",
                    textAlign: "center",
                    letterSpacing: "0.95em",
                    margin: "5px",
                  }}
                >
                  <i>ERC-</i>20
                </h2>
                <h2
                  style={{
                    fontSize: "25px",
                    fontWeight: "500",
                    textAlign: "center",
                    letterSpacing: "0.5em",
                    margin: "15px",
                  }}
                >
                  <i>LIGHT</i> PAPER
                </h2>
              </div>
            </div>
            <div className="bottom-space" />

            <p className="bottom-space-xsm" />
            <img
                    src="images/web/upsidedown.gif"
                    width="150px"
                    alt="bscscan-logo"
                  />

            <p className="bottom-space-xsm" />
            <div
              className="row"
              style={{ flexFlow: "row", alignItems: "center" }}
            >
              <div className="col">
                <h3
                  style={{
                    fontSize: "19px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  COMING
                </h3>
              </div>
              <div className="col">
                <h3
                  style={{
                    fontSize: "19px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  &emsp;|&emsp;
                </h3>
              </div>
              <div className="col">
                <h3
                  style={{
                    fontSize: "25px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.35em",
                  }}
                >
                  SOON
                </h3>
                
              </div>
            </div>

          </div>
          </div>
        </div>
      </div>
  );
}
