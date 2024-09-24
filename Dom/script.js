let div = document.createElement('div')
div.id="main"
document.body.appendChild(div)
div.innerHTML="<h1>Hello</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia, eius voluptatum sit non corporis obcaecati nulla voluptatem sint quaerat mollitia fugit ut soluta illum modi, maiores nam impedit error, voluptas explicabo possimus est. Eum minus, amet accusantium, alias aliquid provident quae porro, dolore harum temporibus labore quas repudiandae laborum blanditiis enim asperiores! Excepturi cumque praesentium, quia voluptate voluptas, tempore laboriosam distinctio alias ad consectetur magnam, temporibus ut molestiae soluta? Quibusdam, ut quasi nisi sapiente delectus at iste iure accusamus tempora voluptatem ea natus. Earum sit quod reiciendis? Laborum ab eius similique odit nesciunt quas eos amet quibusdam, vitae aliquid?</p><h1>Introduction</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia, eius voluptatum sit non corporis obcaecati nulla voluptatem sint quaerat mollitia fugit ut soluta illum modi, maiores nam impedit error, voluptas explicabo possimus est. Eum minus, amet accusantium, alias aliquid provident quae porro, dolore harum temporibus labore quas repudiandae laborum blanditiis enim asperiores! Excepturi cumque praesentium, quia voluptate voluptas, tempore laboriosam distinctio alias ad consectetur magnam, temporibus ut molestiae soluta? Quibusdam, ut quasi nisi sapiente delectus at iste iure accusamus tempora voluptatem ea natus. Earum sit quod reiciendis? Laborum ab eius similique odit nesciunt quas eos amet quibusdam, vitae aliquid?</p><h2>Subtopics</h2>   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit libero impedit pariatur, vero eos doloremque odio exercitationem recusandae obcaecati aut voluptatibus reprehenderit expedita velit, dolore natus omnis fugiat beatae quos? </p><h1>Problem Statement</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perferendis similique consectetur ea veritatis minima voluptas animi placeat omnis commodi, laborum nemo deleniti sunt eos enim voluptate tempora numquam, aliquam quos provident labore, voluptates quis ipsa? Provident incidunt iste nihil illo, quod corporis consectetur ad distinctio dicta ex ipsam dolorem!</p>"
var a=document.querySelectorAll('h1')
for(i=0;i<a.length;i++){
    a[i].style.background ="cyan"
    a[i].style.textAlign ="center"
    a[i].style.color ="red"
}

h2=document.querySelectorAll('h2')
h2[0].style.background="green"

var para = document.querySelectorAll('p')
for(i=0;i<para.length;i++){
    para[i].style.background="yellow"
}

function change(){
    document.body.style.background="blue"
}
let button = document.createElement('button')
button.innerText="change background"
div.appendChild(button)
button.addEventListener('click',change)

