import {findMyColor} from '../helper'
describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const {color,bgColor} = findMyColor(21);
      expect(color.h).toEqual(21);
    });
  });