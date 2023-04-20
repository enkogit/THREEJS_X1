import React from 'react';

export function ETHBanners() {
  return (
      <div className='container'>
          <div className='row'>
            <a href='https://www.pinksale.finance/launchpads?chain=ETH'  className="btn2" >
            <img
                    src="images/web/pinksale.png"
                    width="150px"
                    alt="bscscan-logo"
                  />

              </a>
              <a href='https://etherscan.io/token/'  className="btn2">
              <img
                    src="images/web/etherscan.png"
                    width="150px"
                    alt="bscscan-logo"
                  />
                </a>
                <a href='https://app.uniswap.org/'  className="btn2">
                <img
                    src="images/web/uniswap.png"
                    width="150px"
                    alt="bscscan-logo"
                  />
              </a>
            </div>
          </div>
  );
}