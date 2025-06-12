const contentLetterSrart_actived = "Ấn vào hộp quà và cái thư" //Lời mở đầu cho bức thư
const mainContentLetter = "Happy New Year Chúc Thông có một ngày sinh nhật thật Chúc mừng sinh nhật Thông! Thêm một tuổi mới nữa lại đến, hy vọng rằng đây sẽ là một cột mốc đáng nhớ, mang đến cho bạn thật nhiều niềm vui và trải nghiệm tuyệt vời. Chúc Thông luôn khỏe mạnh, tràn đầy năng lượng để theo đuổi những mục tiêu của mình. Trong công việc, mong rằng bạn sẽ ngày càng phát triển, gặp nhiều may mắn và đạt được những thành công như mong muốn. Cuộc sống lúc nào cũng có thể có khó khăn, nhưng mong rằng bạn luôn giữ được sự kiên cường, lạc quan và không ngừng nỗ lực vượt qua tất cả. Tuổi mới chúc Thông gặp nhiều điều may mắn, luôn được bạn bè, gia đình yêu thương và đồng hành. Hy vọng những mối quan hệ xung quanh bạn luôn bền chặt, và sẽ có thêm thật nhiều người tốt ở bên cạnh sẻ chia mọi vui buồn. Đừng quên dành thời gian tận hưởng cuộc sống, khám phá những điều mới mẻ, và tạo ra nhiều kỷ niệm đẹp cho riêng mình. Nếu có lúc nào đó mệt mỏi, hãy nhớ rằng luôn có những người bạn sẵn sàng lắng nghe và ủng hộ bạn. Chúc cho mọi ước mơ của Thông sớm trở thành hiện thực. Hãy luôn tự tin, vui vẻ và giữ mãi nụ cười trên môi nhé! Một lần nữa, chúc mừng sinh nhật Thông – chúc bạn có một ngày thật đặc biệt và một năm mới thật nhiều điều ý nghĩa! 🥳🎈🎁  vẻ, ngập tràn hạnh phúc bên gia đình và bạn bè! Mong rằng tuổi mới sẽ mang đến cho Thông thật nhiều sức khỏe, thành công, và những trải nghiệm tuyệt vời. Hy vọng mọi ước mơ của Thông sẽ sớm trở thành hiện thực. Luôn giữ nụ cười tươi và tinh thần lạc quan nhé!" //Nội dung của bức thư

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/cute-young-boy-kid-wearing-vest-and-hat-free-png.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/b4bbdb54b7152338d7143cb444a77f09.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}
