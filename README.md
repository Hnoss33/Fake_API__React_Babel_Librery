# Fake_API__React_Babel_Librery  => fake API :https://github.com/typicode/json-server
## Environment setup and configuration => follow the steps

# !WARNING:this is at the end AFTERWARS!: I did put it here, just in case...
en Español: el archivo initialState.jason esta listo con los datos que vamos traer or do the fetch in the initialstate!!
Vamos a usar JSON Server para crear una Fake API: una API ““falsa”” construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro.

Instalación de JSON Server:

    sudo npm install json-server -g


Recuerda que en Windows debes correr tu terminal de comandos en modo administrador.

Ejecutar el servidor de JSON Server:

bash
json-server archivoParaTuAPI.json
Start a repository in GIT:

git init
Start a Node.js project:

    npm init -y


Install React:

bash

     npm install --save react react-dom
       
fake API to call information to fetch using HOOKS from React.js
Create React App and Component Types
Initializing a project in React
Creating our website using the default create-react-app template:

    npx create-react-app nombre-de-tu-proyecto

    Iniciar el servidor de desarrollo:

# npm start!!

Adding compatibility with all browsers using Babel
Babel is a very popular tool for writing modern JavaScript and transforming it into code that any browser can understand.

Installation of Babel and other tools to work with React:

    npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

## Configuración de Babel (.babelrc):!!

    {
      ""presets"": [
        ""@babel/preset-env"",
        ""@babel/preset-react""
      ],
    }
    
Webpack: Empaquetando nuestros módulos
"Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:

    npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev
Configuración de Webpack (webpack.config.js):

    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.html$/,
            use: {
              loader: 'html-loader',
            },
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
        }),
      ],
    };
 ## Script para ejecutar las tareas de Webpack (package.json):

    {
      ""scripts"": {
        ""build"": ""webpack --mode production""
      },
    }
    
Webpack Dev Server: Reporte de errores y Cambios en tiempo real
Instalación de Webpack Dev Server:

    npm install --save-dev webpack-dev-server
   
Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):

    {
      ""scripts"": {
        ""build"": ""webpack --mode production"",
        ""start"": ""webpack-dev-server --open --mode development""
      },
    } 
 
Styles with SASS
Preprocessors like Sass are tools that allow us to write CSS with a slightly different and friendlier syntax that will later be transformed into normal CSS. Thanks to Sass we can write CSS with variables, mixins, loops, among other features.

Sass installation:

    npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
Configuración de Sass en Webpack (webpack.config.js):

     const MiniCssExtractPlugin = require('mini-css-extract-plugin');

     // ...

     module: {
       rules: [
         {
           test: /\.(s*)css$/,
           use: [
             { loader: MiniCssExtractPlugin.loader },
             'css-loader',
             'sass-loader',
           ],
         }, 
       ],
     },

     // ...

     plugins: [
       new MiniCssExtractPlugin({
         filename: 'assets/[name].css',
       }),
     ],`
     ``` 


Do not forget that you can learn to handle the different development tools in the Prework Course: Good Practices and Development Environment.
Component Creation and Types
The names of our components must begin with a capital letter, just like every new word in the component. This we know as Pascal Case or Upper Camel Case.
Stateful components are the most robust in React. We use them by creating classes that extend from React.Component. They allow us to manage state and life cycle (we will study them in depth later).

      import React, { Component } from 'react';

      class Stateful extends Component {
        constructor(props) {
          super(props);

          this.state = { hello: 'hello world' };
        }

        render() {
          return (
            <h1>{this.state.hello}</h1>
          );
        }
      }

export default Stateful;
We also have Stateless or Presentational components. We use them by creating functions that return code in JSX format (which we will talk about in the next class).

     import React from 'react';

     const Stateless = () => {
       return (
         <h1>¡Hola!</h1>
       );
     }

// Another way to create them:
      
      const Stateless = () => <h1>¡Hola!</h1>;

    export default Stateless;

# React uses JSX: a syntax that allows us to write the HTML structure and the logic in JavaScript from the same place: our components.

    import React from 'react';

    const HolaMundo = () => {
      // Esto es JavaScript:
      const claseCSSHolaMundo = 'container-red';
      const mensajeTextoHTML = '¡Hola, Mundo!';
      const isTrue = false;

      // Esto es JSX (HTML + JavaScript):
      return (
        <div className={claseCSSHolaMundo}>
          <h1>{mensajeTextoHTML}</h1>

          {isTrue ? '¡Es verdad! :D' : '¡No es verdad! :('}
        </div>
      );
    }

    export default HolaMundo;
    
# Props: Communication between Components
Props are the way to send and receive information on our components. They are the way to communicate each component with the rest of the application. They are very similar to the parameters and arguments of functions in any programming language.

     // Button.jsx
     import React from 'react';

     const Button = props => {
       return (
      <div>
        <button type="button">{props.text}button>
      div>
       );
     };

     export default Button;
     // index.jsx
     import React from 'react';
     import Button from './components/Button';

     ReactDOM.render(
       <Button text="¡Hola!" />,
       document.getElementByid('root'),
     );

# What are life cycle methods?
All components in React go through a series of phases that are generally called "Component Life Cycle" is a process that React does in each component, in some cases we cannot see them as a block of code and in others we can call them in our component to assign an activity as needed.

Components in react go through Assembly, Update, Disassembly and Error handling.

# Mounting:
In this phase our component is created together with the logic and internal components and then it is inserted into the DOM.

# Upgrade:
In this phase our component is on the lookout for changes that may come through a change in "state" or "props" this consequently performs an action within a component.

# Disassembly:
At this stage our component "dies" when we do not need an element of our application, we can go through this life cycle and thus eliminate the component from the representation it has in the DOM.

# Error handling:
When our code runs and has an error, we can enter a phase where we can better understand what is happening with the application.

Something that we must bear in mind is that a component should NOT go through all the phases, a component can be mounted and dismounted without going through the update or error handling phase.

Now that we understand the phases that the life cycle fulfills in React, we are going to go into detail in each one of them to see what pieces of code are executed and they will help us create applications in React through a well-structured life cycle.

# Mounted:
Builder()

This is the first method called, this is where the handler methods, state events, are initialized.

getDerivedStateFromProps ()

This method is called before being presented in the DOM and allows us to update the internal state in response to a change in the properties, it is considered a careful method, since its implementation can cause subtle errors.

render ()

If we want to represent elements in the DOM in this method is where this logic is written, we usually use JSX to work and present our application.

ComponentDidMount ()

This method is called immediately after it has been mounted in the DOM, this is where we work with events that allow us to interact with our component.

Upgrade:
getDerivedStateFromProps ()

This method is the first to run in the upgrade phase and works in the same way as it does in mounting.

shouldComponentUpdate ()

Within this method you can control the update phase, we can return a value between true or false if we want to update the component or not and it is used mainly for optimization.

render ()

The render method is called which renders the changes to the DOM.

componentDidUpdate ()

This method is invoked immediately after the component is updated and receives the properties and state as arguments and it is where we can handle our component.

Unmounted
componentWillUnmount ()

This method is called just before the component is destroyed or removed from the DOM.

# Error handling:
getDerivedStateFromError ()

Once an error is thrown this is the first method that is called, which receives the error as an argument and any value returned from this method is used to update the component's state.

componentDidCatch ()

This method is called after an error is thrown and passes the error and the information represented about the error as an argument.

Now that we understand each of the phases of the react life cycle, we can use them as needed in our application and in this way create the interactions we need.

## State - Events
"React allows us to respond to user interactions with properties such as onClick, onChange, onKeyPress, onFocus, onScroll, among others.

These properties are named after the function that executes the code that responds to user interactions. Surely, this function will use the this.setState function to update the state of our component.

    class Button extends React.Component {
      state = { count: 0 }

      handleClick = () => (
         this.setState({ count: this.state.count + 1 })
      );

      render() {
        const { count } = this.state;

        return (
          <div>
            <h1>Manzanas: {count}</h1>
            <button onClick{this.handleClick}>Sumar</button>
          </div>
        );
      }
    }
Recuerda que los nombres de estos eventos deben seguir la nomenclatura camelCase: primera palabra en minúsculas, iniciales de las siguientes palabras en mayúsculas y el resto también en minúsculas."

 
