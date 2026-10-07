export interface Experience {
  id: number;
  title: string;
  description: string;
  category: 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';
  destination: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Sky Diving Over Dubai",
    description: "Feel the adrenaline rush as you free-fall over the Palm Jumeirah with panoramic views of the Dubai skyline.",
    category: "Adventure",
    destination: "Dubai, UAE",
    price: 499,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-121987c5c3d1?w=800"
  },
  {
    id: 2,
    title: "Masai Mara Safari",
    description: "Witness the great wildebeest migration and the Big Five in their natural habitat across the savannah.",
    category: "Adventure",
    destination: "Nairobi, Kenya",
    price: 320,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1534566008305-1d1b3b6e3c6f?w=800"
  },
  {
    id: 3,
    title: "White Water Rafting in Bali",
    description: "Navigate thrilling rapids through lush tropical jungles and stunning Balinese river gorges.",
    category: "Adventure",
    destination: "Bali, Indonesia",
    price: 89,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1555082751-e5b0c9f6b7a9?w=800"
  },
  {
    id: 4,
    title: "Bungee Jumping at Victoria Falls",
    description: "Leap from the iconic Victoria Falls bridge for the highest commercial bungee jump in the world.",
    category: "Adventure",
    destination: "Livingstone, Zambia",
    price: 160,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1510314154742-8e5a1e60e9c7?w=800"
  },
  {
    id: 5,
    title: "Heli-Skiing in the Alps",
    description: "Helicopter drops into untouched powder fields for an extreme skiing experience in Chamonix.",
    category: "Adventure",
    destination: "Chamonix, France",
    price: 1200,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1551693076-2e5c5f3a5b9e?w=800"
  },
  {
    id: 6,
    title: "Scuba Diving in the Great Barrier Reef",
    description: "Explore vibrant coral gardens and swim alongside sea turtles in the world's largest reef system.",
    category: "Adventure",
    destination: "Cairns, Australia",
    price: 250,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1540202409-0d1b9b0f3b9d?w=800"
  },
  {
    id: 7,
    title: "Paragliding Over Rio de Janeiro",
    description: "Soar above the coastline from Pedra Bonita and land on the beaches of São Conrado.",
    category: "Adventure",
    destination: "Rio de Janeiro, Brazil",
    price: 130,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1519337266981-9b2b1e9b9e3c?w=800"
  },
  {
    id: 8,
    title: "Cage Diving with Great Whites",
    description: "Come face to face with the ocean's apex predator off the coast of Gansbaai.",
    category: "Adventure",
    destination: "Cape Town, South Africa",
    price: 380,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1546026627-4a5b2f1e9b7e?w=800"
  },
  {
    id: 9,
    title: "Zipline Through Monteverde Cloud Forest",
    description: "Fly through the misty canopy on the longest ziplines in Latin America.",
    category: "Adventure",
    destination: "Monteverde, Costa Rica",
    price: 75,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 10,
    title: "Sandboarding in the Atacama Desert",
    description: "Slide down the otherworldly dunes of the driest desert on Earth.",
    category: "Adventure",
    destination: "San Pedro de Atacama, Chile",
    price: 55,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1504201724-5e4e6b9b9b9b?w=800"
  },
  {
    id: 11,
    title: "Canyoning in Interlaken",
    description: "Abseil down waterfalls, slide through natural water chutes, and jump into crystal-clear pools.",
    category: "Adventure",
    destination: "Interlaken, Switzerland",
    price: 140,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 12,
    title: "Motorcycling the Ha Giang Loop",
    description: "Conquer the most spectacular mountain passes in northern Vietnam on two wheels.",
    category: "Adventure",
    destination: "Ha Giang, Vietnam",
    price: 200,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1503439114-5a4f3e0b9e1c?w=800"
  },
  {
    id: 13,
    title: "Ice Climbing on the Fox Glacier",
    description: "Ascend frozen waterfalls and crevasses in the Franz Josef region with expert guides.",
    category: "Adventure",
    destination: "Franz Josef, New Zealand",
    price: 350,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1504829925-7c2e9e6b9c7e?w=800"
  },
  {
    id: 14,
    title: "Hot Air Balloon Ride in Cappadocia",
    description: "Drift over fairy chimneys and ancient cave dwellings as the sun rises over Anatolia.",
    category: "Adventure",
    destination: "Cappadocia, Turkey",
    price: 180,
    rating: 5.0,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-121987c5c3d1?w=800"
  },
  {
    id: 15,
    title: "ATV Desert Safari in Marrakech",
    description: "Race across the golden dunes of the Agafay Desert on a powerful all-terrain vehicle.",
    category: "Adventure",
    destination: "Marrakech, Morocco",
    price: 95,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-121987c5c3d1?w=800"
  },
  {
    id: 16,
    title: "Tokyo Cultural Walking Tour",
    description: "Explore hidden shrines, traditional tea houses, and the vibrant neighborhoods of old Tokyo.",
    category: "Culture",
    destination: "Tokyo, Japan",
    price: 65,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1513406784475-8e9b6e9b9e9b?w=800"
  },
  {
    id: 17,
    title: "Ancient Temples of Angkor Wat",
    description: "Discover the massive temple complex of Angkor with a private historian guide.",
    category: "Culture",
    destination: "Siem Reap, Cambodia",
    price: 70,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1509701185-6b5e4f0b0b0b?w=800"
  },
  {
    id: 18,
    title: "Flamenco Night in Seville",
    description: "Immerse yourself in authentic flamenco at a historic tablao in the Santa Cruz district.",
    category: "Culture",
    destination: "Seville, Spain",
    price: 55,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1519337266981-9b2b1e9b9e3c?w=800"
  },
  {
    id: 19,
    title: "Machu Picchu Sunrise Trek",
    description: "Reach the Sun Gate at dawn and witness the Inca citadel emerge from the mist.",
    category: "Culture",
    destination: "Cusco, Peru",
    price: 240,
    rating: 5.0,
    imageUrl: "https://images.unsplash.com/photo-1504881890-5e5b3f5b3d4e?w=800"
  },
  {
    id: 20,
    title: "Petra by Night",
    description: "Walk the Siq lit by candlelight to reach the Treasury in an unforgettable evening tour.",
    category: "Culture",
    destination: "Petra, Jordan",
    price: 85,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505301014-7e2f5b9b3e4f?w=800"
  },
  {
    id: 21,
    title: "Vatican Museums & Sistine Chapel",
    description: "Skip-the-line access to the Vatican's vast art collection and Michelangelo's masterpiece.",
    category: "Culture",
    destination: "Rome, Italy",
    price: 89,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 22,
    title: "Traditional Tea Ceremony in Kyoto",
    description: "Participate in a centuries-old Japanese tea ceremony hosted by a tea master.",
    category: "Culture",
    destination: "Kyoto, Japan",
    price: 50,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 23,
    title: "Great Wall of China Hike",
    description: "Trek a restored section of the Great Wall with a historian and enjoy panoramic vistas.",
    category: "Culture",
    destination: "Beijing, China",
    price: 110,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 24,
    title: "Colosseum Underground Tour",
    description: "Descend into the gladiator arena's underground chambers and learn Rome's brutal history.",
    category: "Culture",
    destination: "Rome, Italy",
    price: 120,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 25,
    title: "Rooftop Cooking Class in Marrakech",
    description: "Learn to prepare fragrant tagines and couscous on a rooftop with views of the Atlas Mountains.",
    category: "Food",
    destination: "Marrakech, Morocco",
    price: 65,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 26,
    title: "Street Food Crawl in Bangkok",
    description: "Taste your way through Bangkok's best street stalls — from pad thai to mango sticky rice.",
    category: "Food",
    destination: "Bangkok, Thailand",
    price: 35,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 27,
    title: "Pasta & Gelato Making in Bologna",
    description: "Roll fresh tagliatelle and churn authentic gelato with a nonna in the food capital of Italy.",
    category: "Food",
    destination: "Bologna, Italy",
    price: 95,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 28,
    title: "Sushi Masterclass in Tokyo",
    description: "Train with a sushi master and learn the art of perfect rice, knife skills, and neta selection.",
    category: "Food",
    destination: "Tokyo, Japan",
    price: 150,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1513406784475-8e9b6e9b9e9b?w=800"
  },
  {
    id: 29,
    title: "Wine Tasting in the Douro Valley",
    description: "Sample Portugal's finest port wines while cruising the terraced Douro River vineyards.",
    category: "Food",
    destination: "Porto, Portugal",
    price: 80,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 30,
    title: "Chocolate Workshop in Brussels",
    description: "Handcraft Belgian pralines with a master chocolatier in the heart of Brussels.",
    category: "Food",
    destination: "Brussels, Belgium",
    price: 60,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 31,
    title: "Farm-to-Table Experience in Tuscany",
    description: "Harvest seasonal ingredients from an organic farm and cook a multi-course Tuscan feast.",
    category: "Food",
    destination: "Florence, Italy",
    price: 120,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 32,
    title: "Oyster Tasting in Cape Town",
    description: "Savor freshly shucked oysters paired with cool climate wines on the V&A Waterfront.",
    category: "Food",
    destination: "Cape Town, South Africa",
    price: 45,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 33,
    title: "Mexican Street Tacos Tour",
    description: "Hunt down the best al pastor, carnitas, and barbacoa tacos in Mexico City's markets.",
    category: "Food",
    destination: "Mexico City, Mexico",
    price: 30,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 34,
    title: "Baking Croissants in Paris",
    description: "Master laminated dough and bake golden, flaky croissants in a Parisian pâtisserie.",
    category: "Food",
    destination: "Paris, France",
    price: 110,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 35,
    title: "Paella & Sangria Workshop in Valencia",
    description: "Cook the original Valencian paella over an open fire and mix pitchers of fresh sangria.",
    category: "Food",
    destination: "Valencia, Spain",
    price: 70,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 36,
    title: "Curry Laksa Cooking in Penang",
    description: "Unlock the secrets of Malaysia's most beloved noodle soup with a local hawker legend.",
    category: "Food",
    destination: "Penang, Malaysia",
    price: 40,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 37,
    title: "Yoga Retreat in Ubud",
    description: "Rejuvenate with daily yoga, meditation, and organic plant-based meals in the rice paddies.",
    category: "Wellness",
    destination: "Ubud, Indonesia",
    price: 450,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 38,
    title: "Forest Bathing in the Redwood Forest",
    description: "Shinrin-yoku guided walks among towering ancient redwoods to restore mind and body.",
    category: "Wellness",
    destination: "San Francisco, USA",
    price: 85,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 39,
    title: "Thermal Springs Soak in Iceland",
    description: "Bathe in mineral-rich geothermal springs surrounded by moss-covered lava fields.",
    category: "Wellness",
    destination: "Reykjavik, Iceland",
    price: 65,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-121987c5c3d1?w=800"
  },
  {
    id: 40,
    title: "Ayurvedic Panchakarma Retreat",
    description: "A week-long traditional detox with herbal treatments, yoga, and sattvic meals in Kerala.",
    category: "Wellness",
    destination: "Kerala, India",
    price: 1200,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 41,
    title: "Sound Bath Meditation in Sedona",
    description: "Align your chakras with crystal singing bowls under the red rock vortex energy.",
    category: "Wellness",
    destination: "Sedona, USA",
    price: 60,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 42,
    title: "Hammam & Spa Ritual in Istanbul",
    description: "Experience a traditional Turkish hammam with steam, scrub, foam massage, and tea.",
    category: "Wellness",
    destination: "Istanbul, Turkey",
    price: 70,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 43,
    title: "Skiing in the Swiss Alps",
    description: "Carve pristine powder on the legendary slopes of Zermatt with Matterhorn views.",
    category: "Adventure",
    destination: "Zermatt, Switzerland",
    price: 850,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-121987c5c3d1?w=800"
  },
  {
    id: 44,
    title: "Silent Meditation Retreat in Chiang Mai",
    description: "Ten days of Vipassana silence, mindful eating, and monastic living in a mountain temple.",
    category: "Wellness",
    destination: "Chiang Mai, Thailand",
    price: 300,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 45,
    title: "Sunrise Yoga at Angkor Wat",
    description: "Greet the dawn with a private yoga session facing the iconic temple silhouette.",
    category: "Wellness",
    destination: "Siem Reap, Cambodia",
    price: 55,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 46,
    title: "Hike to Everest Base Camp",
    description: "Trek through Sherpa villages and rhododendron forests to the foot of the world's highest peak.",
    category: "Nature",
    destination: "Khumbu, Nepal",
    price: 1500,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 47,
    title: "Northern Lights Chase in Lapland",
    description: "Hunt the aurora borealis on a snowmobile expedition under the Arctic sky.",
    category: "Nature",
    destination: "Rovaniemi, Finland",
    price: 210,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-121987c5c3d1?w=800"
  },
  {
    id: 48,
    title: "Amazon Rainforest Expedition",
    description: "Navigate tributaries, spot pink river dolphins, and learn from indigenous guides.",
    category: "Nature",
    destination: "Manaus, Brazil",
    price: 680,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 49,
    title: "Kayaking Among Fjords in Norway",
    description: "Paddle through the narrow, dramatic fjords of Nærøyfjord with cascading waterfalls.",
    category: "Nature",
    destination: "Bergen, Norway",
    price: 175,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 50,
    title: "Hiking the Inca Trail to Machu Picchu",
    description: "Four-day trek through cloud forests and mountain passes to the Lost City of the Incas.",
    category: "Nature",
    destination: "Cusco, Peru",
    price: 500,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 51,
    title: "Plitvice Lakes National Park Tour",
    description: "Walk the turquoise boardwalks of cascading lakes and waterfalls in this UNESCO gem.",
    category: "Nature",
    destination: "Zagreb, Croatia",
    price: 90,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 52,
    title: "Gorilla Trekking in Bwindi Forest",
    description: "Track mountain gorillas through dense misty jungle in one of Africa's oldest rainforests.",
    category: "Nature",
    destination: "Kampala, Uganda",
    price: 750,
    rating: 5.0,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 53,
    title: "Cruising the Galápagos Islands",
    description: "Snorkel with sea lions and giant tortoises on a live-aboard expedition in Darwin's archipelago.",
    category: "Nature",
    destination: "Quito, Ecuador",
    price: 3200,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 54,
    title: "Cherry Blossom Viewing in Tokyo",
    description: "Hanami picnic under the pink canopy of cherry blossoms in Shinjuku Gyoen gardens.",
    category: "Nature",
    destination: "Tokyo, Japan",
    price: 20,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 55,
    title: "Desert Camp Under the Stars in Wadi Rum",
    description: "Sleep in a Bedouin camp beneath the red cliffs and the Milky Way in the Valley of the Moon.",
    category: "Nature",
    destination: "Wadi Rum, Jordan",
    price: 140,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 56,
    title: "Halong Bay Overnight Cruise",
    description: "Sleep on a junk boat amid limestone karsts, kayaking through emerald waters at dawn.",
    category: "Nature",
    destination: "Hanoi, Vietnam",
    price: 180,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 57,
    title: "Whale Watching in Baja California",
    description: "Observe grey whales up close in their breeding lagoons along the Baja peninsula.",
    category: "Nature",
    destination: "La Paz, Mexico",
    price: 130,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 58,
    title: "Via Ferrata in the Dolomites",
    description: "Climb iron paths bolted into vertical limestone with breathtaking alpine panoramas.",
    category: "Adventure",
    destination: "Bolzano, Italy",
    price: 160,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 59,
    title: "Gondola Ride in Venice",
    description: "Glide along the Grand Canal under historic bridges with a serenading gondolier.",
    category: "Culture",
    destination: "Venice, Italy",
    price: 90,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 60,
    title: "Pyramids of Giza & Sphinx Tour",
    description: "Stand before the last surviving ancient wonder and ride a camel across the Giza plateau.",
    category: "Culture",
    destination: "Cairo, Egypt",
    price: 75,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 61,
    title: "Alhambra Palace Evening Visit",
    description: "Explore the Nasrid palaces and Generalife gardens under the magical evening illumination.",
    category: "Culture",
    destination: "Granada, Spain",
    price: 55,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 62,
    title: "Bollywood Dance Class in Mumbai",
    description: "Learn high-energy Bollywood choreography in a studio used by famous film choreographers.",
    category: "Culture",
    destination: "Mumbai, India",
    price: 30,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 63,
    title: "Acropolis & Parthenon Guided Tour",
    description: "Walk in the footsteps of Pericles and learn the golden age of Athens on the sacred rock.",
    category: "Culture",
    destination: "Athens, Greece",
    price: 65,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 64,
    title: "Forbidden City & Great Wall Combo",
    description: "Full-day immersion into imperial China with a historian, covering both iconic sites.",
    category: "Culture",
    destination: "Beijing, China",
    price: 145,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 65,
    title: "Teotihuacán Sunrise Tour",
    description: "Climb the Pyramid of the Sun at dawn and hear the legends of the Toltec and Aztec peoples.",
    category: "Culture",
    destination: "Mexico City, Mexico",
    price: 60,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 66,
    title: "Botanical Gin Tasting in London",
    description: "Sample artisanal gins and learn about botanicals at a historic distillery in London.",
    category: "Food",
    destination: "London, United Kingdom",
    price: 55,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 67,
    title: "Coffee Plantation Tour in Colombia",
    description: "From bean to cup — pick, process, and brew the perfect Juan Valdez coffee in the Eje Cafetero.",
    category: "Food",
    destination: "Medellín, Colombia",
    price: 45,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 68,
    title: "Dim Sum Brunch in Hong Kong",
    description: "Push-cart dim sum at a century-old tea house in the heart of Kowloon.",
    category: "Food",
    destination: "Hong Kong, China",
    price: 40,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 69,
    title: "Schnitzel & Strudel Cooking in Vienna",
    description: "Crispy veal schnitzel and apple strudel — master two Viennese classics in a family kitchen.",
    category: "Food",
    destination: "Vienna, Austria",
    price: 85,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 70,
    title: "Truffle Hunting in Istria",
    description: "Follow trained dogs through oak forests to unearth prized white truffles, then feast.",
    category: "Food",
    destination: "Zagreb, Croatia",
    price: 130,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 71,
    title: "Floating Breakfast in the Maldives",
    description: "Enjoy a lavish overwater breakfast served on a floating tray in an infinity pool over the ocean.",
    category: "Wellness",
    destination: "Malé, Maldives",
    price: 190,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 72,
    title: "Watsu Water Therapy in Costa Rica",
    description: "Floating shiatsu massage in a natural spring pool surrounded by jungle sounds.",
    category: "Wellness",
    destination: "San José, Costa Rica",
    price: 95,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 73,
    title: "Breathwork & Cold Plunge in Copenhagen",
    description: "Wim Hof-inspired breathwork followed by a revitalizing cold plunge in the harbour.",
    category: "Wellness",
    destination: "Copenhagen, Denmark",
    price: 50,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 74,
    title: "Desert Yoga in the Sahara",
    description: "Downward dog on a golden dune at sunset, then sleep in a luxury Berber camp.",
    category: "Wellness",
    destination: "Merzouga, Morocco",
    price: 200,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 75,
    title: "Hot Stone Massage in Bali",
    description: "Ancient Balinese massage with heated volcanic stones and aromatic frangipani oil.",
    category: "Wellness",
    destination: "Bali, Indonesia",
    price: 45,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 76,
    title: "Snorkeling in the Maldives",
    description: "Glide through crystal-clear waters over vibrant coral gardens with manta rays and sea turtles.",
    category: "Nature",
    destination: "Malé, Maldives",
    price: 120,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 77,
    title: "Trekking to Rainbow Mountain",
    description: "Hike to the colorful striped peak of Vinicunca at 5,200 meters in the Andes.",
    category: "Nature",
    destination: "Cusco, Peru",
    price: 95,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 78,
    title: "Sailing in the Dalmatian Islands",
    description: "Hop between Hvar, Brač, and Korčula on a private sailboat with turquoise coves.",
    category: "Nature",
    destination: "Split, Croatia",
    price: 420,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 79,
    title: "Ice Cave Exploration in Vatnajökull",
    description: "Step inside crystal-blue ice caves formed by glacial pressure over centuries.",
    category: "Nature",
    destination: "Reykjavik, Iceland",
    price: 150,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 80,
    title: "Cave Tubing in Vang Vieng",
    description: "Float through dark limestone caves on an inflatable tube in the Laotian countryside.",
    category: "Adventure",
    destination: "Vang Vieng, Laos",
    price: 25,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 81,
    title: "Surf Lessons in Taghazout",
    description: "Catch your first wave on the consistent Atlantic breaks of Morocco's surf coast.",
    category: "Adventure",
    destination: "Agadir, Morocco",
    price: 40,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 82,
    title: "Louvre Museum Guided Tour",
    description: "Skip the Mona Lisa crowds and uncover hidden masterpieces with an art historian.",
    category: "Culture",
    destination: "Paris, France",
    price: 85,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 83,
    title: "Taj Mahal Sunrise Visit",
    description: "Witness the marble mausoleum glow pink and gold at dawn with a curated guided tour.",
    category: "Culture",
    destination: "Agra, India",
    price: 60,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 84,
    title: "Hanok Stay in Bukchon Village",
    description: "Sleep in a restored Korean hanok and experience traditional ondol heating and tea ceremonies.",
    category: "Culture",
    destination: "Seoul, South Korea",
    price: 110,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 85,
    title: "Museum of Tomorrow Night Visit",
    description: "Explore the futuristic interactive exhibits on sustainability and innovation in Rio's port district.",
    category: "Culture",
    destination: "Rio de Janeiro, Brazil",
    price: 35,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 86,
    title: "Fish Market Tour & Sushi in Tsukiji",
    description: "Early morning tour of the outer Tsukiji market followed by a sushi breakfast at a counter.",
    category: "Food",
    destination: "Tokyo, Japan",
    price: 70,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 87,
    title: "Cheese Tasting in Gouda",
    description: "Sample aged Gouda, Edam, and Leyden at a historic cheese market in the Netherlands.",
    category: "Food",
    destination: "Amsterdam, Netherlands",
    price: 40,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 88,
    title: "Brewery Tour in Munich",
    description: "Visit traditional biergartens and learn the art of Reinheitsgebot brewing from Bavarian masters.",
    category: "Food",
    destination: "Munich, Germany",
    price: 55,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 89,
    title: "Ceviche Cooking Class in Lima",
    description: "Prepare the perfect Peruvian ceviche with fresh catch from the Pacific coast.",
    category: "Food",
    destination: "Lima, Peru",
    price: 50,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1504676161-9b2b1e9b9e3c?w=800"
  },
  {
    id: 90,
    title: "Reiki Healing in the Blue Mountains",
    description: "Energy healing session in a tranquil forest setting with views of the Three Sisters rock formation.",
    category: "Wellness",
    destination: "Sydney, Australia",
    price: 80,
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 91,
    title: "Mindfulness Hike in the Scottish Highlands",
    description: "Guided silent walking meditation through misty glens and heather-covered moors.",
    category: "Wellness",
    destination: "Edinburgh, United Kingdom",
    price: 75,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 92,
    title: "Sunset Catamaran in Santorini",
    description: "Sail the caldera at sunset with unlimited wine and a Greek meze platter.",
    category: "Nature",
    destination: "Santorini, Greece",
    price: 160,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 93,
    title: "Komodo Dragon Island Hopping",
    description: "Trek with rangers to see Komodo dragons in the wild, then snorkel with manta rays.",
    category: "Nature",
    destination: "Labuan Bajo, Indonesia",
    price: 280,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 94,
    title: "Canyoning in the Blue Mountains",
    description: "Abseil down sandstone canyons and swim through natural grottos in a World Heritage area.",
    category: "Adventure",
    destination: "Katoomba, Australia",
    price: 150,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 95,
    title: "Mountain Biking in Moab",
    description: "Ride world-class slickrock trails with dramatic red-rock canyon views in Utah.",
    category: "Adventure",
    destination: "Moab, USA",
    price: 110,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 96,
    title: "Kitesurfing in Tarifa",
    description: "Harness the legendary Levante wind on the beaches where the Atlantic meets the Mediterranean.",
    category: "Adventure",
    destination: "Tarifa, Spain",
    price: 95,
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 97,
    title: "Calligraphy Workshop in Istanbul",
    description: "Learn the flowing art of Islamic calligraphy from a master hattat in a historic medrese.",
    category: "Culture",
    destination: "Istanbul, Turkey",
    price: 45,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1505238684-9f5e4b3e9e3c?w=800"
  },
  {
    id: 98,
    title: "Moroccan Hammam & Argan Oil Ritual",
    description: "Traditional black soap scrub, rhassoul clay wrap, and argan oil massage in a Marrakech riad.",
    category: "Wellness",
    destination: "Marrakech, Morocco",
    price: 55,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1504384304150-3e5b3f9b8d9e?w=800"
  },
  {
    id: 99,
    title: "Volcano Boarding in Nicaragua",
    description: "Surf down the ash slopes of Cerro Negro volcano on a specially designed board.",
    category: "Adventure",
    destination: "León, Nicaragua",
    price: 35,
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  },
  {
    id: 100,
    title: "Whale Shark Snorkeling in Donsol",
    description: "Swim alongside the world's largest fish in the gentle waters of the Philippine sea.",
    category: "Nature",
    destination: "Donsol, Philippines",
    price: 80,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1506749212-3a30b4b0b1b4?w=800"
  }
];