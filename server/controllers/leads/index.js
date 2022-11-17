const leadsService = require("server/services/leads")();
const { REGEX } = require("../../utils/constants");

async function create(req, res) {
  try {
    const { email } = req.body || {};

    if (!email) {
      res.status(400).send("Invalid Request");
      return;
    }

    const emailRegex = new RegExp(REGEX.EMAIL);
    if (!emailRegex.test(email)) {
      res.status(400).send("Please enter valid email");
      return;
    }

    const leads = await leadsService.findOne({ email });
    if (leads) {
      res.status(201).send({ email: leads.email, alreadyRegistered: true });
      return;
    }

    const newLeadData = await leadsService.create({ email });
    res
      .status(201)
      .send({ email: newLeadData.email, alreadyRegistered: false });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
}

module.exports = () => ({ create });
