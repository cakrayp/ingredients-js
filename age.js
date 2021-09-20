/**  (UPDATE UMUR TANPA PERLU DIUPDATE)
 *  ENG X IND   
 * Caranya kalian tinggal copy & paste untuk khusus update umur
 * All you have to do is copy and paste for age updates
 * 
 * Penjelasan
 * jika tahun sekarang dikurang tahun lahir 
 * maka hasilnya seperti ini dibawah.
 * 
 * Misalnya jihan lahir tahun 2005
 * 2021 - 2005 = 16
 */


function umur() {
    var today = new Date();
    var date = '2005-08-18' //TANGGAL LAHIR ( BIRTHDAY )
    var birthday = new Date(date);
    var year = 0;
    if (today.getMonth() < birthday.getMonth()) {
        year = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        year = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - year;

    if(age < 0){
        age = 0;
    }
    console.log('age : '+- year)
    console.log('Your age : '+age)
}
umur()