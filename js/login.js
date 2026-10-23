const tabs = document.querySelectorAll('.tab, .switch');
const forms = document.querySelectorAll('.form');
const allTabs = document.querySelectorAll('.tab');
 
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', function (e) {
    e.preventDefault();
    var t = this.dataset.t;
    for (var j = 0; j < allTabs.length; j++) {
      if (allTabs[j].dataset.t === t) {
        allTabs[j].classList.add('active');
      } else {
        allTabs[j].classList.remove('active');
      }
    }
    for (let k = 0; k < forms.length; k++) {
      if (forms[k].id === t) {
        forms[k].classList.add('active');
      } else {
        forms[k].classList.remove('active');
      }
    }
  });
}
 
const allForms = document.querySelectorAll('form');
 
for (let a = 0; a < allForms.length; a++) {
  allForms[a].addEventListener('submit', function (e) {
    e.preventDefault();
    if (this.id === 'reg') {
      var p1 = document.getElementById('pass1').value;
      var p2 = document.getElementById('pass2').value;
      if (p1 !== p2) {
        alert('Mật khẩu nhập lại không khớp!');
        return;
      }
    }
    alert('Thành công!');
  });
}
 
const socials = document.querySelectorAll('.social');
 
for (let b = 0; b < socials.length; b++) {
  socials[b].addEventListener('click', function () {
    alert('Đăng nhập bằng ' + this.title);
  });
}
 
const eyes = document.querySelectorAll('.eye');
 
for (let c = 0; c < eyes.length; c++) {
  eyes[c].addEventListener('click', function () {
    var input = this.parentElement.querySelector('input');
    if (input.type === 'password') {
      input.type = 'text';
      this.classList.remove('fa-eye');
      this.classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      this.classList.remove('fa-eye-slash');
      this.classList.add('fa-eye');
    }
  });
}
 
const cards = document.querySelectorAll('.card');
 
for (let d = 0; d < cards.length; d++) {
  cards[d].addEventListener('click', function () {
    alert('Ủng hộ qua ' + this.querySelector('.name').textContent);
  });
}
 
const modal = document.getElementById('modal');
const btnHelp = document.getElementById('btnHelp');
const btnClose = document.getElementById('btnClose');
 
if (btnHelp) {
  btnHelp.addEventListener('click', function () {
    modal.classList.add('show');
  });
}
 
if (btnClose) {
  btnClose.addEventListener('click', function () {
    modal.classList.remove('show');
  });
}
 
if (modal) {
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
}
 
const titles = document.querySelectorAll('.q-title');
 
for (let f = 0; f < titles.length; f++) {
  titles[f].addEventListener('click', function () {
    this.parentElement.classList.toggle('open');
  });
}
 