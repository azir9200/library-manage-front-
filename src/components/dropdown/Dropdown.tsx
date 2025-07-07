import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLocation, useNavigate } from "react-router-dom";

const Dropdown = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isTableView = location.pathname === "/";
  const isCardView = location.pathname === "/bookCards";

  const handleNavigate = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex justify-end" variant="outline">
          View Options
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuCheckboxItem
          checked={isTableView}
          onCheckedChange={() => handleNavigate("/")}
        >
          Table View
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={isCardView}
          onCheckedChange={() => handleNavigate("/bookCards")}
        >
          Card View
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
