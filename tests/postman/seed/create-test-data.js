import axios from "axios";
import { faker } from "@faker-js/faker";
import fs from "fs";

const user = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: "Test@123"
};

async function createUser() {
  const response = await axios.post(
    process.env.BASE_URL + "/users",
    user
  );

  fs.writeFileSync(
    "tests/seed/runtime-data.json",
    JSON.stringify({
      userId: response.data.id,
      email: user.email
    })
  );
}

createUser();