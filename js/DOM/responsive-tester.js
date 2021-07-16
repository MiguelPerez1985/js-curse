
const d = document,
w = window;
export default function responsiveTest(form) {
    d.addEventListener('submit', e=>{
        let $form = d.getElementById(form)
        //console.log(d.querySelector(url).value, d.querySelector(height).value, d.querySelector(width).value);
        if(e.target===$form){
           e.preventDefault();
           w.open($form.URL.value,"a", `width=${$form.width.value},height=${$form.height.value}`);

        }
    })
}
