const tableHeadingInfo = {
  cells: [
    {
      value: "ID",
      cellWidth: "w-1/6", // cell width is estimated using tailwind width classes system.
    },
    {
      value: "Employee Name",
      cellWidth: "w-2/3", // cell width is estimated using tailwind width classes system.
    },
    {
      value: "Attendant",
      cellWidth: "w-1/4", // cell width is estimated using tailwind width classes system.
    },
  ],
};

const tablebodyInfo = {
  rows: [
    {
      cells: [
        {
          value: 12,
        },
        {
          value: "Ali Saleh Raymond",
        },
        {
          value: <input type="checkbox" />,
        },
      ],
    },
    {
      cells: [
        {
          value: 152,
        },
        {
          value: "Ahemd Saleh Ali Rassam",
        },
        {
          value: <input type="checkbox" />,
        },
      ],
    },
  ],
};

export { tableHeadingInfo, tablebodyInfo };
