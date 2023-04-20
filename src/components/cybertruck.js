import React from 'react';

export function Cybertruck() {
return (
<div className='container'>
<p className='bottom-space-md' />
<div className='token__section'>
	<div className='token__wrapper'>
		<div className="token__container-card">
			<div className="token__container-cardInfo" style={{height:'200px'}}>
				<p className='bottom-space-sm' />
				<div className='row' >
					<div className='col'>
						<img src='cybertruck_logo_flash.gif'  width="250px" alt='cybertruck-logo-gif'  />
					</div>
					<div className='col'>
						<div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
							<h2 style={{display: 'flex',fontSize: '35px', fontWeight: '800', textAlign: 'center'}}>
								GIVEAWAY
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className='row' style={{flexFlow:'column'}}>
			<h2 style={{fontSize: '12px', fontWeight: '500', textAlign: 'center', letterSpacing: '0.25em', margin:'5px'}}>
					click to view
					</h2>
					<div className="float-div">
					<h2 style={{fontSize: '25px', fontWeight: '100', textAlign: 'center', margin:'5px'}}>
					↡
					</h2>
					</div>
					
			<a href='https://cyber.doge-1.org'>
				<h2 style={{fontSize: '16px', fontWeight: '200', textAlign: 'center', letterSpacing:'7px'}}>
			<i>CYBER.</i><b>DOGE-1</b>.ORG 
			</h2>
			<div className='img-zoom'>
						<img src='cybertruck-front.png'  width="250px" alt='Cybertruck-front'  />
					</div>
				
			</a>
			</div>
			<p className='bottom-space-md' />
				<div className='row' >
					<div className='col'>
					<div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
					
							<h2 style={{display: 'flex',fontSize: '30px', fontWeight: '800', textAlign: 'center'}}>
								COMMUNITY
							</h2>
						</div>
						
					</div>
					<div className='col'>
						<div className="row" style={{flexFlow: 'row', alignItems:'center'}}>
						<div className='col'>
							<video width="300" autoPlay loop muted>
								<source src='banner.mp4' type="video/mp4"/>
							</video>
						</div>
						</div>
					</div>
				</div>
		<p className='bottom-space-sm' />
		
		<p className='bottom-space-sm' />
		<div className='row' >
			<div className='col'>
				<a href='https://twitter.com/Official_DOGE1'  className="btn effect04">
					<img src='images/web/twitter_icon.png' width='30px' alt='twitter-profile' />
				</a>
			</div>
			<div className='col'>
				<a href='https://discord.gg/DJKmu3gZ88'  className="btn effect04">
					<img src='images/web/discord_icon.png' width='30px' alt='discord-profile' />
				</a>
			</div>
			<div className='col'>
				<a href='https://t.me/official_doge1'  className="btn effect04">
					<img src='images/web/telegram_icon.png' width='30px' alt='telegram-profile' />
				</a>
			</div>
		</div>
		<div className='row'>
		<a href='whitepaper/termsandconditions.pdf' rel="noopener noreferrer" target="_blank">
<h2 style={{fontSize: '10px', fontWeight: '200', textAlign: 'center'}}>
        TERMS & CONDITIONS*
      </h2>
   </a>
		</div>


		</div>
	</div>
</div>
<p className="bottom-space-sm" />

</div>
);
}