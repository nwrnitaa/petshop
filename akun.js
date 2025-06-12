document.addEventListener("DOMContentLoaded", () => {
    const nama = localStorage.getItem("nama");
    const email = localStorage.getItem("email");
  
    if (nama && email) {
      tampilkanAkun(nama, email);
    }
  });
  
  function daftarLogin() {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
  
    if (nama && email) {
      localStorage.setItem("nama", nama);
      localStorage.setItem("email", email);
      tampilkanAkun(nama, email);
    } else {
      alert("Silakan isi nama dan email!");
    }
  }
  
  function tampilkanAkun(nama, email) {
    document.getElementById("form-login").style.display = "none";
    document.getElementById("akun-data").style.display = "block";
    document.getElementById("akun-nama").innerText = nama;
    document.getElementById("akun-email").innerText = email;
  }
  
  function logout() {
    localStorage.removeItem("nama");
    localStorage.removeItem("email");
    location.reload();
  }
  