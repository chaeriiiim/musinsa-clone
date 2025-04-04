import Image from "next/image";

export default function Header() {
  const headerMainMenus = [
    { name: "MUSINSA", href: "#" },
    { name: "BEAUTY", href: "#" },
    { name: "PLAYER", href: "#" },
    { name: "OUTLET", href: "#" },
    { name: "BOUTIQUE", href: "#" },
    { name: "SNEAKERS", href: "#" },
    { name: "KIDS", href: "#" },
  ];

  const headerSubMenus = [
    { name: "검색", href: "#" },
    { name: "좋아요", href: "#" },
    { name: "마이", href: "#" },
    { name: "장바구니", href: "#" },
  ];
  return (
    <>
      <div className="w-full h-[55px] bg-[#1A1B1F] py-[20px] px-[8px]">
        <div className="flex items-center justify-between gap-[8px] h-[16px] px-[8px]">
          <div className="flex items-center gap-[8px]">
            <button className="cursor-pointer">
              <Image src="/navIcon.svg" alt="navIcon" width={20} height={15} />
            </button>
            <div>
              <div className="w-[1px] h-[16px] bg-[#767679] ml-[8px]" />
            </div>
            {headerMainMenus.map((menu, index) => (
              <span
                key={index}
                className="text-[#D1D1D2] font-semibold cursor-pointer"
              >
                <a href={menu.href}>{menu.name}</a>
              </span>
            ))}
            <div className="w-[1px] h-[16px] bg-[#767679]" />
            <span className="text-[#D1D1D2] font-semibold cursor-pointer">
              <a href="#">
                <span className="font-light">(S)</span>SNAP
              </a>
            </span>
          </div>

          <div className="flex items-center  gap-[8px] ">
            <span className="text-[#D1D1D2] text-[14px] font-semibold cursor-pointer">
              <a href="#">오프라인 스토어</a>
            </span>
            <div className="w-[1px] h-[16px] bg-[#767679]" />
            {headerSubMenus.map((menu, index) => (
              <span
                key={index}
                className="text-[#D1D1D2] text-[14px] font-semibold cursor-pointer"
              >
                <a href={menu.href}>{menu.name}</a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
