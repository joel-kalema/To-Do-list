import _ from 'lodash';
import './style.css';
 
const listsData = [
  {
    description: "start to learn",
    completed: false,
    index: 0
  },
  {
    description: "start to learn",
    completed: false,
    index: 1
  },
  {
    description: "start to learn",
    completed: false,
    index: 2
  },
  {
    description: "start to learn microverse",
    completed: false,
    index: 3
  }
];
const list = document.querySelector('.lists');

listsData.forEach((data) => {
  list.innerHTML +=`<div class="list">
  <input
    type="checkbox"
    id="task"
    name="task"
    value="task"
    class="checkbox"
  />
  <div class="text-area">${data.description}</div>
  <i class="fa fa-trash-o delete" aria-hidden="true"></i>
  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
</div>`
})