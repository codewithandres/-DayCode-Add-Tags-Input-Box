
const ul = document.querySelector('ul');
const input = document.querySelector('input');

let tags = [];

const createTag = () => {

    [...ul.querySelectorAll('li')].every(li => li.remove());
    console.log(tags.slice().reverse());
    tags.slice().reverse().some(tag => {
        let liTag = `  <li>${tag} <i class="ri-close-fill"></i></li> `;
        ul.insertAdjacentHTML('afterbegin', liTag)
    });
};

const addTag = (e) => {
    if (e.key == 'Enter') {
        let tag = e.target.value.replace(/\s+/g, ' ');

        if (tag.length > 1 && !tags.includes(tag)) {

            tag.split(',').every(tag => {
                tags.push(tag);

                createTag();
            });
        };
        e.target.value = '';
    }
};

input.addEventListener('keyup', addTag);

