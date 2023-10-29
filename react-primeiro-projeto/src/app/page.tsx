import { StudentTable } from "./components/StundentTable";
import { students } from "./data/students";

const Page = () => {

  // const list = students?.map(student => <li>{student.id}</li>)

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl mb-5">Lista de Estudntes</h1>
      <StudentTable apprentice={students} />
    </div>
  );
}

export default Page;