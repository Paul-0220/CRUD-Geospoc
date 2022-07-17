let data=[]
function details(){
    document.getElementById(form-data).innerHTML=''
    let dataBaseValues=["S.No","Name","Email","Contact","Edit","Delete"]

    let userData={}
    let SNo=1

    let username=document.getElementById("username").value
    let email=document.getElementById("email").value
    let contact=document.getElementById("contact").value

    userData={
        SNo:SNo,
        username:username,
        email:email,
        contact:contact
    }

    let editButton=document.createElement("button")
    editButton.type='button'
    editButton.value="Edit"

    let editButtonVal=document.createTextNode("Edit")
    editButton.append(editButtonVal);
    editButton.className="bg-blue-600 text-white font-bold py-1 px-4 rounded";

    let deleteButton=document.createElement('button')
    deleteButton.type='button'
    deleteButton.value="Delete"

    let deleteButtonVal=document.createTextNode('Delete')
    deleteButtonVal.append(deleteButtonVal)
    deleteButton.className="bg-red-600 text-white font-bold py-1 px-4 rounded";

    let table=document.createElement('table')
    table.className='border border-2'
    table.style.border='2'
    table.style='align-center'
    let row=document.createElement('tr')

    tableHeading.forEach(x=>{
        let tableHead=document.createElement('th')

        let headName=document.createTextNode(x)

        tableHead.append(headName)
        row.append(tableHead)
    });
    table.append(row)

    data.forEach(user=>{
        let 
    })

}