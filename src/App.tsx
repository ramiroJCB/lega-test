import * as React from "react";
import { Profiles } from "./components/profiles/Profiles";
import { AddProfiles } from "./components/addProfiles/AddProfiles";
import { getPeople } from "./store/actions/index";
import { useSelector, useDispatch } from "react-redux";

export const App: React.FC = () => {
  const people = useSelector((state: any) => state.people.people);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getPeople());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexFlow: "column",
        padding: "5vh",
      }}
    >
      <AddProfiles />
      {people ? (
        <Profiles mock={people} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          Searching people
        </div>
      )}
    </div>
  );
};
