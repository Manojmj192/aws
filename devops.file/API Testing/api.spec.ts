import { test } from "../fixtures/test.fixture";
import { expect, request, Request } from "@playwright/test";
import { APIRequestContext } from "@playwright/test";
import { Ldata } from "../data/local.data";
test("verify the basic http request", async ({ request }) => {
  const response = await request.get(
    "https://dev01.nibavlifts.com/api/v1/products/landing-page"
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  expect(responseBody).toEqual(Ldata);

  //   verify the title of the array

  expect(responseBody.videos[0].title).toBe(
    "Efficient, Luxurious, and Futuristic"
  );
});

test("verify the post methods", async ({ request }) => {
  const response = await request.post(
    "https://dev01.nibavlifts.com/api/v1/products/learn-more/series-iii-max/specification",
    {
      data: {
        productTags: [
          "ros",
          "persons",
          "external-size",
          "payload",
          "ros-shortText",
          "ros-text",
        ],
        tags: ["explore-now"],
        outerTags: ["ros-shortText", "ros-text"],
      },
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  console.log(responseBody);
});

test("accessToken validation", async ({ request }) => {
  const response = await request.post(
    "http://dev01.nibavlifts.us/api/v1/auth/request/otp",
    {
      data: {
        mobileNumber: "7358263601",
        countryCode: "+91",
      },
    }
  );

  expect(response.status()).toBe(201);

  const responseBody = await response.json();

  expect(responseBody).toEqual({
    message: "OTP sent successfully.",
  });
});

test("verify the OTP ", async ({ request }) => {
  const response = await request.post("http://dev01.nibavlifts.us/", {
    formData: {
      username: "testuser",
      password: "password123",
    },
  });
});
