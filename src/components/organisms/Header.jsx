import  { useContext } from "react";
import Profile from "../molecules/Profile";
import Icon from "../atoms/Icon";
import Notifications from "../../assets/notifications.png";
import MoreOptions from "../../assets/ ellipsis.svg";
import { AppContext } from "../../Context/Context";
import { verifySelectedStatus } from "../utils/helpers";
import ThemeToggle from "../molecules/ThemeToggle"
import {Bell, ChevronLeft} from "lucide-react"
const BackArrow = "fefe"

const Header = () => {
  const { selectedItem, setSelectedItem } = useContext(AppContext);

  const handleClick = (obj) => {
    const newObj = {};
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (obj[key] !== "") {
        newObj[key] = "";
      }
    }
    setSelectedItem({ ...selectedItem, ...newObj });
  };

  return (
    <div className="flex px-[40px] h-[64px] justify-between bg-red-1300 dark:bg-black/90" style={{ boxShadow: "0px 2px 6px 0px #e5e5e54d"}}>
      {
        <div
          onClick={() => handleClick(selectedItem)}
          style={{
            visibility: verifySelectedStatus(selectedItem)
              ? "visible"
              : "hidden",
          }}
          className="flex items-center cursor-pointer no-underline gap-[5px]"
        >
          <ChevronLeft className='text-[15px] text-black dark:text-white opacity-[.5]'/>
          <p className="text-[16px] text-black dark:text-white opacity-[.5]">Back</p>
        </div>
      }
      <div className="flex items-center gap-[32px]" >
        <ThemeToggle />
        <Icon src={Notifications} altText={"notification icon"} className='w-[15px] h-[18px] block dark:hidden ' />
        <Bell className="hidden dark:block text-white w-[17px] h-[18px]" strokeWidth={2} />
        <Profile />
        <Icon src={MoreOptions} altText={"more options"} className='w-[24px] h-[24px]' />
      </div>
    </div>
  );
};

export default Header;