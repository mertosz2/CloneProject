import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/react.svg";
import { Button } from "../components/Button";
import { useState } from "react";


export function PageHeader() {
  const [showFullwidthSearch, setShowFullwidthSearch] = useState(false);
  
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">  
      <div className={`flex gap-4 items-center flex-shrink-0" ${showFullwidthSearch ? "hidden": "flex"}`}>
        <Button variant="ghost" size="icon" >
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>

      <form className={`flex-grow justify-center  hidden" ${showFullwidthSearch ? "flex": "hidden md:flex"}`} >
        {showFullwidthSearch && (
      <Button onClick={() => setShowFullwidthSearch(false) } 
      type="button" variant="ghost" size="icon" className="flex-shrink-0">
          <ArrowLeft />
        </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input type="serach" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-inner
         shadow-secondary py-1 px-5 text-lg w-full
           focus:border-blue-500 outline-none" ></input>

          <Button className="rounded-r-full border border-secondary-border px-4 py-2">
            <Search />
          </Button>
          <Button variant="ghost" size="icon" className="ml-4">
            <Mic />
          </Button>
        </div>


      </form>
      
      <div className={`flex flex-shrink-0 md:gap-2 ${showFullwidthSearch ? "hidden": "flex"}`}>
        <Button onClick={() => setShowFullwidthSearch(true) }variant="ghost" size="icon" className="md:hidden">
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>

      </div>
    </div>
  );
}
export default PageHeader;
