/**
 * @author anymore1405
 * @github github.com/anymore1405
 * @email khactai14052000@gmail.com
 */

const cheerio = require('cheerio');
const rp = require('request-promise');

const host = ({BienKiemSoat, LoaiXe}) => 'http://www.csgt.vn/tra-cuu-phuong-tien-vi-pham.html?&LoaiXe=' + LoaiXe + '&BienKiemSoat=' + BienKiemSoat;

const loadHost = (req, callback) => {
    rp({uri: host(req)}).then(data=> {
        const $ = cheerio.load(data);
        const res = $('.form-horizontal').children('div').text();
        console.log(res);
        callback(res);
    });
}

module.exports = {loadHost};