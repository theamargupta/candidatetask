const bodyParser = require("body-parser");
const express = require("express");
const categories = require("./categories.json");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  let arr = [];
  const filteredCategoryA = () =>
    categories.forEach((firstCategory) => {
      firstCategory.children.forEach((firstNestedData) => {
        if (firstNestedData.name === req.query.name) {
          arr.push(firstNestedData);
        }
      });
    });
  const filteredCategoryB = () =>
    categories.forEach((firstCategory) => {
      firstCategory.children.forEach((firstNestedData) => {
        firstNestedData.children.forEach((secondNestedData) => {
          if (secondNestedData.name === req.query.name) {
            arr.push(secondNestedData);
          }
        });
      });
    });
  const filteredCategoryC = () =>
    categories.forEach((firstCategory) => {
      firstCategory.children.forEach((firstNestedData) => {
        firstNestedData.children.forEach((secondNestedData) => {
          secondNestedData.children.forEach((thirdNestedData) => {
            if (thirdNestedData.name === req.query.name) {
              arr.push(thirdNestedData);
            }
          });
        });
      });
    });
  const filteredCategoryD = () =>
    categories.forEach((firstCategory) => {
      firstCategory.children.forEach((firstNestedData) => {
        firstNestedData.children.forEach((secondNestedData) => {
          secondNestedData.children.forEach((thirdNestedData) => {
            thirdNestedData.children.forEach((fourNestedData) => {
              if (fourNestedData.name === req.query.name) {
                arr.push(fourNestedData);
              }
            });
          });
        });
      });
    });
  const categoryLevelAlphabet = req.query.name
    .split(" ")
    .reverse()[0]
    .split("")[0];
  if (categoryLevelAlphabet === "A") filteredCategoryA();
  if (categoryLevelAlphabet === "B") filteredCategoryB();
  if (categoryLevelAlphabet === "C") filteredCategoryC();
  if (categoryLevelAlphabet === "D") filteredCategoryD();
  categories.forEach((firstCategory) => {
    if (firstCategory.name === req.query.name) {
      arr.push(firstCategory);
    }
  });
  return res.send(arr);
});

app.all("*", (req, res) =>
  res.send("You've tried reaching a route that doesn't exist.")
);

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
