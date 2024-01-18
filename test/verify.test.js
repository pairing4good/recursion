const http = require("http");
const fs = require("fs");
const puppeteer = require("puppeteer");
const { assert } = require("console");

let server;
let browser;
let page;

beforeAll(async () => {
  server = http.createServer(function (req, res) {
    fs.readFile(__dirname + "/.." + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  });

  server.listen(process.env.PORT || 3000);
});

afterAll(() => {
  server.close();
});

beforeEach(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto("http://localhost:3000/index.html");
});

afterEach(async () => {
  await browser.close();
});

describe('the index.js file', () => {
  it('should create a function named `markAsDone` that takes an array of `todos` and returns the modified array', async function() {
        const result = await page.evaluate(() => {
          let todos = ['first todo', 'second todo', 'third todo'];
          return markAsDone(todos);
        });

        expect(result.length).toBe(3);
    });

    it('should recursively loop through the `todos` and prepend  the string "done - " to each todo description', async function() {
        const result = await page.evaluate(() => {
          let todos = ['first todo', 'second todo', 'third todo'];
          return markAsDone(todos);
        });

        expect(result[0]).toBe('done - first todo');
        expect(result[1]).toBe('done - second todo');
        expect(result[2]).toBe('done - third todo');
    });
});
