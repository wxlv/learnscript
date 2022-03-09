(function () {
    let obj = JSON.parse($response.body);
    obj = { "data": { "psnl_vip_property": { "expiry": "1716731200" } } };
    $done({ body: JSON.stringify(obj) });
})()