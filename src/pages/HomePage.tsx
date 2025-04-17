import { useState } from "react";
import VprNavbar from "@/components/VprNavbar";
import SubjectCard from "@/components/SubjectCard";
import SearchSection from "@/components/SearchSection";
import VprStatistics from "@/components/VprStatistics";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<number | null>(null);

  const handleSubjectSelect = (subject: string, classNum: number) => {
    setSelectedSubject(subject);
    setSelectedClass(classNum);
    navigate(`/subject/${subject.toLowerCase()}/${classNum}`);
  };

  const subjects = [
    { 
      title: "Математика", 
      icon: "🔢", 
      classes: [4, 5, 6, 7, 8, 9, 11], 
      color: "bg-blue-600" 
    },
    { 
      title: "Русский язык", 
      icon: "📝", 
      classes: [4, 5, 6, 7, 8, 9, 11], 
      color: "bg-red-600" 
    },
    { 
      title: "Окружающий мир", 
      icon: "🌍", 
      classes: [4], 
      color: "bg-green-600" 
    },
    { 
      title: "История", 
      icon: "📜", 
      classes: [5, 6, 7, 8, 11], 
      color: "bg-amber-600" 
    },
    { 
      title: "Биология", 
      icon: "🧬", 
      classes: [5, 6, 7, 8, 11], 
      color: "bg-emerald-600" 
    },
    { 
      title: "География", 
      icon: "🗺️", 
      classes: [6, 7, 8, 11], 
      color: "bg-cyan-600" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <VprNavbar />
      
      <main className="container mx-auto py-8 px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Ответы на Всероссийские проверочные работы</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наша база содержит ответы и решения заданий ВПР по всем предметам для учеников с 4 по 11 класс
          </p>
        </div>
        
        <SearchSection />
        
        <VprStatistics />
        
        <h2 className="text-2xl font-bold mb-6">Выберите предмет</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map(subject => (
            <SubjectCard 
              key={subject.title}
              title={subject.title}
              icon={subject.icon}
              classes={subject.classes}
              color={subject.color}
              onClick={handleSubjectSelect}
            />
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg shadow-sm border">
          <h2 className="text-xl font-bold mb-4">О Всероссийских проверочных работах</h2>
          <p className="text-muted-foreground mb-4">
            Всероссийские проверочные работы (ВПР) – это контрольные работы, проводимые по отдельным учебным предметам 
            для оценки уровня подготовки школьников с учетом требований Федерального государственного образовательного стандарта.
          </p>
          <p className="text-muted-foreground">
            Наш сервис помогает школьникам успешно подготовиться к ВПР, предоставляя доступ к решенным 
            заданиям, пояснениям и методическим материалам по всем предметам.
          </p>
        </div>
      </main>
      
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 ВПР Ответы - Все права защищены</p>
          <p className="text-sm text-primary-foreground/70">
            Сервис предоставляется в образовательных целях и не призывает к списыванию
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
