import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const VprNavbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">ВПР Ответы</h1>
        <span className="hidden md:inline-block text-sm bg-white/20 px-2 py-1 rounded-md">
          База знаний
        </span>
      </div>
      
      <div className="hidden md:flex w-1/3 relative">
        <Input 
          placeholder="Поиск по заданиям..." 
          className="bg-white/20 border-0 focus:bg-white/30 text-white placeholder:text-white/70"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-white/70" />
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" className="hidden md:flex">
          Мои задания
        </Button>
        <Button variant="outline" size="sm" className="bg-white/20 border-0 text-white hover:bg-white/30">
          Войти
        </Button>
      </div>
    </nav>
  );
};

export default VprNavbar;
