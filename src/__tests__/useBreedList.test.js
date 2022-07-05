/**
 * @jest-environment
 */

import { expect, test } from "@jest/globals";
import { act, render, renderHook } from "@testing-library/react";

import useBreedList from "../hooks/useBreedList";

// function getBreedList(animal) {
//   let list;
//   function TestComponent() {
//     list = useBreedList(animal);//tu sie da uzyc hooka
//     return null;//ale zwraca tylko jsxa
//   }
//   render(<TestComponent />);
//   return list; //zwraca dane, potzrebny wrapp
// }

test("gives an empty list with no animal", async () => {
  const { result } = renderHook(() => useBreedList());

  const [breedList, status] = result.current;
  expect(breedList).toHaveLength(0);
  expect(status).toBe("unloaded");
});

test("gives back breeds with an animal", async () => {
  const breeds = [
    "Havanese",
    "Bichon Frise",
    "Poodle",
    "Maltese",
    "Golden Retriever",
    "Labrador",
    "Husky",
  ];

  fetch.mockResponseOnce(
    JSON.stringify({
      aniaml: "dog",
      breeds,
    })
  );

  let result = await act(() => {
    const { result } = renderHook(() => useBreedList("dog"));
    return result;
  });

  const [breedList, status] = result.current;
  expect(status).toBe("loaded");
  expect(breedList).toEqual(breeds);
});
