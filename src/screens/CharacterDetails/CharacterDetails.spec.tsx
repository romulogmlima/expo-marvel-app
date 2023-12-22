import { render } from "@testing-library/react-native";
import MockAdapter from "axios-mock-adapter";

import { CharacterDetails } from "./CharacterDetails";

import { api } from "@/services/api";

const apiMock = new MockAdapter(api);

describe("", () => {
  const mockedComicRoute = {
    params: {
      character: {
        id: 1010354,
        name: "Adam Warlock",
        description: "",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
          extension: "jpg",
        },
      },
    },
  };
  const mockedEmptyAxiosResponse = {
    data: {
      data: {
        results: [],
      },
    },
  };

  it("should render text indicating there is no description for that character if description field is empty", async () => {
    apiMock.onGet(`/characters/1010354/comics`).reply(200, mockedEmptyAxiosResponse);

    const { findByText } = render(<CharacterDetails route={mockedComicRoute} />);

    const noDescriptionText = await findByText("There is no description for this character!");
    expect(noDescriptionText).toBeDefined();
  });

  it("should render text indicating there are no comics for that character if comic list is empty", async () => {
    apiMock.onGet(`/characters/1010354/comics`).reply(200, mockedEmptyAxiosResponse);

    const { findByText } = render(<CharacterDetails route={mockedComicRoute} />);

    const noComicsText = await findByText("There are no comics for this character!");
    expect(noComicsText).toBeDefined();
  });
});
