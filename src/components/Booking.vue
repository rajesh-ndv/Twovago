<template>
    <div class="vue-temp">
        <form>
            <h3>Enter details</h3>

            <div class="form-group">
                <label>Source</label>
                <select class="form-control form-control-lg">
                    <option>Mangalore (MLR)</option>
                </select>
            </div>

            <div class="form-group">
                <label>Destination</label>
                <select class="form-control form-control-lg">
                    <option>MLR</option>
                </select>
            </div>

            <div class="form-row form-group">
                <div class="col">
                    <label>Date</label>
                    <select class="form-control form-control-lg">
                        <option v-for="date in dates.dates" :key="date">{{date}}</option>
                    </select>
                </div>

                <div class="col">
                    <label>Month</label>
                    <select class="form-control form-control-lg">
                        <option v-for="date in dates.months" :key="date">{{date}}</option>
                    </select>
                </div>

                <div class="col">
                    <label>Year</label>
                    <select class="form-control form-control-lg">
                        <option v-for="date in dates.years" :key="date">{{date}}</option>
                    </select>
                </div>
            </div>

            <button type="submit" class="btn btn-primary gradient-custom-2 btn-lg btn-block">Show</button>

        </form>
    </div>
</template>

<script>
    import date from "../assets/json/date.json"
    export default {
        data() {
            return {
                dates: date.date
            }
        }
    }
</script>