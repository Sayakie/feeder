<hr>
<div align="center">
  English
  <span>·</span>
  <a href="/README_kr.md" title="읽어주세요 문서 열기" target="noreferrer">한국어</a>
</div>
<hr>

# feeder
📆 Subscribe about tech·development daily stories through GitHub Actions. Support both Discord and Slack due to using Webhook! 🙌

[![Feed Scheduler](https://github.com/Sayakie/feeder/actions/workflows/scheduler.yml/badge.svg?branch=main)](https://github.com/Sayakie/feeder/actions/workflows/scheduler.yml)
[![Sayakie/feeder License](https://img.shields.io/github/license/Sayakie/feeder?color=blue)](https://github.com/Sayakie/feeder/blob/main/LICENSE)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FSayakie%2Ffeeder&count_bg=%2379C83D&title_bg=%23555555&icon=github.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
![stars](https://img.shields.io/github/stars/Sayakie/feeder?style=social&color=green)

## Usage
**Fork [Sayakie/feeder](https://github.com/Sayakie/feeder/fork) this repo or clone then create new repository.**
And then, enter your webhooks into GitHub secrets at repository settings.

### How to type webhooks
Feeder distinguish webhooks through `,` unit.

When only one webhook needed, type
```
https://example.webhook.link
```

Or type if need more than 2
```
https://example1.webhook.link, https://example2.webhook.link
```

You can divide into more lines.
```
https://example1.webhook.link,
https://example2.webhook.link
```

### Adjust Time
Adjust task time by edit file located in `.github/workflows/scheduler.yml`. (Time is based on UTC)
