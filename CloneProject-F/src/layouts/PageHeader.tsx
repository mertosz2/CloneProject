import { Bell, Menu, Search, Upload, User } from "lucide-react";
import logo from "../assets/react.svg";
import { Button } from "../components/Button";

export function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button variant="ghost" size="icon" >
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </div>
      <form className="flex flex-grow justify-center">
        <div className="flex flex-grow max-w-[600px]">
        <input className="rounded-l-full border border-secondary-border shadow shadow-secondary" placeholder="Search"  ></input>

        <Button className="rounded-r-full">
          <Search />
        </Button>
        </div>

      </form>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button variant="ghost" size="icon">
          <Upload/>
        </Button>
        <Button variant="ghost" size="icon">
          <Bell/>
        </Button>
        <Button variant="ghost" size="icon">
          <User/>
        </Button>

      </div>
    </div>
  );
}
export default PageHeader;
