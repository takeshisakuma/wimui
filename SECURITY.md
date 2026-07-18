# Security Policy

## 脆弱性の報告 / Reporting a Vulnerability

セキュリティ上の問題を発見した場合は、**公開 Issue にせず**、GitHub の Private Vulnerability Reporting で報告してください。

If you discover a security vulnerability, please **do not open a public issue**. Report it privately via GitHub's private vulnerability reporting:

**[Report a vulnerability](https://github.com/takeshisakuma/wimui/security/advisories/new)**

報告には可能な範囲で以下を含めてください / Please include where possible:

- 影響を受けるコンポーネント・バージョン / Affected component and version
- 再現手順または PoC / Steps to reproduce or proof of concept
- 想定される影響（XSS など） / Expected impact (e.g. XSS)

受領後は速やかに確認し、修正版のリリースまで非公開で対応します。

## サポート対象バージョン / Supported Versions

| Version | Supported |
|---|---|
| 最新リリース / latest release | Yes / 対応 |
| それ以前 / older versions | No / 非対応 |

修正は最新リリースに対してのみ提供します。UI ライブラリの性質上、特に `dangerouslySetInnerHTML` 相当の挙動・URL の取り扱い・Markdown レンダリング（`wimui/data-display` の Markdown / `wimui/ai`）に関する報告を歓迎します。
