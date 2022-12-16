<template>
  <div class="max-w-[1440px] mx-auto my-3">
    <h2 class="text-3xl font-bold mt-1">Master Price</h2>
    <hr class="border-1 border-blue-800 cursor-pointer duration-500" />
    <div class="flex justify-center">
      <div className="btn-group mt-3 mb-5">
        <input
          type="radio"
          name="options"
          data-title="Round Trip"
          className="btn btn-sm bg-transparent text-black"
        />
        <input
          type="radio"
          name="options"
          data-title="On Way"
          className="btn btn-sm"
          checked
        />
        <input
          type="radio"
          name="options"
          data-title="Multi City"
          className="btn btn-sm bg-transparent text-black"
        />
      </div>
    </div>
    <hr class="border-1 border-blue-800 cursor-pointer duration-500" />
    <div class="flex justify-center my-3">
      <form @submit.prevent="searchFlight" className="">
        <span class="text-xl mr-5 font-bold">Travel From</span>
        <select
          name="from"
          v-model="from"
          className="select border-2 border-indigo-600 w-fit "
        >
          <option disabled selected>From?</option>
          <option v-for="(route, index) of routes" :key="index" :value="route">
            {{ route }}
          </option>
        </select>
        <span class="font-bold"> - TO - </span>
        <select
          name="to"
          v-model="to"
          className="select border-2 border-indigo-600 w-fit "
        >
          <option disabled selected>To?</option>
          <option v-for="(route, index) of routes" :key="index" :value="route">
            {{ route }}
          </option>
        </select>
        <span class="font-bold"> - DATE - </span>
        <select
          name="date"
          v-model="date"
          className="select border-2 border-indigo-600 w-fit "
        >
          <option disabled selected>Travel Date?</option>
          <option value="2022-11-22">2022-11-22</option>
          <option value="2022-11-23">2022-11-23</option>
          <option value="2022-11-24">2022-11-24</option>
        </select>
        <span className=" ml-10">
          <button type="submit" className="btn btn-primary">SEARCH</button>
        </span>
      </form>
    </div>
    <hr class="border-1 border-blue-800 cursor-pointer duration-500" />
    <div v-if="tableView">
      <DataTable v-bind:flights="flights" :errors="errors" />
    </div>
    <div
      v-if="dataSearch"
      class="h-[50vh] bg-slate-400 my-10 flex justify-center items-center"
    >
      <div>
        <h2 class="text-4xl font-bold">Please Search Your Flight</h2>
      </div>
    </div>
    <div
      v-if="noData"
      class="h-[50vh] bg-slate-400 my-10 flex justify-center items-center"
    >
      <div>
        <h2 class="text-4xl font-bold">Sorry Flight Not Found</h2>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
import DataTable from "@/views/DataTable.vue";

export default {
  name: "MasterPrice",
  components: {
    DataTable,
  },
  data() {
    return {
      noData: false,
      tableView: false,
      dataSearch: true,
      routes: [],
      errors: [],
      flights: [],
    };
  },
  created() {
    axios
      .get(`https://flights-server.vercel.app/routes`)
      .then((res) => {
        this.routes = res.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    searchFlight() {
      const from = this.from;
      const to = this.to;
      const date = this.date;
      const data = { from, to, date };
      console.log(data);
      fetch("https://flights-server.vercel.app/flights", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            this.flights = [...data];
            console.log(data);
            this.dataSearch = false;
            this.tableView = true;
            this.noData = false;
          } else {
            this.noData = true;
            this.tableView = false;
            this.dataSearch = false;
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>