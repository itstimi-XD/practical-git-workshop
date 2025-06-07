// 데이터베이스 연동 모듈
// 🚨 이 커밋은 팀원 A가 작업한 중요한 커밋입니다!
// force push로 인해 사라질 위험이 있습니다.

const Database = {
    // 데이터베이스 연결 설정
    config: {
        host: 'localhost',
        port: 5432,
        database: 'workshop_db',
        user: 'admin',
        password: process.env.DB_PASSWORD,
        ssl: true,
        connectionTimeout: 30000
    },

    // 연결 풀
    pool: null,

    // 데이터베이스 초기화
    async init() {
        try {
            console.log('데이터베이스 연결 초기화 시작...');
            
            // 연결 풀 생성
            this.pool = new Pool(this.config);
            
            // 연결 테스트
            await this.testConnection();
            
            console.log('데이터베이스 연결 성공!');
            return true;
        } catch (error) {
            console.error('데이터베이스 연결 실패:', error);
            throw error;
        }
    },

    // 연결 테스트
    async testConnection() {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT NOW()');
            console.log('데이터베이스 시간:', result.rows[0].now);
        } finally {
            client.release();
        }
    },

    // 사용자 데이터 조회
    async getUser(userId) {
        const client = await this.pool.connect();
        try {
            const query = 'SELECT * FROM users WHERE id = $1';
            const result = await client.query(query, [userId]);
            return result.rows[0];
        } finally {
            client.release();
        }
    },

    // 사용자 데이터 생성
    async createUser(userData) {
        const client = await this.pool.connect();
        try {
            const query = `
                INSERT INTO users (name, email, created_at) 
                VALUES ($1, $2, NOW()) 
                RETURNING *
            `;
            const result = await client.query(query, [userData.name, userData.email]);
            return result.rows[0];
        } finally {
            client.release();
        }
    },

    // 연결 종료
    async close() {
        if (this.pool) {
            await this.pool.end();
            console.log('데이터베이스 연결 종료');
        }
    }
};

// 모듈 내보내기
module.exports = Database;