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
        </div>
    </div>
</template>

<script>
export default {
    name: "Account"
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
p.input100{
    padding: 0;
        line-height: 3em;
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