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

            <div class="form-group">
                <div>
                    <label>Date</label>
                    <select class="form-control form-control-lg">
                        <option v-for="date in dates.dates" :key="date.dates">{{date}}</option>
                    </select>
                    <select class="form-control form-control-lg">
                        <option v-for="date in dates.months" :key="date.months">{{date.months}}</option>
                    </select>
                    <select class="form-control form-control-lg">
                        <option v-for="date in dates.years" :key="date.years">{{date.years}}</option>
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
                dates: date
            }
        }
    }
</script>