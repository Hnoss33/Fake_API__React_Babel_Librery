
//usestate maneja estado y con useEffect manejamos la peticion de la API, o algun evento que se trasmita dentro d enuestros componentes o escuchar un cambio necesario
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';
//aca estamos agregando el estado//
const App = () => { //a la constante le asignamos variables para guardar a mi estado, en este caso setcideos es el que actualiza
  const InitialState = useInitialState(API); //aca traemos los valores y la estamos añadiendo a esta constante llamada initialstate
  return InitialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Search />
      {InitialState.mylist.length > 0 && (
        <Categories title='My List'>
          <Carousel>
            {InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}

      <Categories title='Recomended'>
        <Carousel>
          {InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {InitialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
