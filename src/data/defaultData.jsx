export const DATA_VERSION = "7.0";
export const defaultCountries = [
  { id: 1, name: "India", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Italy", image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "USA", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Australia", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800" },
  { id: 7, name: "Brazil", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=800" },
  { id: 8, name: "Egypt", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800" },
  { id: 9, name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800" },
  { id: 10, name: "Spain", image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&q=80&w=800" }
];

export const defaultPlaces = [
  // India
  { id: 1, country: "India", name: "Taj Mahal", city: "Agra", description: "Iconic white marble mausoleum on the bank of the Yamuna river.", image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800", travel: 150, stay: 100, food: 50, price: 300 },
  { id: 2, country: "India", name: "Red Fort", city: "Delhi", description: "Historic fort in the city of Delhi.", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=800", travel: 100, stay: 80, food: 40, price: 220 },
  { id: 3, country: "India", name: "Gateway of India", city: "Mumbai", description: "Arch monument in Mumbai.", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=800", travel: 200, stay: 150, food: 100, price: 450 },
  { id: 4, country: "India", name: "Hawa Mahal", city: "Jaipur", description: "Palace of winds in Jaipur.", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80&w=800", travel: 120, stay: 90, food: 60, price: 270 },
  { id: 5, country: "India", name: "Kerala Backwaters", city: "Kochi", description: "A network of brackish lagoons.", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", travel: 250, stay: 200, food: 100, price: 550 },

  // France
  { id: 6, country: "France", name: "Eiffel Tower", city: "Paris", description: "Wrought-iron lattice tower on the Champ de Mars.", image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=800", travel: 400, stay: 300, food: 150, price: 850 },
  { id: 7, country: "France", name: "Louvre Museum", city: "Paris", description: "World's largest art museum.", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800", travel: 50, stay: 300, food: 150, price: 500 },
  { id: 8, country: "France", name: "Mont Saint-Michel", city: "Normandy", description: "Tidal island and mainland commune.", image: "https://images.unsplash.com/photo-1502047535451-246df1fb0585?auto=format&fit=crop&q=80&w=800", travel: 200, stay: 250, food: 120, price: 570 },
  { id: 9, country: "France", name: "Palace of Versailles", city: "Versailles", description: "Former royal residence.", image: "https://images.unsplash.com/photo-1505305976870-c0be1cd39939?auto=format&fit=crop&q=80&w=800", travel: 100, stay: 250, food: 100, price: 450 },
  { id: 10, country: "France", name: "French Riviera", city: "Nice", description: "Mediterranean coastline of the southeast corner of France.", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800", travel: 350, stay: 400, food: 250, price: 1000 },

  // Japan
  { id: 11, country: "Japan", name: "Mount Fuji", city: "Tokyo", description: "Highest mountain in Japan.", image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&q=80&w=800", travel: 500, stay: 200, food: 200, price: 900 },
  { id: 12, country: "Japan", name: "Fushimi Inari Shrine", city: "Kyoto", description: "Important Shinto shrine in southern Kyoto.", image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&q=80&w=800", travel: 150, stay: 250, food: 150, price: 550 },
  { id: 13, country: "Japan", name: "Osaka Castle", city: "Osaka", description: "Japanese castle in Chūō-ku, Osaka.", image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=800", travel: 200, stay: 200, food: 150, price: 550 },
  { id: 14, country: "Japan", name: "Hiroshima Peace Memorial", city: "Hiroshima", description: "Memorial to the people who were killed in the atomic bombing.", image: "https://images.unsplash.com/photo-1549488497-1f413a948483?auto=format&fit=crop&q=80&w=800", travel: 250, stay: 150, food: 100, price: 500 },
  { id: 15, country: "Japan", name: "Nara Park", city: "Nara", description: "Public park located in the city of Nara, Japan.", image: "https://images.unsplash.com/photo-1542050478-f2b74051a8f6?auto=format&fit=crop&q=80&w=800", travel: 100, stay: 200, food: 150, price: 450 },

  // Italy
  { id: 16, country: "Italy", name: "Colosseum", city: "Rome", description: "Oval amphitheatre in the centre of Rome.", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800", travel: 350, stay: 300, food: 200, price: 850 },
  { id: 17, country: "Italy", name: "Leaning Tower of Pisa", city: "Pisa", description: "Freestanding bell tower, known for its nearly four-degree lean.", image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&q=80&w=800", travel: 150, stay: 200, food: 150, price: 500 },
  { id: 18, country: "Italy", name: "Venice Canals", city: "Venice", description: "Famous water streets of Venice.", image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&q=80&w=800", travel: 300, stay: 400, food: 250, price: 950 },
  { id: 19, country: "Italy", name: "Amalfi Coast", city: "Amalfi", description: "Stretch of coastline on the northern coast of the Salerno Gulf.", image: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?auto=format&fit=crop&q=80&w=800", travel: 400, stay: 500, food: 300, price: 1200 },
  { id: 20, country: "Italy", name: "Florence Cathedral", city: "Florence", description: "Cathedral of Santa Maria del Fiore in Florence.", image: "https://images.unsplash.com/photo-1490644659564-827c17267249?auto=format&fit=crop&q=80&w=800", travel: 200, stay: 300, food: 200, price: 700 },

  // USA
  { id: 21, country: "USA", name: "Statue of Liberty", city: "New York", description: "Colossal neoclassical sculpture on Liberty Island.", image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80&w=800", travel: 400, stay: 500, food: 300, price: 1200 },
  { id: 22, country: "USA", name: "Grand Canyon", city: "Las Vegas", description: "Steep-sided canyon carved by the Colorado River.", image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&q=80&w=800", travel: 300, stay: 200, food: 150, price: 650 },
  { id: 23, country: "USA", name: "Golden Gate Bridge", city: "San Francisco", description: "Suspension bridge spanning the Golden Gate.", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=800", travel: 350, stay: 400, food: 250, price: 1000 },
  { id: 24, country: "USA", name: "Yellowstone", city: "Jackson", description: "National park located in the western United States.", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800", travel: 400, stay: 300, food: 200, price: 900 },
  { id: 25, country: "USA", name: "Walt Disney World", city: "Orlando", description: "Entertainment complex in Bay Lake and Lake Buena Vista.", image: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=800", travel: 300, stay: 450, food: 250, price: 1000 },

  // Australia
  { id: 26, country: "Australia", name: "Sydney Opera House", city: "Sydney", description: "Multi-venue performing arts centre in Sydney.", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=800", travel: 600, stay: 400, food: 300, price: 1300 },
  { id: 27, country: "Australia", name: "Great Barrier Reef", city: "Cairns", description: "World's largest coral reef system.", image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=800", travel: 700, stay: 500, food: 300, price: 1500 },
  { id: 28, country: "Australia", name: "Uluru", city: "Alice Springs", description: "Large sandstone rock formation in the southern part of the Northern Territory.", image: "https://images.unsplash.com/photo-1529124458315-77983697e0ac?auto=format&fit=crop&q=80&w=800", travel: 400, stay: 300, food: 200, price: 900 },
  { id: 29, country: "Australia", name: "Bondi Beach", city: "Sydney", description: "Popular beach and the name of the surrounding suburb in Sydney.", image: "https://images.unsplash.com/photo-1506972054085-f5e94bbaeafe?auto=format&fit=crop&q=80&w=800", travel: 100, stay: 350, food: 250, price: 700 },
  { id: 30, country: "Australia", name: "Great Ocean Road", city: "Melbourne", description: "Australian National Heritage listed 243-kilometre stretch of road.", image: "https://images.unsplash.com/photo-1473654729523-203e25dfda10?auto=format&fit=crop&q=80&w=800", travel: 300, stay: 250, food: 150, price: 700 },

  // Brazil
  { id: 31, country: "Brazil", name: "Christ the Redeemer", city: "Rio de Janeiro", description: "Art Deco statue of Jesus Christ in Rio de Janeiro.", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=800", travel: 500, stay: 300, food: 200, price: 1000 },
  { id: 32, country: "Brazil", name: "Copacabana Beach", city: "Rio de Janeiro", description: "Bairro (neighbourhood) located in the South Zone of the city of Rio de Janeiro.", image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&q=80&w=800", travel: 100, stay: 400, food: 250, price: 750 },
  { id: 33, country: "Brazil", name: "Iguazu Falls", city: "Foz do Iguaçu", description: "Waterfalls of the Iguazu River on the border of the Argentine province of Misiones.", image: "https://images.unsplash.com/photo-1548231278-f3d9941a5472?auto=format&fit=crop&q=80&w=800", travel: 400, stay: 250, food: 150, price: 800 },
  { id: 34, country: "Brazil", name: "Sugarloaf Mountain", city: "Rio de Janeiro", description: "Peak situated in Rio de Janeiro, Brazil.", image: "https://images.unsplash.com/photo-1525418181313-1768c6791986?auto=format&fit=crop&q=80&w=800", travel: 150, stay: 200, food: 150, price: 500 },
  { id: 35, country: "Brazil", name: "Amazon Theatre", city: "Manaus", description: "Opera house located in Manaus, in the heart of the Amazon rainforest.", image: "https://images.unsplash.com/photo-1581333100576-b73bbe0b3bc2?auto=format&fit=crop&q=80&w=800", travel: 350, stay: 250, food: 150, price: 750 },

  // Egypt
  { id: 36, country: "Egypt", name: "Pyramids of Giza", city: "Giza", description: "Ancient pyramid structures located in Egypt.", image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800", travel: 450, stay: 200, food: 150, price: 800 },
  { id: 37, country: "Egypt", name: "Karnak Temple", city: "Luxor", description: "Vast mix of decayed temples, chapels, pylons, and other buildings near Luxor.", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800", travel: 250, stay: 150, food: 100, price: 500 },
  { id: 38, country: "Egypt", name: "Valley of the Kings", city: "Luxor", description: "Valley in Egypt where rock-cut tombs were excavated for the pharaohs.", image: "https://images.unsplash.com/photo-1544253133-7724a8726f95?auto=format&fit=crop&q=80&w=800", travel: 200, stay: 150, food: 100, price: 450 },
  { id: 39, country: "Egypt", name: "Abu Simbel", city: "Aswan", description: "Two massive rock temples at Abu Simbel, a village in Nubia.", image: "https://images.unsplash.com/photo-1610476831093-6c8c4a4a4a4a?auto=format&fit=crop&q=80&w=800", travel: 350, stay: 200, food: 150, price: 700 },
  { id: 40, country: "Egypt", name: "Egyptian Museum", city: "Cairo", description: "Home to an extensive collection of ancient Egyptian antiquities.", image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=800", travel: 100, stay: 250, food: 150, price: 500 },

  // Thailand
  { id: 41, country: "Thailand", name: "Grand Palace", city: "Bangkok", description: "Complex of buildings at the heart of Bangkok, Thailand.", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800", travel: 350, stay: 200, food: 100, price: 650 },
  { id: 42, country: "Thailand", name: "Phi Phi Islands", city: "Phuket", description: "Island group in Thailand between the large island of Phuket and the mainland.", image: "https://images.unsplash.com/photo-1510468926941-2a62883fbbec?auto=format&fit=crop&q=80&w=800", travel: 400, stay: 300, food: 200, price: 900 },
  { id: 43, country: "Thailand", name: "Wat Arun", city: "Bangkok", description: "Buddhist temple in Bangkok Yai district of Bangkok.", image: "https://images.unsplash.com/photo-1582295627885-3011aeb8508e?auto=format&fit=crop&q=80&w=800", travel: 100, stay: 150, food: 80, price: 330 },
  { id: 44, country: "Thailand", name: "Ayutthaya", city: "Ayutthaya", description: "Historic city in Thailand, once the capital of the Kingdom of Siam.", image: "https://images.unsplash.com/photo-1604505370258-2996c5ebefd7?auto=format&fit=crop&q=80&w=800", travel: 150, stay: 100, food: 70, price: 320 },
  { id: 45, country: "Thailand", name: "Doi Suthep", city: "Chiang Mai", description: "Mountain in northern Thailand.", image: "https://images.unsplash.com/photo-1563212004-9c025da2c2a0?auto=format&fit=crop&q=80&w=800", travel: 250, stay: 150, food: 100, price: 500 },

  // Spain
  { id: 46, country: "Spain", name: "Sagrada Familia", city: "Barcelona", description: "Large unfinished Roman Catholic minor basilica in Barcelona.", image: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?auto=format&fit=crop&q=80&w=800", travel: 400, stay: 300, food: 200, price: 900 },
  { id: 47, country: "Spain", name: "Alhambra", city: "Granada", description: "Palace and fortress complex located in Granada.", image: "https://images.unsplash.com/photo-1554522858-a83dff4b89b8?auto=format&fit=crop&q=80&w=800", travel: 300, stay: 250, food: 150, price: 700 },
  { id: 48, country: "Spain", name: "Park Guell", city: "Barcelona", description: "Public park system composed of gardens and architectural elements.", image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&q=80&w=800", travel: 100, stay: 250, food: 200, price: 550 },
  { id: 49, country: "Spain", name: "Royal Palace of Madrid", city: "Madrid", description: "Official residence of the Spanish royal family at the city of Madrid.", image: "https://images.unsplash.com/photo-1627885093557-41a31dce1ba1?auto=format&fit=crop&q=80&w=800", travel: 250, stay: 300, food: 250, price: 800 },
  { id: 50, country: "Spain", name: "Ibiza", city: "Ibiza", description: "Island in the Mediterranean Sea off the eastern coast of Spain.", image: "https://images.unsplash.com/photo-1561081512-4217117da2fc?auto=format&fit=crop&q=80&w=800", travel: 350, stay: 500, food: 350, price: 1200 },
];
