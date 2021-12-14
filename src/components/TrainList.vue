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
                    <td><button class="btn btn-outline-primary" to="\">E</button></td>
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
        data() {
            return {data: this.$route.params.trains}
        }
    }
</script>