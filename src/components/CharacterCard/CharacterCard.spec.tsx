import { render } from "@testing-library/react-native";

import { CharacterCard } from "./CharacterCard";

import { Character } from "@/types";

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

const character: Character = {
  id: 1010354,
  name: "Adam Warlock",
  description:
    "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
    extension: "jpg",
  },
};

describe("<CharacterCard />", () => {
  it("should render the character name", () => {
    const { getByText } = render(<CharacterCard character={character} />);

    expect(getByText(character.name)).toBeDefined();
  });

  it("should render the character image", () => {
    const { getByTestId } = render(<CharacterCard character={character} />);
    const img = getByTestId("character-image");

    expect(img.props.accessibilityRole).toEqual("image");
  });
});
