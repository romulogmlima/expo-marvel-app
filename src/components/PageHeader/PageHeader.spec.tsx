import { render } from "@testing-library/react-native";

import { PageHeader } from "./PageHeader";

const title = "Title";
const subtitle = "Subtitle";

describe("<PageHeader />", () => {
  it("should render title", () => {
    const { getByText } = render(<PageHeader title={title} subtitle={subtitle} />);
    expect(getByText(title)).toBeDefined();
  });

  it("should render subtitle", () => {
    const { getByText } = render(<PageHeader title={title} subtitle={subtitle} />);
    expect(getByText(subtitle)).toBeDefined();
  });
});
