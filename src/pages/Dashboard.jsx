import AttendanceCheckTable from "../components/Employees/AttendanceCheckTable";
import AttendanceStatistics from "../components/Employees/AttendanceStatistics";
import Header from "../components/Header/Header";

const Dashboard = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="p-6">
        <AttendanceStatistics />
        <AttendanceCheckTable />
      </main>
    </>
  );
};

export default Dashboard;
