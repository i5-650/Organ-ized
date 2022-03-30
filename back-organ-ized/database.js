import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/db')
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export const Organ = sequelize.define('Organ', 
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false
		},
		age: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		icon: {
			type: DataTypes.STRING,
			allowNull: true
		},
		categorie: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}
);

export const User = sequelize.define('User', 
	{
		firstname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}
);

Organ.sync({force: true});
User.sync({force: true});