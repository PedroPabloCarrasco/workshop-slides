import React from "react";
import Slides from "./components/Slides";

const App = () => {
  return (
    <div>
      <Slides 
        images={[
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
          }
        ]}
      />
    </div>
  );
};

export default App;
