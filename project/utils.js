// 유틸리티 함수들
// 🚨 나쁜 커밋 메시지 예시를 위한 파일

const Utils = {
    // 문자열 유틸리티
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    // 배열 유틸리티
    shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    // 날짜 유틸리티
    formatDateTime(date) {
        return date.toLocaleString('ko-KR');
    }
};

module.exports = Utils;