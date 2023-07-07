let ac_img = document.querySelector('.accentchair')
let ac_name = document.querySelector('.accent')
let ac_price = document.querySelector('.ap')
let abs_img = document.querySelector('.albanysectional')
let abs_name = document.querySelector('.albany')
let abs_price = document.querySelector('.ab')
let at_img = document.querySelector('.albanytable')
let at_name = document.querySelector('.alt')
let at_price = document.querySelector('.at')

let dt_img = document.querySelector('.diningtable')
let dt_name = document.querySelector('.dining')
let dt_price = document.querySelector('.dt')
let emp_img = document.querySelector('.emperorbed')
let emp_name = document.querySelector('.emperor')
let emp_price = document.querySelector('.em')
let et_img = document.querySelector('.etc')
let et_name = document.querySelector('.ent')
let et_price = document.querySelector('.en')

let hbb_img = document.querySelector('.highbackbench')
let hbb_name = document.querySelector('.hbb')
let hbb_price = document.querySelector('.hb')
let ls_img = document.querySelector('.leathersofa')
let ls_name = document.querySelector('.ls')
let ls_price = document.getElementById('ls')
let mbs_img = document.querySelector('.bookshelf')
let mbs_name = document.querySelector('.mb')
let mbs_price = document.getElementById('mb')

let ss_img = document.querySelector('.sofaset')
let ss_name = document.querySelector('.ss')
let ss_price = document.getElementById('ss')
let us_img = document.querySelector('.utopiasofa')
let us_name = document.querySelector('.us')
let us_price = document.getElementById('us')

let chairs = [{
    img: './Images/High-Back bench.jpeg',
    name: 'High-Back Bench',
    price: '$85.69'
}, {
    img: './Images/Accent Chair.jpeg',
    name: 'Accent Chair',
    price: '$33.99'
}]

let sofas = [{
    img: './Images/Leather Sofa.jpeg',
    name: 'Leather Sofa',
    price: '$61.52'
}, {
    img: './Images/Sofa Set.jpeg',
    name: 'Sofa Set',
    price: '$84.10'
}, {
    img: './Images/Utopia Sofa.jpeg',
    name: 'Utopia Sofa',
    price: '$99.99'
}]

let tables = [{
    img: './Images/Albany Table.jpeg',
    name: 'Albany Table',
    price: '$38.76'
},
{
    img: './Images/Dining Table.jpeg',
    name: 'Dining Table',
    price: '$97.58'
}, {
    img: './Images/Entertainment Center.jpeg',
    name: 'Entertainment Center',
    price: '$75.99'
}, {
    img: './Images/Modern Bookshelf.jpeg',
    name: 'Modern Bookshelf',
    price: '$24.00'
}]

let items = document.querySelectorAll('.variety')
items.forEach(item => {
    item.addEventListener('click', () => {
        if (item.innerHTML === 'Chairs') {
            showChairs()
        }
        else if (item.innerHTML === 'Table') {
            showTable()
        }
        else if (item.innerHTML === 'Sofas') {

            showSofas()
        }
        else if (item.innerHTML === 'Bed') {
            showBed()
        }
        else {
            location.reload()
        }

    })
})

function showChairs() {
    let chair1 = chairs[1]
    ac_img.src = chair1.img
    ac_name.textContent = chair1.name
    ac_price.textContent = chair1.price
    let chair2 = chairs[0]
    abs_img.src = chair2.img
    abs_name.textContent = chair2.name
    abs_price.textContent = chair2.price
    at_img.style.visibility = 'hidden'
    at_name.textContent = ''
    at_price.textContent = ''
    dt_img.style.visibility = 'hidden'
    dt_name.textContent = ''
    dt_price.textContent = ''
    emp_img.style.visibility = 'hidden'
    emp_name.textContent = ''
    emp_price.textContent = ''
    et_img.style.visibility = 'hidden'
    et_name.textContent = ''
    et_price.textContent = ''
    hbb_img.style.visibility = 'hidden'
    hbb_name.textContent = ''
    hbb_price.textContent = ''
    ls_img.style.visibility = 'hidden'
    ls_name.textContent = ''
    ls_price.textContent = ''
    mbs_img.style.visibility = 'hidden'
    mbs_name.textContent = ''
    mbs_price.textContent = ''
    ss_img.style.visibility = 'hidden'
    ss_name.textContent = ''
    ss_price.textContent = ''
    us_img.style.visibility = 'hidden'
    us_name.textContent = ''
    us_price.textContent = ''
}


function showTable() {
    let table1 = tables[0]
    ac_img.src = table1.img
    ac_name.textContent = table1.name
    ac_price.textContent = table1.price
    let table2 = tables[1]
    abs_img.src = table2.img
    abs_name.textContent = table2.name
    abs_price.textContent = table2.price
    let table3 = tables[2]
    at_img.src = table3.img
    at_name.textContent = table3.name
    at_price.textContent = table3.price
    let table4 = tables[3]
    dt_img.src = table4.img
    dt_name.textContent = table4.name
    dt_price.textContent = table4.price
    emp_img.style.visibility = 'hidden'
    emp_name.textContent = ''
    emp_price.textContent = ''
    et_img.style.visibility = 'hidden'
    et_name.textContent = ''
    et_price.textContent = ''
    hbb_img.style.visibility = 'hidden'
    hbb_name.textContent = ''
    hbb_price.textContent = ''
    ls_img.style.visibility = 'hidden'
    ls_name.textContent = ''
    ls_price.textContent = ''
    mbs_img.style.visibility = 'hidden'
    mbs_name.textContent = ''
    mbs_price.textContent = ''
    ss_img.style.visibility = 'hidden'
    ss_name.textContent = ''
    ss_price.textContent = ''
    us_img.style.visibility = 'hidden'
    us_name.textContent = ''
    us_price.textContent = ''
}

function showSofas() {
    let sofa1 = sofas[0]
    ac_img.src = sofa1.img
    ac_name.textContent = sofa1.name
    ac_price.textContent = sofa1.price
    let sofa2 = sofas[1]
    abs_img.src = sofa2.img
    abs_name.textContent = sofa2.name
    abs_price.textContent = sofa2.price

    let sofa3 = sofas[2]
    at_img.src = sofa3.img
    at_name.textContent = sofa3.name
    at_price.textContent = sofa3.price
    dt_img.style.visibility = 'hidden'
    dt_name.textContent = ''
    dt_price.textContent = ''
    emp_img.style.visibility = 'hidden'
    emp_name.textContent = ''
    emp_price.textContent = ''
    et_img.style.visibility = 'hidden'
    et_name.textContent = ''
    et_price.textContent = ''
    hbb_img.style.visibility = 'hidden'
    hbb_name.textContent = ''
    hbb_price.textContent = ''
    ls_img.style.visibility = 'hidden'
    ls_name.textContent = ''
    ls_price.textContent = ''
    mbs_img.style.visibility = 'hidden'
    mbs_name.textContent = ''
    mbs_price.textContent = ''
    ss_img.style.visibility = 'hidden'
    ss_name.textContent = ''
    ss_price.textContent = ''
    us_img.style.visibility = 'hidden'
    us_name.textContent = ''
    us_price.textContent = ''
}

function showBed() {
    ac_img.src = emp_img.src
    ac_name.textContent = emp_name.textContent
    ac_price.textContent = emp_price.textContent
    abs_img.style.visibility = 'hidden'
    abs_name.textContent = ''
    abs_price.textContent = ''
    at_img.style.visibility = 'hidden'
    at_name.textContent = ''
    at_price.textContent = ''
    dt_img.style.visibility = 'hidden'
    dt_name.textContent = ''
    dt_price.textContent = ''
    emp_img.style.visibility = 'hidden'
    emp_name.textContent = ''
    emp_price.textContent = ''
    et_img.style.visibility = 'hidden'
    et_name.textContent = ''
    et_price.textContent = ''
    hbb_img.style.visibility = 'hidden'
    hbb_name.textContent = ''
    hbb_price.textContent = ''
    ls_img.style.visibility = 'hidden'
    ls_name.textContent = ''
    ls_price.textContent = ''
    mbs_img.style.visibility = 'hidden'
    mbs_name.textContent = ''
    mbs_price.textContent = ''
    ss_img.style.visibility = 'hidden'
    ss_name.textContent = ''
    ss_price.textContent = ''
    us_img.style.visibility = 'hidden'
    us_name.textContent = ''
    us_price.textContent = ''
}
