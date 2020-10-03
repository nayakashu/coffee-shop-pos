import drippedCoffeeAddons from './dripped-coffee-addons.json';
import lattesAddons from './lattes-addons.json';
import smoothiesAddons from './smoothies-addons.json';

export const getAddons = async (req, res) => {
  switch (req.query.type) {
    case 'drippedCoffee':
      res.json(drippedCoffeeAddons);
      break;
    case 'lattes':
      res.json(lattesAddons);
      break;
    case 'smoothies':
      res.json(smoothiesAddons);
      break;
    default:
      res.json(lattesAddons);
  }
};
