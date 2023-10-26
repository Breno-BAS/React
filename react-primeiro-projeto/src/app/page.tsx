import { EmojiRating } from "./components/EmojiRating";

const Page = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-yellow-300 to-blue-400 flex flex-col justify-center items-center text-white">
      <EmojiRating rate = {3.2} />
    </div>
  );
}

export default Page;