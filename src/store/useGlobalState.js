import { create } from 'zustand'

const useGlobalState = create((set) => ({
  stackArray: [],
  setStackArray: (newObject) => set((state) => ({
    stackArray: [...state.stackArray, newObject]
  }))
}))

export default useGlobalState;
