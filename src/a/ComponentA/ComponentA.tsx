import React from "react";
import type { MyModel } from "../Models/model";

export interface ComponentAProps {
  test: MyModel;
}

export function ComponentA(props: ComponentAProps): React.JSX.Element {
  const { test } = props;
  return <>ComponentA: {test}</>;
}
