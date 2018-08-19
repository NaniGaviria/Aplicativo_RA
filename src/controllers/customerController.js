const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn)=> {
    conn.query("SELECT * FROM estudiante", (err, estudiante) => {
      if (err) {
        res.json(err);
      }
      console.log(estudiante);
      res.render("estudiante", {
        data:estudiante
      });
    });
  });
};

module.exports=controller;
