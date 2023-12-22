import { render } from "@testing-library/react-native";

import { ComicCard } from "./ComicCard";

import { Comic } from "@/types";

const comic: Comic = {
  id: "94083",
  title: "Maestro: World War M (2022) #5",
  description:
    "When you can live forever, what does it mean to live? In this shocking series finale, Maestro finds himself partnered with an old enemy against even older allies to determine once and for all the true ruler of Dystopia. But opportunism depends on knowing how your opponents think, and someone's failed to account for a few tricks…",
  modified: "2022-09-09T14:14:36-0400",
  isbn: "",
  upc: "75960620143300511",
  format: "Comic",
  dates: [
    {
      type: "onsaleDate",
      date: "2022-07-20T00:00:00-0400",
    },
  ],
  prices: [
    {
      type: "printPrice",
      price: 3.99,
    },
  ],
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/d/90/62d0454381496",
    extension: "jpg",
  },
};

describe("<ComicCard />", () => {
  it("should render title for the comic", () => {
    const { getByText } = render(<ComicCard comic={comic} />);

    expect(getByText(comic.title)).toBeDefined();
  });

  it("should render the character image", () => {
    const { getByTestId } = render(<ComicCard comic={comic} />);
    const img = getByTestId("comic-image");

    expect(img.props.accessibilityRole).toEqual("image");
  });
});
