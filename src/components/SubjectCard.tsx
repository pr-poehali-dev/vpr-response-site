import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface SubjectCardProps {
  title: string;
  icon: string;
  classes: number[];
  color: string;
  onClick?: (subject: string, classNum: number) => void;
}

const SubjectCard: FC<SubjectCardProps> = ({ 
  title, 
  icon, 
  classes, 
  color,
  onClick 
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className={`${color} text-white`}>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-sm text-muted-foreground mb-3">Доступные классы:</h3>
        <div className="flex flex-wrap gap-2">
          {classes.map((classNum) => (
            <Button 
              key={classNum}
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
              onClick={() => onClick?.(title, classNum)}
            >
              {classNum} класс
              <ChevronRight className="h-4 w-4" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
