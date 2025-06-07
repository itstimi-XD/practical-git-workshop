// 사용자 프로필 기능
// 🚨 이 커밋은 amend로 수정되어야 하지만 아직 push되지 않은 상태입니다!

const UserProfile = {
    // 프로필 데이터
    profileData: {
        name: '',
        email: '',
        avatar: '',
        bio: ''
    },

    // 프로필 초기화
    init() {
        console.log('사용자 프로필 모듈 초기화');
        this.loadProfile();
        this.bindEvents();
    },

    // 프로필 데이터 로드
    async loadProfile() {
        try {
            // API에서 프로필 데이터 가져오기
            const response = await fetch('/api/profile');
            this.profileData = await response.json();
            this.renderProfile();
        } catch (error) {
            console.error('프로필 로드 오류:', error);
        }
    },

    // 프로필 렌더링
    renderProfile() {
        const profileContainer = document.getElementById('profile-container');
        if (profileContainer) {
            profileContainer.innerHTML = `
                <div class="profile-card">
                    <img src="${this.profileData.avatar}" alt="프로필 이미지" class="avatar">
                    <h2>${this.profileData.name}</h2>
                    <p class="email">${this.profileData.email}</p>
                    <p class="bio">${this.profileData.bio}</p>
                    <button id="edit-profile-btn">프로필 편집</button>
                </div>
            `;
        }
    },

    // 이벤트 바인딩
    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'edit-profile-btn') {
                this.showEditForm();
            }
        });
    },

    // 편집 폼 표시
    showEditForm() {
        // 편집 폼 로직 구현
        console.log('프로필 편집 폼 표시');
    }
};

// 모듈 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UserProfile;
} else {
    document.addEventListener('DOMContentLoaded', () => {
        UserProfile.init();
    });
}