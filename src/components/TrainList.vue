<template>
    <div class="vue-temp">
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>Train Name</th>
                    <th>Train Number</th>
                    <th>Arival</th>
                    <th>Departure</th>
                    <th>Available Tickets</th>
                    <th>Book</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="obj in data" :key="obj">
                    <td>{{obj.trainName}}</td>
                    <td>{{obj.trainNo}}</td>
                    <td>{{obj.arrivalDate}}</td>
                    <td>{{obj.departureDate}}</td>
                    <td>{{obj.count}}</td>
                    <td>
                        <a v-on:click="alertDisplay(obj.trainName, obj.trainNo, obj.source, obj.destination, obj.arrivalDate, obj.departureDate, obj.count)">view details</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template> -->

<script>
    export default {
        created(){
            console.log(this.$route.params.trains);
        },
        methods: {
            alertDisplay(train_name, train_no, src, dest, arr, dept, count) {
                this.$swal({
                    title: "Train Details",
                    html:
                        "<h1>Hello</h1>",
                    text: 
                        "Train Name : " + train_name + "\n" +
                        "Train Number : " + train_no + "\n" +
                        "Source : " + src + "\n" +
                        "Destination : " + dest + "\n" +
                        "Arrival Time : " + arr + "\n" +
                        "Departure Time : " + dept + "\n" +
                        "Tickets : " + count + "\n",
                    showCloseButton: true,
                    showCancelButton: true,
                    showLoaderOnConfirm: true,
                    buttons: {
                        cancel: true,
                        confirm: "Proceed to Payment",
                    },
                }).then(function(res) {
                    if (res) {
                        window.location = "/payment-details"
                    }
                })
            }
        },
        data() {
            return {data: this.$route.params.trains}
        }
    }
</script>