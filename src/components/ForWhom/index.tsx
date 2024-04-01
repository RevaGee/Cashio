import React from "react";
import './styles.scss'
import Facebook from '../../images/icons/Facebook.png'
import Instagram from '../../images/icons/Instagram.png'
import GoogleAds from '../../images/icons/GoogleAds.png'
import YouTube from '../../images/icons/YouTube.png'
import TikTok from '../../images/icons/TikTok.png'
import Taboola from '../../images/icons/Taboola.png'
import Telegram from '../../images/icons/Telegram.png'
import Snapchat from '../../images/icons/Snapchat.png'
import Bing from '../../images/icons/Bing.png'
import Yahoo from '../../images/icons/Yahoo.png'
import Amazon from '../../images/icons/Amazon.png'
import Linkedin from '../../images/icons/Linkedin.png'
import {HeartSvg} from '../../images/icons/HeartSvg'
import {PokerTipSvg} from '../../images/icons/PokerTipSvg'
import {CartSvg} from '../../images/icons/CartSvg'
import {ArrowRight} from "../../images/icons/ArrowRight";
import {BitcoinSvg} from "../../images/icons/BitcoinSvg";
export const ForWhom = () => {
    return(
        <div className = 'for_whom'>
            <div className = 'for_whom_media'>
                <div className = 'for_whom_text'>
                    <h1>FOR WHOM</h1>
                </div>
                <div className='for_whom_blocks'>
                    <div className='block_crypto block'>
                        <div className = 'arrow_block'><ArrowRight/></div>
                        <BitcoinSvg/>
                        <h4>Crypto</h4>
                        <div className='block_img'>
                            <div className='img_bg'><img src={Instagram} alt=''/></div>
                            <div className='img_bg'><img src={Facebook} alt=''/></div>
                            <div className='img_bg'><img src={GoogleAds} alt=''/></div>
                        </div>
                    </div>
                    <div className='block_crypto block'>
                        <div className='arrow_block'><ArrowRight/></div>
                        <HeartSvg/>
                        <h4>Dating</h4>
                        <div className='block_img'>
                            <div className='img_bg'><img src={YouTube} alt=''/></div>
                            <div className='img_bg'><img src={TikTok} alt=''/></div>
                            <div className='img_bg'><img src={Taboola} alt=''/></div>
                        </div>
                    </div>
                    <div className='block_crypto block'>
                        <div className='arrow_block'><ArrowRight/></div>
                        <PokerTipSvg/>
                        <h4>Igaming</h4>
                        <div className='block_img'>
                            <div className='img_bg'><img src={Telegram} alt=''/></div>
                            <div className='img_bg'><img src={Snapchat} alt=''/></div>
                            <div className='img_bg'><img src={Bing} alt=''/></div>
                        </div>
                    </div>
                    <div className='block_crypto block'>
                        <div className='arrow_block'><ArrowRight/></div>
                        <CartSvg/>
                        <h4>E-commerce</h4>
                        <div className='block_img'>
                            <div className='img_bg'><img src={Yahoo} alt=''/></div>
                            <div className='img_bg'><img src={Amazon} alt=''/></div>
                            <div className='img_bg'><img src={Linkedin} alt=''/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
