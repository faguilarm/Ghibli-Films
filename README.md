# Ghibli Films Project

This project is the implementation of the [frontend challenge](https://github.com/resuelve/prueba_frontend) of Resuelve Engineering Team.

The live application can be found [here](https://ghibli-films-faguilarm.vercel.app/)

## Problem resolution

As the problem itself was only about listing and searching the `films` collection, I decided to include the other elements and build some kind of browser that provides navigation between these pieces of information.

Soon after that, I realized that many of the items were lacking a complete reference to the other elements, so it was going to be harder to use the list and detail endpoints. That's when I chose to make a different approach, which is to use the list endpoints just once (in the lifecycle of the page) and build the data structures and the connection between collections entirely on the frontend side.

In order to avoid the generation of different components for every type of list and detail, I created just a couple of them with a flexible/dynamic behaviour. This way, I only cared about creating the necessary parameters for routing, api access and visualization. 

## Technical details

* The application was build with Angular, a tool that I'm very confortable with.
* For the UI/layout, I used the Bulma css framework, it was the very first time with it, but I wanted a minimal dependency that also included at least some basic components.

## Trade-offs and TODOs
* Lack of typings: to be able to manipulate different data structures with the same code, I used the minimal ammount of typings. That doesn't mean that a solution with proper types isn't possible, it's just that I would need more time and planning.
* The need to fetch the entire lists as needed. In a more realistic case, this can be a bad pattern.  
* Minor glitches in some components and layouts, as I was learning Bulma on the go.
* Parts of the solution, especially the service class, could be difficult to read or understand, more comments should be used to explain the intention of some of the complex blocks.
* A lot of type and structure checking was used, as the code was made to work around the responses and limitations of the API, so it could be very sensitive to changes.  

## How to run (Angular documentation)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.4. 

After downloading this repository, you need to execute the following command at the root directory:

```
npm install
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
