import { createText } from "@shopify/restyle";

import { Theme } from "@/themes";

export const Text = createText<Theme>();

export type TextProps = React.ComponentProps<typeof Text>;
