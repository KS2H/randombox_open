document.addEventListener('DOMContentLoaded', () => {
    const boxImages = [
        'images/box1.png',
        'images/box2.png',
        'images/box3.png',
        'images/box4.png'
    ];
    let currentIndex = 0;
    const boxImageElement = document.getElementById('boxImage');

    const interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % boxImages.length;
        boxImageElement.src = boxImages[currentIndex];

        if (currentIndex === boxImages.length - 1) {
            clearInterval(interval);
        }
    }, 500);

    boxImageElement.addEventListener('click', drawRandomGift);
});

function drawRandomGift() {
    const gifts = [
        { src: 'images/gift1.png', probability: 0.5 },
        { src: 'images/gift2.png', probability: 0.3 },
        { src: 'images/gift3.png', probability: 0.2 },
        // 여기에 추가 선물 이미지와 확률을 추가하세요.
    ];

    const randomValue = Math.random();
    let cumulativeProbability = 0;

    for (const gift of gifts) {
        cumulativeProbability += gift.probability;
        if (randomValue < cumulativeProbability) {
            const giftContainer = document.getElementById('giftContainer');
            giftContainer.innerHTML = `<img src="${gift.src}" alt="Gift">`;
            giftContainer.classList.remove('show'); // 애니메이션 초기화
            setTimeout(() => {
                giftContainer.classList.add('show'); // 애니메이션 시작
            }, 10); // 약간의 지연 후 클래스 추가로 애니메이션 트리거
            break;
        }
    }
}
