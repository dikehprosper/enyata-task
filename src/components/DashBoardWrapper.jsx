import SideBar from "./organisms/SideBar";
import Header from "./organisms/Header";

const DashboardWrapper = ({ children }) => {
  return (
    <div className="flex w-full h-screen bg-white dark:bg-black overflow-hidden">
      <div className="w-[272px] h-full">
        <SideBar />
      </div>
      <div className="flex-1 h-full flex flex-col">
        <div className="sticky top-0 z-10 ">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto py-[44px] px-[38px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
