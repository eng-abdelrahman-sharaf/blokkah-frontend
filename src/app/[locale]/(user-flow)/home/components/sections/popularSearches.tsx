function VerticalSection({
  title,
  searches,
}: {
  title: string;
  searches: string[];
}) {
  return (
    <div className="text-Gray-600 gap-4 flex flex-col">
      <div className="text-2xl font-bold">{title}</div>
      <div className="flex flex-col gap-3">
        {searches.map((search, index) => (
          <div className="text-lg font-semibold" key={index}>
            {search}
          </div>
        ))}
      </div>
    </div>
  );
}

export function PopularSearches() {
  const apartmentTopSearches = ["Apartment for sale in Riaydh", "Apartment for sale in Jeddah", "Apartment for sale in Dammam", "Apartment for sale in Mecca", "Apartment for sale in Medina", "Apartment for sale in Khobar", "Apartment for sale in Taif", "Apartment for sale in Tabuk", "Apartment for sale in Buraidah", "Apartment for sale in Khamis Mushait"];
  const villasTopSearches = ["Villa for sale in Riaydh", "Villa for sale in Jeddah", "Villa for sale in Dammam", "Villa for sale in Mecca", "Villa for sale in Medina", "Villa for sale in Khobar", "Villa for sale in Taif", "Villa for sale in Tabuk", "Villa for sale in Buraidah", "Villa for sale in Khamis Mushait"];
  const housesTopSearches = ["House for sale in Riaydh", "House for sale in Jeddah", "House for sale in Dammam", "House for sale in Mecca", "House for sale in Medina", "House for sale in Khobar", "House for sale in Taif", "House for sale in Tabuk", "House for sale in Buraidah", "House for sale in Khamis Mushait"];
  const landTopSearches = ["Land for sale in Riaydh", "Land for sale in Jeddah", "Land for sale in Dammam", "Land for sale in Mecca", "Land for sale in Medina", "Land for sale in Khobar", "Land for sale in Taif", "Land for sale in Tabuk", "Land for sale in Buraidah", "Land for sale in Khamis Mushait"];
  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold text-3xl">Popular searches</div>
      <div className="flex justify-between">
        <VerticalSection title="Apartments" searches={apartmentTopSearches} />
        <VerticalSection title="Villas" searches={villasTopSearches} />
        <VerticalSection title="Houses" searches={housesTopSearches} />
        <VerticalSection title="Land" searches={landTopSearches} />
      </div>
    </div>
  );
}
