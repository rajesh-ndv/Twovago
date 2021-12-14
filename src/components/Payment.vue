<template>
    <div class="vue-temp">
        <form>
            <h3>Payment Details</h3>

            <div class="form-group">
                <label>Name on the Card</label>
                <input type="text" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Name on the Card</label>
                <input type="text" placeholder="1234 5678 345678" class="form-control form-control-lg" />
            </div>

            <div class="form-row form-group">
                <div class="col">
                    <label>Expiry Date</label>
                    <input class="form-control mb-3 form-control-lg" type="text" placeholder="MM/YYYY">
                </div>

                <div class="col">
                    <label>CVV</label>
                    <input class="form-control mb-3 pt-2 form-control-lg " type="password" placeholder="***">
                </div>
            </div>

            <button @click="alert" type="button" class="btn btn-primary gradient-custom-2 btn-lg btn-block">Pay</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>

        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            alert: function() {
                this.$swal({
                        title: "Payment Sucessful",
                        text: "Thank you for your booking",
                        icon: "success",
                        });
            }
        },
        data() {
            return {}
        }
    }
</script>