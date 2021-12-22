function deleteHandler(i) {
  fetch(`/todo/${i}`, {
    method: "DELETE",
    // headers: {
    //   "Content-Type": "application/json",
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },

    // body: JSON.stringify({ id: i }),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.status) {
        console.log(`result.status`, result.status);
        location.reload();
      }
    })
    .catch((err) => {
      console.log(`err`, err);
    });
}
