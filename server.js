const express = require('express');
const next = require('next');
const compression = require('compression');
const helmet = require('helmet');
const siteConfig = require('./config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const runTheTrap = async () => {
  try {
    await app.prepare();
    const server = express();

    // enable helmet to set security headers
    server.use(helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [
            "'self'"],
          scriptSrc: [
            "'self'",
            "'unsafe-eval'",
            "'unsafe-inline'",
            "https://www.google-analytics.com",
            "https://cdn.polyfill.io"],
          styleSrc: [
            "'self'",
            "'unsafe-inline'"],
          imgSrc: [
            "'self'",
            "https://www.google-analytics.com/collect",
            "https://www.google-analytics.com/r/collect",
            "https://res.cloudinary.com",
            "https://images.unsplash.com",
            "https://imgs.xkcd.com",
            "https://c1.staticflickr.com"
          ],
          connectSrc: [
            "'self'",
            "https://www.google-analytics.com/j/collect",
          ]
        },
        upgradeInsecureRequests: true
      }
    }));

    // gzip it!
    server.use(compression());

    // Pass static assets
    server.use('/static', express.static('static'));
    server.use('/.well-known', express.static('.well-known'));

    // handle authors
    server.get('/author/:slug', (req, res) => {
      const context = {
        slug: req.params.slug
      };
      app.render(req, res, '/author', context);
    });

    // Handle direct year routes
    server.get('/:year(\\d{4})', (req, res) => {
      const context = {
        year: req.params.year,
        mode: req.query.mode
      };
      app.render(req, res, '/year', context);
    });

    // Handle post routes
    server.get('/:year(\\d{4})/:date(\\d{1,2})', (req, res) => {
      const context = {
        year: req.params.year,
        date: req.params.date.padStart(2, '0'),
        mode: req.query.mode
      };
      app.render(req, res, '/post', context);
    });

    // Handle 2017's routes
    // One year in, and we already have legacy shit to deal with
    if (siteConfig.handleLegacyLinks) {
      server.get('/:date(\\d{1,2})', (req, res) => {
        res.redirect(`/2017/${req.params.date}`);
      });
    }

    // Handle today route
    server.get('/today', (req, res) => {
      let todayDate = new Date(Date.UTC(year, 11, date));
      const lastDate = new Date(Date.UTC(2018, 11, 24));
      if (todayDate > lastDate) {
        todayDate = lastDate;
      }
      const context = {
        year: todayDate.getFullYear(),
        date: todayDate
          .getDate()
          .toString()
          .padStart(2, '0'),
        mode: req.query.mode
      };
      app.render(req, res, '/post', context);
    });

    // Handle all basic routes
    server.get('*', (...args) => handle(...args));

    // Start the server itself!
    server.listen(3000, err => {
      if (err) {
        throw err;
      }
      console.log('Listening on http://localhost:3000');
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
runTheTrap();
