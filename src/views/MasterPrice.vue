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
      <form className="">
        <select
          name="from"
          className="select border-2 border-indigo-600 w-fit "
        >
          <option disabled selected>From?</option>
          <option
            v-for="(route, index) of routes"
            :key="index"
            value="{{route}}"
          >
            {{ route }}
          </option>
        </select>
        <span class="font-bold"> - TO - </span>
        <select name="to" className="select border-2 border-indigo-600 w-fit ">
          <option disabled selected>To?</option>
          <option
            v-for="(route, index) of routes"
            :key="index"
            value="{{route}}"
          >
            {{ route }}
          </option>
        </select>
        <span class="font-bold"> - DATE - </span>
        <select
          name="select"
          className="select border-2 border-indigo-600 w-fit "
        >
          <option disabled selected>Travel Date?</option>
          <option value="2022-11-22">2022-11-22</option>
          <option value="2022-11-23">2022-11-23</option>
          <option value="2022-11-24">2022-11-24</option>
        </select>
        <span className=" ml-10">
          <button className="btn pt-1 btn-sm btn-primary">SEARCH</button>
        </span>
      </form>
    </div>
    <hr class="border-1 border-blue-800 cursor-pointer duration-500" />
    <div class="h-[50vh] bg-slate-400 my-10 flex justify-center items-center">
      <div>
        <h2 class="text-4xl font-bold">Please Search Your Flight</h2>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  name: "MasterPrice",

  data() {
    return {
      routes: [],
      errors: [],
    };
  },
  created() {
    axios
      .get(`http://localhost:5000/routes`)
      .then((res) => {
        this.routes = res.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>