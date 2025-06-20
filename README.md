# 🚀 실전 Git 실습 레포지토리

> **회사에서 안 혼나는 실전 Git** 강의 실습용 레포지토리입니다.  
> 실무에서 자주 발생하는 Git 실수 상황을 체험하고 해결하는 실습 환경을 제공합니다.

## 📚 강의 구성

### ✅ 1강. 실수 #1 — "main에서 작업했어요…"
- **문제**: 브랜치 안 만들고 main에 커밋
- **실습 브랜치**: `feat/main-work-start` → `feat/main-work-solved`
- **학습 목표**: feature 브랜치 생성, PR 워크플로우 이해

### ✅ 2강. 실수 #2 — "커밋 메시지가 전부 '수정'이에요"
- **문제**: 의미 없는 커밋 메시지 → 히스토리 관리 어려움
- **실습 브랜치**: `feat/bad-commit-message-start` → `feat/bad-commit-message-solved`
- **학습 목표**: 커밋 컨벤션, rebase -i로 히스토리 정리

### ✅ 3강. 실수 #3 — "amend 했는데 푸시를 안 했어요"
- **문제**: amend만 하고 push를 안 해 커밋 꼬임 발생
- **실습 브랜치**: `feat/amend-without-push-start` → `feat/amend-without-push-solved`
- **학습 목표**: --amend, --force-with-lease 사용법

### ✅ 4강. 실수 #4 — "충돌났는데 아무거나 선택했어요"
- **문제**: conflict 상황에서 실수로 코드 손실
- **실습 브랜치**: `feat/conflict-start` + `feat/conflict-branch-b` → `feat/conflict-solved`
- **학습 목표**: 충돌 마커 이해, 안전한 충돌 해결

### ✅ 5강. 실수 #5 — "stash 했는데 잊었어요"
- **문제**: stash 후 잊어버려서 코드 유실
- **실습 브랜치**: `feat/stash-lost-start` → `feat/stash-lost-solved`
- **학습 목표**: stash 관리, 복구 방법

### ✅ 6강. 실수 #6 — "force push로 히스토리를 날렸어요"
- **문제**: 팀원 커밋을 덮어써버림
- **실습 브랜치**: `feat/force-push-start` → `feat/force-push-solved`
- **학습 목표**: 안전한 협업 전략, reflog 활용

### 🎁 보너스 미션: 실전 PR 리뷰 흐름 따라하기
- **실습 브랜치**: `feat/pr-flow-start` → `feat/pr-flow-solved`
- **학습 목표**: GitHub Flow, 머지 전략

## 🛠 실습 준비

### 1. 레포지토리 Fork & Clone
```bash
# 1. GitHub에서 이 레포지토리를 Fork 하세요
# 2. 본인의 Fork된 레포지토리를 Clone
git clone https://github.com/YOUR_USERNAME/practical-git-workshop.git
cd practical-git-workshop

# 3. 원본 레포지토리를 upstream으로 추가
git remote add upstream https://github.com/itstimi-XD/practical-git-workshop.git
```

### 2. 실습 브랜치 이동
```bash
# 각 강의에서 안내하는 브랜치로 이동
git checkout feat/main-work-start

# 브랜치 목록 확인
git branch -a
```

## 📁 레포지토리 구조

```
practical-git-workshop/
│
├── README.md                 ← 실습 안내 (현재 파일)
├── .gitignore
├── project/
│   ├── hello.txt             ← 충돌 실습용 파일
│   ├── feature.txt           ← 브랜치별 작업 분기 실습용
│   ├── app.js                ← 실제 코드 수정 실습용
│   ├── login.js              ← 로그인 기능 (1강 실습)
│   ├── profile.js            ← 프로필 기능 (3강 실습)
│   ├── search.js             ← 검색 기능 (5강 실습)
│   ├── database.js           ← DB 연동 (6강 실습)
│   ├── notification.js       ← 알림 시스템 (보너스 실습)
│   └── utils.js              ← 유틸리티 함수 (2강 실습)
├── guide/
│   ├── 실습_브랜치_가이드.md ← 브랜치별 상세 설명
│   ├── 커밋_컨벤션.md        ← 커밋 메시지 작성 가이드
│   └── Git_명령어_치트시트.md ← 자주 쓰는 Git 명령어 모음
└── docs/
    └── 강의_자료.md          ← 강의 중 참고 자료
```

## 🎯 실습 방법

1. **강의 영상을 보면서** 해당 브랜치로 checkout
2. **실수 상황을 직접 체험**하고 문제 상황 이해
3. **강사와 함께 해결 과정** 따라하기
4. **solved 브랜치와 비교**하여 올바른 해결법 확인

## 🌿 실습 브랜치 목록

### Start 브랜치 (실수 상황)
- `feat/main-work-start` - main에서 직접 작업한 상황
- `feat/bad-commit-message-start` - 나쁜 커밋 메시지들
- `feat/amend-without-push-start` - amend 후 push 안한 상황
- `feat/conflict-start` - 충돌 발생 상황
- `feat/conflict-branch-b` - 충돌용 보조 브랜치
- `feat/stash-lost-start` - stash에 작업이 저장된 상황
- `feat/force-push-start` - force push로 덮어쓸 위험 상황
- `feat/pr-flow-start` - PR 워크플로우 실습용

### Solved 브랜치 (해결 예시)
- `feat/main-work-solved` - 올바른 브랜치 전략 예시
- `feat/bad-commit-message-solved` - 정리된 커밋 히스토리
- `feat/amend-without-push-solved` - 올바른 amend + push
- `feat/conflict-solved` - 충돌 해결 완료
- `feat/stash-lost-solved` - stash 복구 완료
- `feat/force-push-solved` - 안전한 협업 전략
- `feat/pr-flow-solved` - 완성된 PR 워크플로우

## ⚠️ 주의사항

- 각 실습은 **독립적인 브랜치**에서 진행됩니다
- **Fork한 본인의 레포지토리**에서 실습하세요
- 실습 중 문제가 생기면 **해당 start 브랜치로 다시 checkout** 하세요
- **solved 브랜치**는 정답 확인용이니 먼저 보지 마세요! 😊

## 🚀 빠른 시작

```bash
# 1. 레포지토리 클론
git clone https://github.com/YOUR_USERNAME/practical-git-workshop.git
cd practical-git-workshop

# 2. 첫 번째 실습 시작
git checkout feat/main-work-start

# 3. 현재 상황 확인
git status
git log --oneline -5

# 4. 강의를 따라하며 문제 해결!
```

## 🤝 문의 및 피드백

실습 중 문제가 생기거나 개선 사항이 있다면 Issue를 남겨주세요!

## 📚 추가 자료

- [실습 브랜치 가이드](./guide/실습_브랜치_가이드.md)
- [커밋 컨벤션 가이드](./guide/커밋_컨벤션.md)
- [Git 명령어 치트시트](./guide/Git_명령어_치트시트.md)
- [강의 자료](./docs/강의_자료.md)

---

**🎉 이제 Git 마스터가 되어보세요!**