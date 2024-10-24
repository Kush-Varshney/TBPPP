const head = document.getElementById("head");
console.log(head);
head.style.color = "red";
head.style.border = "green solid 5px";
const favCity = document.getElementsByClassName("favCity");
console.log(favCity);
const joke=document.getElementById('joke')
joke.style.color="grey"
joke.style.border='black dashed 3px'


const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  console.log("clicked");
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data)=>{
        console.log(data);
        document.getElementById("joke").innerHTML = data.setup + "<br>" + data.punchline;
  
    })
    .catch((err) => {
      console.error(err);
    });
});
