const childCheckboxes = document.querySelectorAll("input.child");
const parentCheckbox = document.querySelector("input.parent");

for (let i = 0; i < childCheckboxes.length; i++) {
  childCheckboxes[i].onclick = () => {
    const checkedCount = document.querySelectorAll(
      "input.child:checked"
    ).length;

    parentCheckbox.checked = checkedCount > 0;
    parentCheckbox.indeterminate =
      checkedCount > 0 && checkedCount < childCheckboxes.length;
  };

  parentCheckbox.onclick = () => {
    for (let i = 0; i < childCheckboxes.length; i++) {
      childCheckboxes[i].checked = parentCheckbox.checked;
    }
  };
}
