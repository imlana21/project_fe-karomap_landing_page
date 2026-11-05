import { PageContainer } from "@/components/site/page-container";

import DatabaseIcon from "@/components/icons/DatabaseIcon";
import ServerIcon from "@/components/icons/ServerIcon";
import LeafletIcon from "@/components/icons/LeafletIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import MapStoreIcon from "@/components/icons/MapStoreIcon";
import LayerIcon from "@/components/icons/LayerIcon";
import MapboxIcon from "@/components/icons/MapboxIcon";
import MapLibreIcon from "@/components/icons/MapLibre";
import OpenLayersIcon from "@/components/icons/OpenLayersIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import QGisIcon from "@/components/icons/QGisIcon";
import PostgresIcon from "@/components/icons/PostgresIcon";

// Technology data
const technologies = [
  { name: "QGIS", icon: QGisIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "PostGIS", icon: DatabaseIcon },
  { name: "GeoServer", icon: ServerIcon },
  { name: "MapLibre", icon: MapLibreIcon },
  { name: "Mapbox", icon: MapboxIcon },
  { name: "OpenLayers", icon: OpenLayersIcon },
  { name: "Leaflet", icon: LeafletIcon },
  { name: "MapStore", icon: MapStoreIcon },
  { name: "GDAL/OGR", icon: GlobeIcon },
  { name: "Python", icon: PythonIcon },
  { name: "deck.gl", icon: LayerIcon },
] as const;

// Decorative contour paths
const contourPaths = [
  "M-30 48C40 42 32 112 103 105S175 43 234 34 315 2 340-22",
  "M-30 70C51 62 47 132 112 125S183 64 241 55 320 24 355 0",
  "M-30 92C61 84 62 153 123 147S194 86 250 77 330 47 371 20",
  "M-30 114C70 107 76 176 135 169S205 108 260 99 340 70 387 42",
  "M-30 136C80 130 91 198 147 191S216 130 271 121 350 92 403 64",
  "M-30 158C90 152 106 220 159 213S228 152 281 143 361 114 419 86",
  "M-30 180C100 175 120 242 171 235S239 174 292 165 372 136 435 108",
] as const;

function Contours({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 430 300"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="1.2">
        {contourPaths.map((path) => (
          <path key={path} d={path} />
        ))}
      </g>
    </svg>
  );
}

export default function TechStackSection() {
  return (
    <section
      aria-labelledby="tech-title"
      className="relative overflow-hidden bg-[#f4f8ff] py-20 sm:py-28 lg:py-32"
    >
      {/* Background decorations */}
      <Contours className="pointer-events-none absolute -left-20 -top-10 w-107.5 text-[#c7dcff]/70" />

      <Contours className="pointer-events-none absolute -bottom-10 -right-20 w-107.5 rotate-180 text-[#c7dcff]/70" />

      <PageContainer className="relative z-10">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="tech-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Technology Behind Our GIS
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#657187] sm:text-base">
            Built with trusted geospatial technologies for a flexible, scalable,
            and data-driven GIS platform.
          </p>

          <span
            aria-hidden="true"
            className="mx-auto mt-4 block h-0.5 w-20 rounded-full bg-(--brand)"
          />
        </header>

        {/* Technology grid */}
        <ul
          aria-label="GIS technologies"
          className="mx-auto mt-12 grid max-w-6xl grid-cols-[repeat(auto-fit,minmax(min(100%,150px),1fr))] gap-4 sm:mt-16"
        >
          {technologies.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="group flex min-h-36 flex-col items-center justify-center gap-4 rounded-xl border border-blue-100/80 bg-white/90 p-5 text-center shadow-[0_8px_24px_rgba(59,96,150,.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:border-orange-200 hover:shadow-[0_14px_32px_rgba(59,96,150,.12)] motion-safe:hover:-translate-y-1"
            >
              <div
                aria-hidden="true"
                className="flex size-14 shrink-0 items-center justify-center"
              >
                <Icon className="size-12 text-slate-400 transition-[color,transform] duration-300 group-hover:text-(--brand) motion-safe:group-hover:scale-110" />
              </div>

              <span className="text-sm font-semibold leading-5 text-[#354052]">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
