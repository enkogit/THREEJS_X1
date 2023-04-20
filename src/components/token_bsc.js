import React from "react";
import { TokenBanners } from "./sub/token_banners";

export function TokenBSC() {
  return (
    <div className="container">
      <p className="bottom-space-sm" />
      <div className="token__section">
        <div className="token__wrapper">
          <div className="token__container-card">
            <div
              className="token__container-cardInfo"
            >
              <p className="bottom-space-sm" />
              <img
                    src="images/web/bsc1.png"
                    width="150px"
                    alt="bscscan-logo"
                  />
            </div>
            <div
              className="row"
              style={{ flexFlow: "row", alignItems: "center" }}
            >
              
                <div className='mobile-shrink'>
                  <div className="title">

                    <div className='cool-text'>DOGE-1</div>

                  </div>
                </div>
              
            </div>
            <a href='https://doge-1.org'  className="btn effect04">
                <h2 style={{fontSize: '15px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em'}}>
                          DOGE-1.ORG
                </h2>
                </a>
            <div
              className="row"
              style={{ flexFlow: "row", alignItems: "center" }}
            >
              <h2
                style={{
                  display: "flex",
                  fontSize: "35px",
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                FAIR&emsp;
              </h2>
              <hr width="3" size="50" />
              <h2
                style={{
                  display: "flex",
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                &emsp;LAUNCHED
              </h2>
            </div>
            <div className="bottom-space-sm" />
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col">
                <h3
                  style={{
                    fontSize: "12px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.2em",
                  }}
                >
                  ◐ 3% REWARD POOL{" "}
                </h3>
              </div>
              <div className="mobile-break">
                <div className="col">
                  <h3
                    style={{
                      fontSize: "12px",
                      margin: "0px 0px 0px 0px",
                      opacity: 1,
                      letterSpacing: "0.35em",
                    }}
                  >
                    &emsp;|&emsp;
                  </h3>
                </div>
              </div>

              <div className="col">
                <h3
                  style={{
                    fontSize: "12px",
                    margin: "0px 0px 0px 0px",
                    opacity: 1,
                    letterSpacing: "0.2em",
                  }}
                >
                  {" "}
                  BUYBACK POOL 3%◑&emsp;
                </h3>
              </div>
            </div>
            <div className="bottom-space-md" />
            <div className='row' style={{flexFlow:'column'}}>
          <div className='col'>
            <img src="images/web/doge_spin.gif" width="45px" alt="" style={{margin:'-15px'}} />
          </div>
        </div>
            <div
              className="row"
              style={{ flexFlow: "column", alignItems: "center" }}
            >
              
              <h3 style={{ fontSize: "15px", margin: "2px", opacity: 1 }}>
                HODL minimum 20 MILLION $DOGE-1
              </h3>
              <h3 style={{ fontSize: "12px", margin: "5px", opacity: 1 }}>
                to receive DOGECOIN rewards automatically
              </h3>
            </div>
            <p className="bottom-space-sm" />
            <div className="row" style={{ flexFlow: "column" }}>
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: "200",
                  textAlign: "center",
                }}
              >
                READY TO JOIN US ON BSC?
              </h2>
            </div>

            <div className="row">
              <TokenBanners />
            </div>

            <a
              href="whitepaper/whitepaperBSC.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2
                style={{
                  fontSize: "10px",
                  fontWeight: "200",
                  textAlign: "center",
                }}
              >
                WHITEPAPER PDF
              </h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
