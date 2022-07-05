/**
 * @jest-environment
 */

import { expect, test } from "@jest/globals";
import { act, render } from "@testing-library/react";
import Carousel from "../components/Carousel";

test("lets users click on thumbnails to make them the hero", async () => {
  const images = ["0.jpg", "1.jpg", "2.jpg"];
  const carousel = render(<Carousel images={images} />);
  const hero = await carousel.findByTestId("hero");
  expect(hero.src).toContain(images[0]);

  for (const image of images) {
    const id = images.indexOf(image);
    const thumbnail = await carousel.findByTestId(`thumbnail-${id}`);
    await act(() => {
      thumbnail.click();
    });

    expect(hero.src).toContain(image);
    expect(thumbnail.classList).toContain("active");
  }
});

// const callback = async (image, index) => {
//   const thumbnail = await carousel.findByTestId(`thumbnail-${index}`);
//   await act(() => {
//     thumbnail.click();
//   });
//
//   expect(hero.src).toContain(image);
//   expect(thumbnail.classList["0"]).toContain("active");
// };
// images.forEach(callback);
