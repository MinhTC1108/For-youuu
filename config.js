// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Em bé oiiiii",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Thương Sữa iu lắm áaaaa 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Em có thương a hog?",
            yesBtn: "Có chớ",
            noBtn: "Không, thương làm gì",
            secretAnswer: "Có, thương ck iu cụa em lắm luôn á! 🥰"
        },

        second: {
            text: "Yêu a nhiều cỡ nào zaaa",
            startText: "Kéo thanh biểu diễn ik",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Hôm nay là ngày rất đặc biệt và anh có đôi lời gửi đến người cũng rất đặc biệt quan trong với anh nè🌹",
            yesBtn: "Đâu đâu, để xem anh viết gì cho em đây 🥰🥰",
            noBtn: "Ai thèm xem chớ 🙄🙄"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "Waaaaaa, a là ng hạnh phúc nhất vì được em yêu nhiều vậy 🥰💝",
        high: "Tr ơi, em yêu a tới vậy luôn hả💝",
        normal: "Thiệt hả 🥰"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Nhân ngày 20/10 này, a có đôi lời mún gửi đến Sữa của a nè💝💖💝💓",
        message: "Chúc công chúa của a ngày càng thật xinh đẹp và sẽ yêu a hơn từng ngày. Chúc e 20/10 thật vui vẻ và hạnh phúc. Và mãi luôn có a ở cạnh e!",
    },

    // Color scheme for the website
    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    // Animation settings
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music (Optional)
    // Nếu file upload lên repo có tên APM.mp3 thì URL phải là raw.githubusercontent.com...
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://raw.githubusercontent.com/MinhTC1108/For-youuu/main/APM.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Export for use in other scripts
window.DEFAULT_CONFIG = CONFIG;
window.VALENTINE_CONFIG = { ...CONFIG };
