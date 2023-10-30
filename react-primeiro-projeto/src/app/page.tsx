import { StudentTable } from "./components/StundentTable";
import { students } from "./data/students";

const Page = () => {

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5">Lista de Estudantes</h1>
      <StudentTable apprentice={students} />
    </div>
  );
}

export default Page;