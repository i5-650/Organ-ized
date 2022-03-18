'use strict'
import { Op } from 'sequelize';
import '../database.js';
import { Organ } from '../database.js';
import { User } from '../database.js'; 

export default  async function(fastify, opts){
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

	fastify.get('/organ/:id', async function (request, reply){
		return await Organ.findOne({where: {
			id: request.params.id
		}});
	});

	fastify.get('/organ', async function (request, reply){
		if(request.query && request.query.name){
			return await Organ.findAll({where: {
				name: {
					[Op.substring]:request.query.name
				}
			}});
		}
		else {
			return await Organ.findAll();
		}
	});
}


