'use strict';

import config from '../../config';
import request from 'superagent';

export function list() {
  return new Promise((resolve) => {
    request
      .get(`https://api.darksky.net/forecast/${config.secretKey}/${config.stzLat},${config.stzLon}?units=si`)
      .end((err, response) => {
        resolve(response.body);
      });
  });
}
