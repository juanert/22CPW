function actualizarInformacion() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = sessionStorage.getItem("user");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let errores = [];

  //Validar que actualizare
  if (password && confirmPassword && email !== user.email && email) {
    if (!emailRegex.test(email)) {
      errores.push("El email no es válido.");
    }
    if (!passwordRegex.test(password)) {
      errores.push(
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número."
      );
    }
    if (password !== confirmPassword) {
      errores.push("Las contraseñas no coinciden.");
    }
  } else if (email) {
    if (!emailRegex.test(email)) {
      errores.push("El email no es válido.");
    }
  } else if (password && confirmPassword) {
    if (!passwordRegex.test(password)) {
      errores.push(
        "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número."
      );
    }
    if (password !== confirmPassword) {
      errores.push("Las contraseñas no coinciden.");
    }
  }

  if (errores.length > 0) {
    errores.forEach((error) => {
      document.getElementById(
        "resultado"
      ).innerHTML += `<p class="error">${error}</p>`;
    });
  } else {
    document.getElementById("resultado").innerHTML =
      "<p class='success'>Información actualizada exitosamente.</p>";
    let updatedUser = {
      user: user.user,
      email: user.email,
      password: user.password,
    };
    if (email && password && confirmPassword) {
      updatedUser = {
        ...user,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };
    } else if (email) {
      updatedUser = {
        ...user,
        email: document.getElementById("email").value,
      };
    } else if (password && confirmPassword) {
      updatedUser = {
        ...user,
        password: document.getElementById("password").value,
      };
    }

    const userIndex = users.findIndex((u) => u.user === user);

    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem("users", JSON.stringify(users));
      sessionStorage.setItem("user", JSON.stringify(updatedUser));
    }
  }
}

function mostrarInformacion() {
  const user = sessionStorage.getItem("user");
  if (!user) {
    alert("No hay un usuario conectado.");
    return;
  }
  const userData = JSON.parse(user);
  document.getElementById("user").value = userData.user || "";
  document.getElementById("email").value = userData.email || "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
}
