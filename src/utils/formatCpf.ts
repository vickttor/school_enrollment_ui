export function formatCPF(cpf: string) {
  // Transform the cpf string in array
  const final = [...cpf];

  // verify the length of the array
  if (final.length === 11) {
    // Get the initial 3 elements and remove them of the array

    const first_digits = final.splice(0, 3).join("");
    const second_digits = final.splice(0, 3).join("");
    const third_digits = final.splice(0, 3).join("");

    // Join all the variables into a string with the right format
    return `${first_digits}.${second_digits}.${third_digits}-${final.join("")}`;
  }
}
