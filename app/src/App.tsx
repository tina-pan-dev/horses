import { useState } from "react";
import { useHorses } from "./hooks/useHorses";

// TYPES
type HorseProps = {
  name: string;
  profile: HorseDetails;
};

type HorseDetails = {
  favouriteFood: string;
  physical: {
    height: number;
    weight: number;
  };
};

// COMPONENTS
export const Horse = ({ name, profile }: HorseProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="horse-details">
      <p onClick={() => setShowDetails(!showDetails)}>{name}</p>
      {showDetails && (
        <HorseDetails
          favouriteFood={profile.favouriteFood}
          physical={profile.physical}
        />
      )}
    </div>
  );
};

const HorseDetails = ({ favouriteFood, physical }: HorseDetails) => {
  return (
    <>
      <p>Favourite food: {favouriteFood}</p>
      <p>Height: {physical.height} cm</p>
      <p>Weight: {physical.weight} kg</p>
    </>
  );
};

function App() {
  const { data: horses, isLoading, isError } = useHorses();

  if (isLoading) return <p>Loading horses...</p>;
  if (isError) return <p>Error fetching horses 😢</p>;

  return (
    <>
      <h1>Horses</h1>
      <div className="button-section">
        <button onClick={() => alert("To do")}>Add Horse</button>
      </div>
      <ul>
        {horses?.map((horse) => (
          <li key={horse.id} className="horse-card">
            <Horse name={horse.name} profile={horse.profile} />
          </li>
        ))}
      </ul>
      <div className="button-section">
        <button onClick={() => alert("To do")}>Prev</button>
        <button onClick={() => alert("To do")}>Next</button>
      </div>
    </>
  );
}

export default App;
