
import PageHeading from "../components/common/PageHeading";
import LoginForm from "../components/Login/LoginForm";

const Login = () => {

  return (
    <section className="grid justify-items-center">
      <div className="container p-6 xl:w-2/6 md:w-2/4 rounded border-gray-300">
        <PageHeading data={{text: "Login", component: "h3", props: { className: "p-2 text-5xl"}}} />
       <LoginForm/>
      </div>
    </section>  
  );
};

export default Login;
