let express = require('express');
const { route } = require('../app.js');
const { deleteOne } = require('../models/Absensi.js');
let router = express.Router();
// const { route } = require('../app.js');
let Absensi = require('../models/Absensi.js');

//function get all data from database
router.get('/', function (req, res, next) {
	Absensi.find(function (err, absensi) {
		if (err) { res.json({ status: "error", message: err }) }
		res.json({ status: "success", data: absensi });
	});
});


//function create data by using method post
router.post('/check-in', function (req, res) {
	let bodyData = new Absensi();
	bodyData.nik = req.body.nik;
	bodyData.nama = req.body.nama;
	bodyData.tanggal = new Date(`${req.body.tanggal}Z`).toISOString();
	bodyData.jamMasuk = req.body.jamMasuk;
	bodyData.actJamMasuk = req.body.actJamMasuk;
	bodyData.sttKehadiran = req.body.sttKehadiran;
	bodyData.save()
		.then(item => {
			res.send({ status: "success", message: "Data absensi berhasil disimpan !" });
		})
		.catch(err => {
			res.status(400).send({ status: "Error", message: "Data absensi gagal disimpan !" });
		});
});

//function tu Update data by using put method
router.put('/absensi-update/:_id', function (req, res) {
	Absensi.updateOne({ _id: req.params._id },
		// get data from request body
		{
			nik: req.body.nik,
			nama: req.body.nama,
			tanggal: req.body.tanggal,
			jamMasuk: req.body.jamMasuk,
			actJamMasuk: req.body.actJamMasuk,
			sttKehadiran: req.body.sttKehadiran
		},
		function (error, absensi) {
			if (error) res.send(error);
			res.json({ status: "success", message: `Data dengan id ${req.params._id} berhasi di update!` });
		});
});


//function get data by id
router.get('/absensi-get/:_id', function (req, res) {
	Absensi.find({ _id: req.params._id }, function (error, absensi) {
		if (error) res.send(error);
		res.json(absensi);
	});
});

//function delete data
router.get('/delete-absen-byid/:_id', function (req, res) {
	Absensi.deleteOne({ _id: req.params._id },
		function (error) {
			if (error) res.send(error);
			res.json({ status: "success", message: `Data dengan id ${req.params._id} berhasi di hapus!` });
		});
})

//function reporting base on date period and type of attendance (Hadir, Izin, Cuti, Alfa) By GET Method
router.get('/report-absensi/:date1/:date2/:typeofattd/:nik', function (req, res) {
	let date1 = req.params.date1;
	let date2 = req.params.date2;
	let toa = (req.params.typeofattd).toLowerCase();
	let nik = req.params.nik;
	let jenis_report = toa == "hadir" ? "H" : (toa == "izin" ? "I" : (toa == "cuti" ? "C" : (toa == "alfa" ? "A" : ( toa == "telat" ? "T" : "All"))));

	let where;
	if(jenis_report == "All")
	{
		where = { tanggal:{$gte:date1, $lte:date2}, nik:nik };
	}
	else if(jenis_report == "T")
	{
		where = where = { tanggal:{$gte:date1, $lte:date2}, nik:nik, jamMasuk:{$gt:"08:00"} }
	}
	else {where = { tanggal:{$gte:date1, $lte:date2}, nik:nik, sttKehadiran:jenis_report };}

	Absensi.find( where,
		function (error, absensi) {
			if (error) res.send(error);
			res.json({data:absensi, total:absensi.length, note:jenis_report== "T" ? "Hadir dengan status telat" :"-"});
		}).sort({tanggal:"1"});
});

module.exports = router;