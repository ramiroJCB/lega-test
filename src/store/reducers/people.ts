import { DeepReadonly } from "ts-essentials";
import { Actions } from "../actions";
export type State = DeepReadonly<{
  people: Array<any>;
}>;

export const initialState: State = {
  people: [],
};

export const people = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case "FETCH_PEOPLE":
      return {
        ...state,
        people: action.payload,
      };
    default:
      return state;
  }
};
