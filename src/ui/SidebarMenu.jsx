/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import { getKategorijaProizvoda } from "../services/apiProizvodi";
import { useQuery } from "@tanstack/react-query";
import SpinnerMini from "./SpinnerMini";

const Sidebar = styled.div`
  background-color: #446084;
  width: 23rem;
`;

const CategoryButton = styled.button`
  background-color: #e0f6ff;
  padding: 10px 20px;
  margin: 50px 25px;
  border-radius: 10px;
  width: calc(100% - 4rem);
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  &:active {
    transform: translate(2px);
  }
`;

function SidebarMenu({ setShow, handleCategoryClick }) {
  const {
    data: kategorije,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["kategorije"],
    queryFn: getKategorijaProizvoda,
  });

  if (isLoading) {
    return <SpinnerMini />; // or any loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const uniqueCategoriesSet = new Set(
    kategorije.map((item) => item.Kategorija)
  );
  const uniqueCategories = [...uniqueCategoriesSet];

  function handleClick() {
    setShow((show) => !show);
  }

  return (
    <Sidebar>
      {uniqueCategories.map((category) => (
        <CategoryButton
          key={category}
          onClick={() => {
            handleCategoryClick(category);
            setShow(false);
            handleClick();
          }}
        >
          {category}
        </CategoryButton>
      ))}
    </Sidebar>
  );
}

export default SidebarMenu;
