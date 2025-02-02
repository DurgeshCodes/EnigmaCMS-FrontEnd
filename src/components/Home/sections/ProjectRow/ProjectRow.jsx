import React from "react";
import classes from "./ProjectRow.module.css";
import Card from "./Card";

import android from "../../../../assets/ProjectRowIcons/android.svg";
import database from "../../../../assets/ProjectRowIcons/database.svg";
import java from "../../../../assets/ProjectRowIcons/java.svg";
import ml from "../../../../assets/ProjectRowIcons/ml.svg";
import python from "../../../../assets/ProjectRowIcons/python.svg";
import website from "../../../../assets/ProjectRowIcons/website.svg";

const Row = () => {
  return (
    <section className={classes.cardList}>
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={java} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={java} title={"React Animating Rows"} />
      <Card logo={database} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={database} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={android} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={website} title={"React Animating Rows"} />
      <Card logo={ml} title={"React Animating Rows"} />
      <Card logo={website} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
      <Card logo={python} title={"React Animating Rows"} />
    </section>
  );
};

export default Row;
