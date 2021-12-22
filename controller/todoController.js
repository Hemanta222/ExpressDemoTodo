const mongoose = require("mongoose");
// const Objectid =  mongoose.Types.Objectid;
const uri =
  "mongodb+srv://test:r3JeNK50FgK973RD@cluster0.zv0wd.mongodb.net/todo-db?retryWrites=true&w=majority";
mongoose.connect(uri);
const todoSchema = new mongoose.Schema({
  item: String,
  created_at: Date,
});
mongoose.pluralize(null);
const Todo = mongoose.model("todo-item", todoSchema);

module.exports = function (app) {
  let data = [
    { item: "Get Milk", id: 1 },
    { item: "Make Food", id: 2 },
    { item: "Read Book", id: 3 },
  ];

  //get list of todo items
  app.get("/todo", async (req, res) => {
    try {
      const data = await Todo.find({}).sort({ created_at: -1 });
      if (data && data.length > 0) {
        res.render("todo", { todos: data });
      } else res.render("todo", { todos: [] });
    } catch (error) {
      res.send(`<h1>${error}</h1>`);
    }
  });
  //add new todo item
  app.post("/todo", (req, res) => {
    try {
      if (req.body.todoItem) {
        Todo({ item: req.body.todoItem, created_at: new Date() }).save(
          (err) => {
            if (err) {
              console.log(`err`, err);
            } else res.redirect("/todo");
          }
        );
      }
    } catch (error) {
      res.send(`<h1>${error}</h1>`);
    }
  });

  //deleting a single todo item
  app.delete("/todo/:id", (req, res) => {
    try {
      const deleteId = req.params.id;

      Todo.deleteOne({ _id: mongoose.Types.ObjectId(deleteId) }, (err) => {
        if (err) {
          console.log(`err`, err);
        } else {
          res.status(200).json({ status: true });
        }
      });
    } catch (error) {
      res.send(`<h1>${error}</h1>`);
    }
  });
};
