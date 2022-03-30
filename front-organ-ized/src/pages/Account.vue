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
                        <p class="input100">Email</p>
                    </div>

                    <div class="wrap-password" data-validate = "Password is required">
                        <p class="input100">Password</p>
                    </div>

                    <div class="container-login100-form-btn">
                        <button class="login100-form-btn">
                            Modifier
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
                        <el-button type="primary" :icon="Edit" circle />
                        <el-button type="danger" :icon="Delete" circle />
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
} from '@element-plus/icons-vue'
import {ref} from "vue";

export default {
    name: "Account",
    data:()=>({Search,
        Edit,
        Check,
        Message,
        Star,
        Delete,
        options,
        value}),
    components:{Search,
        Edit,
        Check,
        Message,
        Star,
        Delete},
}

const value = ref([])

const options = [
    {
        value:"Test",
        label:"Catégorie",
        children: [
            {
              value:"Tete",
              label:"Cerveau",
            },
            {
                value:"Ventre",
                label: "Mateo tu tournes",
            },
        ],
    },
]
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

.wrap-cascader{
    text-align: center;
    vertical-align: auto;
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

</style>