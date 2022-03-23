'use strict'

import sensible from './plugins/sensible.js';
import support from './plugins/support.js';
import routes from './routes/root.js';
import './database.js';
import cors from 'fastify-cors';

export default async function (fastify, opts) {
  fastify.register(sensible);
  fastify.register(support);
  fastify.register(routes);
  fastify.register(cors);
}
