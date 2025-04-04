export default function Header() {
  return (
    <>
      <div className="w-full h-[55px] bg-[#1A1B1F] py-[20px] x-[8px] px-[8px]">
        <div className="flex items-center gap-[8px] w-[1440px] h-[16px] p-[8px]">
          <button>
            <img
              src="/navIcon.svg"
              alt="navIcon"
              className="w-[20px] h-[15px]"
            />
          </button>
          <div className="pl-[8px]">
            <div className="w-[1px] h-[16px] bg-[#767679]" />
          </div>
          <span className="text-[#D1D1D2] font-semibold cursor-pointer">
            <a href="#">MUSINSA</a>
          </span>
          <span className="text-[#D1D1D2] font-semibold cursor-pointer">
            <a href="#">BEAUTY</a>
          </span>
          <span className="text-[#D1D1D2] font-semibold cursor-pointer">
            <a href="#">PLAYER</a>
          </span>
          <span className="text-[#D1D1D2] font-semibold cursor-pointer">
            <a href="#">OUTLET</a>
          </span>
          <span className="text-[#D1D1D2] font-semibold cursor-pointer">
            <a href="#">BOUTIQUE</a>
          </span>
          <span className="text-[#D1D1D2] font-semibold cursor-pointer">
            <a href="#">SNEAKERS</a>
          </span>
          <span className="text-[#D1D1D2] font-semibold cursor-pointer">
            <a href="#">KIDS</a>
          </span>
          <div className="w-[1px] h-[16px] bg-[#767679]" />
          <span className="text-[#D1D1D2] font-semibold cursor-pointer">
            <a href="#">
              <span className="font-light">(S)</span>SNAP
            </a>
          </span>
          <div className="flex items-end  gap-[8px]">
            <span className="text-[#D1D1D2] text-[14px] font-semibold cursor-pointer">
              <a href="#">오프라인 스토어</a>
            </span>
            <div className="w-[1px] h-[16px] bg-[#767679]" />
            <span className="text-[#D1D1D2] text-[14px] font-semibold cursor-pointer">
              <a href="#">검색</a>
            </span>
            <span className="text-[#D1D1D2] text-[14px] font-semibold cursor-pointer">
              <a href="#">좋아요</a>
            </span>
            <span className="text-[#D1D1D2] text-[14px] font-semibold cursor-pointer">
              <a href="#">마이</a>
            </span>
            <span className="text-[#D1D1D2] text-[14px] font-semibold cursor-pointer">
              <a href="#">장바구니</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
