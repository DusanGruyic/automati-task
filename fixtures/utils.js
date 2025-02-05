const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};

const fillAndSubmitForm = async (page, fields, values) => {
  for (let i = 0; i < fields.length; i++) {
    await page.locator(fields[i]).fill(values[i]);
  }
  await page.locator("button").click();
};
const generateUserCredentials = (length) => {
  const baseString = generateRandomString(length);
  const username = baseString;
  const email = `aleksa+${baseString}@email.com`;
  const password = `${baseString}123`;

  return { username, email, password };
};

export { generateRandomString, fillAndSubmitForm, generateUserCredentials };
