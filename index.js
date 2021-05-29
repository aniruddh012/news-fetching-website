let apiKey = '4ebdd73768e39b5dc0c17e64ec2090ff';
async function getData(){
  let response = await fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&sources=computer,en`);
  let data = await response.json();
  return data;
};

getData().then((data)=>{
  let i =1;
  let mySet = new Set();
  data.data.forEach((elem)=>{
    mySet.add(elem);
  });
  mySet.forEach((element) => {
    if(element.language=="en" & element.image != null){
let news = `<div class="card my-2 mx-2" style="width: 21rem;">
<img src="${element.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title"><b>Bulletin ${i} :  </b> ${element.title}</h5>
  <p class="card-text">${element.description}</p>
  <a href="${element.url}" class="btn btn-primary">Read more here >></a>
</div>
</div>`
let accordionContainer= document.getElementById('accordionContainer');
accordionContainer.innerHTML += news;
i++;
  }});
 });