const Author = require('../models/author') 

const controllerAuthor = {
    create: async (req, res) => {
      try {
        const first_name = req.body.first_name;
        const family_name = req.body.family_name;
        await Author.create({
          first_name: first_name,
          family_name: family_name
        });
        console.log('Author created');
        res.status(200).json({ message: 'Author created' });
      } catch (error) { // <-- Add the error parameter here
        console.error(error);
        return res.status(500).json({ msg: error.message });
      }
    }
  };
  
  module.exports = controllerAuthor;
  