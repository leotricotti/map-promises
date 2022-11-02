import { NavBar } from "./components/NavBar/NavBar";
import { Card } from "./components/Items/ItemListContainer";
import { Filter } from "./components/Filter/Filter";

export const App = () => {
  return (
    <>
      <NavBar />
      <Filter />
      <Card />
    </>
  );
};
