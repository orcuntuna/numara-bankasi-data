import $ from "jquery";
import { categories, numbers } from '../data';

$(function () {
  numbers.map((number, index) => {
    const number_category = categories.find(category => category.id === number.category_id);
    const number_image = number.image
      ? `<img src="${number.image}" alt="${number.name}" width="32" height="32" style="border-radius: 4px" />`
      : `<span class="badge badge-info">${number.list_number}</span>`;
    $("#data-body").append(`
      <tr>
        <td>${number_image}</td>
        <td>${number.name}</td>
        <td>${number_category.name}</td>
        <td><a href="tel:${number.number}" title="${number.name}">${number.number}</a></td>
      </tr>
    `)
  })
})