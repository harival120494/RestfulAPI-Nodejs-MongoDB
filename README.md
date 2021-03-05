<H3>RESTFUL API MENGGUNAKAN NODE.JS DAN DATABASE MONGODB</H3>


<h5>Format Data Untuk Input Absensi</h5>
<hr/>

<pre>
{
    nik: String,                // Nomor Induk Karyawan
    nama: String,               // Nama Karyawan
    tanggal: String,            // Tanggal Absen
    jamMasuk: String,           // Jam Masuk Karyawan Saat Absen
    actJamMasuk: String,        // Jam masuk yang di tetapkan
    sttKehadiran: String        // Status kehadiran ( H, A, I, C)
}
</pre>


1.	API Untuk menampilkan semua data
http://localhost:3000/absensi
 ![all](https://user-images.githubusercontent.com/33562224/109934519-373a3b80-7cff-11eb-90e9-d46ff357168d.png)

2.	API untuk input data absensi (check in) (POST METHOD)
http://localhost:3000/absensi/check-in
 ![check-in](https://user-images.githubusercontent.com/33562224/109934685-605acc00-7cff-11eb-9291-9fb6785466ec.png)

3.	API untuk update data absensi
http://localhost:3000/absensi/absensi-update/604081f12d3f460cf0713e62
![update](https://user-images.githubusercontent.com/33562224/109934791-7b2d4080-7cff-11eb-9328-aa833c7e6b0f.png)
 
4.	API untuk menampilkan data berdasarkan ID
http://localhost:3000/absensi/absensi-get/604081f12d3f460cf0713e62
![get_byid](https://user-images.githubusercontent.com/33562224/109934877-8f713d80-7cff-11eb-9bc5-8d44667f800c.png)
 
5.	API untuk menghapus data berdasarkan ID
http://localhost:3000/absensi/delete-absen-byid/604081f12d3f460cf0713e62
![delete](https://user-images.githubusercontent.com/33562224/109934940-a1eb7700-7cff-11eb-9169-e165a312aab9.png)
 
6.	API untuk menampilkan report data Menggunakan Method GET
Report ini di generate menggunakan periode tanggal.
<h3>Menggunakan Method GET</h3>
http://localhost:3000/absensi/report-absensi/[date1]/[date2] /[jenis_kehadiran] /[nik]

<h3>Menggunakan Method POST</h3>
http://localhost:3000/absensi/report-absensi

<pre>
{
    "date1": "2021-02-19",
    "date2": "2021-03-10",
    "typeofattd": "hadir",
    "nik": "1001"
}
</pre>

a. Menampilkan data yang hadir berdasarkan periode tanggal pada seorang karyawan
http://localhost:3000/absensi/report-absensi/2021-02-19/2021-03-10/hadir/1001

b. Menampilkan data yang izin berdasarkan periode tanggal pada seorang karyawan
http://localhost:3000/absensi/report-absensi/2021-02-19/2021-03-10/izin/1001

c. Menampilkan data yang absen berdasarkan periode tanggal pada seorang karyawan
http://localhost:3000/absensi/report-absensi/2021-02-19/2021-03-10/alfa/1001

d. Menampilkan data yang cuti berdasarkan periode tanggal pada seorang karyawan
http://localhost:3000/absensi/report-absensi/2021-02-19/2021-03-10/cuti/1001

f. Menampilkan data seluruh jenis kehadiran berdasarkan periode tanggal pada seorang karyawan.
http://localhost:3000/absensi/report-absensi/2021-02-19/2021-03-10/all/1001



![report1](https://user-images.githubusercontent.com/33562224/109935019-ba5b9180-7cff-11eb-8b97-49196f62119f.png)
![report2](https://user-images.githubusercontent.com/33562224/109935118-d2cbac00-7cff-11eb-876b-255ac7c5333e.png)



