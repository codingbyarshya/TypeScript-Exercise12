const languages: ReadonlyArray<string> = ["Mongolian", "French", "Basque", "Thai"];

// languages[2] = "Hausa"; // This line causes an error and should be removed.

console.log(languages);

const currencies: readonly string[] = ["NZD", "THB", "NGN", "EUR", "COP", "INR"];

console.log(currencies);

export {};
