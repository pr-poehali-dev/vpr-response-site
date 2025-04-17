import { BookOpen, Users, FileCheck } from "lucide-react";

const VprStatistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm border">
        <div className="bg-blue-100 p-3 rounded-full">
          <BookOpen className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <p className="text-2xl font-bold">10+</p>
          <p className="text-sm text-muted-foreground">Учебных предметов</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm border">
        <div className="bg-green-100 p-3 rounded-full">
          <FileCheck className="h-6 w-6 text-green-600" />
        </div>
        <div>
          <p className="text-2xl font-bold">5000+</p>
          <p className="text-sm text-muted-foreground">Решенных заданий</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 p-4 rounded-lg bg-white shadow-sm border">
        <div className="bg-purple-100 p-3 rounded-full">
          <Users className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <p className="text-2xl font-bold">1500+</p>
          <p className="text-sm text-muted-foreground">Учеников получили помощь</p>
        </div>
      </div>
    </div>
  );
};

export default VprStatistics;
