// 🚨 실수: main 브랜치에서 직접 개발한 로그인 기능
// 이 파일은 feature 브랜치에서 개발했어야 합니다!

const LoginForm = {
    // 로그인 폼 초기화
    init() {
        console.log('로그인 폼 초기화');
        this.bindEvents();
    },

    // 이벤트 바인딩
    bindEvents() {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.addEventListener('click', this.handleLogin.bind(this));
        }
    },

    // 로그인 처리
    async handleLogin(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            alert('이메일과 비밀번호를 입력해주세요.');
            return;
        }
        
        try {
            const response = await this.authenticate(email, password);
            if (response.success) {
                this.redirectToHome();
            } else {
                alert('로그인에 실패했습니다.');
            }
        } catch (error) {
            console.error('로그인 오류:', error);
            alert('로그인 중 오류가 발생했습니다.');
        }
    },

    // 인증 API 호출
    async authenticate(email, password) {
        // 실제로는 서버 API를 호출해야 합니다
        return new Promise((resolve) => {
            setTimeout(() => {
                // 간단한 더미 인증
                const isValid = email === 'test@example.com' && password === 'password';
                resolve({ success: isValid });
            }, 1000);
        });
    },

    // 홈페이지로 리다이렉트
    redirectToHome() {
        window.location.href = '/home';
    }
};

// 페이지 로드 시 초기화
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LoginForm;
} else {
    document.addEventListener('DOMContentLoaded', () => {
        LoginForm.init();
    });
}