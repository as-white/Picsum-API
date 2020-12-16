var randomImage1 = document.querySelector('.random-image1'); 
var randomImage2 = document.querySelector('.random-image2');
var randomImage3 = document.querySelector('.random-image3');


function placeholderOne() {
fetch('https://picsum.photos/400/200') 
.then(function(response) {
  if (!response.ok){ 
    console.log(response);
    return new Error(response); 
  } 
  console.log("Response:", response);
  return response.blob(); 
})
.then(function(photoBlob) { 
  var objectURL = URL.createObjectURL(photoBlob); 
  randomImage1.src = objectURL; 
})
}


function placeholderTwo(){
fetch('https://picsum.photos/400/200/?blur') 
.then(function(response) {
  if (!response.ok){ 
    console.log(response);
    return new Error(response); 
  } 
  console.log("Response:", response);
  return response.blob(); 
})
.then(function(photoBlob) { 
  var objectURL = URL.createObjectURL(photoBlob); 
  randomImage2.src = objectURL; 
})
}

function placeholderThree (){
    fetch('https://picsum.photos/800/400') 
.then(function(response) {
  if (!response.ok){ 
    console.log(response);
    return new Error(response); 
  } 
  console.log("Response:", response);
  return response.blob(); 
})
.then(function(photoBlob) { 
  var objectURL = URL.createObjectURL(photoBlob); 
  randomImage3.src = objectURL; 
})
}

function onLoad() {
    placeholderOne();
    placeholderTwo();
    placeholderThree();
}