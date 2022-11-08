import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 50 }, // below normal load
    { duration: '2.5m', target: 50 },
    { duration: '1m', target: 100 }, // normal load
    { duration: '2.5m', target: 100 },
    { duration: '1m', target: 150 }, // around the breaking point
    { duration: '2.5m', target: 150 },
    { duration: '1m', target: 200 }, // beyond the breaking point
    { duration: '2.5m', target: 200 },
    { duration: '5m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
  const BASE_URL = 'http://localhost:3001/reviews'; // make sure this is not production

  const payload = JSON.stringify({
      product_id: 40344,
      rating: 4,
      date: "2022-11-08",
      summary: "set my hair on fire",
      body: "like I said, I was lit up like times square",
      recommend: true,
      reviewer_name: "Frank the Tank",
      reviewer_email: "franklin@app.com",
      photos: ["url.com", "mtdiablourl.com", "anotherphoto.url"],
      characteristics: {
          Fit: {id: 40344, value: 3}
      }
  })

  const responses = http.batch([
    ['GET', `${BASE_URL}/40344?page=1&count=5&sort=relevant`, null]
    ['GET', `${BASE_URL}/meta/40344`, null],
    ['POST', `${BASE_URL}`, ${payload}],
    ['PUT', `${BASE_URL}/40344/helpful`, null],
    ['PUT', `${BASE_URL}/40344/report`, null],
  ]);

  sleep(1);
}
