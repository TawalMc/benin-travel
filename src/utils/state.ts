import { Action, createHook, createStore } from "react-sweet-state"

import { updateIndex } from "./libs"

type State = { currentIndex: number; townsList: string[] }
type Actions = typeof actions

const initialState: State = {
  currentIndex: 0,
  townsList: []
}

const changeTown = (next: boolean, length: number, old: number): number => {
  const unit = next ? 1 : -1
  return updateIndex(old + unit, length)
}

const actions = {
  updateTown:
    (newIndex: number): Action<State> =>
    ({ setState }) => {
      setState({
        currentIndex: newIndex
      })
    },

  updateTownsList:
    (list: string[]): Action<State> =>
    ({ setState }) => {
      setState({ townsList: list })
    }
}

const Store = createStore<State, Actions>({
  initialState,
  actions
})

export const useTown = createHook(Store)
