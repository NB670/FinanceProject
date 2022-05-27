let buttonAdd = document.querySelector('button');
let table = document.querySelector('table');

let amtInput=document.querySelector('#amt');
let payInput=document.querySelector('#pay');
let purposeInput=document.querySelector('#purpose');
let dateInput=document.querySelector('#date');
let balInput=document.querySelector('#bal');
let notesInput=document.querySelector('#notes');

buttonAdd.addEventListener('click', () => {
  alert("Are you sure?");
  let amt=amtInput.value;
  let pay=payInput.value;
  let purpose=purposeInput.value;
  let date=dateInput.value;
  let bal=balInput.value;
  let notes=notesInput.value
  let template = `
                <tr>
                    <td>${amt}</td>
                    <td>${pay}</td>
                    <td>${purpose}</td>
		    <td>${date}</td>
		    <td>${bal}</td>
		    <td>${notes}</td>
                </tr>`;
    table.innerHTML+=template;
});

function alert(){
	alert("Are you sure");
}