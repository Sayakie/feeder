<hr>
<div align="center">
  <a href="/README.md" title="Open README document" target="noreferrer">English</a>
  <span>Β·</span>
  νκ΅­μ΄
</div>
<hr>

# feeder
π GitHub Actionsλ₯Ό ν΅ν΄ λ§€μΌ κΈ°μ Β·κ°λ° κ΄λ ¨ μμλ€μ κ΅¬λν  μ μμ΄μ. μΉνμ μ¬μ©νκΈ° λλ¬Έμ λμ€μ½λμ μ¬λμ μ§μν΄μ! π

[![Feed Scheduler](https://github.com/Sayakie/feeder/actions/workflows/scheduler.yml/badge.svg?branch=main)](https://github.com/Sayakie/feeder/actions/workflows/scheduler.yml)
[![Sayakie/feeder License](https://img.shields.io/github/license/Sayakie/feeder?color=blue)](https://github.com/Sayakie/feeder/blob/main/LICENSE)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FSayakie%2Ffeeder&count_bg=%2379C83D&title_bg=%23555555&icon=github.svg&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
![stars](https://img.shields.io/github/stars/Sayakie/feeder?style=social&color=green)

## μ¬μ©λ²
**[Sayakie/feeder](https://github.com/Sayakie/feeder/fork) λ ν¬λ₯Ό ν¬ν¬νμκ±°λ ν΄λ‘λνμ¬ μ λ ν¬λ₯Ό λ§λμΈμ.**
κ·Έλ¦¬κ³  λμ λ ν¬ μ€μ μ μλ Secretsμμ μΉν λ§ν¬λ₯Ό λ£μ΄μ£ΌμΈμ.

### μΉν μ€μ νκΈ°
Feederλ `,` μ½€λ§ λ¨μλ‘ μΉν λ§ν¬λ₯Ό κ΅¬λΆν΄μ.

λ§μ½ μΉν λ§ν¬κ° νλλ§ μλ€λ©΄ μλμ κ°μ΄ μλ ₯νμλ©΄ λΌμ.
```
https://example.webhook.link
```

μΉν λ§ν¬κ° 2κ° μ΄μμ΄λΌλ©΄ μλμ κ°μ΄ μλ ₯νμΈμ.
```
https://example1.webhook.link, https://example2.webhook.link
```

μ€λ°κΏμ νμμ μλμ κ°μ΄ μλ ₯νμ€ μλ μμ΄μ.
```
https://example1.webhook.link,
https://example2.webhook.link
```

### μκ° μ‘°μ νκΈ°
`.github/workflows/scheduler.yml` νμΌμμ λ΄μ€λ₯Ό λ°μ μκ°μ μμ νμ€ μ μμ΄μ. (UTC κΈ°μ€μ΄μμ.)
