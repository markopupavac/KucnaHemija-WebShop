/* eslint-disable no-undef */
import { useQuery } from "@tanstack/react-query";
import { getProizvodi } from "../../services/apiProizvodi";

export async function useProizvodi() {
  const x = useQuery({
    queryKey: ["proizvodi"],
    queryFn: getProizvodi,
  });
  console.log(x);

  return { isLoading, error, proizvodi };
}

export default useProizvodi;
