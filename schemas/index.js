const mongoose = require("mongoose");

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== "production") {
      mongoose.set("debug", true);
    }
    mongoose.connect(
      "mongodb://localhost:27017/til",
      {
        dbName: "til"
      },
      error => {
        if (error) {
          console.log("������ ���� ����", error);
        } else {
          console.log("������ ���� ����");
        }
      }
    );
  };
  connect();
  mongoose.connection.on("error", error => {
    console.log("������ ���� ����", error);
  });
  mongoose.connection.on("disconnected", () => {
    console.log("������ ������ ������ϴ�. ������ ��õ� �մϴ�.");
    connect();
  });
  require("./user");
  require("./board");
};
