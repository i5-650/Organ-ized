'use strict'

import { UPSERT } from "sequelize/types/query-types"

export default async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return 'this is an example'
  })


}
