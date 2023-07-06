const { response } = require('express')
const Book = require('../models/book')

const controllerBook = {
    create: async (req,res) =>{
        try {
            const title = req.body.title
            const author = req.body.author
            const summary = req.body.summary
            const isbn = req.body.isbn
            await Book.create({
                title:title,
                author:author,
                summary:summary,
                isbn:isbn
            })
            return res.json({msg:'Book created'})
        } catch (error) {
            return res.status(500).json({msg:error.message})              
        }
    },
    getBooks: async (req,res)=>{
        try {
            const books = await Book.find({})
            return res.json(books)
        } catch (error) {
            return res.status(500).json({msg:error.message})              
        }
    },
    getBookById: async (req,res) =>{
        try {
            const {id} = req.params
            const book = await Book.findById(id)
            return res.json(book)
        } catch (error) {
            return res.status(500).json({msg:error.message})              
        }
    },
    updateBook: async (req, res) => {
        try {
          const { id } = req.params;
          const { title, author, summary, isbn } = req.body; // Agregado: Obtener los valores del cuerpo de la solicitud
          await Book.findByIdAndUpdate(id, {
            title: title,
            author: author,
            summary: summary,
            isbn: isbn,
          });
          return res.json({ msg: 'Book Updated' });
        } catch (error) {
          return res.status(500).json({ msg: error.message });
        }
      },
      
    deleteBook: async (req,res)=>{
        try {
            const {id} = req.params
            await Book.findByIdAndDelete(id)
            res.json({msg:'Book Deleted'})
        } catch (error) {
            return res.status(500).json({msg:error.message})              
        }
    }
}

module.exports = controllerBook