import { FormEvent } from "react";

export function toogleColorButtons(event: React.FormEvent<HTMLButtonElement>) {
  const buttons = document.querySelectorAll(".formButtonOption");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
}
