import { PageContainer } from "@/components/site/page-container";
import DatabaseIcon from "@/components/icons/DatabaseIcon";
import ServerIcon from "@/components/icons/ServerIcon";
import LeafletIcon from "@/components/icons/LeafletIcon";
import GlobeIcon from "@/components/icons/GlobeIcon";
import GrassIcon from "@/components/icons/GrassIcon";
import AnalyticIcon from "@/components/icons/AnalyticIcon";
import MapStoreIcon from "@/components/icons/MapStoreIcon";
import LayerIcon from "@/components/icons/LayerIcon";
import MapboxIcon from "@/components/icons/MapboxIcon";
import MapLibreIcon from "@/components/icons/MapLibre";
import OpenLayersIcon from "@/components/icons/OpenLayersIcon";
import PythonIcon from "@/components/icons/PythonIcon";
import QGisIcon from "@/components/icons/QGisIcon";
import PostgresIcon from "@/components/icons/PostgresIcon";

const technologies = [
  { name: "QGIS", symbol: "qgis" },
  { name: "PostgreSQL", symbol: "postgres" },
  { name: "PostGIS", symbol: "database" },
  { name: "GeoServer", symbol: "server" },
  { name: "MapLibre", symbol: "maplibre" },
  { name: "Mapbox", symbol: "mapbox" },
  { name: "OpenLayers", symbol: "openlayers" },
  { name: "Leaflet", symbol: "leaf" },
  { name: "MapStore", symbol: "map" },
  { name: "GDAL/OGR", symbol: "globe" },
  { name: "Python", symbol: "python" },
  { name: "GRASS GIS", symbol: "grass" },
  { name: "SAGA GIS", symbol: "analytics" },
  { name: "deck.gl", symbol: "layers" },
] as const;

function Contours({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 430 300"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.2">
        <path d="M-30 48C40 42 32 112 103 105S175 43 234 34 315 2 340-22" />
        <path d="M-30 70C51 62 47 132 112 125S183 64 241 55 320 24 355 0" />
        <path d="M-30 92C61 84 62 153 123 147S194 86 250 77 330 47 371 20" />
        <path d="M-30 114C70 107 76 176 135 169S205 108 260 99 340 70 387 42" />
        <path d="M-30 136C80 130 91 198 147 191S216 130 271 121 350 92 403 64" />
        <path d="M-30 158C90 152 106 220 159 213S228 152 281 143 361 114 419 86" />
        <path d="M-30 180C100 175 120 242 171 235S239 174 292 165 372 136 435 108" />
      </g>
    </svg>
  );
}

function TechSymbol({ type }: { type: string }) {
  const common =
    "size-14 text-slate-400 transition-colors duration-300 group-hover:text-(--brand)";

  if (type === "database") return <DatabaseIcon className={common} />;
  if (type === "server") return <ServerIcon className={common} />;
  if (type === "leaf") return <LeafletIcon className={common} />;
  if (type === "map") return <MapStoreIcon className={common} />;
  if (type === "globe") return <GlobeIcon className={common} />;
  if (type === "grass") return <GrassIcon className={common} />;
  if (type === "analytics") return <AnalyticIcon className={common} />;
  if (type === "mapbox") return <MapboxIcon className={common} />;
  if (type === "maplibre") return <MapLibreIcon className={common} />;
  if (type === "openlayers") return <OpenLayersIcon className={common} />;
  if (type === "qgis") return <QGisIcon className={common} />;
  if (type === "python") return <PythonIcon className={common} />;
  if (type === "postgres") return <PostgresIcon className={common} />;

  return <LayerIcon className={common} />;
}

export function TechStackSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#f4f8ff] py-24 sm:py-32"
      aria-labelledby="tech-title"
    >
      <Contours className="pointer-events-none absolute -left-16 -top-8 w-107.5 text-[#c7dcff]" />
      <Contours className="pointer-events-none absolute -bottom-8 -right-16 w-107.5 rotate-180 text-[#c7dcff]" />

      <PageContainer className="relative">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--brand)">
            Tech Stack &amp; Tools
          </p>
          <h2
            id="tech-title"
            className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Technology Behind Our GIS
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#657187]">
            Built with trusted geospatial technologies for a flexible, scalable,
            and data-driven GIS platform.
          </p>
          <span
            className="mx-auto mt-6 block h-0.5 w-14 bg-(--brand)"
            aria-hidden="true"
          />
        </header>

        <ul
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7"
          aria-label="GIS technologies"
        >
          {technologies.map((technology) => (
            <li
              key={technology.name}
              className="group flex min-h-36 flex-col items-center justify-center rounded-lg border border-blue-100/80 bg-white/90 p-5 text-center shadow-[0_8px_24px_rgba(59,96,150,.06)] transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_14px_32px_rgba(59,96,150,.12)]"
            >
              <TechSymbol type={technology.symbol} />
              <span className="mt-4 text-sm font-semibold text-[#354052]">
                {technology.name}
              </span>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
