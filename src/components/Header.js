import { getSettings } from "@/lib/data-service";
import HeaderImages from "./HeaderImages";

async function Header() {
  const data = await getSettings();

  return (
    <header>
      <HeaderImages cover={data.cover} logo={data.logo} />

      {/* Restaurant information */}
      <div className="px-6 pb-8 pt-5 text-center">
        <h1 className="font-serif text-2xl font-semibold tracking-tight text-tertiary sm:text-3xl">
          {data.name}
        </h1>
        <p className="mx-auto mt-1.5 max-w-sm text-sm leading-6 text-tertiary/60">
          {data.description}
        </p>
      </div>
    </header>
  );
}

export default Header;
