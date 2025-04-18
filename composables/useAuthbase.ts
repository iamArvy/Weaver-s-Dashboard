import type { AuthBaseProps } from "~/types";

export const useAuthBaseProps = () =>
  useState<AuthBaseProps[] | undefined>("auth-base-props", () => undefined);
