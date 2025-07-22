import { getLayout } from "components/Layout/Layout";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontWeight: "600",
        fontSize: "24px",
      }}
    >
      Not Found
    </div>
  );
};

ErrorPage.getLayout = getLayout;
export default ErrorPage;
