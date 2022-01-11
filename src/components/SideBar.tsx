import {Link} from 'react-router-dom';
import React from 'react';

import './UI/styles/NavBar.css';
import SideBar from './UI/SideBar/SideBar';
import LinkButton from './UI/Buttons/LinkButton';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './UI/Theme/ThemeToggle';
import LongDivider from './UI/Dividers/LongDivider';
import IconButton from './UI/Buttons/IconButton';
import Tooltip from './UI/Tooltip';
import Row from './UI/Grid/Row';
import Col from './UI/Grid/Col';
import SideBarLink from './UI/SideBar/SideBarLink';

export default function () {
	const {t} = useTranslation();
	
	return (
	  <div>
		  <SideBar>
			  <div className="flex h-full flex-col justify-between">
				  <div className="flex-col">
					  <Row dir="ltr">
						  <Col>
							  <Link to="/" className="py-4 px-4 flex flex-row items-center">
								  {/* <img src={logo} className={"max-w-[50px]"} alt="LOGO"/> */}
								  
								  <p
									className="px-3 text-2xl font-semibold tracking-widest text-gray-900 dark:text-white uppercase rounded-lg focus:outline-none focus:shadow-outline"
								  >
									  {t('App Name')}
								  </p>
							  </Link>
						  </Col>
					  </Row>
					  
					  <SideBarLink>
						  <LinkButton to="/">{t('Home')}</LinkButton>
					  </SideBarLink>
					  
					  <SideBarLink>
						  <LinkButton to="/cryptocurrencies">{t('Cryptocurrencies')}</LinkButton>
					  </SideBarLink>
					  
					  <SideBarLink>
						  <LinkButton to="/news">{t('News')}</LinkButton>
					  </SideBarLink>
					  
					  <SideBarLink>
						  <LinkButton to="/about">{t('About')}</LinkButton>
					  </SideBarLink>
					  
					  <SideBarLink>
						  <LinkButton to="/someNonExistingPage">{t('404')}</LinkButton>
					  </SideBarLink>
				  
				  </div>
				  
				  <div>
					  <LongDivider/>
					  <div className="flex flex-row py-3 px-3 justify-around">
						  
						  <Tooltip className="bottom-[40px] left-[-20%]" tooltip={t('Settings')}>
							  <IconButton>
								  <IconMdiSettings/>
							  </IconButton>
						  </Tooltip>
						  
						  <Tooltip className="bottom-[40px] left-[-80%]" tooltip={t('Notifications')}>
							  <IconButton>
								  <IconMdiBellOutline/>
							  </IconButton>
						  </Tooltip>
						  
						  <ThemeToggle/>
						  
						  <LanguageSelector/>
						  
						  <Tooltip className="bottom-[40px] right-[-60%]" tooltip={t('Logout')}>
							  <IconButton>
								  <IconMdiLogout/>
							  </IconButton>
						  </Tooltip>
					  
					  </div>
				  </div>
			  </div>
		  </SideBar>
	  </div>
	);
}
