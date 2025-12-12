function checkPassword(password) {
    let hasNumber = false;
    let hasSpecial = false;
    let specialChars = "!@#$%^&*";

    for (let char of password) {
        if (!isNaN(char) && char !== " ") {
            hasNumber = true;
        }
        if (specialChars.includes(char)) {
            hasSpecial = true;
        }
    }

    if (password.length < 8) {
        return { ok: false, message: "Password rejected: must be at least 8 characters." };
    }

    if (!hasNumber) {
        return { ok: false, message: "Password rejected: must contain at least one number." };
    }

    if (!hasSpecial) {
        return { ok: false, message: "Password rejected: must contain at least one special character (!@#$%^&*)." };
    }

    if (password.length >= 12) {
        return { ok: true, strength: "Strong password" };
    } else {
        return { ok: true, strength: "Medium password" };
    }
}

// UI hooks
document.getElementById("btn").addEventListener("click", () => {
    const pwd = document.getElementById("pwd").value;
    const out = checkPassword(pwd);
    const result = document.getElementById("result");
    const hint = document.getElementById("hint");
    if (!out.ok) {
        result.textContent = out.message;
        result.style.color = "crimson";
        hint.textContent = "";
    } else {
        result.textContent = out.strength;
        result.style.color = (out.strength.includes("Strong")) ? "green" : "orange";
        hint.textContent = "Accepted ✔";
    }
});