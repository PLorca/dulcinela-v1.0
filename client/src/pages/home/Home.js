import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import { Carousel } from 'antd';
const contentStyle = {
    margin: '1rem 10rem 0 10rem',
    height: '220px',
    color: 'var(--color-text)',
    lineHeight: '190px',
    textAlign: 'center',
    border: '2px solid var(--color-secondary)',
    borderRadius: '10px',
    background: 'var(--color-background)',
};
// #######################################################################
const Home = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    // ##############################################
    return (
        <div>
            <Navbar />
            
            <Carousel afterChange={onChange}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    )
    // ##############################################
}
// #######################################################################
export default Home