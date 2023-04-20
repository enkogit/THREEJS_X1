import React from 'react';
import { TimerUp } from './timer_countUp';
import { TimerDown } from './timer_countDown';

export function Landing() {
return (
  <div className="container">
    <div className='row' style={{flexFlow:'column'}}>
	<div className='row' >
			<div className='col'>
				<a href='https://twitter.com/x_contracts'  className="btn effect04">
					<img src='images/web/twitter_icon.png' width='30px' alt='twitter-profile' />
				</a>
			</div>
			<div className='col'>
				<a href='https://discord.gg/DJKmu3gZ88'  className="btn effect04">
					<img src='images/web/discord_icon.png' width='30px' alt='discord-profile' />
				</a>
			</div>
			<div className='col'>
				<a href='https://t.me/x_contracts'  className="btn effect04">
					<img src='images/web/telegram_icon.png' width='30px' alt='telegram-profile' />
				</a>
			</div>
		</div>
      <h2 style={{fontSize: '18px', fontWeight: '100', textAlign: 'center', fontFamily:'Montserrat', letterSpacing: '0.5em', lineHeight:'25px'}}>
        <b> HOLD </b> or <i> FOLD</i>
      </h2>
    
        
    </div>
    <div className='row' style={{flexFlow:'column'}}>
      <p>︾</p>
    </div>
    <div className='row' style={{flexFlow:'column'}}>
      <p className="bottom-space" style={{marginBottom:'300px'}} />
      <div className='float-div'>
        <img src="images/web/spaceship.gif" width="150px" alt="" style={{marginTop:'-5px'}} />
      </div>
    </div>
    <p className="bottom-space" style={{marginBottom:'300px'}} />
    <div className='row' style={{display:'flex', flexFlow:'column', alignItems:'center'}}>
		<h3 style={{fontSize: '20px', padding: '5px 0px 5px 0px', opacity:1, letterSpacing: '0.5em'}}>
			TIME SINCE STARSHIP 4/20 LAUNCH
		</h3>
		<TimerUp />
		<h3 style={{fontSize: '20px', padding: '5px 0px 5px 0px', opacity:1, letterSpacing: '0.5em'}}>
			NEXT TEST LAUNCH N.E.T:
		</h3>
		<TimerDown />
	</div>
</div>
);
}