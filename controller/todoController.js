module.exports = function (app) {
  let data = [
    { item: "Get Milk", id: 1 },
    { item: "Make Food", id: 2 },
    { item: "Read Book", id: 3 },
  ];
  app.get("/todo", (req, res) => {
    let todos = [];
    for (let index = data.length - 1; index >= 0; index--) {
      todos.push(data[index]);
    }
    res.render("todo", { todos: todos });
  });
  app.post("/todo", (req, res) => {
    if (req.body.todoItem) {
      data.push({
        item: req.body.todoItem,
        id: Math.floor(Math.random() * 100),
      });
    }
    res.redirect("/todo");
  });
  app.delete("/todo/:id", (req, res) => {
    const deleteId = req.params.id;
    const updatedTodo = data.filter(
      (todo) => todo.id.toString() !== deleteId.toString()
    );
    data = updatedTodo;

    res.status(200).json({ status: true });
  });
};
