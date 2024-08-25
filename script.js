/*Author    : Wafa Rifqi Anafin*/
/*Github    : https://github.com/wafarifki*/
/*Facebook  : https://facebook.com/wafarifkianafin*/
/*Instagram : https://instagram.com/wafarifki_*/
/*Website   : https://wafarifki.tk*/

var pages = new Array('halaman1', 'halaman2', 'halaman3', 'halaman4');

function klikMenu() {
  document.getElementsByClassName('dalemnya_kontener')[0].classList.toggle('buka_menu');
}

function PindahKeHalaman(page) {
  var dalemnya_kontener = document.getElementsByClassName('dalemnya_kontener')[0];
  var sections = document.getElementsByClassName('dalemnya_halaman');

  // Hapus kelas 'before' dan 'after' dari semua section
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.remove('before', 'after');
    
    // Tambahkan kelas 'after' jika section lebih besar dari page
    if (i > page) {
      sections[i].classList.add('after');
    }
  }
  
  // Hapus kelas 'buka_menu' dan kelas halaman sebelumnya
  dalemnya_kontener.classList.remove('buka_menu', 'page-halaman1', 'page-halaman2', 'page-halaman3', 'page-halaman4');
  
  // Tambahkan kelas halaman yang sesuai
  dalemnya_kontener.classList.add('page-halaman' + (page + 1)); // page + 1 karena kelas dimulai dari 1
}