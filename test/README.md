DOCUMENTATION
-------------

For starting the server, run:

```
npm start
```
and then go to http://localhost:8080/.

#### Tests

To start unit tests (Karma) on the client side, run:
```
npm test
```

To start unit tests (Mocha) on the server side, run:

```
mocha
```

To start the e2e tests run the following in three separate terminal windows:
1. `cd app && http-server`
2. `webdriver-manager start`
3. `protractor test/protractor.conf.js`
