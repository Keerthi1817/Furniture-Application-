const chairItems = [
    {
        img: 'Images/High-Back bench.jpeg',
        name: 'High-Back Bench',
        price: '$85.69'
    },
    {
        img: 'Images/Accent Chair.jpeg',
        name: 'Accent Chair',
        price: '$33.99'
    }
];

const sofaItems = [
    {
        img: 'Images/Leather Sofa.jpeg',
        name: 'Leather Sofa',
        price: '$61.52'
    },
    {
        img: 'Images/Sofa Set.jpeg',
        name: 'Sofa Set',
        price: '$84.10'
    },
    {
        img: 'Images/Utopia Sofa.jpeg',
        name: 'Utopia Sofa',
        price: '$99.99'
    }
];

const tableItems = [
    {
        img: 'Images/Albany Table.jpeg',
        name: 'Albany Table',
        price: '$38.76'
    },
    {
        img: 'Images/Dining Table.jpeg',
        name: 'Dining Table',
        price: '$97.58'
    },
    {
        img: 'Images/Entertainment Center.jpeg',
        name: 'Entertainment Center',
        price: '$75.99'
    },
    {
        img: 'Images/Modern Bookshelf.jpeg',
        name: 'Modern Bookshelf',
        price: '$24.00'
    }
];

const acImg = document.querySelector('.accentchair');
const acName = document.querySelector('.accent');
const acPrice = document.querySelector('.ap');
const absImg = document.querySelector('.albanysectional');
const absName = document.querySelector('.albany');
const absPrice = document.querySelector('.ab');
const atImg = document.querySelector('.albanytable');
const atName = document.querySelector('.alt');
const atPrice = document.querySelector('.at');
const dtImg = document.querySelector('.diningtable');
const dtName = document.querySelector('.dining');
const dtPrice = document.querySelector('.dt');
const empImg = document.querySelector('.emperorbed');
const empName = document.querySelector('.emperor');
const empPrice = document.querySelector('.em');
const etImg = document.querySelector('.etc');
const etName = document.querySelector('.ent');
const etPrice = document.querySelector('.en');
const hbbImg = document.querySelector('.highbackbench');
const hbbName = document.querySelector('.hbb');
const hbbPrice = document.querySelector('.hb');
const lsImg = document.querySelector('.leathersofa');
const lsName = document.querySelector('.ls');
const lsPrice = document.getElementById('ls');
const mbsImg = document.querySelector('.bookshelf');
const mbsName = document.querySelector('.mb');
const mbsPrice = document.getElementById('mb');
const ssImg = document.querySelector('.sofaset');
const ssName = document.querySelector('.ss');
const ssPrice = document.getElementById('ss');
const usImg = document.querySelector('.utopiasofa');
const usName = document.querySelector('.us');
const usPrice = document.getElementById('us');
const items = document.querySelectorAll('.variety');

items.forEach(item => {
    item.addEventListener('click', () => {
        switch (item.innerHTML) {
            case 'Chairs':
                showItems(chairItems);
                break;
            case 'Table':
                showItems(tableItems);
                break;
            case 'Sofas':
                showItems(sofaItems);
                break;
            case 'Bed':
                showBed();
                break;
            default:
                location.reload();
                break;
        }
    });
});

function showItems(itemsArray) {
    hideAllElements();
    itemsArray.forEach((item, index) => {
        const itemImg = document.querySelector(`.${getItemClass(index, 'img')}`);
        const itemName = document.querySelector(`.${getItemClass(index, 'name')}`);
        const itemPrice = document.querySelector(`.${getItemClass(index, 'price')}`);
        itemImg.src = item.img;
        itemName.textContent = item.name;
        itemPrice.textContent = item.price;
        itemImg.style.visibility = 'visible';
    });
}

function getItemClass(index, type) {
    return `item${index + 1}-${type}`;
}

function hideAllElements() {
    [acImg, absImg, atImg, dtImg, empImg, etImg, hbbImg, lsImg, mbsImg, ssImg, usImg].forEach(img => {
        img.style.visibility = 'hidden';
    });
    [acName, absName, atName, dtName, empName, etName, hbbName, lsName, mbsName, ssName, usName].forEach(name => {
        name.textContent = '';
    });
    [acPrice, absPrice, atPrice, dtPrice, empPrice, etPrice, hbbPrice, lsPrice, mbsPrice, ssPrice, usPrice].forEach(price => {
        price.textContent = '';
    });
}

function showBed() {
    acImg.src = empImg.src;
    acName.textContent = empName.textContent;
    acPrice.textContent = empPrice.textContent;
    hideAllElements();
}

// Initial view
showItems(chairItems);
