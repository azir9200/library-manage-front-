import { Input } from "../ui/input";
import { Search } from "lucide-react"; // or your own SearchIcon

export default function Landing() {
  return (
    // <div className="h-[calc(90vh-64px)]
    //  bg-[url('https://www.marketplace.org/wp-content/uploads/2024/06/GettyImages-1453081662.jpg?w=350')] bg-cover bg-center">
      
        <div>
      <div className="pt-32 max-w-xl mx-auto">
        <form className="flex items-center gap-2">
          <Search className="w-5 h-5 text-gray-400" />
          <Input
            aria-label="Search"
            placeholder="Search..."
            className="text-sm bg-gray-100"
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
