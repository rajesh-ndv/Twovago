<template>
    <div class="vue-temp" v-on:submit.prevent="submitForm">
        <form>
            <h3>Enter details</h3>

            <div class="form-group">
                <label>Source</label>
                <select class="form-control form-control-lg" v-model="form.source">
                    <!-- <option :value="null" disabled hidden>Select Age</option> -->
                    <option>BNC</option>
                </select>
            </div>

            <div class="form-group">
                <label>Destination</label>
                <select class="form-control form-control-lg" v-model="form.destination">
                    <option>NDLS</option>
                </select>
            </div>

            <div class="form-row form-group">
                <div class="col">
                    <label>Date</label>
                    <select class="form-control form-control-lg" v-model="form.date">
                        <option v-for="date in dates.dates" :key="date">{{date}}</option>
                    </select>
                </div>

                <div class="col">
                    <label>Month</label>
                    <select class="form-control form-control-lg" v-model="form.month">
                        <option v-for="date in dates.months" :key="date">{{date}}</option>
                    </select>
                </div>

                <div class="col">
                    <label>Year</label>
                    <select class="form-control form-control-lg" v-model="form.year">
                        <option v-for="date in dates.years" :key="date">{{date}}</option>
                    </select>
                </div>
            </div>

            <button type="submit" class="btn btn-primary gradient-custom-2 btn-lg btn-block">Show</button>

        </form>
    </div>
</template>

<script>
import axios from 'axios';
    import date from "../assets/json/date.json"
    export default {
        data() {
            return {
                // source: null,
                dates: date.date,
                form: {
                    source: " ",
                    destination: " ",
                    month: " ",
                    year: " ",
                    date: " "
                }
            }
        },methods: {
            submitForm(){
                let mapper={
                    "Jan": 1,"Feb": 2,"Mar": 3,"Apr": 4,"May": 5,"Jun": 6,"Jul": 7,"Aug": 8,"Sep": 9,"Oct": 10,"Nov": 11,"Dec": 12
                };
                console.log(this.form);
                var dateString= this.form.year.toString()+"-"+mapper[this.form.month].toString()+"-"+this.form.date.toString();
                console.log(dateString);
                var payload={};
                payload.source=this.form.source;
                payload.destination=this.form.destination;
                payload.date=dateString;
                axios.post('http://localhost:8080/api/ticket/getTickets', payload)
                     .then((res) => {
                         console.log("Success");
                         var lis=res.data.split("}");
                         var arr=[];
                         for(var i=0;i<lis.length-1;i++){
                             var temp=lis[i]+"}";
                             var obj=JSON.parse(temp);
                             arr.push(obj);
                         }
                         console.log(arr);
                         this.$router.push({
                             name: "train_list",
                             params:{
                                trains: arr
                             }
                         });
                     })
                     .catch((error) => {
                         console.log("Error "+ error);
                         // error.response.status Check status code
                     }).finally(() => {
                         //Perform action in always
                     });
            }
        }
    }
</script>