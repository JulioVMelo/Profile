import React from 'react';
import { HeaderUI, Info, SocialLinks } from './style';
import BgHeader1 from '../../assets/bgHeader.webm';
import BgHeader2 from '../../assets/bgHeader.mp4';
import TwitterLogo from '../../assets/twitter.svg';
import GmailLogo from '../../assets/gmail.svg';
import GitLogo from '../../assets/github.svg';

const Header = () => (
  <HeaderUI>
    <video preload="auto" loop autoplay="true">
      <source src={BgHeader1} type="video/webm"/>
      <source src={BgHeader2} type="video/mp4"/>
    </video>
    <Info>
      <h1>Júlio V. Melo</h1>
      <span>Front-end developer</span>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>
    </Info>
    <SocialLinks>
      <ul>
        <li><a href="https://twitter.com/JulioVilarM" rel="noopener noreferrer" target="_blank"><img src={TwitterLogo} alt="Twiiter"/></a></li>
        <li><a href="https://github.com/JulioVMelo" rel="noopener noreferrer" target="_blank"><img src={GitLogo} alt="GitHub"/></a></li>
        <li><a href="mailto:julio.vilarmelo@gmail.com"><img src={GmailLogo} alt="Gmail"/></a></li>
      </ul>
    </SocialLinks>
  </HeaderUI>
);

export default Header;
