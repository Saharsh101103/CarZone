

import {CarCard, CustomFilter, Hero, SearchBar} from "@/components";
import ShowMore from "@/components/ShowMore";
import { fuels, manufacturers, yearsOfProduction } from "@/constants";
import {fetchCars} from "@/Utils"
import { title } from "process";

export default async function Home({searchParams}:{searchParams : any}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || '',
    fuel: searchParams.fuel || 'gas',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
    transmission: searchParams.transmission || '',
    drive: searchParams.drive || " ",
    city_mpg: searchParams || ''
  });

  const isDataEpmty = !Array.isArray(allCars) || allCars.length <1 ||  !allCars;
  return (
    <main className="overflow-hidden bg-[#e5e7eb]">
      <Hero/>

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Find the cars that you like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEpmty ?(<section><div className="home__cars-wrapper">{allCars?.map((car) => (
          <CarCard car={car}/>
        ))}</div>
        
        <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />

        </section>):(
          <div className="home__error-container"><h2 className="text-black text-xl font-bold">oops, no results</h2>
          <p>{allCars?.message}</p></div>
        ) }

      </div>

    </main>
  )
}
  