import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

export function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="" asChild>
        <Button className=" flex justify-end " variant="outline">
          Views Options
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuItem>
          <Link className=" px-6 py-2" to="/">
            Table View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link className=" px-6 py-2" to="/bookCards">
            Card View
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
