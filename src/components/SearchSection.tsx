import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchSection = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-lg bg-white shadow-sm border">
      <h2 className="text-xl font-semibold mb-4">Быстрый поиск ответов</h2>
      <p className="text-muted-foreground mb-6">
        Введите номер задания, вариант или описание для поиска ответов в нашей базе данных
      </p>
      
      <div className="relative">
        <Input 
          placeholder="Например: Математика, 5 класс, задание 10, вариант 2..." 
          className="pr-24 h-12 text-base"
        />
        <Button className="absolute right-0 top-0 h-12 rounded-l-none">
          <Search className="mr-2 h-4 w-4" />
          Найти
        </Button>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-sm text-muted-foreground">Популярные запросы:</span>
        <Button variant="link" size="sm" className="h-auto p-0">Русский язык 4 класс</Button>
        <Button variant="link" size="sm" className="h-auto p-0">Математика 9 класс</Button>
        <Button variant="link" size="sm" className="h-auto p-0">Биология 6 класс</Button>
      </div>
    </div>
  );
};

export default SearchSection;
