'use strict'
import { Op } from 'sequelize';
import '../database.js';
import { Organ } from '../database.js';
import { User } from '../database.js'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

export default  async function(fastify, opts){
	fastify.post('/register', async function (request, response){
		try {
			const {firstname, lastname, email, password} = request.body;

			if(!(firstname && lastname && email && password)){
				response.code(400).send("All input are required");
			}

			const alreadyUser = await User.findOne({where:{email: email }});

			if(alreadyUser){
				return response.code(409).send("User already exist. Please Login");
			}

			let encryptedPwd = await bcrypt.hash(password, 10);

			const ohMyUser = await User.create({
				firstname,
				lastname,
				email: email.toLowerCase(),
				password: encryptedPwd
			});

			const token = jwt.sign(
					{ user_id: ohMyUser._id, email },
					process.env.TOKEN_KEY,
					{
						expiresIn: "5h",
					}
			)

			response.code(201).send({
				firstname,
				lastname,
				email : email.toLowerCase(),
				password,
				token

			});
		}catch(err){
			console.log(err);
		}
	});

	fastify.post('/login', async function (request, response){
		try{
			const {email, password} = request.body;

			if(!(email && password)){
				response.code(400).send("All input are required");
			}

			const user = await User.findOne({where: {email: email}});
			
			if(user && (await bcrypt.compare(password, user.password))){
				const token = jwt.sign(
					{user_id: user._id, email},
					process.env.TOKEN_KEY,
					{expiresIn: "5h"}
				);
				

				response.code(200).send(
					{
						firstname: user.firstname,
						lastname: user.lastname,
						token: token,
						password: user.password
					}
				);
			}
			response.code(200).send("Invalid Credentials");
		}catch(err){
			console.log(err);
		}
	});

	fastify.get('/users', async function (request, reply){
		return await User.findAll();
	});

	fastify.post('/organ/add', async function (request, reply,){
		if(request.body &&
			request.body.name &&
			request.body.price &&
			request.body.state &&
			request.body.age ){
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

	fastify.post('/organ/edit/:id', async function (request, reply){
		if(request.body &&
			request.body.name &&
			request.body.price &&
			request.body.state &&
			request.body.age){
			Organ.update({
				name:request.body.name,
				price:request.body.price,
				state:request.body.state,
				age:request.body.age
			},{where:{id:request.params.id}});
			return {goodUpdate:true};
		}else{
			return {error:true};
		}
	});

	fastify.post('/organ/delete/:id', async function (request, reply){
		if(request.params.id && await Organ.findOne({where: { id: request.params.id}})){
			Organ.destroy({where: {id: request.params.id}});
			return {elementDestroy: true};
		}else{
			return {error: true};
		}
	});
}


