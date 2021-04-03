<hr>
<div align="center">
  <a href="/README.md" title="Open README document" target="noreferrer">English</a>
  <span>·</span>
  한국어
</div>
<hr>

# feeder
📆 GitHub Actions를 통해 매일 기술·개발 관련 소식들을 구독할 수 있어요. 웹훅을 사용하기 때문에 디스코드와 슬랙을 지원해요! 🙌

[![Feed Scheduler](https://github.com/Sayakie/feeder/actions/workflows/scheduler.yml/badge.svg?branch=main)](https://github.com/Sayakie/feeder/actions/workflows/scheduler.yml)
[![Sayakie/feeder License](https://img.shields.io/github/license/Sayakie/feeder?color=blue)](https://github.com/Sayakie/feeder/blob/main/LICENSE)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FSayakie%2Ffeeder&count_bg=%2379C83D&title_bg=%23555555&icon=github.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
![stars](https://img.shields.io/github/stars/Sayakie/feeder?style=social&color=green)

## 사용법
**[Sayakie/feeder](https://github.com/Sayakie/feeder/fork) 레포를 포크하시거나 클로닝하여 새 레포를 만드세요.**
그리고 나서 레포 설정에 있는 Secrets에서 웹훅 링크를 넣어주세요.

### 웹훅 설정하기
Feeder는 `,` 콤마 단위로 웹훅 링크를 구분해요.

만약 웹훅 링크가 하나만 있다면 아래와 같이 입력하시면 돼요.
```
https://example.webhook.link
```

웹훅 링크가 2개 이상이라면 아래와 같이 입력하세요.
```
https://example1.webhook.link, https://example2.webhook.link
```

줄바꿈을 하셔서 아래와 같이 입력하실 수도 있어요.
```
https://example1.webhook.link,
https://example2.webhook.link
```

### 시간 조정하기
`.github/workflows/scheduler.yml` 파일에서 뉴스를 받을 시간을 수정하실 수 있어요. (UTC 기준이에요.)
