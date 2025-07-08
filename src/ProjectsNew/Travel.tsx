// import Tajmahal from "/src/Images/licensed-image.jfif";
import Marker from "/src/Images/Marker2.jpg";
import type React from "react";

export type travelProps = {
    src: string;
    alt: string;
    title: string;
    construction: string;
    text: string;
    googleLinks: string;
}

export default function Travel(props: travelProps):React.JSX.Element {
  return (
    <>
      <main className="px-[20%] pt-[7%] flex w-full gap-4">
        <img
          className="w-[40%] h-[35vh] rounded-xl filter transition-[filter] duration-100 ease-in-out hover:brightness-[1.2]"
          src={props.src} 
          alt={props.alt}
        />
        <div className="w-[80%] flex flex-col gap-2 h-[30px] mt-4">
          <div className="flex gap-1.5 w-ful">
            <img className="w-[16px]" src={Marker} alt="Marker-logo" />
            <p className="font-bold text-[0.7rem]">INDIA</p>
            <a
              href={props.googleLinks}
              className="text-gray-500 text-[0.7rem] hover:scale-[1.03] duration-200 hover:shadow"
            >
              View on Google Maps.
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-[1.5rem]">{props.title}</h2>
            <p className="leading-4 font-mono">{props.construction}</p>
            <p className="leading-4 font-serif mt-1 text-[0.9rem]">
             {props.text}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
