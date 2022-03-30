const weekday = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

const d = new Date();
let day = weekday[d.getDay()]



const putdate = document.querySelector("#getdate");
putdate.innerHTML = day;

const add = document.querySelector("#addbtn");
add.addEventListener('click',function(){
    const adinp = document.querySelector("#inpt");


    const contents = document.createElement('div')
    contents.classList.add('content')
    
    const contentsh1 = document.createElement('h5')
    contentsh1.innerHTML = adinp.value;

    const adddel = document.createElement('div')
    adddel.classList.add('chck')

    const addb = document.createElement('button')
    addb.classList.add('btn-success')
    addb.innerHTML='complete'
    const delb = document.createElement('button')
    delb.classList.add('btn-danger')
    delb.innerHTML='remove'

    adddel.appendChild(addb)
    adddel.appendChild(delb)

    contents.appendChild(contentsh1)
    contents.appendChild(adddel)
    
    const wrapper = document.querySelector(".wrapper");
    wrapper.appendChild(contents);
    adinp.value=''
    addb.addEventListener("click",function(){
        const com = addb.parentElement.parentElement;
        if(addb.innerHTML=== 'complete'){
            addb.innerHTML='undo'
            com.style.textDecoration ='line-through';
        }
        else{
            addb.innerHTML='complete'
            com.style.textDecoration ='none';
        }
            
    })

    delb.addEventListener("click",function(){
        const del = delb.parentElement.parentElement;
        del.remove();
    })

})


