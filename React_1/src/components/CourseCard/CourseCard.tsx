import React from 'react';
import '@/components/CourseCard/CourseCard.css';
import ResponsiveImage from '@/components/ResponsiveImage/ResponsiveImage';

type CourseCardProps = {
    imgSrc: string;
    tags: string[];
    name: string;
    price: number;
}

const CourseCard = ({ imgSrc, tags, name, price } : CourseCardProps) => {
    return (
        <div className='course-card'>
            <a className="content">
                <div className="cover">
                    <ResponsiveImage src={imgSrc} alt="resImg"/>
                </div>
                <div className="info">
                    <ul className="tags">
                        {tags.map((tag, index) => {
                            return <li key={index} className="tag">{tag}</li>
                        })} 
                    </ul> 
                    <h4 className="name">{name}</h4>
                    <div className="prices">
                        <span className="sale-percent">51%↓</span>
                        <span className="monthly-price">월 {price.toLocaleString("ko-KR")}원</span>
                        <span className="installment-month">/ 12개월</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CourseCard;