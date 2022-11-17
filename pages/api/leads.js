const leadsController = require("server/controllers/leads")();

export default async function handler(req, res) {
  const { method } = req || {};
  switch (method) {
    case "POST": {
      await leadsController.create(req, res);
      return;
    }
    default:
      res.status(405).end();
      break;
  }
}
