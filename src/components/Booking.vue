<template>
    <div class="vue-temp">
        <form>
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Source</label>
                <select class="form-control form-control-lg">
                    <option>Mangalore (MLR)</option>
                    <option>Bangalore (BLR)</option>
                    <option>Hyderabad (HYD)</option>
                </select>
            </div>

            <div class="form-group">
                <label>Destination</label>
                <select class="form-control form-control-lg">
                    <option>MLR</option>
                </select>
            </div>

            <div class="form-group">
                <label>Date</label>
                <select class="form-control form-control-lg">
                    <option>MLR</option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary gradient-custom-2 btn-lg btn-block">Show</button>

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>