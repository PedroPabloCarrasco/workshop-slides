import React, { useState, useEffect } from "react";

const Slides = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const tick = setInterval(() => {
            if (activeIndex < images.length - 1) {
                setActiveIndex(prevIndex => prevIndex + 1);
            } else {
                // Vuelve al inicio que viene siendo el indice 0
                setActiveIndex(0);
            }
        }, 1000);

        return () => clearInterval(tick);
    }, [activeIndex, images.length]);

    return (
        <div>
            <h1>{activeIndex}</h1>
            {/* Renderiza la imagen activa */}
            <div>
                <img src={images[activeIndex].src} alt={images[activeIndex].title} />
                <div>{images[activeIndex].title}</div>
            </div>
        </div>
    );
};

Slides.defaultProps = {
    images: [
        {
            src: 'https://www.pexels.com/es-es/foto/naturaleza-cielo-noche-espacio-2387877/',
            title: 'Vía Láctea'
        },
        {
            src: 'https://images.pexels.com/photos/2753432/pexels-photo-2753432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Universo'
        },
        {
            src: 'https://www.pexels.com/es-es/foto/naturaleza-cielo-noche-espacio-2387877/',
            title: 'Espacio'
        },

        {
            src: 'https://images.pexels.com/photos/4631158/pexels-photo-4631158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Espacio y linterna'
        }
    ]
};

export default Slides;
