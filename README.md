## Coffee Shop PoS

This is the front-end for a point-of-sale application for a coffee shop that can be used to order your favourite dripped coffee, latte or smoothie using self-service points.

It offers rich features such as a realtime cart, feature to customize items and comprehensive checkout flow.

![Coffee Shop PoS GIF](https://media.giphy.com/media/7NpMp0idvVtc2UcY9u/giphy.gif)

### Client

The application runs responsively in multiple devices and viewports smoothly. This is built with **`React`** and **`Material UI`**. For state management, a custom hook called `useGlobalHook` has been used to keep the bundle size small and avoid a lot boilerplate code. It uses feature rich components from Material UI such as `TypoGraphy`, `Card` and `Accordion` to build a perfect look and feel for the PoS application. The Material UI component styles have been customized using `makeStyles` hooks that it provides out of the box. And, `sass` is used as well wherever required, especially for `Page Components`.

### Server

The data is powered by a **`Node.js`** and **`Express`** backend which helps in retrieving product and addons data that are stored statically. The product and addon images are retrieved from `Cloudinary` which is a CDN provider. For ^ES6 support, `babel` has been used as a transpiler.

### Demo

The application has been deployed to **`Heroku`** and is also configured for Continuous Deployment with GitHub. Please browse it [here](https://coffee-shop-pos.herokuapp.com/).

You can also watch the demo video [here](https://youtu.be/Gjs1kBQPSkQ).

### How to run locally

- Run `npm ci`
- Go to `./src/client`
- Run `npm ci`
- Go to root folder `./`
- Run `npm run dev`
- Wait for both client and server to start
- Open `http://localhost:3000/` in your browser

_.env file has been pushed to the repository for the ease of running the application backend locally. But in best practices. it's advisable not to push environment files to the repository as it might contain sensitive information like API secrets._
