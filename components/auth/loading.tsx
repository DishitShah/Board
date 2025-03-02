import Image from "next/image";

export const Loading = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width="120"
        height="120"
        className="animate-pulse duration-700"
      />
    </div>
  );
};
