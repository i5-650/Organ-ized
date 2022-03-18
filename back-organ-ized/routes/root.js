'use strict'
import '../database.js';
import { Organ } from '../database.js';
import { User } from '../database.js'; 

export default  async function(fastify, opts){
	fastify.get('/', async function (request, reply){
		return {
			working: true
		}
	});

	fastify.get('/list', async function (request, reply){
		return await Organ.findAll();
	});

	fastify.post('/organ/add', async function (request, reply){
		if(request.body &&
			request.body.name &&
			request.body.price &&
			request.body.state &&
			request.body.age){
				await Organ.create({
					name: request.body.name,
					price: request.body.price,
					state: request.body.state,
					age: request.body.age,
					icon: request.body.icon
				});
				return {allGood: true};
			}
			else {
				return {error: 'bad data'};
			}
	});
}


