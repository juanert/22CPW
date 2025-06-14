function actualizarInformacion() {
  const users = JSON.parse(localStorage.getItem("usuarios")) || [];
  let user = sessionStorage.getItem("usuario");
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let errores = [];

  user = users.find((u) => u.user === user);

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

    const userIndex = users.findIndex((u) => u.user === user.user);

    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      localStorage.setItem("usuarios", JSON.stringify(users));
      sessionStorage.setItem("usuario", updatedUser.user);
      document.getElementById("resultado").innerHTML =
        "<p class='success'>Información actualizada exitosamente.</p>";
    }
  }
}

function mostrarInformacion() {
  const user = sessionStorage.getItem("usuario");
  if (!user) {
    alert("No hay un usuario conectado.");
    return;
  }
  const users = JSON.parse(localStorage.getItem("usuarios")) || [];
  if (!users || users.length === 0) {
    alert("No hay usuarios registrados.");
    return;
  }
  const userData = users.find((u) => u.user === user);
  document.getElementById("usuario").value = userData.user || "";
  document.getElementById("email").value = userData.email || "";
  document.getElementById("password").value = "";
  document.getElementById("confirmPassword").value = "";
}

mostrarInformacion();
