import IconHearth from "@/components/icons/Hearth.astro";
import IconHome from "@/components/icons/Home.astro";
import IconStar from "@/components/icons/Star.astro";

export const MENU_NAV = [
  {
    name: "Inicio",
    link: "/",
    Icon: IconHome,
  },
  {
    name: "Nuestros Platos",
    link: "/nuestros-platos",
    Icon: IconHearth,
  },
  {
    name: "Quienes somos",
    link: "/quienes-somos",
    Icon: IconStar,
  },
];
