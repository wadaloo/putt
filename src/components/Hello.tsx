import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

type Props = HelloProps;

export class Hello extends React.Component<Props> {
  render() {
    const { props } = this;
    const { compiler, framework } = props;
    
    return (
      <h1>Hello from {compiler} and {framework}!</h1>
    );
  }
}