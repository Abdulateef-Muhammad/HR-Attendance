import { tableHeadingInfo, tablebodyInfo } from "./EmployeesAttendanceInfo";
import Text from "../common/Text";
import Button from "../common/Button";
import PageHeading from "../common/PageHeading";
import IconText from "../common/IconText";
import dateIcon from "../../icons/date";
const TableHeading = (props) => {
  return (
    <thead>
      <tr>
        {props.data.cells.map((cell) => (
          <th
            className={`${cell.cellWidth} bg-gray-200 px-4 py-2 text-gray-600 font-medium text-left`}
          >
            {cell.value}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableRow = (props) => {
  console.log(props.data.cells);
  return (
    <tr>
      {props.data.cells.map((cell) => {
        console.log(cell);
        return (
          <td className="border-b border-gray-300 px-4 py-2 text-emerald-600 font-medium">
            {cell.value}
          </td>
        );
      })}
      {/* <td className="border-b border-gray-300 px-4 py-2 text-emerald-600 font-medium">
        194
      </td> */}
    </tr>
  );
};

const TableRows = (props) => {
  return props.data.rows.map((row) => {
    console.log(row);
    return <TableRow data={row} />;
  });
};

const Checkbox = () => {
  return <input type="checkbox" />;
};

const AttendanceCheckTable = () => {
  return (
    <section className="grid justify-items-center p-2">
      <div className="container xl:w-4/6 md:w-full">
        <IconText data={{ text: "13 / 2 /2021", icon: dateIcon, classes: "inline-block py-2"}} />
        <Text data={{ text: "Today", classes: "px-2 py-1 rounded bg-blue-100"}} />
        <table className="table-auto border w-full">
          <TableHeading data={tableHeadingInfo} />
          <tbody>
            <TableRows data={tablebodyInfo} />
          </tbody>
        </table>
        <div className="grid place-items-end py-2">
          <Button data={{ value: "Submit" }} />
        </div>
      </div>
    </section>
  );
};

export default AttendanceCheckTable;
