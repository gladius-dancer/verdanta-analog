import LoginForm from "@/components/LoginForm/LoginForm";
import AdminController from "@/components/AdminController";

const AuthPage = () => {
  return (
    <AdminController>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <LoginForm />
      </div>
    </AdminController>
  );
};

export default AuthPage;
