// ✅ 올바른 방법: feature 브랜치에서 개발한 로그인 기능
// 이 파일은 올바른 Git 워크플로우를 따라 개발되었습니다!

const LoginForm = {
    // 로그인 폼 초기화
    init() {
        console.log('로그인 폼 초기화');
        this.bindEvents();
        this.setupValidation();
    },

    // 이벤트 바인딩
    bindEvents() {
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        
        if (loginBtn) {
            loginBtn.addEventListener('click', this.handleLogin.bind(this));
        }
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', this.handleLogout.bind(this));
        }
    },

    // 입력 유효성 검사 설정
    setupValidation() {
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        
        if (emailInput) {
            emailInput.addEventListener('blur', this.validateEmail.bind(this));
        }
        
        if (passwordInput) {
            passwordInput.addEventListener('blur', this.validatePassword.bind(this));
        }
    },

    // 이메일 유효성 검사
    validateEmail(event) {
        const email = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            this.showError('email', '올바른 이메일 형식을 입력해주세요.');
            return false;
        }
        
        this.clearError('email');
        return true;
    },

    // 비밀번호 유효성 검사
    validatePassword(event) {
        const password = event.target.value;
        
        if (password.length < 6) {
            this.showError('password', '비밀번호는 6자 이상이어야 합니다.');
            return false;
        }
        
        this.clearError('password');
        return true;
    },

    // 오류 메시지 표시
    showError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
        }
    },

    // 오류 메시지 제거
    clearError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        if (errorElement) {
            errorElement.style.display = 'none';
        }
    },

    // 로그인 처리
    async handleLogin(event) {
        event.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // 입력 유효성 검사
        if (!this.validateEmail({target: {value: email}}) || 
            !this.validatePassword({target: {value: password}})) {
            return;
        }
        
        if (!email || !password) {
            alert('이메일과 비밀번호를 입력해주세요.');
            return;
        }
        
        try {
            this.showLoading(true);
            const response = await this.authenticate(email, password);
            
            if (response.success) {
                // JWT 토큰 저장
                localStorage.setItem('authToken', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
                
                // 자동 로그아웃 설정
                this.setupAutoLogout(response.expiresIn);
                
                this.redirectToHome();
            } else {
                alert('로그인에 실패했습니다.');
            }
        } catch (error) {
            console.error('로그인 오류:', error);
            alert('로그인 중 오류가 발생했습니다.');
        } finally {
            this.showLoading(false);
        }
    },

    // 로딩 상태 표시
    showLoading(isLoading) {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.disabled = isLoading;
            loginBtn.textContent = isLoading ? '로그인 중...' : '로그인';
        }
    },

    // 인증 API 호출
    async authenticate(email, password) {
        // 실제로는 서버 API를 호출해야 합니다
        return new Promise((resolve) => {
            setTimeout(() => {
                // 간단한 더미 인증
                const isValid = email === 'test@example.com' && password === 'password123';
                resolve({ 
                    success: isValid,
                    token: isValid ? 'dummy-jwt-token' : null,
                    user: isValid ? { id: 1, name: '테스트 사용자', email } : null,
                    expiresIn: 3600000 // 1시간
                });
            }, 1000);
        });
    },

    // 자동 로그아웃 설정
    setupAutoLogout(expiresIn) {
        setTimeout(() => {
            this.handleLogout();
            alert('세션이 만료되어 자동 로그아웃됩니다.');
        }, expiresIn);
    },

    // 로그아웃 처리
    handleLogout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        window.location.href = '/login';
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