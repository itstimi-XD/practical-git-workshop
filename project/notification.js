// 알림 시스템 모듈
// 🎆 이 기능은 PR 워크플로우 실습을 위한 기능입니다

const NotificationSystem = {
    // 알림 설정
    config: {
        position: 'top-right',
        duration: 5000,
        maxNotifications: 5,
        enableSound: true
    },

    // 알림 목록
    notifications: [],

    // 시스템 초기화
    init() {
        console.log('알림 시스템 초기화');
        this.createContainer();
        this.bindEvents();
    },

    // 알림 컨테이너 생성
    createContainer() {
        const container = document.createElement('div');
        container.id = 'notification-container';
        container.className = `notification-container ${this.config.position}`;
        document.body.appendChild(container);
    },

    // 이벤트 바인딩
    bindEvents() {
        // 전역 알림 이벤트 리스너
        document.addEventListener('notification:show', (event) => {
            this.show(event.detail);
        });
    },

    // 알림 표시
    show(options) {
        const notification = {
            id: Date.now(),
            type: options.type || 'info',
            title: options.title || '',
            message: options.message || '',
            duration: options.duration || this.config.duration
        };

        // 최대 알림 수 체크
        if (this.notifications.length >= this.config.maxNotifications) {
            this.remove(this.notifications[0].id);
        }

        this.notifications.push(notification);
        this.render(notification);

        // 자동 제거
        if (notification.duration > 0) {
            setTimeout(() => {
                this.remove(notification.id);
            }, notification.duration);
        }

        // 사운드 재생
        if (this.config.enableSound) {
            this.playSound(notification.type);
        }
    },

    // 알림 렌더링
    render(notification) {
        const container = document.getElementById('notification-container');
        const element = document.createElement('div');
        element.id = `notification-${notification.id}`;
        element.className = `notification notification-${notification.type}`;
        
        element.innerHTML = `
            <div class="notification-content">
                <div class="notification-title">${notification.title}</div>
                <div class="notification-message">${notification.message}</div>
            </div>
            <button class="notification-close" onclick="NotificationSystem.remove(${notification.id})">×</button>
        `;

        container.appendChild(element);

        // 애니메이션 효과
        setTimeout(() => {
            element.classList.add('show');
        }, 10);
    },

    // 알림 제거
    remove(notificationId) {
        const element = document.getElementById(`notification-${notificationId}`);
        if (element) {
            element.classList.add('hide');
            setTimeout(() => {
                element.remove();
            }, 300);
        }

        // 배열에서 제거
        this.notifications = this.notifications.filter(n => n.id !== notificationId);
    },

    // 사운드 재생
    playSound(type) {
        // 사운드 파일 재생 로직
        console.log(`${type} 알림 사운드 재생`);
    },

    // 모든 알림 제거
    clear() {
        this.notifications.forEach(notification => {
            this.remove(notification.id);
        });
    }
};

// 전역 함수
window.showNotification = function(options) {
    NotificationSystem.show(options);
};

// 모듈 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NotificationSystem;
} else {
    document.addEventListener('DOMContentLoaded', () => {
        NotificationSystem.init();
    });
}