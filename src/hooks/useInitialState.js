import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] }); //usestate recibe como propiedad elementos para inicializar el estado string numer o boleanos, objetos o arreglos, este elemento es el que maneja el estado
  useEffect(() => { //aca creamos la logica que necesitamos
    fetch(API) //el fetch recibe la API
      .then((response) => response.json()) //esta respuesta se pasa al .JASON
      .then((data) => setVideos(data));//despues la informacion que ya tenemos se la pasamos a setVideos en (data)le pasamos la informacion
  }, []); //se coloca vacio para que no genere loop infinito
  // console.log(videos);
  //{{videos.mylist.length > 0 &&} ESTO DICE QUE:si mi estado es videos y mi mlista esta vacia en la API y si lenght es mayor que cero no se muestra nada
  //{/con el .map vamos a tener el resultado de cada uno de estos item que traemos de la API, y por cada uno de ellos pasamos el componente con la informacion, abajo le pasamos el componente de item}
  return videos;
};

export default useInitialState;
