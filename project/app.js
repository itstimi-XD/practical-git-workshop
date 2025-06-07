// 실전 Git 실습용 JavaScript 파일
// 이 파일은 실제 코드 수정 실습에 사용됩니다.

const APP_NAME = 'Git Workshop App';
const VERSION = '1.0.0';

// 기본 설정
const config = {
    debug: false,
    apiUrl: 'https://api.example.com',
    timeout: 5000
};

// 메인 함수
function main() {
    console.log(`${APP_NAME} v${VERSION} 시작`);
    console.log('실습 환경이 준비되었습니다!');
}

// 유틸리티 함수
function formatDate(date) {
    return date.toISOString().split('T')[0];
}

// 앱 시작
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { main, formatDate, config };
} else {
    main();
}