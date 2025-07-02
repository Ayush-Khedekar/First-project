import india from "/src/Images/india.png";
export default function Header() {
  return (
    <>
      <header className="bg-[#FFA07A] flex h-[90px] justify-center items-center">
        <img className="w-[40px] mr-2 bg-[#FFA07A] rounded-4xl" src={india} alt="India logo" />
        <p className="text-white text-[1rem]">Travel along with India</p>
      </header>
    </>
  );
}
