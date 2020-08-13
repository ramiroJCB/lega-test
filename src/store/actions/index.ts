import Axios from "axios";

const fetchPeople = (people: Array<any>) =>
  ({
    type: "FETCH_PEOPLE",
    payload: people,
  } as const);

export const getPeople = () => async (dispatch: any) => {
  const promise: any = await Axios.get("http://localhost:8080/people");
  dispatch(fetchPeople(promise.data));
};
export type Actions = ReturnType<typeof fetchPeople>;
