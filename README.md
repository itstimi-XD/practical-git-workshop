# 🎯 회사에서 안 혼나는 실전 Git : 실수로 배우는 협업 꿀팁

> 🚨 **실무에서 이런 적 있나요?**  
> "어, main에서 작업했네요?", "커밋 메시지가 전부 '수정'이에요", "충돌 해결하다가 코드 날렸어요"  
> 
> 이런 Git 실수들을 **안전하게 체험**하고 **확실한 해결법**을 배우는 강의입니다!

## 🔥 이런 실수들, 경험해보셨나요?

### ❌ 실수 #1: "main에서 작업했어요…"
```bash
# 급해서 브랜치 안 만들고 바로 커밋
git add .
git commit -m "급한 기능 추가"
# 😱 이제 어떻게 하지?
```

### ❌ 실수 #2: "커밋 메시지가 전부 '수정'이에요"
```bash
git commit -m "수정"
git commit -m "또 수정" 
git commit -m "진짜 마지막 수정"
# 😅 나중에 뭘 수정했는지 기억이...
```

### ❌ 실수 #3: "충돌났는데 아무거나 선택했어요"
```bash
# 충돌 발생!
<<<<<<< HEAD
중요한 코드
=======
다른 중요한 코드
>>>>>>> feature-branch
# 🤔 어떤 걸 선택해야 하지?
```

### ❌ 실수 #4: "amend 했는데 푸시를 안 했어요"
```bash
git commit --amend -m "수정된 메시지"
# 푸시 깜빡... 다른 작업 계속...
git push origin main
# 💥 에러 발생!
```

### ❌ 실수 #5: "stash 했는데 잊었어요"
```bash
git stash
# 다른 작업...
# 어? 내 코드가 어디 갔지? 😰
```

### ❌ 실수 #6: "force push로 히스토리를 날렸어요"
```bash
git push --force origin main
# 팀원: "제 커밋이 사라졌어요!" 😭
```

## ✅ 이 강의에서 배우는 것

- 🛡️ **실수 예방법**: 애초에 문제가 생기지 않게 하는 방법
- 🔧 **안전한 해결법**: 문제가 생겼을 때 안전하게 해결하는 방법  
- 🤝 **팀 협업 전략**: 팀원과 충돌하지 않고 협업하는 방법
- 📚 **실무 꿀팁**: 실제 회사에서 쓰이는 Git 노하우

## 🚀 강의 진행 방식

**실시간 체험형 강의**
1. 강의자가 **실제로 실수를 재현**
2. "왜 이 방법이 문제인지" **원인 분석**
3. "어떻게 해결할지" **단계별 해결**
4. "앞으로 어떻게 예방할지" **예방 전략**

## 📋 수강 전 준비사항

### 1. Git 설치 확인
```bash
git --version
# Git 2.x 이상 권장
```

### 2. 사용자 정보 설정 (처음이라면)
```bash
git config --global user.name "본인 이름"
git config --global user.email "본인 이메일"
```

### 3. 레포지토리 준비
```bash
# 1단계: 이 레포지토리를 Fork (우측 상단 Fork 버튼 클릭)
# 2단계: 포크한 레포지토리를 클론
git clone https://github.com/YOUR_USERNAME/practical-git-workshop.git
cd practical-git-workshop
```

> ⚠️ **중요**: 직접 클론하지 마세요! 반드시 **Fork 후 클론**해야 푸시 권한이 있어서 실습을 진행할 수 있습니다.

### 4. 터미널/명령 프롬프트 준비
- Windows: Git Bash, PowerShell, 또는 CMD
- macOS/Linux: Terminal
- 강의 중 명령어를 함께 따라 실행합니다

## 🎯 학습 목표

강의 후 이런 것들을 할 수 있게 됩니다:

- ✅ **브랜치 전략** 이해하고 올바르게 사용하기
- ✅ **의미있는 커밋 메시지** 작성하고 히스토리 정리하기
- ✅ **충돌 상황**에서 당황하지 않고 안전하게 해결하기
- ✅ **amend, stash** 등 고급 기능 안전하게 활용하기
- ✅ **force push 사고** 예방하고 발생 시 복구하기
- ✅ **팀 협업**에서 Git 관련 갈등 없이 일하기

## 💡 이런 분께 추천

- 🔰 **Git 초보자**: 기본은 알지만 실수가 무서운 분
- 👥 **팀 협업 시작**: 혼자 쓰다가 팀에서 쓰기 시작한 분  
- 🚨 **실수 경험자**: Git 때문에 문제를 겪어본 분
- 🎯 **실무 적용**: 회사에서 Git을 제대로 쓰고 싶은 분

## 🤝 강의 중 참여 방법

- 💬 **질문 언제든지**: 이해가 안 되면 바로 질문하세요
- 👥 **함께 실습**: 강의자와 같은 명령어를 따라 실행
- 🔄 **실수해도 OK**: 모든 실수는 복구 가능합니다
- 📢 **경험 공유**: 비슷한 경험이 있다면 공유해주세요

## 📚 추가 학습 자료

### 🌐 온라인 리소스
- [Git 공식 문서](https://git-scm.com/doc) - 가장 정확한 정보
- [Learn Git Branching](https://learngitbranching.js.org/) - 시각적 Git 학습
- [GitHub Skills](https://skills.github.com/) - GitHub 공식 학습 과정

### 📖 추천 도서
- "Pro Git" (무료 온라인 제공)
- "Git Pocket Guide"

### 🛠️ 유용한 도구
- [GitKraken](https://www.gitkraken.com/) - GUI Git 클라이언트
- [Sourcetree](https://www.sourcetreeapp.com/) - 무료 Git GUI
- [Oh My Zsh](https://ohmyz.sh/) - 터미널 Git 정보 표시

## 🎉 시작하기

준비가 되었다면 강의자와 함께 시작해보세요!

```bash
# 현재 상태 확인
pwd
git status
git log --oneline -5
```

---

**💪 목표: 회사에서 Git 때문에 혼나지 않고, 오히려 칭찬받는 개발자 되기!**