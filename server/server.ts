import { GraphicsCard } from 'src/app/graphics-cards/interfaces/graphics-card.interface';
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

async function readConfiguration() {
  try {
    const data = await fs.readFile(path.resolve('server/server.config.json'), 'utf8');
    return JSON.parse(data);
  } catch(err) {
    console.error('Error reading the configuration file', err);
  }
}

async function readGPUDataJSON() {
  try {
    const data = await fs.readFile(path.resolve('server/gpu-data.json'), 'utf8');
    const jsonArray: GraphicsCard[] = JSON.parse(data);
    return jsonArray;
  } catch (err) {
    console.error('Error reading the GPUData JSON file:', err);
    return null;
  }
}

async function startServer() {

  // Read the server.config.json file
  const config = await readConfiguration();
  if (!config) return;

  // Read the gpu-data.json that contains the array with the Graphics Cards info
  const graphicsCards = await readGPUDataJSON();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const app = express();

  // Enable CORS as middleware
  app.use(cors());

  // Set the static path for image files
  app.use('/assets/images', express.static(join(__dirname, '..', 'src', 'assets', 'images')));

  // Endpoint for the GraphicsCards
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

    if (filteredGraphicsCards) {
      if (searchTerm && typeof searchTerm === 'string') {
        filteredGraphicsCards = filteredGraphicsCards.filter(
          (card) =>
            card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      const paginatedGraphicsCards = filteredGraphicsCards.slice(parsedOffset, parsedOffset + parsedLimit);
      res.json(paginatedGraphicsCards);
    }
  });

  // Endpoint for the GraphicsCards/id
  app.get('/graphics-cards/:id', (req, res) => {
    const id = req.params.id;

    let graphicsCard;

    if (graphicsCards && id && typeof id === 'string') {
      graphicsCard = graphicsCards.find((card) => card.id.toLowerCase() === id.toLowerCase());
    }

    if (typeof id !== 'string') {
      return res.status(400).json({ error: 'ID must be a string' });
    }
    res.json(graphicsCard);
  });

  // Run server on port 3000
  app.listen(config.puerto, () => {
    console.log(`--> Express server listening on port ${config.puerto}`);
  });

}

startServer();




