const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
console.log("Function has been successfully called")
require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const nightmare = require('nightmare')()

/* const args = process.argv.slice(2)
const url = args[0]
const minPrice = args[1] */
/* const url = 'https://www.amazon.com/Donerton-Smartwatch-Waterproof-Activity-Pedometer/dp/B08DTF6YYD';
const minPrice = 50; */
//const emaildata = require('form');

//checkPrice()


async function checkPrice(url, minPrice, emaildata) {
  try {
    const priceString = await nightmare.goto(url)
      .wait("#priceblock_ourprice")
      .evaluate(() => document.getElementById("priceblock_ourprice").innerText)
      .end()
    const priceNumber = parseFloat(priceString.replace('$', ''))
    if (priceNumber < minPrice) {
      await sendEmail(
        'Price Is Low',
        `The price on ${url} has dropped below ${minPrice}`,
        emaildata
      )
    }
  } catch (e) {
    await sendEmail('Amazon Price Checker Error', e.message)
    throw e
  }
}
app.get("/", (request,response)=>
{
  response.send("This is a 'Get' response from app.js")
});
app.post("/", (request, response) => {
  console.log("URL: ", request.body.url);
  console.log("minPrice: ", request.body.minPrice);
  response.send("This is a 'Post' response from app.js'");
  checkPrice(request.body.url, request.body.minPrice, request.body.email);
});

function sendEmail(subject, body, emaildata) {
  const email = {
    to: emaildata,
    from: 'ankit11hab@outlook.com',
    subject: subject,
    text: body,
    html: body
  }

  return sgMail.send(email)
}

app.listen(3000, function()
{
    console.log("Server started on port 3000!");
})