import Header from "./ProjectsNew/Header";
import Travel from "./ProjectsNew/Travel";
import Data from "./ProjectsNew/TravelData.tsx";
// import type {travelProps} from "./ProjectsNew/Travel";
export default function App2() {
  const data = Data.map((val) => {
    return (
      <Travel
        key={val.id}
        {...val}
      />
    );
  });
  return (
    <>
      <Header />
      {data}
    </>
  );
}

