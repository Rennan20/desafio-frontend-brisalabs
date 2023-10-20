import { useState } from "react";
import SearchData from "../../helpers/SearchData";
import { NavButton, Links } from "./ShowAllStyles";

type NavigationProps = {
  setSelectedType: React.Dispatch<React.SetStateAction<string | null>>;
};

const Navigation: React.FC<NavigationProps> = ({ setSelectedType }) => {
  const pokeData = SearchData();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const allTypes = Array.from(
    new Set(
      pokeData.flatMap((pokemon) =>
        pokemon.data.types.map(
          (type: { type: { name: string } }) => type.type.name
        )
      )
    )
  );

  const limitedTypes = ["Grass", "Fire", "Water", "Bug", "Normal"];
  const handleTypeFilter = (type: string | null) => {
    if (type !== null) {
      setSelectedType(type.toLowerCase());
    } else {
      setSelectedType(null);
    }
  };

  return (
    <div>
      <Links>
        <NavButton
          onClick={() => {
            handleTypeFilter(null);
            setActiveFilter(null);
          }}
          active={activeFilter === null}
        >
          <p> Todos</p>
        </NavButton>
        {limitedTypes.map((type) => (
          <NavButton
            key={type}
            onClick={() => {
              handleTypeFilter(type);
              setActiveFilter(type);
            }}
            active={activeFilter === type}
          >
            <p>{type}</p>
          </NavButton>
        ))}
      </Links>
    </div>
  );
};

export default Navigation;
