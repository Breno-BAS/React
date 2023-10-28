import { students } from "./data/students";

const Page = () => {

  const list = students?.map(student => <li>{student.id}</li>)

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white">
      
        {list}
    </div>
  );
}

export default Page;