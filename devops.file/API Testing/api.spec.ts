import { test } from "../fixtures/test.fixture";
import { expect, request } from "@playwright/test";

import { Ldata } from "../data/local.data";
test.skip("verify the basic http request", async ({ request }) => {
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

test.skip("verify the post methods", async ({ request }) => {
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

test.skip("accessToken validation", async ({ request }) => {
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

test.skip("verify the OTP ", async ({ request }) => {
  const response = await request.post(
    "http://dev01.nibavlifts.us/api/v1/auth/request/otp",
    {
      form: {
        mobileNumber: "7358263601",
        CountryCode: "+91",
        userOTP: 21854,
      },
    }
  );

  console.log("Response status:", response.status());
  console.log("Response headers:", response.headers());

  const responseBody = await response.text();
  console.log("Response body:", responseBody);
});

test("demo site for token validation", async ({ request }) => {
  let accessToken: string;

  const response = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      form: {
        username: "admin",
        password: "password123",
      },
    }
  );

  const headerss = await response.headers();

  console.log(response.status());

  const resBody = await response.json();

  accessToken = await resBody.token;

  console.log("AccessToken:", accessToken);
});

test("verify the ids", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking"
  );

  const resBody = await response.json();

  console.log(resBody);
});
test("verify booking  ids", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking/476"
  );

  const resBody = await response.json();

  const Fname = await resBody.firstname;
  const checkin = await resBody.bookingdates.checkin;

  console.log(resBody);
  console.log("firstName:", Fname);
  console.log("checkin time :", checkin);
});

test("create a booking ", async ({ request }) => {
  // token genrate

  try {
    let token: string;
    const tokenresponse = await request.post(
      "https://restful-booker.herokuapp.com/auth",
      {
        data: {
          username: "admin",
          password: "password123",
        },
      }
    );

    const tokenbody = await tokenresponse.json();
    console.log("this is my token :", tokenbody);

    token = tokenbody.token;

    let bookingID: string;

    const response = await request.post(
      "https://restful-booker.herokuapp.com/booking",
      {
        data: {
          firstname: "Arun",
          lastname: "kumar",
          totalprice: 150,
          depositpaid: true,
          bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01",
          },
          additionalneeds: "Breakfast",
        },

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const resBody = await response.json();

    console.log("Response:", resBody);

    bookingID = resBody.bookingid;
    console.log("my id :", bookingID);

    const response1 = await request.put(
      `https://restful-booker.herokuapp.com/booking/${bookingID}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `${token}`,
        },

        data: {
          firstname: "Manoj",
          lastname: "kumar",
        },
      }
    );
    console.log("this is my updated satuts:", response1.status());
    const resBody1 = await response1.json();
    console.log(resBody1);

    expect(resBody1.firstname).toEqual("Manoj");
  } catch (error) {
    console.log(error);
  }
});
