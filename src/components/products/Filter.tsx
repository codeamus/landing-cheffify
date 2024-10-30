import IconCheck from "@/assets/images/icons/icon-check.svg";
import IconFilter from "@/assets/images/icons/icon-filter.svg";
import { CATEGORIES } from "@/config/database.products";
import { useState } from "preact/hooks";

const Filter = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="lg:w-1/3">
      <div className="border-b border-borderPlatos w-full pb-5 flex gap-4">
        <img src={IconFilter.src} alt="Icono de filtro" className="w-5" />
        <h2 className="font-semibold text-primary text-lg">Filtrar</h2>
      </div>
      <div className="border-b border-borderPlatos w-full mt-10">
        <h2 className="font-bold text-primary text-sm uppercase pb-2">
          Categorías
        </h2>
      </div>
      <ul className="mt-4" id="category-list">
        {CATEGORIES.map(({ name, slug, icon }) => (
          <li
            key={slug}
            className="text-secondary text-sm md:text-lg flex justify-between relative group mb-2 category-item"
            data-slug={slug}
          >
            <button
              className="flex items-center gap-3 category-button"
              onClick={() => setActiveCategory(slug)}
            >
              <img src={icon.src} alt="" className="w-5 h-5" />
              <span className="text-[14px] md:text-[16px]">{name}</span>
            </button>
            {activeCategory === slug && (
              <img
                src={IconCheck.src}
                alt="Active Icon"
                className="w-5 h-5 check-icon"
                style={{ display: "inline" }}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Filter;
