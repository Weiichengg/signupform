import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "id",
    selector: "id",
    sortable: true,
    cell: (row) => (
      <div>
        <div style={{ fontWeight: 700 }}>{row.title}</div>
        {row.summary}
      </div>
    ),
  },
  {
    name: "title",
    selector: "title",
    sortable: true,
    right: true,
  },
];

async function fetchData() {
  return fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(function (response) {
    return response.json();
  });
}

async function Page4() {
  var data = await fetchData();
  console.log(data);
  const table = data.map(() => (
    <DataTable title="Results" columns={columns} data={data} />
  ));
  return <div>table</div>;
}

export default Page4;
