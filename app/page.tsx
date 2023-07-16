import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCarsData } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCarsData();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="category">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Category</h1>
          <p>Explore the cars that you like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
        </div>
        <div className="home__filter-container">
          <CustomFilter />
          <CustomFilter />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">no car found</h2>
            <p>{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
