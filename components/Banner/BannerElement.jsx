import React from 'react'
import { BannerContext } from './Banner'

export default function BannerElement({ varient }) {
    
    const { bannerDescription } = React.useContext(BannerContext)
    
    
    const bannerData = {
            success: {
                titleText:'Congratulations!',
                bannerImg:'Check-circle.png'
            },
            warning: {
                titleText:'Attention',
                bannerImg:'Exclamation.png'
            },
            error: {
                titleText:'There is a problem with your application',
                bannerImg:'X-circle.png'
            },
            neutral: {
                titleText:'Update available',
                bannerImg:'Icon-1.png'
            }
    }
    
    const { titleText, bannerImg } = bannerData[varient] || {
        titleText: '',
        bannerImg: '',
    }

    
    return (
        <div className={`banner-el-container ${varient}`}>
            <img src={`./images/${bannerImg}`} className='banner-img'/>
            <h4 className='banner-title'>{titleText}</h4>
            <p className='banner-description'>
                { bannerDescription }
            </p>
        </div>
        
    )
}