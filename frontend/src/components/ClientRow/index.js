import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../../graphql/Mutations/ClientMutations";
import { GET_CLIENTS } from "../../graphql/Queries/ClientQueries";

function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    //1st Method to Refetch Data With API Call
    // refetchQueries: [{ query: GET_CLIENTS }],
    // 2nd Method to Refetch Data
    update(cache, { data: { deleteClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients?.filter((client) => client.id !== deleteClient.id),
        },
      });
    },
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          onClick={deleteClient}
          className="w-20 bg-slate-700 text-red-500"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ClientRow;
