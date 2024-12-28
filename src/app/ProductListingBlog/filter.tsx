import Image from "next/image";

export default function Filter() {
  const filters = [
    { label: "Category", width: "w-auto" },
    { label: "Product Type", width: "w-auto" },
    { label: "Price", width: "w-auto" },
    { label: "Brand", width: "w-auto" },
  ];

  return (
    <div className="w-full h-16 bg-white flex flex-wrap items-center justify-between px-6">
      {/* Filters Section */}
      <div className="flex gap-3">
        {filters.map((filter, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-3 py-2 ${filter.width} h-12 bg-white`}
          >
            <span className="text-[#2A254B] font-satoshi text-sm leading-6">
              {filter.label}
            </span>
            <Image src="/Caret--down.png" alt={filter.label} width={16} height={16} />
          </div>
        ))}
      </div>

      {/* Sorting Section */}
      <div className="flex items-center gap-4">
        <span className="text-[#2A254B] font-satoshi text-sm leading-6">
          Sorting by:
        </span>
        <div className="flex items-center gap-2 px-3 py-2 h-12 bg-white ">
          <span className="text-[#2A254B] font-satoshi text-sm leading-6">
            Date Added
          </span>
          <Image src="/Caret--down.png" alt="Sorting" width={16} height={16} />
        </div>
      </div>
    </div>
  );
}
