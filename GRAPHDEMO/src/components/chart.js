import _ from "lodash";
import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

function average(data) {
  return _.round(_.sum(data) / data.length);
}

export default props => {
  const height = props.height ? props.height : 120;
  const width = props.width ? props.width : 180;
  return (
    <div>
      <Sparklines height={height} width={width} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(props.data)} {props.units}
      </div>
    </div>
  );
};
