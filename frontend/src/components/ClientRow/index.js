import React from "react";

function ClientRow({ client }) {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="w-20 bg-slate-700 text-red-500">Delete</button>
      </td>
    </tr>
  );
}

export default ClientRow;
