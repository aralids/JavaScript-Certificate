// Only change code below this line
function urlSlug(title) {
  let newTitle = title
  .toLowerCase()
  .split(" ")
  .filter(substr => substr !== "")
  .join("-");
  console.log(newTitle);

  return newTitle;
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");