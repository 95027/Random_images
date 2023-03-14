const containerEl=document.querySelector('.container');

const btnEl=document.querySelector('button');

btnEl.addEventListener('click',()=>{
    for(let i=0;i<10;i++)
    {
        const newImg=document.createElement('img');
        newImg.src=`https://picsum.photos/200/300?random=${Math.ceil(Math.random()*2000)}`;
        console.log();
    
        containerEl.appendChild(newImg);
    }
})