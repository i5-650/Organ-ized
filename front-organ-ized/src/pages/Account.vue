<template>
	<div class="limiter">
		<div class="container-login1000">
			<div class="wrap-login100" id="part1">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="../assets/hearth.png" alt="IMG">
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Admin informations
					</span>

					<div class="wrap-email" data-validate = "Valid email is required: ex@abc.xyz">
						<p class="input100">{{this.emailLocal}}</p>
					</div>

					<div class="container-login100-form-btn">
						<button class="login100-form-btn-unlog">
							Déconnexion
						</button>
					</div>
				</form>
			</div>
			<div class="wrap-login100" id="part2">
				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Collections informations
					</span>

					<div class="wrap-cascader" data-validate = "Choose an item">
						<el-cascader
							v-model="value"
							:options="options"
						/>
					</div>

					<div class="container-login100-form-btn">
						<el-button type="primary" :icon="Edit" circle @click="editItem"/>
						<el-button type="danger" :icon="Delete" circle @click="deleteItem"/>
						<el-button type="primary" :icon="Refresh" circle id="buttonRefresh" @click="getCollection" />
					</div>
				</form>
				<aside>
					<div class="wrap-name" data-validate = "Un nom est obligatoire">
						<input v-model="nameE" class="input1000" type="text" name="Nom" placeholder="Nom">
					</div>

					<div class="wrap-price" data-validate = "Price is required">
						<input v-model="priceE" class="input1000" type="number" name="Prix" placeholder="Prix en €">
					</div>

					<div class="wrap-age" data-validate = "Age is required">
						<input v-model="ageE" class="input1000" type="number" name="Age" placeholder="Age du donneur">
					</div>

					<div class="wrap-etat" data-validate = "l'état est requis">
						<input v-model="stateE" class="input1000" type="text" name="Etat" placeholder="Etat">
					</div>

					<div id="buttonModify">
						<el-button type="primary" round @click="finishEdit">Modifier</el-button>
					</div>

				</aside>
			</div>

			<div class="wrap-login100" id="part3">
				<form @submit.prevent="add" class="addToCollection">
					<span class="login100-form-title">
						Ajouter un élément à la collection
					</span>

					<div class="wrap-name" data-validate = "Un nom est obligatoire">
						<input v-model="name" class="input1000" type="text" name="Nom" placeholder="Nom">
					</div>

					<div class="wrap-price" data-validate = "Price is required">
						<input v-model="price" class="input1000" type="number" name="Prix" placeholder="Prix en €">
					</div>

					<div class="wrap-age" data-validate = "Age is required">
						<input v-model="age" class="input1000" type="number" name="Age" placeholder="Age du donneur">
					</div>

					<div class="wrap-categorie" data-validate = "Age is required">
						<input v-model="categorie" class="input1000" type="text" name="Categorie" placeholder="Categorie">
					</div>

					<div class="wrap-etat" data-validate = "l'état est requis">
						<input v-model="state" class="input1000" type="text" name="Etat" placeholder="Etat">
					</div>

				  	<div class="wrap-icon" data-validate = "Age is required">
						<label for="file" class="label-file">Choisir une image</label>
					</div>
						<el-cascader
							v-model="valueIcon"
							:options="optionIcon"
						/>
					<div class="container-login100-form-btn">
						<el-button type="success" :icon="Check" circle  id="buttonAdd"  native-type="submit"/>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import {
	Search,
	Edit,
	Check,
	Message,
	Star,
	Delete,
	Upload,
	Refresh,
} from '@element-plus/icons-vue'
import {ref} from "vue";
import axios from "axios";
import { ElMessageBox } from 'element-plus';

export default {
	name: "Account",
	data:()=>({Search,
		Edit,
		Check,
		Message,
		Star,
		Delete,
		Upload,
		Refresh,
		options: [],
		optionIcon: [],
		value: "",
		valueIcon: "",
		organTab:[],
		name:"",
		price: "",
		age: "",
		categorie:"",
		state: "",
		icon: "",
		emailLocal:"",
		nameE:"",
		priceE:"",
		ageE:"",
		categorieE:"",
		stateE:"",
		}),
	components:{Search,
		Edit,
		Check,
		Message,
		Star,
		Delete,
		Refresh},
	methods:{
		async getImage(event){
			let charCode;
			let bytes = [];
			let img = await event.target.files.item(0).text();
			for(let i = 0; i < img.length; ++i){
				charCode = img.charCodeAt(i);
				bytes.push((charCode & 0xFF00)>>8);
				bytes.push(charCode && 0xFF);
			}
			let bin = "";
			bytes = new Uint8Array(bytes);
			for(let i = 0; i < bytes.length; ++i){
				bin += String.fromCharCode(bytes[i]);
			}
			console.log("oui: " + bin);
		},

		async getCollection(){
			this.options = [];
			let tab = await axios.get('http://localhost:3001/organ');
			this.organTab = tab.data.map(item =>({name:item.name}));
			for(let i=0;i<this.organTab.length;i++){
				this.options.push({name:this.organTab.at(i).name,label:this.organTab.at(i).name});
			}
		},	

		async deleteItem(){
			await axios.post('http://localhost:3001/organ/delete/'+this.value);
			console.log(this.value);
			this.getCollection();
			ElMessageBox.alert('Organ Deleted', 'Success', {
				confirmButtonText: 'Ok',
			});
		},

		async add(){
			if(this.name && this.price && this.state && this.age && this.categorie){
				await axios.post('http://localhost:3001/organ/add', {
					name: this.name,
					price: this.price,
					state:this.state,
					age:this.age,
					categorie:this.categorie,
					icon: this.icon
				});

				ElMessageBox.alert('Organ added', 'Success', {
					confirmButtonText: 'Ok',
				});
				
				this.options.push({name:this.name,label:this.name});
				this.name = "";
				this.price = "";
				this.age = "";
				this.categorie = "";
				this.state = "";
				this.icon = "";
				this.getCollection();
			}
			else {
				ElMessageBox.alert('You need to fill up all the infos', 'Error', {confirmButtonText: 'Ok'});
			}
		},

		async editItem(){
			console.log(this.value);
			let editItem = await axios.get('http://localhost:3001/organ/'+this.value);
			this.nameE =  editItem.data.name;
			this.priceE = editItem.data.price;
			this.ageE = editItem.data.age;
			this.categorieE = editItem.data.categorie;
			this.stateE = editItem.data.state;
			console.log(editItem);
		},

			async finishEdit(){
				await axios.post('http://localhost:3001/organ/edit/'+this.value,{
					name: this.nameE,
					price:this.priceE,
					age:this.ageE,
					state:this.stateE
				});
				this.getCollection();
				this.nameE="";
				this.ageE="";
				this.priceE="";
				this.stateE="";
				ElMessageBox.alert('Organ Edited', 'Success', {
					confirmButtonText: 'Ok',
				});
			},
			async beforeMount(){
				this.optionIcon = [
					{label:'arm', value: 'arm.jpg'}, 
					{label:'brain', value:"brain.png"}, 
					{label:'hearth', value: "hearth.png"}, 
					{label:'kidney', value: "kidney.jpg"},
					{label:'leg', value: "leg.png"},
					{label:'liver', value:'live.jpg'}, 
					{label:'stomach', value: 'stomach.png'},
					{label:'default', value: 'default.jpg'}
				];
				let tab = await axios.get('http://localhost:3001/organ');
				this.organTab = tab.data.map(item =>({name:item.name}));
				for(let i=0;i<this.organTab.length;i++){
					this.options.push({name:this.organTab.at(i).name,label:this.organTab.at(i).name});
				}
				this.emailLocal = localStorage.getItem("email");
			}
		}
}
</script>

<style scoped>

.wrap-email{
	text-align: center;
	vertical-align: auto;
	margin-bottom: 1em;
}

.wrap-password{
	text-align: center;
	vertical-align: auto;
	margin-bottom: 0.5em;
}

.wrap-etat{
	text-align: center;
	vertical-align: auto;
	margin-bottom: 0.5em;
}

.wrap-cascader{
	text-align: center;
	vertical-align: auto;
}

.wrap-name{
	text-align: center;
	vertical-align: auto;
	margin-bottom: 1em;
}

.wrap-price{
	text-align: center;
	vertical-align: auto;
	margin-bottom: 1em;
}

.wrap-age{
	text-align: center;
	vertical-align: auto;
	margin-bottom: 1em;
}

.wrap-icon{
	text-align: center;
	vertical-align: auto;
	margin-bottom: 1em;
}

.wrap-icon{
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	vertical-align: auto;
	margin-bottom: 1em;
	width: 15em;
	border-radius: 10px;
	background: #41B883;
}

.wrap-categorie{
	text-align: center;
	vertical-align: auto;
	margin-bottom: 1em;
}

.wrap-etat{
	text-align: center;
	vertical-align: auto;
	margin-bottom: 1em;
}

.label-file {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	font-size: 1.3em;
	line-height: 1.5;
	cursor: pointer;
	color: white;
}
.label-file:hover {
	color: white;
}

.input-file {
	   display: none;
   }

#buttonRefresh{
	background: #409EFF;
}
#buttonModify{
	text-align: center;
}

#buttonAdd{
	background: #41B883;
}

.input1000 {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	font-size: 15px;
	line-height: 1.5;
	color: #666666;

	display: block;
	width: 100%;
	background: #e6e6e6;
	height: 50px;
	border-radius: 25px;
	padding: 0 30px 0 68px;
}

.login100-form-btn-unlog {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	font-size: 15px;
	line-height: 1.5;
	color: #fff;
	text-transform: uppercase;

	width: 100%;
	height: 50px;
	border-radius: 25px;
	background: #DF474B;
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 25px;

	-webkit-transition: all 0.4s;
	-o-transition: all 0.4s;
	-moz-transition: all 0.4s;
	transition: all 0.4s;
}

.login100-form-btn-unlog:hover {
	background: #333333;
}

p.input100{
	padding: 0;
		line-height: 3em;
}
.login100-form-title{
	padding-bottom: 0.6em;
}

.limiter{
	display: flex;
	justify-content: center;
}

#part1{
	margin-top: 2em;
	margin-bottom: 2em;
}

#part2{
	margin-bottom: 2em;
}

#part3{
	margin-bottom: 2em;
}

#part3.wrap-login100{
	justify-content: center;
}

</style>