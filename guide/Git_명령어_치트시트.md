# 🚀 Git 명령어 치트시트

실습에서 자주 사용하는 Git 명령어들을 정리했습니다.

## 📁 기본 명령어

### 저장소 관리
```bash
# 저장소 복제
git clone <url>

# 원격 저장소 추가
git remote add origin <url>
git remote add upstream <url>

# 원격 저장소 확인
git remote -v
```

### 상태 확인
```bash
# 현재 상태 확인
git status

# 변경사항 확인
git diff
git diff --staged

# 커밋 히스토리 확인
git log --oneline
git log --oneline --graph
git log --oneline -5
```

## 🌿 브랜치 관리

```bash
# 브랜치 목록 확인
git branch
git branch -a  # 원격 브랜치 포함

# 브랜치 생성 및 이동 (권장)
git switch -c <branch-name>
git switch -c feature/user-login  # 디렉토리 구조 활용

# 브랜치 이동 (권장)
git switch <branch-name>
git switch main

# 이전 방식 (Git 2.23 이전)
git checkout -b <branch-name>  # ❌ 사용 지양, switch -c 사용 권장
git checkout <branch-name>     # ❌ 사용 지양, switch 사용 권장

# 브랜치 삭제
git branch -d <branch-name>
git branch -D <branch-name>  # 강제 삭제
```

## 💾 커밋 관리

```bash
# 파일 스테이징
git add <file>
git add .  # 모든 변경사항

# 커밋
git commit -m "커밋 메시지"
git commit -am "메시지"  # add + commit

# 커밋 수정
git commit --amend -m "새 메시지"
git commit --amend --no-edit  # 메시지 유지

# 커밋 되돌리기
git reset --soft HEAD~1  # 커밋만 취소
git reset --mixed HEAD~1  # 커밋 + 스테이징 취소
git reset --hard HEAD~1  # 모든 변경사항 취소
```

## 🔄 동기화

```bash
# 원격에서 가져오기
git fetch
git pull
git pull --rebase

# 원격으로 보내기
git push
git push origin <branch-name>
git push --force-with-lease  # 안전한 강제 푸시
```

## 🔀 병합 & 리베이스

```bash
# 병합
git merge <branch-name>

# 리베이스
git rebase <branch-name>
git rebase -i HEAD~3  # 인터랙티브 리베이스

# 충돌 해결 후
git add <resolved-files>
git rebase --continue
git merge --continue
```

## 📦 Stash 관리

```bash
# 임시 저장
git stash
git stash save "메시지"

# stash 목록 확인
git stash list

# stash 적용
git stash apply
git stash apply stash@{0}
git stash pop  # 적용 후 삭제

# stash 삭제
git stash drop stash@{0}
git stash clear  # 모든 stash 삭제
```

## 🔍 검색 & 히스토리

```bash
# 파일 히스토리
git log --follow <file>

# 특정 커밋 정보
git show <commit-hash>

# 변경사항 검색
git grep "검색어"

# 커밋 검색
git log --grep="검색어"

# reflog (복구용)
git reflog
```

## ⚠️ 위험한 명령어 (주의!)

```bash
# 강제 푸시 (팀 작업 시 위험)
git push --force

# 하드 리셋 (변경사항 완전 삭제)
git reset --hard

# 브랜치 강제 삭제
git branch -D <branch-name>
```

## 💡 유용한 팁

### 별칭(Alias) 설정
```bash
git config --global alias.st status
git config --global alias.sw switch
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lg "log --oneline --graph"
```

### 설정 확인
```bash
git config --list
git config user.name
git config user.email
```

### 도움말
```bash
git help <command>
git <command> --help
```

## 🎯 실습별 주요 명령어

### 1강 - main에서 작업 실수 (15분)
- `git switch -c feature/login-function`
- `git switch main`
- `git reset --hard HEAD~1`

### 2강 - 커밋 메시지 문제 (15분)
- `git rebase -i HEAD~3`
- `git commit --amend -m "feat: 로그인 기능 추가"`

### 3강 - amend 후 푸시 문제 (15분)
- `git commit --amend --no-edit`
- `git push --force-with-lease origin feature/user-login`

### 4강 - 충돌 해결 실수 (20분)
- `git merge feature/user-profile`
- `git add <resolved-files>`
- `git merge --continue`

### 5강 - stash 분실 (15분)
- `git stash save "작업 중인 기능"`
- `git stash list`
- `git stash apply stash@{1}`

### 6강 - force push 사고 (20분)
- `git reflog`
- `git switch -c recovery-main <commit-hash>`
- `git push --force-with-lease origin main`