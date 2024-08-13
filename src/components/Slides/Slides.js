import React, { useState, useEffect } from "react";

const Slides = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const tick = setInterval(() => {
            setActiveIndex(prevIndex => 
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 1000);

        return () => clearInterval(tick);
    }, [images.length]);

    return (
        <div>
            <h1>{activeIndex}</h1>
            {/* Renderiza la imagen activa */}
            <div className="Slide">
                <img src={images[activeIndex].src} alt={images[activeIndex].title} />
                <div>{images[activeIndex].title}</div>
            </div>
        </div>
    );
};

Slides.defaultProps = {
    images: [
        {
            src: 'https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Vía Láctea'
        },
        {
            src: 'https://images.pexels.com/photos/2753432/pexels-photo-2753432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Universo'
        },
        {
            src: 'https://images.pexels.com/photos/2387877/pexels-photo-2387877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Espacio'
        },
        {
            src: 'https://images.pexels.com/photos/4631158/pexels-photo-4631158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Espacio y linterna'
        }
    ]
};

export default Slides;
