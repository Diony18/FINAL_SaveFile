var rollV, nameV, vehicleV, usernameV, precinctnoV

function readFom() {
  rollV = document.getElementById("roll").value;
  nameV = document.getElementById("name").value;
  vehicleV = document.getElementById("vehicle").value;
  usernameV = document.getElementById("username").value;
  precinctnoV = document.getElementById('precinctno').value;
  console.log(rollV, nameV, vehicleV, usernameV, precinctnoV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      vehicle: vehicleV,
      username: usernameV, 
      precinctno: precinctnoV,
    });
  alert("Data Inserted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("vehicle").value = "";
  document.getElementById("username").value = "";
  document.getElementById("precinctno").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("roll").value = snap.val().rollNo;
      document.getElementById("name").value = snap.val().name;
      document.getElementById("vehicle").value = snap.val().vehicle;
      document.getElementById("username").value = snap.val().username;
      document.getElementById("precinctno").value = snap.val().precinctno;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      vehicle: vehicleV,
      username: usernameV,
      precinctno: precinctnoV,
    });
  alert("Data Update");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("vehicle").value = "";
  document.getElementById("username").value = "";
  document.getElementById("precinctno").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("vehicle").value = "";
  document.getElementById("username").value = "";
  document.getElementById("precinctno").value = "";
};
