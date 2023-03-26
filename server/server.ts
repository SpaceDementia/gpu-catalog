import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Enable CORS as middleware
app.use(cors());

// Set the static path for image files
app.use('/assets/images', express.static(join(__dirname, '..', 'src', 'assets', 'images')));

const graphicsCards = [
  {
    "id": "asus-rog-strix-geforce-rtx-3090",
    "name": "ASUS ROG Strix GeForce RTX 3090 OC Edition",
    "imageURL": "../assets/images/asus-rog-strix-geforce-rtx-3090.webp",
    "manufacturer": "ASUS",
    "memory": "24GB GDDR6X",
    "coreClock": "1395 MHz",
    "boostClock": "1695 MHz",
    "cudaCores": 10496,
    "price": "1500€"
  },
  {
    "id": "msi-amd-radeon-rx-6900-xt-gaming-x-trio",
    "name": "MSI AMD Radeon RX 6900 XT GAMING X TRIO",
    "imageURL": "../assets/images/msi-amd-radeon-rx-6900-xt-gaming-x-trio.webp",
    "manufacturer": "MSI",
    "memory": "16GB GDDR6",
    "coreClock": "2015 MHz",
    "boostClock": "2250 MHz",
    "streamProcessors": 5120,
    "price": "1400€"
  },
  {
    "id": "asrock-amd-radeon-rx-6800-xt-phantom-gaming-oc",
    "name": "AsRock AMD Radeon RX 6800 XT Phantom Gaming OC",
    "imageURL": "../assets/images/asrock-amd-radeon-rx-6800-xt-phantom-gaming-oc.webp",
    "manufacturer": "AsRock",
    "memory": "16GB GDDR6",
    "coreClock": "2015 MHz",
    "boostClock": "2250 MHz",
    "streamProcessors": 4608,
    "price": "830€"
  },
  {
    "id": "msi-geforce-gtx-1660-super-aero-itx-oc",
    "name": "MSI GeForce GTX 1660 SUPER AERO ITX OC",
    "imageURL": "../assets/images/msi-geforce-gtx-1660-super-aero-itx-oc.webp",
    "manufacturer": "MSI",
    "memory": "6GB GDDR5",
    "coreClock": "1530 MHz",
    "boostClock": "1785 MHz",
    "cudaCores": 1408,
    "price": "320€"
  },
  {
    "id": "gigabyte-amd-radeon-rx-5700-xt-gaming-oc",
    "name": "Gigabyte AMD Radeon RX 5700 XT Gaming OC",
    "imageURL": "../assets/images/gigabyte-amd-radeon-rx-5700-xt-gaming-oc.webp",
    "manufacturer": "Gigabyte",
    "memory": "8GB GDDR6",
    "coreClock": "1605 MHz",
    "boostClock": "1905 MHz",
    "streamProcessors": 2560,
    "price": "470€"
  },
  {
    "id": "msi-geforce-rtx-3070-ti-ventus-3x-oc",
    "name": "MSI GeForce RTX 3070 Ti VENTUS 3X OC",
    "imageURL": "../assets/images/msi-geforce-rtx-3070-ti-ventus-3x-oc.webp",
    "manufacturer": "MSI",
    "memory": "8GB GDDR6",
    "coreClock": "1500 MHz",
    "boostClock": "1730 MHz",
    "cudaCores": 5888,
    "price": "660€"
  },
  {
    "id": "sapphire-pulse-amd-radeon-rx-6700-xt",
    "name": "Sapphire Pulse AMD Radeon RX 6700 XT",
    "imageURL": "../assets/images/sapphire-pulse-amd-radeon-rx-6700-xt.webp",
    "manufacturer": "Sapphire",
    "memory": "12GB GDDR6",
    "coreClock": "2321 MHz",
    "boostClock": "2581 MHz",
    "streamProcessors": 2560,
    "price": "330€"
  },
  {
    "id": "asus-geforce-gtx-1050-ti",
    "name": "ASUS GeForce GTX 1050 Ti",
    "imageURL": "../assets/images/asus-geforce-gtx-1050-ti.webp",
    "manufacturer": "ASUS",
    "memory": "4GB GDDR5",
    "coreClock": "1290 MHz",
    "boostClock": "1392 MHz",
    "cudaCores": 768,
    "price": "215€"
  },
  {
    "id": "zotac-gaming-geforce-rtx-3060-twin-edge",
    "name": "Zotac Gaming GeForce RTX 3060 Twin Edge",
    "imageURL": "../assets/images/zotac-gaming-geforce-rtx-3060-twin-edge.webp",
    "manufacturer": "Zotac",
    "memory": "12GB GDDR6",
    "coreClock": "1395 MHz",
    "boostClock": "1695 MHz",
    "cudaCores": 10496,
    "price": "370€"
  },
  {
    "id": "xfx-speedster-swft-210-amd-radeon-rx-6600",
    "name": "XFX SPEEDSTER SWFT 210 AMD Radeon RX 6600",
    "imageURL": "../assets/images/xfx-speedster-swft-210-amd-radeon-rx-6600.webp",
    "manufacturer": "XFS",
    "memory": "8GB GDDR6",
    "coreClock": "2015 MHz",
    "boostClock": "2250 MHz",
    "streamProcessors": 5120,
    "price": "270€"
  },
  {
    "id": "powercolor-red-devil-amd-radeon-rx-7900-xtx",
    "name": "PowerColor Red Devil AMD Radeon RX 7900 XTX",
    "imageURL": "../assets/images/powercolor-red-devil-amd-radeon-rx-7900-xtx.webp",
    "manufacturer": "PowerColor",
    "memory": "24GB GDDR6",
    "coreClock": "2015 MHz",
    "boostClock": "2250 MHz",
    "streamProcessors": 4608,
    "price": "1280€"
  },
  {
    "id": "asus-dual-geforce-rtx-3060-oc-edition-v2",
    "name": "ASUS Dual GeForce RTX 3060 OC Edition V2",
    "imageURL": "../assets/images/asus-dual-geforce-rtx-3060-oc-edition-v2.webp",
    "manufacturer": "ASUS",
    "memory": "12GB GDDR6",
    "coreClock": "1530 MHz",
    "boostClock": "1785 MHz",
    "cudaCores": 1408,
    "price": "380€"
  },
  {
    "id": "asrock-challenger-d-amd-radeon-rx-6600",
    "name": "AsRock Challenger D AMD Radeon RX 6600",
    "imageURL": "../assets/images/asrock-challenger-d-amd-radeon-rx-6600.webp",
    "manufacturer": "AsRock",
    "memory": "8GB GDDR6",
    "coreClock": "1605 MHz",
    "boostClock": "1905 MHz",
    "streamProcessors": 2560,
    "price": "360€"
  },
  {
    "id": "intel-arc-a770",
    "name": "Intel Arc A770",
    "imageURL": "../assets/images/intel-arc-a770.webp",
    "manufacturer": "Intel",
    "memory": "8GB GDDR6",
    "coreClock": "1500 MHz",
    "boostClock": "1730 MHz",
    "cudaCores": 5888,
    "price": "420€"
  },
  {
    "id": "asus-phoenix-radeon-rx-550",
    "name": "ASUS Phoenix Radeon RX 550",
    "imageURL": "../assets/images/asus-phoenix-radeon-rx-550.webp",
    "manufacturer": "ASUS",
    "memory": "4GB GDDR5",
    "coreClock": "1500 MHz",
    "boostClock": "1730 MHz",
    "cudaCores": 5888,
    "price": "125€"
  },
  {
    "id": "asus-tuf-gaming-geforce-rtx-3070-v2-oc-edition-lhr",
    "name": "ASUS TUF Gaming GeForce RTX 3070 V2 OC Edition LHR",
    "imageURL": "../assets/images/asus-tuf-gaming-geforce-rtx-3070-v2-oc-edition-lhr.webp",
    "manufacturer": "ASUS",
    "memory": "8GB GDDR6",
    "coreClock": "2321 MHz",
    "boostClock": "2581 MHz",
    "streamProcessors": 2560,
    "price": "600€"
  },
  {
    "id": "gigabyte-geforce-rtx-3070-gaming-oc-lhr-v2",
    "name": "Gigabyte GeForce RTX 3070 GAMING OC LHR V2",
    "imageURL": "../assets/images/gigabyte-geforce-rtx-3070-gaming-oc-lhr-v2.webp",
    "manufacturer": "Gigabyte",
    "memory": "8GB GDDR6",
    "coreClock": "1290 MHz",
    "boostClock": "1392 MHz",
    "cudaCores": 768,
    "price": "600€"
  },
  {
    "id": "zotac-gaming-geforce-rtx-3060-ti-twin-edge-lhr",
    "name": "Zotac Gaming GeForce RTX 3060 Ti Twin Edge LHR",
    "imageURL": "../assets/images/zotac-gaming-geforce-rtx-3060-ti-twin-edge-lhr.webp",
    "manufacturer": "Zotac",
    "memory": "8GB GDDR6",
    "coreClock": "1395 MHz",
    "boostClock": "1695 MHz",
    "cudaCores": 10496,
    "price": "434€"
  },
  {
    "id": "xfx-speedster-merc319-amd-radeon-rx-6800-xt-core",
    "name": "XFX SPEEDSTER MERC319 AMD Radeon RX 6800 XT CORE",
    "imageURL": "../assets/images/xfx-speedster-merc319-amd-radeon-rx-6800-xt-core.webp",
    "manufacturer": "XFX",
    "memory": "16GB GDDR6",
    "coreClock": "2015 MHz",
    "boostClock": "2250 MHz",
    "streamProcessors": 5120,
    "price": "640€"
  },
  {
    "id": "sapphire-nitro-amd-radeon-rx-6800-xt-oc-se-gaming",
    "name": "Sapphire NITRO+ AMD Radeon RX 6800 XT OC SE Gaming",
    "imageURL": "./assets/images/sapphire-nitro-amd-radeon-rx-6800-xt-oc-se-gaming.webp",
    "manufacturer": "Sapphire",
    "memory": "16GB GDDR6",
    "coreClock": "2015 MHz",
    "boostClock": "2250 MHz",
    "streamProcessors": 4608,
    "price": "954€"
  },
  {
    "id": "msi-amd-radeon-rx-6500-xt-mech-2x-oc",
    "name": "MSI AMD Radeon RX 6500 XT MECH 2X OC",
    "imageURL": "./assets/images/msi-amd-radeon-rx-6500-xt-mech-2x-oc.webp",
    "manufacturer": "MSI",
    "memory": "4GB GDDR6",
    "coreClock": "1530 MHz",
    "boostClock": "1785 MHz",
    "cudaCores": 1408,
    "price": "190€"
  },
  {
    "id": "pny-geforce-rtx-4080-xlr8-gaming-verto-epic-x-rgb-triple-fan",
    "name": "PNY GeForce RTX 4080 XLR8 Gaming VERTO EPIC-X RGB Triple Fan",
    "imageURL": "./assets/images/pny-geforce-rtx-4080-xlr8-gaming-verto-epic-x-rgb-triple-fan.webp",
    "manufacturer": "PNY",
    "memory": "16GB GDDR6X",
    "coreClock": "1605 MHz",
    "boostClock": "1905 MHz",
    "streamProcessors": 2560,
    "price": "1300€"
  },
  {
    "id": "gigabyte-geforce-rtx-4070-ti-gaming-oc",
    "name": "Gigabyte GeForce RTX 4070 Ti GAMING OC",
    "imageURL": "./assets/images/gigabyte-geforce-rtx-4070-ti-gaming-oc.webp",
    "manufacturer": "Gigabyte",
    "memory": "12GB GDDR6X",
    "coreClock": "2321 MHz",
    "boostClock": "2581 MHz",
    "streamProcessors": 2560,
    "price": "1100€"
  },
  {
    "id": "asus-tuf-gaming-geforce-rtx-4080-oc",
    "name": "ASUS TUF Gaming GeForce RTX 4080 OC",
    "imageURL": "./assets/images/asus-tuf-gaming-geforce-rtx-4080-oc.webp",
    "manufacturer": "ASUS",
    "memory": "16GB GDDR6X",
    "coreClock": "1290 MHz",
    "boostClock": "1392 MHz",
    "cudaCores": 768,
    "price": "1530€"
  },
  {
    "id": "powercolor-amd-radeon-rx-6800xt-red-dragon",
    "name": "PowerColor AMD Radeon RX 6800XT Red Dragon",
    "imageURL": "./assets/images/powercolor-amd-radeon-rx-6800xt-red-dragon.webp",
    "manufacturer": "PowerColor",
    "memory": "16GB GDDR6",
    "coreClock": "1395 MHz",
    "boostClock": "1695 MHz",
    "cudaCores": 10496,
    "price": "827€"
  },
  {
    "id": "asus-cerberus-geforce-gtx-1050ti-advanced-edition",
    "name": "ASUS Cerberus GeForce GTX 1050Ti Advanced Edition",
    "imageURL": "./assets/images/asus-cerberus-geforce-gtx-1050ti-advanced-edition.webp",
    "manufacturer": "ASUS",
    "memory": "4GB GDDR5",
    "coreClock": "2015 MHz",
    "boostClock": "2250 MHz",
    "streamProcessors": 5120,
    "price": "188€"
  },
  {
    "id": "gigabyte-aorus-geforce-rtx-3070-master",
    "name": "Gigabyte AORUS GeForce RTX 3070 MASTER",
    "imageURL": "./assets/images/gigabyte-aorus-geforce-rtx-3070-master.webp",
    "manufacturer": "Gigabyte",
    "memory": "8GB GDDR6",
    "coreClock": "2015 MHz",
    "boostClock": "2250 MHz",
    "streamProcessors": 4608,
    "price": "927€"
  },
  {
    "id": "gigabyte-geforce-gt-1030-low-profile-d4",
    "name": "Gigabyte GeForce GT 1030 Low Profile D4",
    "imageURL": "./assets/images/gigabyte-geforce-gt-1030-low-profile-d4.webp",
    "manufacturer": "Gigabyte",
    "memory": "2GB GDDR4",
    "coreClock": "1530 MHz",
    "boostClock": "1785 MHz",
    "cudaCores": 1408,
    "price": "95€"
  },
  {
    "id": "zotac-gaming-geforce-rtx-3060-ti-twin-edge",
    "name": "Zotac Gaming GeForce RTX 3060 Ti Twin Edge",
    "imageURL": "./assets/images/zotac-gaming-geforce-rtx-3060-ti-twin-edge.webp",
    "manufacturer": "Zotac",
    "memory": "8GB GDDR6X",
    "coreClock": "1605 MHz",
    "boostClock": "1905 MHz",
    "streamProcessors": 2560,
    "price": "604€"
  },
  {
    "id": "gigabyte-aorus-geforce-rtx-4080-master",
    "name": "Gigabyte AORUS GeForce RTX 4080 MASTER",
    "imageURL": "./assets/images/gigabyte-aorus-geforce-rtx-4080-master.webp",
    "manufacturer": "Gigabyte",
    "memory": "16GB GDDR6X",
    "coreClock": "1500 MHz",
    "boostClock": "1730 MHz",
    "cudaCores": 5888,
    "price": "1500€"
  },
  {
    "id": "msi-gt-1030-aero-itx-2gd4-oc",
    "name": "MSI GT 1030 AERO ITX 2GD4 OC",
    "imageURL": "./assets/images/msi-gt-1030-aero-itx-2gd4-oc.webp",
    "manufacturer": "MSI",
    "memory": "2GB DDR4",
    "coreClock": "2321 MHz",
    "boostClock": "2581 MHz",
    "streamProcessors": 2560,
    "price": "107€"
  },
  {
    "id": "msi-geforce-rtx-3080-gaming-z-trio-lhr",
    "name": "MSI GeForce RTX 3080 GAMING Z TRIO LHR",
    "imageURL": "./assets/images/msi-geforce-rtx-3080-gaming-z-trio-lhr.webp",
    "manufacturer": "MSI",
    "memory": "10GB GDDR6",
    "coreClock": "1290 MHz",
    "boostClock": "1392 MHz",
    "cudaCores": 768,
    "price": "1148€"
  }
];

app.get('/graphics-cards', (req, res) => {
  const { offset, limit, searchTerm } = req.query;

  if (typeof offset !== 'string' || typeof limit !== 'string') {
    return res.status(400).json({ error: 'Offset and limit must be strings' });
  }
  const parsedOffset = parseInt(offset, 10);
  const parsedLimit = parseInt(limit, 10);

  if (isNaN(parsedOffset) || isNaN(parsedLimit)) {
    return res.status(400).json({ error: 'Invalid offset or limit' });
  }

  let filteredGraphicsCards = graphicsCards;

  if (searchTerm && typeof searchTerm === 'string') {
    filteredGraphicsCards = filteredGraphicsCards.filter(
      (card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const paginatedGraphicsCards = filteredGraphicsCards.slice(parsedOffset, parsedOffset + parsedLimit);
  res.json(paginatedGraphicsCards);
});

// Run server on port 3000
app.listen(PORT, () => {
  console.log(`--> Express server listening on port ${PORT}`);
});