import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../Context/userContext";

// import CircularWithValueLabel from "../components/ProgressLoading";

function ProtectedPage() {
  const { user, loading } = useUser();
  console.log("ProtectedPage", user, loading);

  if (!user && loading) {
    return (
      <div className="w-full h-[100dvh] flex justify-center items-center">
        {/* <CircularWithValueLabel></CircularWithValueLabel> */}
        ...Loading
      </div>
    );
  } else if (!user && loading === false) {
    return <Navigate to="/" replace></Navigate>;
  } else {
    return <Outlet></Outlet>;
  }
}

export default ProtectedPage;
