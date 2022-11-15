import { state, type State } from "poxi";

export type Entry = { type: string; id: string; description: string; removed: boolean };
type Schema = { entries: Array<Entry> };
export const getState = () => state<Schema>();
export const getEntries = () => getState().getArray("entries");

export function onCreate(state: State<Schema>) {
  state.set({
    entries: [{ description: "They/Them", type: "Like", id: "0", removed: false }],
  });
}
