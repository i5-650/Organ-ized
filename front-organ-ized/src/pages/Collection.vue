<script lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus';
import { ref } from 'vue';
import axios from 'axios';
export default {
	name: 'Organ-ized',

	data: () => (
		{
			info: 'Organèized',
			organList: [],
			url: "http://localhost:3001/organ",
			prix: [0, 100],
			checkboxSelectionCategories: ['Vesicule biliaire','Cerveau','Poumon','Foie','Gros Intestin','Apendicite','Vessie','Muscle','Rein','Ratte','Coeur'],
			openAside: false
		}
	),

	methods: {
		async getCollection(){
			if(localStorage.getItem("token")){
				let db = await axios.get(this.url);
				this.organList = db.data;
				console.log("MAIS NON: " + this.organList[0]);
			}
			else {
				this.$router.push('/');
			}
		},
		open(){
			ElMessageBox.alert('This is a message', 'Title', {
    			confirmButtonText: 'Proposer un prix',
  			});
		},
		setOpenAside(){
			this.openAside = !this.openAside;
		}
	},

	async beforeMount(){
		if(localStorage.getItem("token")){
			let db = await axios.get(this.url);
			this.organList = db.data;
			//console.log("MAIS NON: " + this.organList[0].name);
		}
		else {
			this.$router.push('/');
		}
	},

	computed: {
		async tmp(){
			await this.getCollection();
		}
	},

	watch: {
		async getCollection(){
			await this.getCollection();
		}
	}
}
</script>
<template>	
	<el-container>
        <el-aside v-if="openAside" width="20%">
            <div id="Categorie">
                <br/>
                <h2>Catégorie</h2>
                <br/>
                <div>
                    <el-checkbox-group v-model="checkboxSelectionCategories" size="large" text-color="#TODO" fill="#TODO">
                        <el-checkbox class="checkboxCategory" label="Vesicule biliaire" border />
                        <el-checkbox class="checkboxCategory" label="Cerveau" round border/>
                        <el-checkbox class="checkboxCategory" label="Poumon" round border/>
                        <el-checkbox class="checkboxCategory" label="Foie" round border/>
                        <el-checkbox class="checkboxCategory" label="Gros Intestin" round border/>
                        <el-checkbox class="checkboxCategory" label="Apendicite" round border/>
                        <el-checkbox class="checkboxCategory" label="Vessie" round border/>
                        <el-checkbox class="checkboxCategory" label="Muscle" round border/>
                        <el-checkbox class="checkboxCategory" label="Rein" round border/>
                        <el-checkbox class="checkboxCategory" label="Ratte" round border/>
                        <el-checkbox class="checkboxCategory" label="Coeur" round border/>
                    </el-checkbox-group>
                </div>
                
            </div>
            <br/>
            <h2>Prix (en milliers d'€) </h2>
            <br/>
            <div class="slider-demo-block">
            	<el-slider v-model="prix" range show-stops :max="100" />
            </div>
        </el-aside>
        <el-main>
            <el-button @click="setOpenAside">Nav</el-button>
            <!--<p>Checked categories: <pre>{{ checkedCategories }}</pre></p>-->
            <el-row>
                <el-col @click="open" v-for="index in organList.length"
                    :key="index"
                    :span="8"
                    :offset="index > 0 ? organList.length : 0"
                >
                    <el-card :body-style="{ padding: '0px' }" style="margin:25px">
                        <img src="src/assets/hearth.png" class="image"/>
                        <div style="padding: 14%">
                            <el-row>
                                <el-col :span="19"><span>{{organList[index].name}}</span></el-col>
                                <el-col :span="5"><span>{{organList[index].name}} €</span></el-col>
                            </el-row>
                            <div class="bottom">
                                <el-row>
                                    <el-col :span="19"><span class="grid-content bg-purple-dark">Etat: {{this.organList[index].state}}</span></el-col>
                                    <el-col :span="5"><el-button type="text" class="button">Voir plus ➔ </el-button></el-col>
                                </el-row>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>
<style>

    .checkboxCategory{
        margin : 2%;
    }

        
    .slider-demo-block {
    display: flex;
    align-items: center;
    }
    .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
	width: 90%;
    }

</style>