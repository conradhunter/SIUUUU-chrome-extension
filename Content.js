let siuImages = [
    "https://i.kym-cdn.com/entries/icons/mobile/000/039/420/CR7_siiii.jpg",
    "https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTY4MTcwMTMzMDEyMDk2Mzg0/screen_shot_2016-05-28_at_72024_pmpng.png",
    "https://img.bleacherreport.net/img/images/photos/003/601/921/0a6f6fcd936adfad4bdfe0c93c3d59f2_crop_exact.jpg?w=1200&h=1200&q=75"
];

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * siuImages.length);
    imgs[i].src = siuImages[randomImg];
}

const headers = document.getElementsByTagName("h2"); 
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "SIUUUUUU";
}