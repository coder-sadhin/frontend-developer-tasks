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
            <p>
              {{ flight.itineraries[0].segments[0].carrierCode }}
              {{ flight.itineraries[0].segments[0].flightNumber }}
            </p>
            <p>
              {{ flight.itineraries[0].segments[1].carrierCode }}
              {{ flight.itineraries[0].segments[1].flightNumber }}
            </p>
          </td>
          <td>
            <p>{{ flight.itineraries[0].segments[0].aircraft }}</p>
            <p>{{ flight.itineraries[0].segments[1].aircraft }}</p>
          </td>
          <td>
            <p>{{ flight.class[0][0] }}</p>
            <p>{{ flight.class[0][1] }}</p>
          </td>
          <td>
            <p>{{ flight.fareBasis[0][0] }}</p>
            <p>{{ flight.fareBasis[0][1] }}</p>
          </td>
          <td>
            <p>
              {{ flight.itineraries[0].segments[0].departure.iataCode }} -
              {{ flight.itineraries[0].segments[0].arrival.iataCode }}
            </p>
            <p>
              {{ flight.itineraries[0].segments[1].departure.iataCode }} -
              {{ flight.itineraries[0].segments[1].arrival.iataCode }}
            </p>
          </td>
          <td>
            <p>{{ flight.itineraries[0].segments[0].departure.at }}</p>
            <p>{{ flight.itineraries[0].segments[1].departure.at }}</p>
          </td>
          <td>
            <p>{{ flight.itineraries[0].segments[0].arrival.at }}</p>
            <p>{{ flight.itineraries[0].segments[1].arrival.at }}</p>
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