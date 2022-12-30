import React from "react";
import { ReactComponent as ReactLogo } from "../assets/react.svg";
import { ReactComponent as PythonLogo } from "../assets/python.svg";
import { ReactComponent as AwsLogo } from "../assets/aws.svg";
import { ReactComponent as CssLogo } from "../assets/css.svg";
import { ReactComponent as FirebaseLogo } from "../assets/firebase.svg";
import { ReactComponent as GitLogo } from "../assets/git.svg";
import { ReactComponent as GraphLogo } from "../assets/graphql.svg";
import { ReactComponent as HtmlLogo } from "../assets/html.svg";
import { ReactComponent as JsLogo } from "../assets/js.svg";
import { ReactComponent as TsLogo } from "../assets/ts.svg";
import { ReactComponent as NxLogo } from "../assets/nx.svg";

export default function Skills() {
  const renderIcon = (icon) => {
    return <>{icon}</>;
  };

  const iconVariant = [
    ReactLogo,
    PythonLogo,
    AwsLogo,
    CssLogo,
    FirebaseLogo,
    GitLogo,
    GraphLogo,
    HtmlLogo,
    JsLogo,
    TsLogo,
    NxLogo,
  ];
  return (
    <div>
      {iconVariant.map((icon, i) => {
        return renderIcon(icon);
      })}
    </div>
  );
}
