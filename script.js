var id = document.querySelector('div');
console.log(id);

id.addEventListener('mouseover',function(){
    var i =Math.random() *400;
   id.style.left = (Math.random() * i) + 'px';
   id.style.right = (Math.random() * i) + 'px';
   id.style.top = (Math.random() * i) + 'px';
   id.style.bottom = (Math.random() * i) + 'px';
})