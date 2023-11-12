import { Oval } from "react-loader-spinner";

const MainLoader = () => {
  return (
    <>
      <Oval
        height={80}
        width={80}
        color="#4793ff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#fff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </>
  );
};

export default MainLoader;
