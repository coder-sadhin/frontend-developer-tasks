<script>
export default {
  name: "DataTable",
  props: ["flights", "errors"],
};
</script>


<template>
  <div className="overflow-x-auto mt-7">
    <table className="table w-full">
      <thead>
        <tr>
          <th>FLIGHT</th>
          <th>AIRCRAFT</th>
          <th>CLASS</th>
          <th>FARE</th>
          <th>ROUTE</th>
          <th>DEPARTURE</th>
          <th>ARRIVAL</th>
          <th>DURATION</th>
          <th>PRICE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(flight, index) of flights" :key="index">
          <td>
            <span
              v-for="(itinerarie, index) of flight.itineraries"
              :key="index"
            >
              <p v-for="(segment, index) of itinerarie.segments" :key="index">
                {{ segment.carrierCode }}
                {{ segment.flightNumber }}
              </p>
            </span>
          </td>
          <td>
            <span
              v-for="(itinerarie, index) of flight.itineraries"
              :key="index"
            >
              <p v-for="(segment, index) of itinerarie.segments" :key="index">
                {{ segment.aircraft }}
              </p>
            </span>
          </td>
          <td>
            <span v-for="(classes, index) of flight.class" :key="index">
              <p v-for="(c, index) of classes" :key="index">
                {{ c }}
              </p>
            </span>
          </td>
          <td>
            <span v-for="(fareBasic, index) of flight.fareBasis" :key="index">
              <p v-for="(fare, index) of fareBasic" :key="index">
                {{ fare }}
              </p>
            </span>
          </td>
          <td>
            <span
              v-for="(itinerarie, index) of flight.itineraries"
              :key="index"
            >
              <p v-for="(segment, index) of itinerarie.segments" :key="index">
                {{ segment.departure.iataCode }}
                {{ segment.arrival.iataCode }}
              </p>
            </span>
          </td>
          <td>
            <span
              v-for="(itinerarie, index) of flight.itineraries"
              :key="index"
            >
              <p v-for="(segment, index) of itinerarie.segments" :key="index">
                {{ segment.departure.at }}
              </p>
            </span>
          </td>
          <td>
            <span
              v-for="(itinerarie, index) of flight.itineraries"
              :key="index"
            >
              <p v-for="(segment, index) of itinerarie.segments" :key="index">
                {{ segment.arrival.at }}
              </p>
            </span>
          </td>
          <td>{{ flight.itineraries[0].duration }}</td>
          <td class="flex flex-col">
            <p class="text-center">{{ flight.price }}</p>
            <button class="btn btn-primary btn-sm">Select</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>