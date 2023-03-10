window.onload = () => {
  
  const texts = document.querySelectorAll('.text-read-more');
  texts.forEach(text => {
    // value text
    const value = text.textContent;
    // text yang sudah dipotong menjadi pendek
    const newValue = `${text.textContent.substring(0, 150)} ...`;
    // tombol untuk menjalankan fungsi read and more
    const button = text.nextElementSibling;
    /*
      jika panjang value lebih dari 150, maka potong value
      menjadi pendek. jika tidak, maka tampilkan semua valuenya
    */
    text.textContent = (value.length > 150) ? newValue : value;
    // jika panjang value lebih dari 150, tampilkan button
    if (value.length > 150) button.style.display = 'block';
    // jalankan fungsi readMoreAndLess()
    readMoreAndLess(button, text, value, newValue);
  });
  
  function readMoreAndLess(button, text, oldValue, newValue) {
    // ketika tombol ditekan
    button.addEventListener('click', function() {
      // teks dari tombol
      const value = this.textContent.toLowerCase();
      /*
        jika teks tombol bertuliskan kata read more,
        maka ganti teks tombol menjadi read less. begitu juga sebaliknya
      */
      this.textContent = (value == 'read more') ? 'read less' : 'read more';
      /*
        jika teks tombol bertuliskan read more, maka tampilkan semua teks.
        tapi jika teks tombol bertuliskan read less, maka tampilkan teks pendeknya
      */
      text.textContent = (value == 'read more') ? oldValue : newValue;
    });
  }
  
}