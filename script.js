async function AsyncFunction(){
    let url = 'https://makeup-api.herokuapp.com/api/v1/products.json';
    let jsondata;
        await fetch(url)
    .then(res => res.json())
    .then(out =>
        jsondata = out)
    .catch(err => { throw err });
    let display="";
    document.getElementById('loader').style.display= 'none';
    jsondata.map((values)=>{        
        display+= `<tr>
        <th>${values.brand}</th>
        <td>${values.name}</td>
        <td>${values.price}</td>
        <td>${values.description}</td>
        <td><img src="${values.image_link}" onerror="this.onerror=null;this.src='no-image.png';" ></td>
        <td> <a href="${values.product_link}" target ="_blank"; "text-decoration:none" > Buy Now </a> </td>
      </tr>`
    });
     document.getElementById("table_body").innerHTML=display;
     let searchInput = document.getElementById("search");
    searchInput.addEventListener("keyup", function (event){
    document.getElementById("table_body").innerHTML=display;
     let rows = document.querySelectorAll("tbody tr");
        if(event.key == "Enter")
        {
            let demo = rows;
        const q = event.target.value.toLowerCase();
        demo.forEach((row) => {
            if(row.innerText.toLowerCase().includes(q) == true)
            { 
                let index = row.innerHTML.indexOf(q);
                if (index >= 0) { 
                 row.innerHTML = row.innerHTML.replaceAll(new RegExp(q,"gi"),"<span class='highlight'>"+q+"</span>")
                }
                (row.style.display = "table-row") ;
         }
         else
         {
            (row.style.display = "none");
         }
             
        });
    }
    });
      
   }
  
 AsyncFunction().catch(console.log);

 function reload()
 {
     window.reload();
 }






