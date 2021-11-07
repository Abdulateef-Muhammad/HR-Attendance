import { VictoryPie } from "victory";
import clockIcon from "../../icons/clock";
import IconText from "../common/IconText";
import Text from "../common/Text";

const AttendanceStatistics = () => {
  return (
    <div className="flex items-center flex-wrap justify-around">
      <div className="">
        <span className="flex">
          <Text
            data={{ text: "Working hours:", classes: "p-2 text-gray-400" }}
          />
          <IconText
            data={{ text: "280", icon: clockIcon, classes: "flex p-2" }}
          />
        </span>
        <span className="flex">
          <Text
            data={{
              text: "Actual worked hours:",
              classes: "p-2 text-gray-400",
            }}
          />
          <IconText
            data={{ text: "266", icon: clockIcon, classes: "flex p-2" }}
          />
        </span>
      </div>
      <div className="flex-shrink-0 h-32 w-32">
        <VictoryPie
          data={[
            { x: "Attendant 30%", y: 30 },
            { x: "Absent 4%", y: 4 },
          ]}
          colorScale={["#607d8b", "#af0303"]}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "white",
              strokeWidth: 3,
            },
            labels: {
              fontSize: 45,
              fill: "#c43a31",
            },
          }}
        />
      </div>
    </div>
  );
};

export default AttendanceStatistics;
