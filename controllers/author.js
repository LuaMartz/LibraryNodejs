const Author = require('../models/author')

const controllerAuthor = {
    create: async (req, res) => {
        try {
          const { first_name, family_name } = req.body;
          const author = await Author.create({
            first_name: first_name,
            family_name: family_name
          });
          console.log('Author created:', author);
          res.json({ msg: 'Author Created', author });
        } catch (error) {
          console.error(error);
          res.status(500).json({ msg: error.message });
        }
    },
    getAuthors: async (req,res) => {
        try {
            const authors = await Author.find({})
            res.json(authors)
        } catch (error) {
            return res.status(500).json({msg:error.message})            
        }
    },
    getAuthorsById: async (req,res) =>{
        try {
            const {id} = req.params
            const author = await Author.findById(id)
            res.json(author)
        } catch (error) {
            return res.status(500).json({msg:error.message})                        
        }
    },
    updateAuthor: async (req,res) =>{
        try {
            const {id} = req.params
            const first_name = req.body.first_name
            const family_name = req.body.family_name
            await Author.findByIdAndUpdate(id,
                {
                first_name:first_name,
                family_name : family_name
                })
                res.json({msg:'Author Updated'})
        } catch (error) {
            return res.status(500).json({msg:error.message})                                    
        }
    },
    deleteAuthor: async (req,res) =>{
        try {
            const {id} = req.params
            await Author.findByIdAndDelete(id)
            res.json({msg:'Author Deleted'})
        } catch (error) {
            return res.status(500).json({msg:error.message})                                         
        }
    }
}

module.exports = controllerAuthor