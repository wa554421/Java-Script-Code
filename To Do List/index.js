document.addEventListener('DOMContentLoaded',function(){

    const forms = document.getElementsByTagName('form');
    const button = document.getElementsByTagName('button')[0];
    const table = document.getElementById('table').querySelector('tbody');

    button.addEventListener('click', function() {
        const item = document.getElementById('input');
        if(item && item.value){
            localStorage.setItem('saveditem' , item.value )
            const saved = localStorage.getItem('saveditem')

            if (saved){
                // Create a new row (<tr>)
                const row = document.createElement('tr');
                // Create a new cell (<td>)
                const waleed = document.createElement('td');
                const buttons = document.createElement('button');
                waleed.innerHTML = saved;
                buttons.innerText="Remove";
                // Append the <td> to the <tr>
                row.appendChild(waleed);
                // Append the <tr> to the table body
                table.appendChild(row);
                table.appendChild(buttons);
                
                if (buttons){
                    buttons.addEventListener('click', function() {
                        waleed.innerHTML='';
                        buttons.style.display='none';
                    })
                }
            }

            item.value = '';

        }else{
            alert('Not Working')
        }
    });


});
    
  
  
  