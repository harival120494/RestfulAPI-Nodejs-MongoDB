var mongoose = require('mongoose');
var AbsensiSchema = new mongoose.Schema({
    nik: String,
    nama: String,
    tanggal: String,
    jamMasuk: String,
    actJamMasuk: String,
    sttKehadiran: String
}, { collection: 'absensi' });

module.exports = mongoose.model('absensi', AbsensiSchema);