import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='carousel-item__details--img' src={playIcon} alt='Play Icon' />
        <img className='carousel-item__details--img' src={plusIcon} alt='Plus Icon' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
};

export default CarouselItem;
//ACA LE PASAMOS LOS ELEMENTOS QUE EL CAROUSEL NECESITA: los encontramos en la fake API y los colocamos abajo en cada div para que los llame//
//DOCUMENTACION PEQUEÑA DEL PORQUE LOS PROPS
// Los PropTypes son una propiedad de nuestros componentes que nos permiten especificar qué tipo de elementos son nuestras props: arrays, strings, números, etc.

// Instalación de PropTypes:

// npm install --save prop-types
// Uso de PropTypes:

// import React from 'react';
// import PropTypes from 'prop-types';

// const Component = ({ name, lastName, age, list }) => {
//   // ...
// };

// Component.propTypes = {
//   name: PropTypes.string,
//   lastName: PropTypes.string,
//   age: PropTypes.number,
//   list: PropTypes.array,
// };

// export default Component;
// Por defecto, enviar todas nuestras props es opcional, pero con los propTypes podemos especificar cuáles props son obligatorias para que nuestro componente funcione correctamente con el atributo isRequired.

// Component.propTypes = {
//   name: PropTypes.string.isRequired, // obligatorio
//   lastName: PropTypes.string.isRequired, // obligatorio
//   age: PropTypes.number, // opcional,
//   list: PropTypes.array, // opcional
// };
