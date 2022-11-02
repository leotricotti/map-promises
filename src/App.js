import { NavBar } from "./components/NavBar/NavBar";
import { Card } from "./components/Items/ItemListContainer";
import { FilterMobile } from "./components/Filter/FilterMobile";

export const App = () => {
  return (
    <>
      <NavBar />
      <FilterMobile />
      <Card />
    </>
  );
};
