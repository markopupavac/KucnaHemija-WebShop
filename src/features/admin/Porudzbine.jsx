import styled from "styled-components";
import { getOrders } from "../../services/apiPorudzbina";
import { useQuery } from "@tanstack/react-query";
import DeletePorudzbina from "./DeletePorudzbina";

const StyledDiv = styled.div`
  flex: 8;
  height: 100%;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTable = styled.table`
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #01474a;
  }

  tr:nth-child(even) {
    background-color: #01474a;
  }

  .proizvodi {
    list-style: none;
    padding: 0;
  }

  .proizvod {
    margin-bottom: 5px;
  }
`;
const TableContainer = styled.div`
  width: 75rem;
  height: 40rem;
  margin-bottom: 5rem;
  background-color: #234a57;
  border-bottom: 1px dotted black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  color: white;
  border-radius: 19px;
  background: #234a57;
  box-shadow: 29px 29px 48px #142a32, -29px -29px 48px #326a7c;
`;
const Div = styled.div`
  width: 80%;
  height: 80%;
`;

function Porudzbine() {
  const {
    data: porudzbine,
    error,
    status,
  } = useQuery({
    queryKey: ["porudzbine"],
    queryFn: getOrders,
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(porudzbine);

  return (
    <StyledDiv>
      <TableContainer>
        <Div>
          <StyledTable>
            <thead>
              <tr>
                <th>Naziv</th>
                <th>Ulica i broj</th>
                <th>Grad/Naselje</th>
                <th>Postanski broj</th>
                <th>Telefon</th>
                <th>Napomene</th>
                <th>Proizvodi</th>
                <th>Ukupna cena</th>
              </tr>
            </thead>
            <tbody>
              {porudzbine.map((order) => (
                <tr key={order.id}>
                  <td>{order.naziv}</td>
                  <td>{order.ulica_broj}</td>
                  <td>{order.grad_naselje}</td>
                  <td>{order.postanski_broj}</td>
                  <td>{order.telefon}</td>
                  <td>{order.napomene}</td>
                  <td>
                    <ul className="proizvodi">
                      {order.proizvodi.map((proizvod, index) => (
                        <li key={index} className="proizvod">
                          {proizvod.Naziv} ({proizvod.Kolicina}x)
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{order.ukupnaCena}</td>
                  <td>
                    <DeletePorudzbina porudzbine={order} />
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </Div>
      </TableContainer>
    </StyledDiv>
  );
}

export default Porudzbine;
