'use strict';

import config from './index';
import morgan from 'koa-morgan';
import parser from 'koa-bodyparser';
import compress from 'koa-compress';
import cors from '@koa/cors';

export default function configKoa(app) {
  app.use(compress());
  app.use(parser({
    strict: false
  }));

  app.use((ctx, next) => {
    ctx.body = ctx.request.body;
    return next();
  });

  app.use(cors());

  app.on('error', err => console.error(err));

  app.use(morgan(config.logType));
}
